import '@fontsource/michroma/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './site.css'

import { monogram } from '../brand/kit.js'
import { CONFIG } from './config.js'
import { SYSTEMS, FIT_CHAPTERS, NEEDS, JOURNEY, PLANS, BUILDS, PATH, FAQ } from './content.js'
import { WORK, WORK_TYPES } from './work.js'
import { REDUCED, webglAvailable, createHero, createFit, createViewer } from './scenes.js'
import avatarImg from './media/avatar.jpg'

const $ = (s, el = document) => el.querySelector(s)
const $$ = (s, el = document) => [...el.querySelectorAll(s)]
const esc = (s = '') =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )
const sys = (k) => SYSTEMS.find((s) => s.k === k)
const money = (n) => '$' + n.toLocaleString('en-US')
const GL = webglAvailable()

document.documentElement.classList.add('js')
if (REDUCED) document.documentElement.classList.add('reduced')
$('#year').textContent = new Date().getFullYear()

/* ---------- Logo ---------- */
$$('[data-logo]').forEach((el) => {
  const withTag = el.dataset.logo === 'tagline'
  el.innerHTML = `${monogram(28)}<i class="rule"></i><span style="display:grid;gap:6px"><span class="word chrome">System-Based</span>${
    withTag
      ? '<span style="font:400 10px var(--sb-font-body);letter-spacing:.55em;color:var(--muted)">SYSTEMS OVER LUCK.</span>'
      : ''
  }</span>`
})

/* ---------- Nav ---------- */
const nav = $('#nav')
const onScrollNav = () => nav.classList.toggle('scrolled', scrollY > 30)
addEventListener('scroll', onScrollNav, { passive: true })
onScrollNav()

const burger = $('.burger')
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open)
  document.body.classList.toggle('locked', open)
  burger.setAttribute('aria-expanded', open)
  $('#menu').setAttribute('aria-hidden', !open)
}
burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')))
$$('#menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)))

const navLinks = $$('.nav-links a')
const spy = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return
      navLinks.forEach((a) =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id),
      )
    }),
  { rootMargin: '-45% 0px -50% 0px' },
)
;['systems', 'how', 'pricing', 'work', 'community'].forEach((id) =>
  spy.observe(document.getElementById(id)),
)

/* ---------- Reveal on scroll ---------- */
const reveal = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        reveal.unobserve(e.target)
      }
    }),
  { rootMargin: '0px 0px -8% 0px' },
)
$$('[data-reveal]').forEach((el) => reveal.observe(el))

/* ---------- Hero ---------- */
const hero = $('.hero')
const heroReady = () => hero.classList.add('ready')
setTimeout(heroReady, REDUCED ? 0 : 900)
if (GL) {
  try {
    createHero($('#hero-canvas'), { onLocked: heroReady })
  } catch (err) {
    console.warn(err)
    heroPoster()
  }
} else heroPoster()
function heroPoster() {
  $('#hero-canvas').replaceWith(
    Object.assign(new Image(), { src: avatarImg, className: 'poster', alt: '' }),
  )
}

$('#rail').innerHTML = SYSTEMS.map(
  (s) => `<button class="chip" data-system="${s.k}"><b>${s.k}</b>${esc(s.short)}</button>`,
).join('')

/* ---------- Need selector ---------- */
const needList = $('#need-list')
needList.innerHTML = NEEDS.map(
  (n, i) =>
    `<button class="need-opt" aria-pressed="${i === 0}" data-need="${i}"><span>${esc(n.q)}</span><b>0${i + 1}</b></button>`,
).join('')
const renderNeed = (i) => {
  const n = NEEDS[i]
  const s = sys(n.k)
  const out = $('#need-out')
  out.classList.remove('swap')
  void out.offsetWidth
  out.classList.add('swap')
  out.innerHTML = `
    <div class="eyebrow">Recommended start · System ${s.k}</div>
    <h3 class="display">${esc(s.name)}</h3>
    <p class="lede">${esc(n.why)}</p>
    <div class="tiers"><span>Start: ${esc(n.plan)}</span></div>
    <div class="need-actions">
      <button class="btn primary" data-book data-interest="${esc(s.name)}">Book a call</button>
      <button class="btn" data-system="${s.k}">See what’s inside</button>
    </div>
    <span class="big-letter chrome" aria-hidden="true">${s.k}</span>`
}
needList.addEventListener('click', (e) => {
  const b = e.target.closest('[data-need]')
  if (!b) return
  $$('.need-opt', needList).forEach((x) => x.setAttribute('aria-pressed', x === b))
  renderNeed(+b.dataset.need)
})
renderNeed(0)

