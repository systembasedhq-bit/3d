/*
 * "Let's build your starting point": the inquiry, the last chapter of the page.
 * It shows the visitor's scope (problem, package, services) above the form, sends one
 * GHL-ready record, and only reports success once the record was accepted or sent.
 * On any failure the entered details stay in place and the visitor can retry.
 */
import { $, esc, safeUrl, scrollToId, REDUCED, uid } from './util.js'
import { CONFIG } from '../config.js'
import { getScope, setScope, onScope } from './scope-store.js'
import { SCENARIOS } from './scenarios.js'
import { PACKAGES, service, system, recommend, VERSION } from '../../catalog/catalog.js'
import { track, trackLead } from './analytics.js'
import { sendRecord, utmFromPage } from './send.js'

const pkg = (id) => PACKAGES.find((p) => p.id === id)

export function createInquiry() {
  const form = $('#inquiry-form')
  const msg = $('#form-msg')
  let busy = false
  let started = false
  let submitted = false
  let requestId = uid()

  // "What's the biggest thing you want fixed?"
  $('#f-problem').innerHTML =
    '<option value="">Choose one</option>' +
    SCENARIOS.map((s) => `<option value="${s.id}">${esc(s.problem)}</option>`).join('') +
    '<option value="other">Something else</option>'

  function renderScope() {
    const s = getScope()
    const sel = $('#f-problem')
    if (s.selectedProblemId && sel.value !== s.selectedProblemId && !form.dataset.touchedProblem)
      sel.value = s.selectedProblemId
    const rows = []
    const sc = SCENARIOS.find((x) => x.id === s.selectedProblemId)
    if (sc) rows.push(['Challenge', sc.problem, 'start'])
    const accepted = pkg(s.acceptedPackageId)
    const suggested = pkg(s.recommendedPackageId)
    if (accepted) rows.push(['Package', `${accepted.name} (your choice)`, 'packages'])
    else if (suggested)
      rows.push(['Suggested', `${suggested.name} (a suggestion, not a commitment)`, 'packages'])
    else if (sc && !sc.recommend.packageId) rows.push(['Suggested', sc.recommend.label, 'projects'])
    if (s.selectedServiceIds.length)
      rows.push([
        'Services',
        s.selectedServiceIds
          .map((c) => service(c)?.name)
          .filter(Boolean)
          .join(', '),
        'packages',
      ])
    $('#inq-scope').innerHTML = rows.length
      ? `<span class="eyebrow">Your starting point</span><dl class="fields">${rows
          .map(
            ([k, v, at]) =>
              `<div><dt>${esc(k)}</dt><dd>${esc(v)} <button type="button" class="link sm" data-edit="${at}">Change</button></dd></div>`,
          )
          .join('')}</dl>`
      : `<span class="eyebrow">Your starting point</span><p class="muted">Nothing chosen yet, and that’s fine. Tell us in your own words below, or <button type="button" class="link sm" data-edit="start">pick your bottleneck</button>.</p>`
  }
  onScope(renderScope)
  renderScope()
  $('#inq-scope').addEventListener('click', (e) => {
    const b = e.target.closest('[data-edit]')
    if (b) scrollToId(b.dataset.edit)
  })
  $('#f-problem').addEventListener('change', () => (form.dataset.touchedProblem = '1'))
  form.addEventListener('focusin', () => {
    if (!started) {
      started = true
      track('sb_inquiry_started', { problem: getScope().selectedProblemId || 'none' })
    }
  })

  function err(text) {
    msg.className = 'form-msg err'
    msg.textContent = text
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    if (busy) return // double clicks send nothing twice
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // honeypot: bots fill hidden fields
    const name = (data.name || '').trim()
    const email = (data.email || '').trim()
    if (!name) return (err('Add your name so we know who we’re talking to.'), $('#f-name').focus())
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return (err('Add a valid email so we can send your recommendation.'), $('#f-email').focus())
    if (data.phone && data.phone.replace(/\D/g, '').length < 7)
      return (
        err('That phone number looks too short. Leave it blank if you prefer email.'),
        $('#f-phone').focus()
      )

    const s = getScope()
    const problemId = data.problem || s.selectedProblemId || ''
    const sc = SCENARIOS.find((x) => x.id === problemId)
    const r = s.selectedServiceIds.length ? recommend(s.selectedServiceIds) : null
    const accepted = pkg(s.acceptedPackageId)
    const suggested = pkg(s.recommendedPackageId)
    const [first, ...rest] = name.split(/\s+/)
    const utm = utmFromPage()
    const tags = [
      'sb-inquiry',
      accepted && `sb-pkg-${accepted.id}`,
      sc && `sb-problem-${sc.id}`,
      r?.custom && 'sb-custom',
      r?.projects.length && 'sb-project',
      data.performance && 'sb-performance',
      s.communityInterest && 'sb-community-interest',
    ].filter(Boolean)

    // system-based.inquiry.v2: backward compatible with v1 field names
    const record = {
      schema: 'system-based.inquiry.v2',
      catalogVersion: VERSION,
      submittedAt: new Date().toISOString(),
      first_name: first,
      last_name: rest.join(' '),
      full_name: name,
      email,
      phone: (data.phone || '').trim(),
      company_name: (data.business || '').trim(),
      tags: tags.join(','),
      sb_interest: accepted
        ? `${accepted.name} package`
        : r?.custom
          ? 'Custom proposal'
          : sc
            ? sc.recommend.label
            : 'Not sure yet',
      sb_package: accepted?.name || '',
      sb_services: s.selectedServiceIds.join(', '),
      sb_projects: r ? r.projects.join(', ') : '',
      sb_system: sc ? system(sc.recommend.system).name : '',
      sb_need: sc ? sc.problem : problemId === 'other' ? 'Something else' : '',
      sb_custom_proposal: r?.custom ? 'yes' : 'no',
      sb_performance: data.performance ? 'yes' : 'no',
      sb_message: (data.message || '').trim().slice(0, 2000),
      sb_source_page: location.href.slice(0, 300),
      sb_problem_id: problemId,
      sb_scenario_id: s.scenarioId,
      sb_recommended_package: suggested?.id || '',
      sb_accepted_package: accepted?.id || '',
      sb_intake_source: 'website_inquiry',
      sb_next_step: data.next_step || '',
      sb_marketing_consent: data.consent ? 'yes' : 'no',
      sb_community_interest: s.communityInterest ? 'yes' : 'no',
      sb_community_entry_point: s.communityEntryPoint || '',
      sb_scope_version: '2',
      sb_request_id: requestId,
      utm_source: utm.utm_source || '',
      utm_medium: utm.utm_medium || '',
      utm_campaign: utm.utm_campaign || '',
      utm_content: utm.utm_content || '',
    }

    busy = true
    const btn = $('button[type=submit]', form)
    btn.disabled = true
    btn.setAttribute('aria-busy', 'true')
    msg.className = 'form-msg'
    msg.textContent = 'Sending…'
    const res = await sendRecord(record)
    busy = false
    btn.disabled = false
    btn.removeAttribute('aria-busy')

    if (!res.ok) {
      const why = {
        'not-configured': CONFIG.CONTACT_EMAIL
          ? `Online sending isn’t switched on yet. Please email ${CONFIG.CONTACT_EMAIL} and we’ll pick it up from there.`
          : 'Online sending isn’t switched on yet, so nothing was sent. Your details are still here.',
        timeout:
          'That took too long and may not have gone through. Your details are still here: try again.',
      }
      return err(
        why[res.reason] ||
          'That didn’t go through. Your details are still here: try again in a moment.',
      )
    }

    submitted = true
    track('sb_inquiry_submitted', { problem: problemId || 'none', package: accepted?.id || '' })
    trackLead(requestId)
    requestId = uid()
    const booking = safeUrl(CONFIG.BOOKING_URL)
    $('#inquiry-done').innerHTML = `<h3 class="display">Scope received.</h3>
      <p class="lede">Thanks, ${esc(first)}. We’ll look at what you shared and reply personally with a recommendation.</p>
      ${res.confirmed ? '' : `<p class="fine-l">Sent from this browser. If you haven’t heard from us within a business day, ${CONFIG.CONTACT_EMAIL ? `email ${esc(CONFIG.CONTACT_EMAIL)}` : 'send it again'} so nothing gets lost.</p>`}
      ${
        booking
          ? CONFIG.BOOKING_EMBED
            ? `<p class="lede">Want to skip the back-and-forth? Pick a time for a short fit call:</p><iframe class="booking" src="${esc(booking)}" title="Book your fit call" loading="lazy"></iframe>`
            : `<a class="btn primary" href="${esc(booking)}" target="_blank" rel="noopener" data-booking>Pick a time ↗</a>`
          : ''
      }`
    form.hidden = true
    $('#inquiry-done').hidden = false
    $('#inquiry-done').focus?.()
  })
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-booking]')) track('sb_booking_link_clicked')
  })

  return {
    busy: () => busy || submitted || form.contains(document.activeElement),
    go(from) {
      setScope({ journeySource: from || getScope().journeySource })
      scrollToId('inquiry')
      setTimeout(() => $('#f-name')?.focus({ preventScroll: true }), REDUCED ? 0 : 700)
    },
  }
}
