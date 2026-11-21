/*
 * "Watch the system go to work": the scroll-driven walkthrough.
 *
 * Scroll is the timeline. Chapters are ordinary HTML in the page flow; a sticky stage
 * holds a 3D chrome phone (CSS 3D, so screen text stays crisp), the lead's CRM card,
 * the owner view and the lines between them. One beat index drives all of them, so
 * phone, card, dashboard and copy always agree, scrolling down or back up.
 *
 * Desktop: the phone also follows the pointer a little (±10°), on top of the timeline.
 * Phones: the stage sticks under the nav and chapters scroll beneath it. No hover needed.
 */
import { $, $$, esc, REDUCED, FINE_POINTER } from './util.js'
import { SCENARIOS, BEAT_LABELS, SYSTEM_ROLES, scenario } from './scenarios.js'
import { SYSTEMS } from '../../catalog/catalog.js'
import { monogram } from '../../brand/kit.js'
import { getScope, setScope, onScope } from './scope-store.js'
import { track } from './analytics.js'

const SWITCH_LABELS = {
  response: 'Slow responses',
  growth: 'Not enough customers',
  brand: 'Website & brand',
  ops: 'Disconnected tools',
}

// Phone poses at the start of each beat. ry 168 = face down: we see the SB back.
const POSES = {
  desktop: [
    { ry: 166, rx: 10, rz: -4, s: 0.92, x: 0, y: 2 },
    { ry: -14, rx: 4, rz: 0, s: 1, x: -20, y: 0 },
    { ry: -9, rx: 3, rz: 0, s: 1, x: -22, y: 0 },
    { ry: -6, rx: 2, rz: 0, s: 1, x: -22, y: 0 },
    { ry: -12, rx: 3, rz: 0, s: 1, x: -22, y: 0 },
    { ry: -18, rx: 6, rz: 0, s: 0.9, x: -26, y: 2 },
    { ry: -10, rx: 5, rz: 0, s: 0.8, x: 0, y: 3 },
    { ry: -12, rx: 4, rz: 0, s: 0.92, x: -22, y: 0 },
  ],
  mobile: [
    { ry: 166, rx: 10, rz: -4, s: 0.9, x: 0, y: 0 },
    { ry: -10, rx: 3, rz: 0, s: 0.96, x: -42, y: 0 },
    { ry: -8, rx: 3, rz: 0, s: 0.96, x: -42, y: 0 },
    { ry: -8, rx: 3, rz: 0, s: 0.96, x: -42, y: 0 },
    { ry: -10, rx: 3, rz: 0, s: 0.96, x: -42, y: 0 },
    { ry: -12, rx: 4, rz: 0, s: 0.92, x: -44, y: 0 },
    { ry: -10, rx: 4, rz: 0, s: 0.92, x: -44, y: 0 },
    { ry: -10, rx: 4, rz: 0, s: 0.92, x: -44, y: 0 },
  ],
}

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))
const lerp = (a, b, t) => a + (b - a) * t

/* ------------------------------------------------------------------ */
/* Screen renderers: plain HTML, so the text is sharp and readable     */
/* ------------------------------------------------------------------ */

const ICON = {
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>',
  msg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/></svg>',
  cal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v9h14v-9z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>',
}

let prevMsgs = new Set()