/* ---------- Systems ---------- */
$('#systems-grid').innerHTML = SYSTEMS.map(
  (s, i) => `
  <button class="sys" data-system="${s.k}" data-reveal="${(i % 4) + 1}">
    <span class="tile">${s.k}${s.k === 'A' ? '<span class="dot"></span>' : ''}</span>
    <h3>${esc(s.name)}</h3>
    <p class="job">${esc(s.job)}</p>
    <ul>${s.deliverables
      .slice(0, 4)
      .map((d) => `<li>${esc(d)}</li>`)
      .join('')}</ul>
    <span class="more">Explore system <i>→</i></span>
  </button>`,
).join('')
$$('#systems-grid [data-reveal]').forEach((el) => reveal.observe(el))
// Tilt + light-follow on system cards (fine pointers only)
if (matchMedia('(hover: hover)').matches && !REDUCED) {
  $$('.sys').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      card.style.setProperty('--mx', x * 100 + '%')
      card.style.setProperty('--my', y * 100 + '%')
      card.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 8}deg) translateY(-4px)`
    })
    card.addEventListener('pointerleave', () => (card.style.transform = ''))
  })
}

/* ---------- How it fits (scroll-driven) ---------- */
const chapters = [
  ...FIT_CHAPTERS,
  {
    k: '',
    title: 'One connected system.',
    body: 'Each part feeds the next. Start with one, add the rest as you grow, and stop relying on luck.',
  },
]
$('#fit-chapters').innerHTML = chapters
  .map(
    (c, i) => `<div class="fit-ch${i === 0 ? ' on' : ''}">
      <div class="eyebrow">${c.k ? `System ${c.k} · ${esc(sys(c.k).name)}` : 'All four together'}</div>
      <h3 class="display">${esc(c.title)}</h3>
      <p>${esc(c.body)}</p>
    </div>`,
  )
  .join('')
$('#fit-progress').innerHTML = chapters.map(() => '<span></span>').join('')
const fitScene = GL
  ? safe(() =>
      createFit(
        $('#fit-canvas'),
        FIT_CHAPTERS.map((c) => c.k),
      ),
    )
  : null
const fitEl = $('#fit')
const fitChs = $$('.fit-ch')
const fitBars = $$('#fit-progress span')
let fitIdx = 0
const onFitScroll = () => {
  const r = fitEl.getBoundingClientRect()
  const total = r.height - innerHeight
  const p = Math.min(1, Math.max(0, -r.top / total))
  fitScene?.setProgress(p)
  const n = chapters.length
  const idx = Math.min(n - 1, Math.floor(p * n))
  fitBars.forEach((b, i) => b.style.setProperty('--f', Math.min(1, Math.max(0, p * n - i))))
  if (idx !== fitIdx) {
    fitChs[fitIdx].classList.remove('on')
    fitChs[idx].classList.add('on')
    fitIdx = idx
  }
}
if (!REDUCED) {
  addEventListener('scroll', onFitScroll, { passive: true })
  onFitScroll()
}
function safe(fn) {
  try {
    return fn()
  } catch (err) {
    console.warn(err)
    return null
  }
}

/* ---------- Lead journey ---------- */
$('#steps').innerHTML = JOURNEY.map(
  (s, i) => `<button class="step" role="tab" aria-selected="${i === 0}" data-step="${i}">
    <b>0${i + 1}</b><span><strong>${esc(s.label)}</strong><span>${esc(s.caption)}</span></span></button>`,
).join('')
const renderStep = (i) => {
  const msgs = JOURNEY.slice(0, i + 1).flatMap((s) => s.chat)
  $('#thread').innerHTML = msgs
    .slice(-6)
    .map((m, j, arr) => {
      const fresh = j >= arr.length - JOURNEY[i].chat.length
      return `<div class="msg m-${m.from}" style="${fresh ? `animation-delay:${(j - (arr.length - JOURNEY[i].chat.length)) * 0.35}s` : 'animation:none'}">${esc(m.text)}</div>`
    })
    .join('')
  $('#demo-time').textContent = JOURNEY[i].time
  const fields = Object.assign({}, ...JOURNEY.slice(0, i + 1).map((s) => s.fields))
  const st = JOURNEY[i].status
  $('#crm').innerHTML = `
    <div class="crm-head"><strong>Lead · (555) 014-2290</strong><span class="status ${st.toLowerCase()}">${esc(st)}</span></div>
    <div class="pipeline" aria-hidden="true">${JOURNEY.map((_, j) => `<i class="${j <= i ? 'on' : ''}"></i>`).join('')}</div>
    <dl class="fields">${Object.entries(fields)
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join('')}</dl>
    <span class="example-note">Example walkthrough · illustrative business</span>`
  $$('.step').forEach((b) => b.setAttribute('aria-selected', +b.dataset.step === i))
}
$('#steps').addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]')
  if (b) renderStep(+b.dataset.step)
})
renderStep(0)

/* ---------- Pricing ---------- */
let priceMode = 'monthly'
const slabs = (stack) =>
  `<div class="stack" aria-hidden="true">${[...stack]
    .reverse()
    .map(
      (k, i) =>
        `<div class="slab" style="animation-delay:${(stack.length - 1 - i) * 0.12}s">${k}${k === 'A' ? '<span class="dot"></span>' : ''}</div>`,
    )
    .join('')}</div>`
const renderPlans = () => {
  const perf = priceMode === 'performance'
  $('#plans').innerHTML = PLANS.map((p) => {
    const dim = perf && !p.performance
    const priceHtml = perf
      ? p.performance
        ? `<div class="perf-price"><strong>10% per booked job</strong><span class="or">— OR —</span><strong>Fee = your ad spend</strong></div>`
        : `<div class="perf-price"><strong>Monthly only</strong><span class="muted">Performance pricing needs active marketing, so it starts at Growth.</span></div>`
      : `<div class="price"><strong data-count="${p.price}">${money(p.price)}</strong><span>/ month</span></div>`
    return `<article class="plan${p.featured ? ' featured' : ''}${dim ? ' dim' : ''}">
      ${p.featured ? '<span class="badge">Most picked</span>' : ''}
      ${slabs(p.stack)}
      <h3>${esc(p.name)} · ${p.stack.join(' + ')}</h3>
      ${priceHtml}
      <div><div class="summary">${esc(p.summary)}</div><div class="term">${perf && p.performance ? 'Requires active marketing through Growth' : esc(p.term)}</div></div>
      <ul>${p.includes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button class="btn ${p.featured ? 'primary' : ''}" data-book data-interest="${esc(p.name)} plan${perf ? ' (performance)' : ''}" ${dim ? 'disabled' : ''}>Start with ${esc(p.name)}</button>
        <button class="link" data-plan="${esc(p.name)}" style="justify-self:center;font-size:14px">See what’s inside →</button>
      </div>
    </article>`
  }).join('')
  const note = $('#perf-note')
  note.hidden = !perf
  note.innerHTML = `<span class="dot" style="margin-top:8px"></span><span><strong style="color:var(--head)">How performance works.</strong> Available on Growth and Full. Instead of the monthly fee, pick one: <strong style="color:var(--head)">10% commission on every job we book</strong>, or <strong style="color:var(--head)">a fee that matches your monthly ad spend</strong>. You must be running marketing with us, because our campaigns create the jobs we get paid on.</span>`
  if (!perf && !REDUCED) $$('[data-count]').forEach(countUp)
}
function countUp(el) {
  const to = +el.dataset.count
  const t0 = performance.now()
  const step = (now) => {
    const k = Math.min(1, (now - t0) / 900)
    const e = 1 - Math.pow(1 - k, 3)
    el.textContent = money(Math.round((to * e) / 10) * 10)
    if (k < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
const toggle = $('#price-toggle')
const moveThumb = () => {
  const on = $('[aria-pressed="true"]', toggle)
  const thumb = $('.thumb', toggle)
  thumb.style.left = on.offsetLeft + 'px'
  thumb.style.width = on.offsetWidth + 'px'
}
toggle.addEventListener('click', (e) => {
  const b = e.target.closest('[data-mode]')
  if (!b || b.dataset.mode === priceMode) return
  priceMode = b.dataset.mode
  $$('[data-mode]', toggle).forEach((x) => x.setAttribute('aria-pressed', x === b))
  moveThumb()
  renderPlans()
})
renderPlans()
requestAnimationFrame(moveThumb)
addEventListener('resize', moveThumb)
document.fonts?.ready.then(moveThumb)

$('#builds').innerHTML = BUILDS.map(
  (b) =>
    `<button class="build" data-book data-interest="Quote: ${esc(b.name)}"><strong>${esc(b.name)}</strong><span>${esc(b.note)}</span><em>Get a quote →</em></button>`,
).join('')

/* ---------- Upgrade path ---------- */
const track = $('#path-track')
track.innerHTML = PATH.map(
  (p, i) =>
    `<div class="path-step"><span class="node">${String(i + 1).padStart(2, '0')}</span><strong>${esc(p.step)}</strong><span>${esc(p.note)}</span><em>${esc(p.tag)}</em></div>`,
).join('')
const pathSteps = $$('.path-step', track)
const onPath = () => {
  const r = track.getBoundingClientRect()
  const p = REDUCED
    ? 1
    : Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (innerHeight * 0.6)))
  track.style.setProperty('--p', p)
  pathSteps.forEach((s, i) => s.classList.toggle('on', p >= i / (PATH.length - 1) - 0.02))
}
addEventListener('scroll', onPath, { passive: true })
onPath()

/* ---------- Work ---------- */
const published = WORK.filter((w) => w.published)
let workFilter = 'all'
const TYPE_LABEL = Object.fromEntries(WORK_TYPES.map((t) => [t.id, t.label.replace(/s$/, '')]))
const STATUS = { live: 'Live', demo: 'Demo', soon: 'Coming soon' }
const typesInUse = new Set(published.map((w) => w.type))
$('#filters').innerHTML = WORK_TYPES.filter((t) => t.id === 'all' || typesInUse.has(t.id))
  .map(
    (t) =>
      `<button class="chip${t.id === 'all' ? ' on' : ''}" data-filter="${t.id}">${esc(t.label)}</button>`,
  )
  .join('')
const cardMedia = (w) => {
  const m = w.media[0]
  if (!m)
    return `<div class="placeholder"><span class="chrome">${esc((w.systems[0] || 'SB').slice(0, 2))}</span></div>`
  return `<img src="${m.poster || m.img}" alt="" loading="lazy" />`
}
const renderWork = () => {
  const list = published.filter((w) => workFilter === 'all' || w.type === workFilter)
  $('#work-grid').innerHTML =
    list
      .map(
        (
          w,
          i,
        ) => `<button class="work-card${i === 0 && workFilter === 'all' ? ' wide' : ''}" data-work="${published.indexOf(w)}" style="animation-delay:${i * 0.07}s">
        <div class="work-media">${cardMedia(w)}</div>
        <div class="work-info">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span></div>
          <strong>${esc(w.title)}</strong>
          <p>${esc(w.summary)}</p>
        </div>
      </button>`,
      )
      .join('') +
    `<button class="work-card next" data-book data-interest="New project"><span class="eyebrow">Your project</span><strong>Your business could be next.</strong><span class="link">Book a call →</span></button>`
}
$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]')
  if (!b) return
  workFilter = b.dataset.filter
  $$('[data-filter]').forEach((x) => x.classList.toggle('on', x === b))
  renderWork()
})
renderWork()

/* ---------- Community ---------- */
$('#community-img').src = avatarImg
$('#community-cta').innerHTML = CONFIG.COMMUNITY_URL
  ? `<a class="btn primary" href="${esc(CONFIG.COMMUNITY_URL)}" target="_blank" rel="noopener">Join Pressure Built →</a>`
  : `<button class="btn primary" data-book data-interest="Pressure Built community">Get notified when it opens</button><span class="muted" style="align-self:center;font-size:14px">Opening soon</span>`
new IntersectionObserver(
  ([e]) => e.isIntersecting && $('#community-panel').classList.add('in'),
).observe($('#community-panel'))

/* ---------- FAQ ---------- */
$('#faq-list').innerHTML = FAQ.map(
  (f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`,
).join('')
$$('#faq-list details').forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) $$('#faq-list details').forEach((o) => o !== d && (o.open = false))
  }),
)

