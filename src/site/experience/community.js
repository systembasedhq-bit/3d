/*
 * System-Based Business Community: the section, and the contextual invitation.
 *
 * The invitation appears at most once per session, never during the intro, only after
 * the visitor chose a bottleneck AND reached the owner-view beat of the walkthrough
 * (or when they ask for it). Dismissing it keeps it away for 7 days. It never opens
 * while the inquiry form is in use or after an inquiry was sent.
 *
 * Waitlist sign-ups are tagged as community, never as a sales inquiry.
 */
import { $, $$, esc, safeUrl, session, local, REDUCED, uid } from './util.js'
import { COMMUNITY } from '../community-content.js'
import { CONFIG } from '../config.js'
import { getScope, setScope } from './scope-store.js'
import { track } from './analytics.js'
import { sendRecord, utmFromPage } from './send.js'
import { monogram } from '../../brand/kit.js'
import { VERSION } from '../../catalog/catalog.js'

const DISMISS_DAYS = 7
const joinUrl = () => safeUrl(CONFIG.COMMUNITY_URL)

export function createCommunity({ media = {}, goInquiry, isInquiryBusy }) {
  /* ---------------- section ---------------- */
  const latest = COMMUNITY.buildLog[0]
  $('#community-areas').innerHTML = COMMUNITY.areas
    .map(
      (
        a,
      ) => `<div class="area"><span class="status ${a.status}">${a.status === 'live' ? 'Live' : 'Planned'}</span>
        <strong>${esc(a.title)}</strong><p>${esc(a.text)}</p></div>`,
    )
    .join('')
  $('#community-path').innerHTML = COMMUNITY.path
    .map(
      (p, i) =>
        `<li><b>${String(i + 1).padStart(2, '0')}</b><strong>${esc(p.step)}</strong><span>${esc(p.note)}</span></li>`,
    )
    .join('')
  $('#community-example').innerHTML =
    `<span class="eyebrow">Latest from the build log · ${esc(latest.date)}</span>
    <strong>${esc(latest.title)}</strong><p><em>Problem:</em> ${esc(latest.problem)}</p><p><em>What changed:</em> ${esc(latest.changed)}</p>`
  const windows = COMMUNITY.buildLog
    .map((b, i) => {
      const img = media[b.media]
      return `<figure class="gw-win w${i}">
        <div class="gw-bar"><i></i><i></i><i></i><span>${esc(b.category)}</span></div>
        ${img ? `<img src="${img}" alt="" loading="lazy" />` : `<pre class="gw-code">&lt;div id="sb-root"&gt;\n  …\n&lt;/div&gt;\n&lt;script type="module" src="…/site.js"&gt;</pre>`}
        <figcaption><em>${esc(b.date)}</em>${esc(b.title)}</figcaption></figure>`
    })
    .join('')
  $('#community-gateway').innerHTML =
    `<div class="gw-portal"><span class="gw-ring"></span><span class="gw-mark">${monogram(54)}</span></div>${windows}`
  renderSectionCtas()

  function renderSectionCtas() {
    const url = joinUrl()
    $('#community-cta').innerHTML = `
      ${
        url
          ? `<a class="btn primary" href="${esc(url)}" target="_blank" rel="noopener" data-join="section">Join the Community ↗</a>`
          : `<button type="button" class="btn primary" data-community-invite="section">Get notified when it opens</button>`
      }
      <button type="button" class="btn" data-book data-from="community">I’d rather have it built for me</button>`
    $('#community-status').textContent = url
      ? 'Free to join. Paid templates and done-for-you help are there if you want them, never required.'
      : 'The community isn’t open yet. Join the list and you’ll hear the day it opens. No spam.'
  }

  // Scroll reveal of the gateway windows
  new IntersectionObserver(
    ([e]) => e.isIntersecting && $('#community-gateway').classList.add('in'),
    { threshold: 0.25 },
  ).observe($('#community-gateway'))

  /* ---------------- invitation ---------------- */
  const dlg = $('#invite')
  const panel = $('.invite-panel', dlg)
  const gate = $('#gateway-fx')
  let lastFocus = null
  let open = false
  let entry = null

  function dismissedRecently() {
    const t = +local.get('sb-invite-dismissed') || 0
    return Date.now() - t < DISMISS_DAYS * 864e5
  }

  function bodyHTML() {
    const url = joinUrl()
    return `
      <span class="eyebrow">Inside System-Based</span>
      <h2 class="display" id="invite-title">See how the systems get built.</h2>
      <p class="lede">Follow real builds, see what we’re learning, get useful resources and connect with business owners improving how they operate.</p>
      <ul class="invite-list">
        <li>A public build log of real systems</li>
        <li>Starter resources as they’re released</li>
        <li>A straight path to have it built for you, if you ever want that</li>
      </ul>
      <div class="invite-ctas">
        ${
          url
            ? `<a class="btn primary" href="${esc(url)}" target="_blank" rel="noopener" data-join="invite">Join the Community ↗</a>`
            : `<button type="button" class="btn primary" data-waitlist-open>Get notified when it opens</button>`
        }
        <button type="button" class="btn" data-book data-from="invite">I’d rather have this built for me</button>
      </div>
      ${url ? '' : '<p class="fine-l">The community isn’t open yet. You’ll only be emailed about it if you ask.</p>'}
      <form class="waitlist" id="waitlist" novalidate hidden>
        <label for="wl-email">Email</label>
        <input id="wl-email" name="email" type="email" autocomplete="email" required />
        <label for="wl-type">What kind of business? <em>(optional)</em></label>
        <select id="wl-type" name="business_type"><option value="">Choose one</option>${COMMUNITY.businessTypes
          .map((b) => `<option>${esc(b)}</option>`)
          .join('')}</select>
        <label class="check"><input type="checkbox" id="wl-consent" name="consent" /> Email me when the community opens, and occasionally after. I can unsubscribe any time.</label>
        <input type="text" name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true" />
        <button class="btn primary" type="submit">Notify me</button>
        <p class="form-msg" id="wl-msg" role="status"></p>
      </form>
      <button type="button" class="link keep" data-invite-close>Keep exploring</button>`
  }

  function openInvite(from = 'section', origin = null) {
    if (open) return
    open = true
    entry = from
    lastFocus = document.activeElement
    session.set('sb-invite-shown', '1')
    setScope({ communityInterest: true, communityEntryPoint: from })
    track('sb_community_invite_shown', { entry: from })
    $('.invite-body', dlg).innerHTML = bodyHTML()
    document.body.classList.add('locked')
    const show = () => {
      dlg.hidden = false
      requestAnimationFrame(() => {
        dlg.classList.add('open')
        $('[data-invite-x]', dlg).focus({ preventScroll: true })
      })
    }
    if (REDUCED || !origin) return show()
    // the gateway: a chrome line runs from the phone to a portal, which opens into the dialog
    const r = origin.getBoundingClientRect()
    const x1 = r.left + r.width / 2
    const y1 = r.top + r.height / 2
    const x2 = innerWidth / 2
    const y2 = innerHeight / 2
    gate.innerHTML = `<svg width="100%" height="100%"><path d="M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}"/></svg>
      <span class="gx-portal" style="left:${x2}px;top:${y2}px">${monogram(40)}</span>`
    gate.hidden = false
    requestAnimationFrame(() => gate.classList.add('run'))
    setTimeout(() => {
      show()
      gate.classList.remove('run')
      gate.hidden = true
    }, 720)
  }

  function closeInvite(reason = 'dismissed') {
    if (!open) return
    open = false
    dlg.classList.remove('open')
    document.body.classList.remove('locked')
    setTimeout(() => (dlg.hidden = true), REDUCED ? 0 : 350)
    if (reason === 'dismissed') {
      local.set('sb-invite-dismissed', String(Date.now()))
      track('sb_community_invite_dismissed', { entry })
    }
    lastFocus?.focus?.({ preventScroll: true })
  }

  dlg.addEventListener('click', (e) => {
    if (
      e.target.closest('[data-invite-close], [data-invite-x]') ||
      e.target === $('.invite-backdrop', dlg)
    ) {
      closeInvite()
      return
    }
    if (e.target.closest('[data-waitlist-open]')) {
      const f = $('#waitlist', dlg)
      f.hidden = false
      e.target.closest('[data-waitlist-open]').hidden = true
      $('#wl-email', dlg).focus()
    }
    if (e.target.closest('[data-join]')) track('sb_community_join_clicked', { entry })
    if (e.target.closest('[data-book]')) closeInvite('converted')
  })
  addEventListener('keydown', (e) => {
    if (!open) return
    if (e.key === 'Escape') closeInvite()
    if (e.key === 'Tab') {
      const f = $$('button, a[href], input, select, textarea', panel).filter(
        (x) => !x.disabled && x.offsetParent !== null && !x.classList.contains('hp'),
      )
      if (!f.length) return
      if (e.shiftKey && document.activeElement === f[0]) {
        f.at(-1).focus()
        e.preventDefault()
      } else if (!e.shiftKey && document.activeElement === f.at(-1)) {
        f[0].focus()
        e.preventDefault()
      }
    }
  })

  // Waitlist: community interest only, never a sales inquiry
  dlg.addEventListener('submit', async (e) => {
    e.preventDefault()
    const form = e.target
    const msg = $('#wl-msg', form)
    const data = Object.fromEntries(new FormData(form))
    if (data.website) return // bot
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) {
      msg.className = 'form-msg err'
      msg.textContent = 'Add a valid email so we can tell you when it opens.'
      return
    }
    if (!data.consent) {
      msg.className = 'form-msg err'
      msg.textContent = 'Tick the box so we’re allowed to email you about it.'
      return
    }
    const btn = $('button[type=submit]', form)
    btn.disabled = true
    msg.className = 'form-msg'
    msg.textContent = 'Adding you…'
    const s = getScope()
    const record = {
      schema: 'system-based.community.v1',
      catalogVersion: VERSION,
      submittedAt: new Date().toISOString(),
      email: data.email,
      business_type: data.business_type || '',
      tags: 'sb-community-waitlist,sb-community-interest',
      sb_intake_source: 'community_waitlist',
      sb_community_interest: 'yes',
      sb_community_entry_point: entry || 'section',
      sb_problem_id: s.selectedProblemId || '',
      sb_marketing_consent: 'yes',
      sb_request_id: form.dataset.rid || (form.dataset.rid = uid()),
      sb_source_page: location.href.slice(0, 300),
      ...Object.fromEntries(
        ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => [k, utmFromPage()[k] || '']),
      ),
    }
    const res = await sendRecord(record)
    btn.disabled = false
    if (!res.ok) {
      msg.className = 'form-msg err'
      msg.textContent =
        res.reason === 'not-configured'
          ? 'Sign-ups aren’t connected yet. Please check back soon.'
          : 'That didn’t go through. Your email is still here, so try again.'
      return
    }
    track('sb_community_waitlist_submitted', { entry: entry || 'section' })
    form.innerHTML = `<p class="lede"><strong>You’re on the list.</strong> We’ll email you when the community opens${res.confirmed ? '' : '. If nothing arrives, check your spam folder'}.</p>`
  })

  // Any [data-community-invite] opens it on request
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-community-invite]')
    if (!t) return
    e.preventDefault()
    openInvite(t.dataset.communityInvite || 'section', t)
  })
  document.addEventListener('click', (e) => {
    if (e.target.closest('#community [data-join]'))
      track('sb_community_join_clicked', { entry: 'section' })
  })

  return {
    open: openInvite,
    close: closeInvite,
    // called by the walkthrough on every beat change
    maybeInvite(beat) {
      const s = getScope()
      if (beat < 5 || !s.selectedProblemId) return
      if (session.get('sb-invite-shown') || dismissedRecently()) return
      if (document.body.classList.contains('intro') || isInquiryBusy?.()) return
      openInvite('walkthrough', $('#phone3d'))
    },
    goInquiry,
  }
}