function screenHTML(sc) {
  const bar = `<div class="scr-bar"><span>${esc(sc.time || '9:41')}</span><span class="scr-sig"><i></i><i></i><i></i></span></div>`
  switch (sc.type) {
    case 'lock':
      return `<div class="scr scr-lock">${bar}<div class="lock-time">${esc(sc.time)}</div><div class="lock-date">Tuesday</div>
        <div class="lock-notes">${sc.notes
          .map(
            (n, i) =>
              `<div class="note" style="animation-delay:${0.15 + i * 0.25}s"><b>${esc(n.app)}</b><strong>${esc(n.title)}</strong><span>${esc(n.text)}</span></div>`,
          )
          .join('')}</div></div>`
    case 'call':
      return `<div class="scr scr-call">${bar}<div class="call-avatar">${ICON.phone}</div><strong>${esc(sc.name)}</strong>
        <span class="call-state">${esc(sc.state)}</span><span class="call-sub">${esc(sc.sub || '')}</span>
        <div class="call-actions"><span>${ICON.phone}<em>Call back</em></span><span>${ICON.msg}<em>Message</em></span></div></div>`
    case 'thread': {
      const seen = prevMsgs
      prevMsgs = new Set(sc.msgs.map((m) => m.text))
      let k = 0
      const msgs = sc.msgs
        .map((m) => {
          const fresh = !seen.has(m.text)
          const delay = fresh ? `style="animation-delay:${0.1 + k++ * 0.45}s"` : ''
          return `<div class="msg m-${m.from}${fresh ? ' fresh' : ''}" ${delay}>${esc(m.text)}</div>`
        })
        .join('')
      return `<div class="scr scr-thread">${bar}<div class="thread-head"><span class="av">${/[A-Za-z]/.test(sc.contact[0]) ? esc(sc.contact[0]) : ICON.phone}</span>${esc(sc.contact)}</div>
        <div class="thread-body">${msgs}
        ${sc.chips ? `<div class="saved" style="animation-delay:${0.2 + k * 0.45}s"><em>Saved to record</em>${sc.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>` : ''}
        ${sc.card ? `<div class="book-card" style="animation-delay:${0.25 + k * 0.45}s">${ICON.cal}<span><strong>${esc(sc.card.title)}</strong><em>${esc(sc.card.text)}</em></span></div>` : ''}
        </div></div>`
    }
    case 'ad':
      return `<div class="scr scr-ad">${bar}<div class="feed-head"><span class="av">${esc(sc.brand.slice(0, 1))}</span><span><strong>${esc(sc.brand)}</strong><em>Sponsored</em></span></div>
        <div class="ad-img"><i></i><i></i><i></i></div><div class="ad-copy"><strong>${esc(sc.headline)}</strong><span>${esc(sc.text)}</span></div>
        <div class="ad-cta tap">${esc(sc.cta)}</div></div>`
    case 'landing':
      return `<div class="scr scr-landing">${bar}<div class="url">${esc(sc.brand.toLowerCase().replace(/[^a-z]+/g, ''))}.example</div>
        <div class="lp-brand">${esc(sc.brand)}</div><strong class="lp-h">${esc(sc.headline)}</strong>
        ${sc.fields.map(([k, v], i) => `<label style="animation-delay:${0.1 + i * 0.2}s"><em>${esc(k)}</em><span>${esc(v)}</span></label>`).join('')}
        <div class="lp-btn tap">${esc(sc.button)}</div>${sc.toast ? `<div class="toast">${ICON.check}${esc(sc.toast)}</div>` : ''}</div>`
    case 'site':
      return sc.variant === 'old'
        ? `<div class="scr scr-site old">${bar}<div class="old-nav">${esc(sc.brand)} | Home | About | Contact</div>
          <div class="old-h">${esc(sc.headline)}</div><div class="old-img"></div><p>${esc(sc.sub)}</p><p class="old-small">Copyright 2014. Best viewed in Internet Explorer.</p>
          <span class="concept">${esc(sc.note)}</span></div>`
        : `<div class="scr scr-site new">${bar}<div class="new-nav"><b>${esc(sc.brand)}</b><span>Services</span><span>Book</span></div>
          <div class="new-hero"><strong>${esc(sc.headline)}</strong><span>${esc(sc.sub)}</span><div class="new-cta tap">${esc(sc.cta)}</div></div>
          <div class="new-proof"><span>★★★★★</span><em>Before &amp; after gallery</em></div><span class="concept">${esc(sc.note)}</span></div>`
    case 'record':
    case 'task':
      return `<div class="scr scr-record">${bar}<div class="rec-head"><span>${sc.type === 'task' ? 'Task' : 'Contact'}</span><b>${esc(sc.badge)}</b></div>
        <strong class="rec-title">${esc(sc.title)}</strong>
        <dl>${sc.rows.map(([k, v], i) => `<div style="animation-delay:${0.1 + i * 0.18}s"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`
    case 'summary':
      return `<div class="scr scr-summary">${bar}<div class="sum-logo">${monogram(26)}</div><strong>${esc(sc.title)}</strong>
        <ul>${sc.rows.map(([k, v], i) => `<li style="animation-delay:${0.1 + i * 0.15}s">${ICON.check}<span>${esc(k)}</span><em>${esc(v)}</em></li>`).join('')}</ul></div>`
  }
  return ''
}

// The same screen, described in words for screen readers
function screenText(sc) {
  switch (sc.type) {
    case 'lock':
      return sc.notes.map((n) => `${n.app}: ${n.title}, ${n.text}`).join('. ')
    case 'call':
      return `${sc.state} from ${sc.name}. ${sc.sub || ''}`
    case 'thread':
      return (
        sc.msgs
          .map(
            (m) => (m.from === 'in' ? 'Customer: ' : m.from === 'out' ? 'Business: ' : '') + m.text,
          )
          .join(' ') + (sc.card ? ` ${sc.card.title}: ${sc.card.text}.` : '')
      )
    case 'ad':
      return `Ad from ${sc.brand}: ${sc.headline}. Button: ${sc.cta}.`
    case 'landing':
      return `${sc.headline} form: ${sc.fields.map(([k, v]) => `${k} ${v}`).join(', ')}. ${sc.toast || ''}`
    case 'site':
      return `${sc.note}. ${sc.headline} ${sc.sub}`
    case 'record':
    case 'task':
      return `${sc.title}: ${sc.rows.map(([k, v]) => `${k} ${v}`).join(', ')}.`
    case 'summary':
      return `${sc.title}: ${sc.rows.map(([k, v]) => `${k} ${v}`).join(', ')}.`
  }
  return ''
}

/* ------------------------------------------------------------------ */
/* Story                                                               */
/* ------------------------------------------------------------------ */

export function createStory({ onBeat, onChoose } = {}) {
  const root = $('#story')
  const stage = $('#story-stage')
  const list = $('#story-chapters')
  const mobileMQ = matchMedia('(max-width: 959px)')

  stage.innerHTML = `
    <div class="stage-top">
      <span class="ill" id="stage-ill"></span>
      <nav class="story-steps" id="story-steps" aria-label="Jump to a step">${BEAT_LABELS.map(
        (l, i) =>
          `<button type="button" data-step="${i}" aria-label="Step ${i + 1}: ${esc(l)}"><i></i></button>`,
      ).join('')}</nav>
    </div>
    <div class="stage-visual" aria-hidden="true">
      <svg class="stage-lines" id="stage-lines"><path id="ln-lead"></path><path id="ln-owner"></path></svg>
      <div class="phone3d" id="phone3d">
        <div class="ph-body" id="ph-body">
          <div class="ph-face ph-front"><div class="ph-screen"><span class="ph-island"></span><div class="ph-content" id="ph-screen"></div></div></div>
          <div class="ph-face ph-back"><span class="ph-cam"><i></i><i></i><i></i></span><span class="ph-logo">${monogram(64)}</span><span class="ph-word">SYSTEM-BASED</span></div>
          <span class="ph-side ph-l"></span><span class="ph-side ph-r"></span><span class="ph-side ph-t"></span><span class="ph-side ph-b"></span>
        </div>
        <div class="ph-shadow"></div>
      </div>
      <div class="stage-cards">
        <div class="sc lead-card" id="lead-card"></div>
        <div class="sc owner-card" id="owner-card"></div>
      </div>
      <div class="caps" id="caps">${['GR', 'BB', 'CR', 'AO']
        .map(
          (c) =>
            `<div class="cap" data-cap="${c}"><strong>${esc(SYSTEMS.find((s) => s.code === c).name)}</strong><span>${esc(SYSTEM_ROLES[c])}</span></div>`,
        )
        .join('')}</div>
    </div>
    <p class="stage-hint" id="stage-hint">Scroll to see what happens next</p>`

  const body = $('#ph-body')
  const phone = $('#phone3d')
  const screen = $('#ph-screen')
  const leadCard = $('#lead-card')
  const ownerCard = $('#owner-card')
  const lnLead = $('#ln-lead')
  const lnOwner = $('#ln-owner')

  // Chapters: stable <li> elements, text swapped in place when the scenario changes
  list.innerHTML = BEAT_LABELS.map(
    (_, i) =>
      `<li class="chapter" data-beat="${i}">${i === 1 ? '<span id="journey" class="anchor"></span>' : ''}<div class="ch-card"></div></li>`,
  ).join('')
  const chapters = $$('.chapter', list)

  let sc = scenario(getScope().scenarioId)
  let beat = -1
  let started = false
  const completed = new Set()

  function chapterHTML(b, i) {
    const s = sc
    let extra = ''
    if (b.connected) {
      extra = `<ul class="ch-systems">${['GR', 'BB', 'CR', 'AO']
        .map((c) => {
          const on = s.systems.includes(c)
          return `<li class="${on ? 'on' : ''}"><strong>${esc(SYSTEMS.find((x) => x.code === c).name)}</strong><span>${on ? esc(SYSTEM_ROLES[c]) : 'Not needed for this example. Available when it is.'}</span></li>`
        })
        .join('')}</ul>`
    }
    if (b.choose) {
      extra = `<div class="ch-rec"><span class="eyebrow">Suggested starting point</span><strong>${esc(s.recommend.label)}</strong></div>
        <div class="ch-ctas">
          <button class="btn primary" data-book data-from="walkthrough">Get my recommendation <span aria-hidden="true">&rarr;</span></button>
          <button class="btn" data-see-rec>See what’s included</button>
        </div>
        <button class="link ch-community" data-community-invite="walkthrough">Or follow along as we build in public &rarr;</button>`
    }
    return `<span class="ch-num">${String(i + 1).padStart(2, '0')} · ${esc(BEAT_LABELS[i])}</span>
      <h3 class="display">${esc(b.title)}</h3><p>${esc(b.body)}</p>
      <p class="sr-only">On screen: ${esc(screenText(b.screen))}</p>${extra}`
  }

  function renderChapters() {
    chapters.forEach((li, i) => ($('.ch-card', li).innerHTML = chapterHTML(sc.beats[i], i)))
    $('#stage-ill').innerHTML =
      `Illustrative example<span class="biz"> · ${esc(sc.business)}</span>`
    $$('[data-cap]', stage).forEach((c) =>
      c.classList.toggle('on', sc.systems.includes(c.dataset.cap)),
    )
  }

  function leadHTML(b) {
    if (!b.lead) return ''
    const st = sc.stages[b.lead.stage]
    return `<div class="sc-head"><span>Customer record</span><b class="pill s${b.lead.stage}">${esc(st)}</b></div>
      <strong class="sc-title">${esc(sc.customer)}</strong>
      <div class="pipe">${sc.stages.map((n, i) => `<i class="${i <= b.lead.stage ? 'on' : ''}" title="${esc(n)}"></i>`).join('')}</div>
      <dl>${Object.entries(b.lead.fields)
        .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
        .join('')}</dl>`
  }
  function ownerHTML(b) {
    if (!b.owner) return ''
    return `<div class="sc-head"><span>Owner view</span><b class="pill">Live</b></div>
      <p class="sc-note">${esc(b.owner.note)}</p>
      <div class="kpi">${b.owner.kpis.map(([k, v]) => `<div><em>${esc(k)}</em><strong>${esc(v)}</strong></div>`).join('')}</div>`
  }

  function setBeat(i, force = false) {
    if (i === beat && !force) return
    const b = sc.beats[i]
    const prevType = sc.beats[beat]?.screen.type
    // reached by scrolling through the story (not by jumping past it with a link)
    const sequential = i === beat + 1
    if (b.screen.type !== 'thread' || prevType !== 'thread' || force) prevMsgs = new Set()
    beat = i
    screen.innerHTML = screenHTML(b.screen)
    screen.dataset.type = b.screen.type
    leadCard.innerHTML = leadHTML(b)
    ownerCard.innerHTML = ownerHTML(b)
    leadCard.classList.toggle('show', !!b.lead)
    ownerCard.classList.toggle('show', !!b.owner)
    root.dataset.beat = i
    root.classList.toggle('connected', !!b.connected)
    root.classList.toggle('has-owner', !!b.owner)
    phone.classList.toggle('buzz', !!b.buzz && !REDUCED)
    chapters.forEach((c, k) => c.classList.toggle('active', k === i))
    $$('[data-step]', stage).forEach((s, k) => {
      s.classList.toggle('done', k < i)
      s.setAttribute('aria-current', k === i ? 'step' : 'false')
    })
    $('#stage-hint').classList.toggle('hide', i > 0)
    setScope({ currentStoryBeat: i })
    if (i >= 1 && !started) {
      started = true
      track('sb_walkthrough_started', { scenario: sc.id }, { once: true })
    }
    if (b.choose && !completed.has(sc.id)) {
      completed.add(sc.id)
      track('sb_walkthrough_completed', { scenario: sc.id })
    }
    onBeat?.(i, sc, sequential)
  }

  function setScenario(id) {
    if (id === sc.id && beat >= 0) return
    sc = scenario(id)
    renderChapters()
    setBeat(Math.max(0, beat), true)
    $$('[data-scenario]', $('#story-switch')).forEach((b) =>
      b.setAttribute('aria-pressed', b.dataset.scenario === sc.id),
    )
    updateSwitchNote()
  }

  // Scenario switcher in the story header
  $('#story-switch').innerHTML =
    SCENARIOS.map(
      (s) =>
        `<button type="button" class="chip" data-scenario="${s.id}" aria-pressed="${s.id === sc.id}">${esc(SWITCH_LABELS[s.id])}</button>`,
    ).join('') + '<p class="switch-note" id="switch-note"></p>'
  function updateSwitchNote() {
    const sel = getScope().selectedProblemId
    $('#switch-note').textContent = sel
      ? `Showing your bottleneck: ${SWITCH_LABELS[sc.id].toLowerCase()}.`
      : `Showing an example: ${SWITCH_LABELS[sc.id].toLowerCase()}. Pick your bottleneck above to make it yours.`
  }
  $('#story-switch').addEventListener('click', (e) => {
    const b = e.target.closest('[data-scenario]')
    if (!b) return
    setScope({
      selectedProblemId: b.dataset.scenario,
      scenarioId: b.dataset.scenario,
      journeySource: 'story-switch',
    })
    track('sb_problem_selected', { problem: b.dataset.scenario })
  })
  onScope((s) => {
    if (s.scenarioId !== sc.id) setScenario(s.scenarioId)
    else updateSwitchNote()
  })

  // Step buttons seek to that chapter
  $('#story-steps').addEventListener('click', (e) => {
    const b = e.target.closest('[data-step]')
    if (!b) return
    const li = chapters[+b.dataset.step]
    const r = li.getBoundingClientRect()
    const off = mobileMQ.matches ? stage.getBoundingClientRect().bottom + 12 : innerHeight * 0.3
    scrollTo({ top: scrollY + r.top - off + 2, behavior: REDUCED ? 'auto' : 'smooth' })
  })
  list.addEventListener('click', (e) => {
    if (e.target.closest('[data-see-rec]')) onChoose?.(sc)
  })

  /* -------- the timeline: one rAF loop while the story is on screen -------- */
  const ptr = { x: 0, y: 0, cx: 0, cy: 0 }
  if (FINE_POINTER && !REDUCED) {
    addEventListener('pointermove', (e) => {
      ptr.x = (e.clientX / innerWidth - 0.5) * 2
      ptr.y = (e.clientY / innerHeight - 0.5) * 2
    })
  }

  let last = ''
  function frame() {
    const mobile = mobileMQ.matches
    const rr = root.getBoundingClientRect()
    if (rr.bottom < 0 || rr.top > innerHeight) return // off screen: nothing to sync
    const sr = stage.getBoundingClientRect()
    const trigger = mobile ? sr.bottom + (innerHeight - sr.bottom) * 0.3 : innerHeight * 0.55
    let idx = 0
    let frac = 0
    for (let i = 0; i < chapters.length; i++) {
      const r = chapters[i].getBoundingClientRect()
      if (r.top <= trigger) {
        idx = i
        frac = clamp01((trigger - r.top) / r.height)
      }
    }
    if (idx !== beat) setBeat(idx)

    const P = POSES[mobile ? 'mobile' : 'desktop']
    const a = P[idx]
    const b = P[Math.min(idx + 1, P.length - 1)]
    // hold each pose while its chapter is read, then move toward the next one
    const t = REDUCED ? 0 : smooth(clamp01((frac - 0.55) / 0.45))
    ptr.cx += (ptr.x - ptr.cx) * 0.08
    ptr.cy += (ptr.y - ptr.cy) * 0.08
    const ry = lerp(a.ry, b.ry, t) + ptr.cx * 10
    const rx = lerp(a.rx, b.rx, t) - ptr.cy * 7
    const rz = lerp(a.rz, b.rz, t)
    const s = lerp(a.s, b.s, t)
    const x = lerp(a.x, b.x, t)
    const y = lerp(a.y, b.y, t)
    const key = [ry, rx, rz, s, x, y].map((v) => v.toFixed(2)).join()
    if (key !== last) {
      last = key
      phone.style.transform = `translate(${x}%, ${y}%) scale(${s})`
      body.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
      body.style.setProperty('--sheen', `${50 + ((((ry % 360) + 540) % 360) - 180) * 0.6}%`)
      drawLines()
    }
  }
  function linePath(from, to, sr) {
    const x1 = from.right - sr.left
    const y1 = from.top + from.height * 0.45 - sr.top
    const x2 = to.left - sr.left
    const y2 = to.top + 26 - sr.top
    const mx = (x1 + x2) / 2
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} C${mx.toFixed(1)} ${y1.toFixed(1)}, ${mx.toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`
  }
  function drawLines() {
    const vis = $('.stage-visual', stage).getBoundingClientRect()
    const pr = $('.ph-front', stage).getBoundingClientRect()
    const show = (el, ln) => {
      // on desktop the connected beat shows the four systems instead of the cards
      const on =
        el.classList.contains('show') &&
        !(root.classList.contains('connected') && !mobileMQ.matches)
      ln.classList.toggle('on', on)
      if (on) ln.setAttribute('d', linePath(pr, el.getBoundingClientRect(), vis))
    }
    show(leadCard, lnLead)
    show(ownerCard, lnOwner)
  }

  let raf = 0
  let visible = false
  const loop = () => {
    frame()
    raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0
  }
  const kick = () => {
    if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop)
  }
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting
    kick()
  }).observe(root)
  document.addEventListener('visibilitychange', kick)
  addEventListener('resize', () => {
    last = ''
    frame()
  })

  renderChapters()
  setBeat(0, true)
  updateSwitchNote()
  frame()

  return {
    setScenario,
    get scenario() {
      return sc
    },
    get beat() {
      return beat
    },
  }
}