/* ------------------------------------------------------------------ */
/* Pop-up sheets                                                       */
/* ------------------------------------------------------------------ */

const sheet = $('#sheet')
const panel = $('.sheet-panel', sheet)
const body = $('#sheet-body')
let viewer = null
let lastFocus = null
let closeTimer = 0

function openSheet(html, ev, after) {
  clearTimeout(closeTimer)
  const wasOpen = sheet.classList.contains('open')
  lastFocus = wasOpen ? lastFocus : document.activeElement
  body.innerHTML = html
  panel.scrollTop = 0
  sheet.classList.remove('closing')
  sheet.setAttribute('aria-hidden', 'false')
  document.body.classList.add('locked')
  // the reveal grows from wherever the visitor clicked
  sheet.style.visibility = 'visible'
  const r = panel.getBoundingClientRect()
  const x = ev?.clientX ?? innerWidth / 2
  const y = ev?.clientY ?? innerHeight / 2
  panel.style.setProperty('--ox', x - r.left + 'px')
  panel.style.setProperty('--oy', y - r.top + 'px')
  sheet.style.visibility = ''
  if (wasOpen) {
    sheet.classList.remove('open')
    void panel.offsetWidth
  }
  requestAnimationFrame(() => {
    sheet.classList.add('open')
    after?.()
    $('.sheet-close', sheet).focus({ preventScroll: true })
  })
}
function closeSheet() {
  if (!sheet.classList.contains('open')) return
  sheet.classList.add('closing')
  sheet.classList.remove('open')
  sheet.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('locked')
  viewer?.hide()
  closeTimer = setTimeout(() => (body.innerHTML = ''), 500)
  lastFocus?.focus?.({ preventScroll: true })
}
sheet.addEventListener('click', (e) => e.target.closest('[data-close]') && closeSheet())
addEventListener('keydown', (e) => {
  if (!sheet.classList.contains('open')) return
  if (e.key === 'Escape') closeSheet()
  if (e.key === 'Tab') {
    const f = $$(
      'button, a[href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])',
      panel,
    ).filter((x) => !x.disabled && x.offsetParent !== null)
    if (!f.length) return
    const first = f[0]
    const last = f[f.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      last.focus()
      e.preventDefault()
    } else if (!e.shiftKey && document.activeElement === last) {
      first.focus()
      e.preventDefault()
    }
  }
})
const show3D = (spec) => {
  const host = $('.sh-visual', body)
  if (!GL || !host) return
  viewer ??= safe(createViewer)
  viewer?.show(spec, host)
}

function openSystem(k, ev) {
  const s = sys(k)
  openSheet(
    `<div class="sh-split">
      <div class="sh-visual"><div class="vis-label eyebrow">System ${s.k}${s.k === 'A' ? ' · <span class="dot"></span> start here' : ''}</div><span class="ghost chrome">${s.k}</span></div>
      <div class="sh-copy">
        <div class="sh-block">
          <div class="eyebrow">System ${s.k}</div>
          <h2 class="display" id="sheet-title">${esc(s.name)}</h2>
          <p class="lede">${esc(s.job)}.</p>
        </div>
        <div class="sh-block"><h4>The problem</h4><p>${esc(s.problem)}</p></div>
        <div class="sh-block"><h4>What changes</h4><p>${esc(s.outcome)}</p></div>
        <div class="sh-block"><h4>How it flows</h4><div class="flow">${s.flow
          .map(
            (f, i) =>
              `${i ? '<i></i>' : ''}<span style="animation-delay:${0.5 + i * 0.08}s">${esc(f)}</span>`,
          )
          .join('')}</div></div>
        <div class="sh-block"><h4>What you get</h4><ul class="ticks">${s.deliverables.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>
        <div class="sh-block"><h4>What we need from you</h4><p>${esc(s.you)}</p></div>
        <div class="sh-block"><h4>Where it’s included</h4><p style="color:var(--head)">${esc(s.plans)}</p></div>
        <div class="sh-ctas">
          <button class="btn primary" data-book data-interest="${esc(s.name)}">Book a call about this</button>
          <a class="btn" href="#pricing" data-close>See pricing</a>
        </div>
      </div>
    </div>`,
    ev,
    () => show3D({ letter: s.k }),
  )
}

function openPlan(name, ev) {
  const p = PLANS.find((x) => x.name === name)
  openSheet(
    `<div class="sh-split">
      <div class="sh-visual"><div class="vis-label eyebrow">${esc(p.name)} · ${p.stack.join(' + ')}</div></div>
      <div class="sh-copy">
        <div class="sh-block">
          <div class="eyebrow">Plan</div>
          <h2 class="display" id="sheet-title">${esc(p.name)}</h2>
          <div class="price"><strong>${money(p.price)}</strong><span>/ month · ${esc(p.term)}</span></div>
        </div>
        <div class="sh-block"><h4>What’s in the stack</h4><div class="syschips">${p.stack
          .map(
            (k) =>
              `<button class="chip" data-system="${k}"><b>${k}</b>${esc(sys(k).name)}</button>`,
          )
          .join('')}</div></div>
        <div class="sh-block"><h4>Included</h4><ul class="ticks">${p.includes.map((d) => `<li>${esc(d)}</li>`).join('')}</ul></div>
        <div class="sh-block"><h4>Performance option</h4><p>${
          p.performance
            ? 'Available. Instead of the monthly fee, pay 10% per booked job or a fee that matches your ad spend. It requires active marketing with us.'
            : 'Not available on Basic. Performance pricing needs active marketing, so it starts at Growth.'
        }</p></div>
        <div class="sh-ctas"><button class="btn primary" data-book data-interest="${esc(p.name)} plan">Start with ${esc(p.name)}</button></div>
      </div>
    </div>`,
    ev,
    () => show3D({ stack: p.stack }),
  )
}

function workMediaHtml(m) {
  if (m.video)
    return `<video src="${m.video}" poster="${m.poster || ''}" autoplay muted loop playsinline ${REDUCED ? '' : ''}></video>`
  return `<img src="${m.img}" alt="" />`
}
function openWork(i, ev) {
  const w = published[i]
  const media = w.media
  const links = w.links.filter((l) => l.url)
  openSheet(
    `<div class="sh-work">
      <div class="gallery" id="gallery">${media[0] ? workMediaHtml(media[0]) : `<div class="work-media" style="height:100%"><div class="placeholder"><span class="chrome">${esc(w.systems[0] || 'SB')}</span></div></div>`}</div>
      ${
        media.length > 1
          ? `<div class="thumbs">${media
              .map(
                (m, j) =>
                  `<button data-media="${j}" aria-current="${j === 0}" aria-label="Show item ${j + 1}"><img src="${m.poster || m.img}" alt="" /></button>`,
              )
              .join('')}</div>`
          : ''
      }
      <div class="sh-copy">
        <div class="sh-block full">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span><span>${esc(w.client)}</span></div>
          <h2 class="display" id="sheet-title">${esc(w.title)}</h2>
        </div>
        <div class="sh-block"><p class="lede">${esc(w.about)}</p>
          <div class="sh-ctas" style="margin-top:10px">
            ${links.map((l, j) => `<a class="btn ${j ? '' : 'primary'}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}
            ${w.embed ? `<button class="btn" data-embed="${esc(w.embed)}">Preview live here</button>` : ''}
            ${w.status === 'soon' ? `<button class="btn primary" data-book data-interest="${esc(w.title)}">Get early access</button>` : ''}
          </div>
        </div>
        <div class="sh-block">
          ${w.built.length ? `<h4>What we built</h4><ul class="ticks" style="grid-template-columns:1fr">${w.built.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
          ${w.systems.length ? `<h4 style="margin-top:14px">Systems used</h4><div class="syschips">${w.systems.map((k) => `<button class="chip" data-system="${k}"><b>${k}</b>${esc(sys(k).short)}</button>`).join('')}</div>` : ''}
        </div>
      </div>
    </div>`,
    ev,
  )
}
body.addEventListener('click', (e) => {
  const t = e.target.closest('[data-media]')
  if (t) {
    const w = published.find((x) => x.title === $('#sheet-title').textContent)
    $('#gallery').innerHTML = workMediaHtml(w.media[+t.dataset.media])
    $$('[data-media]', body).forEach((b) => b.setAttribute('aria-current', b === t))
  }
  const emb = e.target.closest('[data-embed]')
  if (emb)
    $('#gallery').innerHTML =
      `<iframe src="${esc(emb.dataset.embed)}" title="Live preview" loading="lazy"></iframe>`
})

/* ---------- Booking ---------- */
const INTERESTS = [
  'Not sure yet',
  ...SYSTEMS.map((s) => s.name),
  ...PLANS.map((p) => `${p.name} plan`),
  ...PLANS.filter((p) => p.performance).map((p) => `${p.name} plan (performance)`),
  ...BUILDS.map((b) => `Quote: ${b.name}`),
  'New project',
  'Pressure Built community',
]
function openBooking(interest, ev) {
  if (CONFIG.BOOKING_URL && interest !== 'Pressure Built community') {
    window.open(CONFIG.BOOKING_URL, '_blank', 'noopener')
    return
  }
  const opts = INTERESTS.includes(interest) ? INTERESTS : [interest, ...INTERESTS].filter(Boolean)
  const community = interest === 'Pressure Built community'
  openSheet(
    `<div class="sh-form">
      <div class="side">
        <div class="eyebrow"><span class="dot"></span>${community ? 'Pressure Built' : 'Book a call'}</div>
        <h2 class="display" id="sheet-title" style="font-size:clamp(28px,3.4vw,42px)">${community ? 'Get first access.' : 'Let’s find your first system.'}</h2>
        <p class="lede">${
          community
            ? 'The community is opening soon. Leave your details and you’ll be first in.'
            : 'Tell us a little about your business. We’ll come back to set up a short call.'
        }</p>
        ${
          community
            ? ''
            : `<ul class="perks"><li>How leads reach you today</li><li>Where they slip through</li><li>The right starting system and price</li><li>A written next step</li></ul>`
        }
      </div>
      <form class="book" novalidate>
        <label>Name<input id="f-name" name="name" autocomplete="name" required /></label>
        <label>Business<input id="f-biz" name="business" autocomplete="organization" /></label>
        <label>Phone<input id="f-phone" name="phone" type="tel" autocomplete="tel" /></label>
        <label>Email<input id="f-email" name="email" type="email" autocomplete="email" /></label>
        <label class="full">Interested in<select id="f-interest" name="interest">${opts
          .map((o) => `<option ${o === interest ? 'selected' : ''}>${esc(o)}</option>`)
          .join('')}</select></label>
        <label class="full">What’s slipping right now?<textarea id="f-msg" name="message" placeholder="e.g. we miss calls after 5pm and nobody follows up"></textarea></label>
        <div class="full" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">
          <button class="btn primary" type="submit">${community ? 'Notify me' : 'Request my call'} →</button>
          <span class="form-msg" id="form-msg" role="status"></span>
        </div>
      </form>
    </div>`,
    ev,
  )
}
body.addEventListener('submit', async (e) => {
  e.preventDefault()
  const form = e.target
  const msg = $('#form-msg', form)
  const data = Object.fromEntries(new FormData(form))
  if (!data.name || (!data.phone && !data.email)) {
    msg.className = 'form-msg err'
    msg.textContent = 'Add your name and a phone number or email so we can reach you.'
    return
  }
  msg.className = 'form-msg'
  if (CONFIG.FORM_ENDPOINT) {
    msg.textContent = 'Sending…'
    try {
      const res = await fetch(CONFIG.FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, page: location.href }),
      })
      if (!res.ok) throw new Error(res.status)
      form.innerHTML = `<div class="full sh-block"><h3 class="display" style="font-size:30px">Got it.</h3><p class="lede">Thanks, ${esc(data.name)}. We’ll reach out shortly to set up your call.</p></div>`
    } catch {
      msg.className = 'form-msg err'
      msg.textContent = 'That didn’t send. Please try again in a moment.'
    }
  } else if (CONFIG.CONTACT_EMAIL) {
    const lines = Object.entries(data).map(([k, v]) => `${k}: ${v}`)
    location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent('Call request: ' + data.interest)}&body=${encodeURIComponent(lines.join('\n'))}`
    msg.textContent = `Your email app should open now. If it doesn’t, email ${CONFIG.CONTACT_EMAIL}.`
  } else {
    msg.className = 'form-msg err'
    msg.textContent = 'Booking isn’t connected yet. Add a form endpoint or email in config.js.'
  }
})

/* ---------- Global clicks ---------- */
document.addEventListener('click', (e) => {
  const book = e.target.closest('[data-book]')
  if (book && !book.disabled) {
    e.preventDefault()
    setMenu(false)
    return openBooking(book.dataset.interest || 'Not sure yet', e)
  }
  const s = e.target.closest('[data-system]')
  if (s) return openSystem(s.dataset.system, e)
  const p = e.target.closest('[data-plan]')
  if (p) return openPlan(p.dataset.plan, e)
  const w = e.target.closest('[data-work]')
  if (w) return openWork(+w.dataset.work, e)
})
