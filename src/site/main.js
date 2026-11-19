import '@fontsource/michroma/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import './site.css'

import { monogram } from '../brand/kit.js'
import { CONFIG } from './config.js'
import {
  SYSTEMS,
  PACKAGES,
  PROJECTS,
  PROJECT_PROCESS,
  PERFORMANCE,
  service,
  system,
  servicesOf,
  recommend,
  VERSION,
} from '../catalog/catalog.js'
import { STATEMENT, NEEDS, FIT_CHAPTERS, JOURNEY, FAQ } from './content.js'
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
const money = (n) => '$' + n.toLocaleString('en-US')
const pkgById = (id) => PACKAGES.find((p) => p.id === id)
const GL = webglAvailable()
const safe = (fn) => {
  try {
    return fn()
  } catch (err) {
    console.warn(err)
    return null
  }
}
const store = {
  get: (k) => safe(() => sessionStorage.getItem(k)),
  set: (k, v) => safe(() => sessionStorage.setItem(k, v)),
}

document.documentElement.classList.add('js')
if (REDUCED) document.documentElement.classList.add('reduced')
$('#year').textContent = new Date().getFullYear()

/* What the visitor has told us so far; it travels with the inquiry */
const scope = {
  need: null, // index into NEEDS
  system: null, // system code
  package: null, // package id
  services: new Set(), // service codes from the composer or explorer
  interest: 'Not sure yet',
}

/* ---------- Decisions: proposed vs approved values ---------- */
const anyProposed = () => CONFIG.SHOW_PROPOSED
const showValue = (dec) => dec && dec.value != null && (dec.approved || CONFIG.SHOW_PROPOSED)
const tag = (dec) => (dec.approved ? '' : ' <span class="proposed">Proposed</span>')
const priceHTML = (dec, fmt = money, fallback = 'Confirmed on your fit call') =>
  showValue(dec) ? `${fmt(dec.value)}${tag(dec)}` : `<span class="muted">${fallback}</span>`
const soldAsLabel = {
  'setup+managed': 'Setup + managed',
  managed: 'Managed',
  project: 'Project',
  'project|add-on': 'Project or add-on',
}

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
;['systems', 'how', 'work', 'packages', 'projects', 'community'].forEach((id) =>
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
const watchReveal = (root = document) =>
  $$('[data-reveal]', root).forEach((el) => reveal.observe(el))
watchReveal()

/* ================================================================== */
/* 1. Enter the system                                                 */
/* ================================================================== */
const hero = $('.hero')
const playIntro = GL && !REDUCED && store.get('sb-intro') !== 'seen'
let heroCtl = null
const endIntro = () => {
  document.body.classList.remove('intro')
  hero.classList.add('ready')
  store.set('sb-intro', 'seen')
}
if (!playIntro) document.body.classList.remove('intro')
if (GL) {
  heroCtl = safe(() =>
    createHero($('#hero-canvas'), {
      intro: playIntro,
      onLocked: () => hero.classList.add('ready'),
      onIntroEnd: endIntro,
    }),
  )
  if (!heroCtl && !REDUCED) heroPoster()
} else heroPoster()
if (!playIntro) setTimeout(() => hero.classList.add('ready'), REDUCED ? 0 : 300)
function heroPoster() {
  document.body.classList.remove('intro')
  $('#hero-canvas').replaceWith(
    Object.assign(new Image(), { src: avatarImg, className: 'poster', alt: '' }),
  )
  hero.classList.add('ready')
}
// Any input skips straight to the glide; a safety net ends the intro regardless
const skip = () => heroCtl?.skip()
$('#intro-skip').addEventListener('click', skip)
;['wheel', 'touchstart', 'keydown'].forEach((ev) =>
  addEventListener(ev, () => document.body.classList.contains('intro') && skip(), {
    passive: true,
  }),
)
if (playIntro) setTimeout(() => document.body.classList.contains('intro') && endIntro(), 7000)

$('#rail').innerHTML = SYSTEMS.map(
  (s) => `<button class="chip" data-explore="${s.code}"><b>${s.n}</b>${esc(s.name)}</button>`,
).join('')

/* ================================================================== */
/* 2. Understand the company                                           */
/* ================================================================== */
$('#statement-line').innerHTML = esc(STATEMENT.line)
$('#statement-body').textContent = STATEMENT.body
$('#statement-who').textContent = STATEMENT.who
$('#facts').innerHTML = STATEMENT.facts
  .map(
    (f) =>
      `<div class="fact"><strong class="chrome">${esc(f.k)}</strong><span>${esc(f.v)}</span></div>`,
  )
  .join('')

/* ================================================================== */
/* 3. Identify the problem                                             */
/* ================================================================== */
const needList = $('#need-list')
needList.innerHTML = NEEDS.map(
  (n, i) =>
    `<button class="need-opt" aria-pressed="false" data-need="${i}"><span>${esc(n.q)}</span><b>0${i + 1}</b></button>`,
).join('')
const renderNeed = (i, user = false) => {
  const n = NEEDS[i]
  const s = system(n.system)
  const pkg = pkgById(n.start)
  if (user) {
    scope.need = i
    scope.system = s.code
    if (pkg) scope.package = pkg.id
    scope.interest = pkg ? `${pkg.name} package` : 'Project'
    renderScope()
  }
  const out = $('#need-out')
  out.classList.remove('swap')
  void out.offsetWidth
  out.classList.add('swap')
  out.innerHTML = `
    <div class="eyebrow">Recommended system · ${s.n} ${esc(s.name)}</div>
    <h3 class="display">${pkg ? `Start with ${esc(pkg.name)}` : 'Start with a project'}</h3>
    <p class="lede">${esc(n.why)}</p>
    <div class="tiers"><span>${s.n} · ${esc(s.name)}</span>${pkg ? `<i>→</i><span>${esc(pkg.name)} package</span>` : '<i>→</i><span>One-time project</span>'}</div>
    <div class="need-actions">
      <button class="btn primary" data-explore="${s.code}">Explore ${esc(s.name)}</button>
      ${pkg ? `<button class="btn" data-config-pkg="${pkg.id}">See ${esc(pkg.name)}</button>` : '<a class="btn" href="#projects">See projects</a>'}
    </div>
    <span class="big-letter chrome" aria-hidden="true">${s.n}</span>`
  $$('.need-opt', needList).forEach((x) => x.setAttribute('aria-pressed', +x.dataset.need === i))
}
needList.addEventListener('click', (e) => {
  const b = e.target.closest('[data-need]')
  if (b) renderNeed(+b.dataset.need, true)
})
renderNeed(0)
$('[data-need="0"]').setAttribute('aria-pressed', 'true')

/* ================================================================== */
/* 4. Explore the four systems                                         */
/* ================================================================== */
let exSystem = 'CR'
$('#ex-tabs').innerHTML = SYSTEMS.map(
  (
    s,
  ) => `<button class="ex-tab" role="tab" data-tab="${s.code}" aria-selected="${s.code === exSystem}">
    <b>${s.n}</b><span><strong>${esc(s.name)}</strong><em>${esc(s.scope)}</em></span><i class="code">${s.code}</i></button>`,
).join('')
const inPackages = (code) => PACKAGES.filter((p) => p.services.includes(code)).map((p) => p.name)
const renderExplorer = () => {
  const s = system(exSystem)
  const panel = $('#ex-panel')
  panel.classList.remove('swap')
  void panel.offsetWidth
  panel.classList.add('swap')
  panel.innerHTML = `
    <div class="ex-head">
      <div><div class="eyebrow">System ${s.n} · ${s.code}</div><h3 class="display">${esc(s.name)}</h3><p class="lede">${esc(s.job)}.</p></div>
      <button class="btn sm" data-system3d="${s.code}">View in 3D</button>
    </div>
    <div class="ex-two">
      <div class="sh-block"><h4>The problem</h4><p>${esc(s.problem)}</p></div>
      <div class="sh-block"><h4>What changes</h4><p>${esc(s.outcome)}</p></div>
    </div>
    <div class="sh-block"><h4>How it flows</h4><div class="flow">${s.process
      .map(
        (f, i) =>
          `${i ? '<i></i>' : ''}<span style="animation-delay:${0.1 + i * 0.06}s">${esc(f)}</span>`,
      )
      .join('')}</div></div>
    <div class="sh-block"><h4>Services in this system</h4>
      <div class="svc-list">${servicesOf(s.code)
        .map((v) => {
          const pk = inPackages(v.code)
          const on = scope.services.has(v.code)
          return `<details class="svc">
            <summary><span class="code">${v.code}</span><strong>${esc(v.name)}</strong><span class="badge">${soldAsLabel[v.soldAs]}</span></summary>
            <dl>
              <div><dt>You get</dt><dd>${esc(v.deliverables)}</dd></div>
              <div><dt>You provide</dt><dd>${esc(v.client)}</dd></div>
              <div><dt>After launch</dt><dd>${esc(v.ongoing)}</dd></div>
              <div><dt>Where it’s sold</dt><dd>${pk.length ? `In ${pk.join(', ')}` : v.soldAs.startsWith('project') ? 'As a one-time project' : 'As an add-on'}</dd></div>
            </dl>
            <button class="link" data-add="${v.code}" aria-pressed="${on}">${on ? '✓ In your scope' : '+ Add to my scope'}</button>
          </details>`
        })
        .join('')}</div>
    </div>
    <p class="muted" style="font-size:14px">Upgrades: ${esc(s.upgrades)}.</p>`
  $$('.ex-tab').forEach((t) => t.setAttribute('aria-selected', t.dataset.tab === exSystem))
}
$('#ex-tabs').addEventListener('click', (e) => {
  const t = e.target.closest('[data-tab]')
  if (!t) return
  exSystem = t.dataset.tab
  renderExplorer()
})
renderExplorer()
const explore = (code) => {
  exSystem = code
  renderExplorer()
  document.getElementById('systems').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' })
}

/* ================================================================== */
/* 5. See the infrastructure work                                      */
/* ================================================================== */
const chapters = [
  ...FIT_CHAPTERS,
  {
    code: '',
    title: 'One connected system.',
    body: 'Each part feeds the next. Start with one, add the rest as the numbers justify it.',
  },
]
$('#fit-chapters').innerHTML = chapters
  .map(
    (c, i) => `<div class="fit-ch${i === 0 ? ' on' : ''}">
      <div class="eyebrow">${c.code ? `System ${system(c.code).n} · ${esc(system(c.code).name)}` : 'All four together'}</div>
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
        FIT_CHAPTERS.map((c) => c.code),
      ),
    )
  : null
const fitEl = $('#fit')
const fitChs = $$('.fit-ch')
const fitBars = $$('#fit-progress span')
let fitIdx = 0
const onFitScroll = () => {
  const r = fitEl.getBoundingClientRect()
  const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)))
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

// Lead walkthrough + CRM + owner dashboard
$('#steps').innerHTML = JOURNEY.map(
  (s, i) => `<button class="step" role="tab" aria-selected="${i === 0}" data-step="${i}">
    <b>0${i + 1}</b><span><strong>${esc(s.label)}</strong><span>${esc(s.caption)}</span></span></button>`,
).join('')
const renderStep = (i) => {
  const step = JOURNEY[i]
  const msgs = JOURNEY.slice(0, i + 1).flatMap((s) => s.chat)
  const fresh = step.chat.length
  $('#thread').innerHTML = msgs
    .slice(-6)
    .map((m, j, arr) => {
      const k = j - (arr.length - fresh)
      return `<div class="msg m-${m.from}" style="${k >= 0 ? `animation-delay:${k * 0.35}s` : 'animation:none'}">${esc(m.text)}</div>`
    })
    .join('')
  $('#demo-time').textContent = step.time
  const fields = Object.assign({}, ...JOURNEY.slice(0, i + 1).map((s) => s.fields))
  $('#crm').innerHTML = `
    <div class="crm-head"><strong>Lead · (555) 014-2290</strong><span class="status ${step.status.toLowerCase()}">${esc(step.status)}</span></div>
    <div class="pipeline" aria-hidden="true">${JOURNEY.map((_, j) => `<i class="${j <= i ? 'on' : ''}"></i>`).join('')}</div>
    <dl class="fields">${Object.entries(fields)
      .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
      .join('')}</dl>`
  const k = step.kpi
  $('#dash').innerHTML = `
    <div class="dash-head"><strong>Owner dashboard</strong><span class="example-note">Example data</span></div>
    <div class="kpis">
      <div><span>New leads</span><strong>${k.leads}</strong></div>
      <div><span>First reply</span><strong>${k.reply}</strong></div>
      <div><span>Booked</span><strong>${k.booked}</strong></div>
      <div><span>Follow-ups</span><strong>${k.followups}</strong></div>
    </div>
    <div class="at-work"><span class="example-note">Services at work</span>${step.codes
      .map((c) => `<span class="chip sm"><b>${c}</b>${esc(service(c).name)}</span>`)
      .join('')}</div>`
  $$('.step').forEach((b) => b.setAttribute('aria-selected', +b.dataset.step === i))
}
$('#steps').addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]')
  if (b) renderStep(+b.dataset.step)
})
renderStep(0)

/* ================================================================== */
/* 6. Explore actual work                                              */
/* ================================================================== */
const published = WORK.filter((w) => w.published)
const isCase = (w) => !!(w.problem && w.process?.length)
let workFilter = 'all'
const TYPE_LABEL = { site: 'Live site', demo: 'Live demo', brand: 'Brand', ai: 'AI & software' }
const STATUS = { live: 'Live', demo: 'Demo', soon: 'Coming soon' }
const typesInUse = new Set(published.map((w) => w.type))
$('#filters').innerHTML = WORK_TYPES.filter(
  (t) => t.id === 'all' || (t.id === 'case' ? published.some(isCase) : typesInUse.has(t.id)),
)
  .map(
    (t) =>
      `<button class="chip${t.id === 'all' ? ' on' : ''}" data-filter="${t.id}">${esc(t.label)}</button>`,
  )
  .join('')
const cardMedia = (w) => {
  const m = w.media[0]
  if (!m)
    return `<div class="placeholder"><span class="chrome">${esc(w.systems[0] || 'SB')}</span></div>`
  return `<img src="${m.poster || m.img}" alt="" loading="lazy" />`
}
const renderWork = () => {
  const list = published.filter(
    (w) => workFilter === 'all' || (workFilter === 'case' ? isCase(w) : w.type === workFilter),
  )
  $('#work-grid').innerHTML =
    list
      .map(
        (
          w,
          i,
        ) => `<button class="work-card${i === 0 && workFilter === 'all' ? ' wide' : ''}" data-work="${published.indexOf(w)}" style="animation-delay:${i * 0.07}s">
        <div class="work-media">${cardMedia(w)}</div>
        <div class="work-info">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span>${isCase(w) ? '<span>Case study</span>' : ''}</div>
          <strong>${esc(w.title)}</strong>
          <p>${esc(w.summary)}</p>
        </div>
      </button>`,
      )
      .join('') +
    `<button class="work-card next" data-book data-interest="Project"><span class="eyebrow">Your project</span><strong>Your business could be next.</strong><span class="link">Start a project →</span></button>`
}
$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('[data-filter]')
  if (!b) return
  workFilter = b.dataset.filter
  $$('[data-filter]').forEach((x) => x.classList.toggle('on', x === b))
  renderWork()
})
renderWork()

/* ================================================================== */
/* 7. Configure the solution                                           */
/* ================================================================== */
const draftNote = $('#draft-note')
if (anyProposed()) {
  draftNote.hidden = false
  draftNote.innerHTML =
    '<span class="proposed">Proposed</span> Prices and terms marked this way are under review and can change before you sign.'
}

// Packages / composer toggle
const ctoggle = $('#config-toggle')
const moveThumb = (t) => {
  const on = $('[aria-pressed="true"]', t)
  const thumb = $('.thumb', t)
  thumb.style.left = on.offsetLeft + 'px'
  thumb.style.width = on.offsetWidth + 'px'
}
const setView = (v) => {
  $$('[data-view]', ctoggle).forEach((x) => x.setAttribute('aria-pressed', x.dataset.view === v))
  $('#view-packages').hidden = v !== 'packages'
  $('#view-composer').hidden = v !== 'composer'
  moveThumb(ctoggle)
}
ctoggle.addEventListener('click', (e) => {
  const b = e.target.closest('[data-view]')
  if (b) setView(b.dataset.view)
})
requestAnimationFrame(() => moveThumb(ctoggle))
addEventListener('resize', () => moveThumb(ctoggle))
document.fonts?.ready.then(() => moveThumb(ctoggle))

const pkgSystems = (p) =>
  SYSTEMS.filter((s) => p.services.some((c) => service(c).system === s.code))
const slabs = (codes) =>
  `<div class="stack" aria-hidden="true">${[...codes]
    .reverse()
    .map(
      (k, i) =>
        `<div class="slab" style="animation-delay:${(codes.length - 1 - i) * 0.12}s">${k}${k === 'CR' ? '<span class="dot"></span>' : ''}</div>`,
    )
    .join('')}</div>`
$('#plans').innerHTML = PACKAGES.map((p) => {
  const sys = pkgSystems(p)
  return `<article class="plan${p.featured ? ' featured' : ''}" id="pkg-${p.id}">
    ${p.featured ? '<span class="badge">Most picked</span>' : ''}
    ${slabs(sys.map((s) => s.code))}
    <h3>${esc(p.name)} · ${sys.map((s) => s.n).join(' + ')}</h3>
    <p class="summary">${esc(p.outcome)}</p>
    <div class="fee-rows">
      <div class="fee"><span>Implementation</span><strong>${priceHTML(p.implementation)}</strong><em>one-time</em></div>
      <div class="fee"><span>Management</span><strong>${priceHTML(p.management)}</strong><em>per month</em></div>
      <div class="fee"><span>Term</span><strong>${priceHTML(p.term, (v) => v)}</strong></div>
    </div>
    <ul>${p.services
      .slice(0, 6)
      .map((c) => `<li><b class="code">${c}</b>${esc(service(c).name)}</li>`)
      .join(
        '',
      )}${p.services.length > 6 ? `<li class="more-li">+ ${p.services.length - 6} more services</li>` : ''}</ul>
    ${p.performance ? '<button class="perf-pill" data-performance>Performance option available</button>' : ''}
    <div style="display:grid;gap:10px;margin-top:auto">
      <button class="btn ${p.featured ? 'primary' : ''}" data-book data-interest="${esc(p.name)} package" data-pkg="${p.id}">Start with ${esc(p.name)}</button>
      <button class="link" data-plan="${p.id}" style="justify-self:center;font-size:14px">See what’s inside →</button>
    </div>
  </article>`
}).join('')

// Compare matrix
const matrixCodes = [...new Set(PACKAGES.flatMap((p) => [...p.services, ...p.addOns]))].sort()
$('#matrix').innerHTML =
  `<table class="matrix"><thead><tr><th>Service</th>${PACKAGES.map((p) => `<th>${esc(p.name)}</th>`).join('')}</tr></thead><tbody>${matrixCodes
    .map(
      (c) =>
        `<tr><td><b class="code">${c}</b>${esc(service(c).name)}</td>${PACKAGES.map((p) =>
          p.services.includes(c)
            ? '<td class="yes">✓</td>'
            : p.addOns.includes(c)
              ? '<td class="add">Add-on</td>'
              : '<td class="no">—</td>',
        ).join('')}</tr>`,
    )
    .join(
      '',
    )}<tr><td>Usage limits (lines, minutes, posts, edit hours)</td>${PACKAGES.map((p) => `<td>${priceHTML(p.limits, (v) => v, 'Set on your call')}</td>`).join('')}</tr></tbody></table>`
$('#compare-btn').addEventListener('click', (e) => {
  const m = $('#matrix')
  m.hidden = !m.hidden
  e.currentTarget.setAttribute('aria-expanded', !m.hidden)
  e.currentTarget.textContent = m.hidden ? 'Compare every service' : 'Hide comparison'
})

// Composer
const recurringFirst = (a, b) => (a.soldAs === 'project') - (b.soldAs === 'project')
$('#comp-list').innerHTML = SYSTEMS.map(
  (s) =>
    `<fieldset class="comp-group"><legend><b>${s.n}</b> ${esc(s.name)}</legend>${servicesOf(s.code)
      .sort(recurringFirst)
      .map(
        (
          v,
        ) => `<label class="comp-item"><input type="checkbox" value="${v.code}" id="c-${v.code}" />
        <span><strong>${esc(v.name)}</strong><em>${esc(v.deliverables)}</em></span><span class="badge">${soldAsLabel[v.soldAs]}</span></label>`,
      )
      .join('')}</fieldset>`,
).join('')
$('#comp-list').addEventListener('change', (e) => {
  if (e.target.type !== 'checkbox') return
  if (e.target.checked) scope.services.add(e.target.value)
  else scope.services.delete(e.target.value)
  syncSelections()
})
function syncSelections() {
  $$('#comp-list input').forEach((i) => (i.checked = scope.services.has(i.value)))
  renderComposer()
  renderExplorer()
  renderScope()
}
function renderComposer() {
  const codes = [...scope.services]
  const sum = $('#comp-sum')
  if (!codes.length) {
    sum.innerHTML = `<div class="eyebrow">Your scope</div><h3 class="display">Tick the services you need.</h3>
      <p class="muted">We’ll match you to the closest package, or flag it as a custom proposal.</p>`
    return
  }
  const r = recommend(codes)
  const est = r.pkg && !r.custom
  sum.innerHTML = `
    <div class="eyebrow">Your scope · ${codes.length} service${codes.length > 1 ? 's' : ''}</div>
    <h3 class="display">${est ? `${esc(r.pkg.name)} fits.` : r.pkg || r.projects.length ? 'Custom proposal.' : 'Custom proposal.'}</h3>
    <p class="muted">${
      est
        ? `${esc(r.pkg.name)} covers ${codes.length - r.addOns.length - r.projects.length} of your selections${r.unused.length ? ` and includes ${r.unused.length} more` : ''}.`
        : 'Your mix doesn’t match one package. We’ll price it service by service from the catalog after a fit call.'
    }</p>
    ${
      est
        ? `<div class="fee-rows"><div class="fee"><span>Implementation</span><strong>${priceHTML(r.pkg.implementation)}</strong></div><div class="fee"><span>Management</span><strong>${priceHTML(r.pkg.management)}</strong><em>per month</em></div></div>`
        : ''
    }
    ${r.addOns.length ? `<div class="sh-block"><h4>Added on top</h4><div class="syschips">${r.addOns.map((c) => `<span class="chip sm"><b>${c}</b>${esc(service(c).name)}</span>`).join('')}</div></div>` : ''}
    ${r.projects.length ? `<div class="sh-block"><h4>Quoted as projects</h4><div class="syschips">${r.projects.map((c) => `<span class="chip sm"><b>${c}</b>${esc(service(c).name)}</span>`).join('')}</div></div>` : ''}
    <p class="fine">An estimate to start the conversation, not a quote. Add-ons, projects and usage are confirmed on the fit call.</p>
    <div class="need-actions">
      <button class="btn primary" data-book data-interest="${est ? `${esc(r.pkg.name)} package` : 'Custom proposal'}">Send this scope →</button>
      <button class="link" id="comp-clear">Clear</button>
    </div>`
  if (est) scope.package = r.pkg.id
}
renderComposer()
document.addEventListener('click', (e) => {
  if (e.target.closest('#comp-clear')) {
    scope.services.clear()
    syncSelections()
  }
})

/* Projects */
$('#builds').innerHTML = PROJECTS.map(
  (p) =>
    `<button class="build" data-book data-interest="Project: ${esc(p.name)}"><span class="code">${p.code}</span><strong>${esc(p.name)}</strong><span>${esc(p.note)}</span><em>${showValue(p.from) ? `From ${priceHTML(p.from)}` : 'Quoted after scoping'} →</em></button>`,
).join('')
$('#process').innerHTML = PROJECT_PROCESS.map(
  (p, i) =>
    `<li><b>${String(i + 1).padStart(2, '0')}</b><strong>${esc(p.step)}</strong><span>${esc(p.note)}</span></li>`,
).join('')
const PATH = [
  { step: 'Project', note: 'Build the brand, site or tool.', tag: 'Quoted' },
  ...PACKAGES.map((p) => ({
    step: p.name,
    note: p.outcome + '.',
    tag: showValue(p.management) ? `${money(p.management.value)}/mo` : 'Monthly',
  })),
]
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

/* Pressure Built */
$('#community-img').src = avatarImg
$('#community-cta').innerHTML = CONFIG.COMMUNITY_URL
  ? `<a class="btn primary" href="${esc(CONFIG.COMMUNITY_URL)}" target="_blank" rel="noopener">Visit Pressure Built ↗</a>`
  : `<button class="btn primary" data-book data-interest="Pressure Built community">Get notified when it opens</button><span class="muted" style="align-self:center;font-size:14px">Opening soon</span>`
new IntersectionObserver(
  ([e]) => e.isIntersecting && $('#community-panel').classList.add('in'),
).observe($('#community-panel'))

/* FAQ */
$('#faq-list').innerHTML = FAQ.map(
  (f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`,
).join('')
$$('#faq-list details').forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) $$('#faq-list details').forEach((o) => o !== d && (o.open = false))
  }),
)

/* ================================================================== */
/* 8. Start implementation                                             */
/* ================================================================== */
const INTERESTS = [
  'Not sure yet',
  ...PACKAGES.map((p) => `${p.name} package`),
  'Custom proposal',
  'Project',
  ...PROJECTS.map((p) => `Project: ${p.name}`),
  'Pressure Built community',
]
$('#f-interest').innerHTML = INTERESTS.map((o) => `<option>${esc(o)}</option>`).join('')
function renderScope() {
  const sel = $('#f-interest')
  if (!INTERESTS.includes(scope.interest))
    sel.insertAdjacentHTML('afterbegin', `<option>${esc(scope.interest)}</option>`)
  sel.value = scope.interest
  const rows = []
  if (scope.need !== null) rows.push(['Problem', NEEDS[scope.need].q])
  if (scope.system) rows.push(['System', `${system(scope.system).n} ${system(scope.system).name}`])
  if (scope.package) rows.push(['Package', pkgById(scope.package).name])
  if (scope.services.size) rows.push(['Services', [...scope.services].join(', ')])
  $('#inq-scope').innerHTML = rows.length
    ? `<dl class="fields">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`
    : ''
}
renderScope()
$('#f-interest').addEventListener('change', (e) => (scope.interest = e.target.value))

function goInquiry(interest) {
  if (interest) scope.interest = interest
  renderScope()
  closeSheet()
  setMenu(false)
  document.getElementById('inquiry').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' })
  setTimeout(() => $('#f-name').focus({ preventScroll: true }), REDUCED ? 0 : 700)
}

const pageParams = new URLSearchParams(location.search)
const utm = Object.fromEntries([...pageParams].filter(([k]) => k.startsWith('utm_')))
// When embedded in a GHL page, the embed passes the real page URL as ghl_page
const sourcePage = pageParams.get('ghl_page') || location.href

/* Flat fields for GHL: Inbound Webhook mapping works best with top-level keys */
function ghlFields(inq) {
  const [first, ...rest] = inq.contact.name.trim().split(/\s+/)
  const pkg = inq.scope.package
  const tags = [
    'sb-inquiry',
    pkg && `sb-pkg-${pkg}`,
    inq.need && `sb-sys-${inq.need.system.toLowerCase()}`,
    inq.scope.customProposal && 'sb-custom',
    inq.scope.projects.length && 'sb-project',
    inq.scope.performanceInterest && 'sb-performance',
  ].filter(Boolean)
  return {
    first_name: first || '',
    last_name: rest.join(' '),
    full_name: inq.contact.name,
    email: inq.contact.email,
    phone: inq.contact.phone,
    company_name: inq.contact.business,
    tags: tags.join(','),
    sb_interest: inq.scope.interest,
    sb_package: pkg ? pkgById(pkg).name : '',
    sb_services: inq.scope.services.join(', '),
    sb_projects: inq.scope.projects.join(', '),
    sb_system: inq.need ? system(inq.need.system).name : '',
    sb_need: inq.need ? inq.need.text : '',
    sb_custom_proposal: inq.scope.customProposal ? 'yes' : 'no',
    sb_performance: inq.scope.performanceInterest ? 'yes' : 'no',
    sb_message: inq.message,
    sb_source_page: inq.source.page,
    utm_source: utm.utm_source || '',
    utm_medium: utm.utm_medium || '',
    utm_campaign: utm.utm_campaign || '',
    utm_content: utm.utm_content || '',
  }
}

/* POST to the webhook. If the browser blocks a JSON request (CORS), fall back to a
   simple form-encoded POST, which needs no CORS approval from the receiving server. */
async function sendInquiry(url, inq) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(inq),
    })
    if (!res.ok) throw new Error('status ' + res.status)
    return true
  } catch (err) {
    if (!(err instanceof TypeError)) throw err
    const flat = Object.fromEntries(
      Object.entries(inq).filter(([, v]) => v === null || typeof v !== 'object'),
    )
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams({ ...flat, payload: JSON.stringify(inq) }),
    })
    return true
  }
}
$('#inquiry-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const form = e.currentTarget
  const msg = $('#form-msg')
  const data = Object.fromEntries(new FormData(form))
  if (!data.name || (!data.phone && !data.email)) {
    msg.className = 'form-msg err'
    msg.textContent = 'Add your name and a phone number or email so we can reach you.'
    return
  }
  const r = scope.services.size ? recommend([...scope.services]) : null
  // system-based.inquiry.v1: one record a CRM webhook or the System-Based OS can ingest as-is
  const inquiry = {
    schema: 'system-based.inquiry.v1',
    catalogVersion: VERSION,
    submittedAt: new Date().toISOString(),
    contact: {
      name: data.name,
      business: data.business || '',
      phone: data.phone || '',
      email: data.email || '',
    },
    need:
      scope.need !== null ? { text: NEEDS[scope.need].q, system: NEEDS[scope.need].system } : null,
    scope: {
      interest: data.interest,
      package: scope.package,
      services: [...scope.services],
      projects: r ? r.projects : [],
      customProposal: r ? r.custom : data.interest === 'Custom proposal',
      performanceInterest: !!data.performance,
    },
    message: data.message || '',
    source: { page: sourcePage, referrer: document.referrer, utm },
  }
  Object.assign(inquiry, ghlFields(inquiry))
  msg.className = 'form-msg'
  const done = () => {
    // Let a host page (the GHL embed) fire its own conversion pixels
    if (window.parent !== window)
      window.parent.postMessage(
        { type: 'sb:inquiry', package: inquiry.sb_package, tags: inquiry.tags },
        '*',
      )
    form.innerHTML = `<div class="full sh-block"><h3 class="display" style="font-size:30px">Scope received.</h3>
      <p class="lede">Thanks, ${esc(data.name)}. We’ll review it and reach out within one business day.</p>
      ${
        CONFIG.BOOKING_URL
          ? CONFIG.BOOKING_EMBED
            ? `<p class="lede">Pick a time for your fit call now:</p><iframe class="booking" src="${esc(CONFIG.BOOKING_URL)}" title="Book your fit call" loading="lazy"></iframe>`
            : `<a class="btn primary" href="${esc(CONFIG.BOOKING_URL)}" target="_blank" rel="noopener" style="justify-self:start">Pick a time now ↗</a>`
          : ''
      }</div>`
  }
  if (CONFIG.FORM_ENDPOINT) {
    msg.textContent = 'Sending…'
    try {
      await sendInquiry(CONFIG.FORM_ENDPOINT, inquiry)
      done()
    } catch {
      msg.className = 'form-msg err'
      msg.textContent = 'That didn’t send. Please try again in a moment.'
    }
  } else if (CONFIG.CONTACT_EMAIL) {
    location.href = `mailto:${CONFIG.CONTACT_EMAIL}?subject=${encodeURIComponent('Inquiry: ' + data.interest)}&body=${encodeURIComponent(JSON.stringify(inquiry, null, 2))}`
    msg.textContent = `Your email app should open now. If it doesn’t, email ${CONFIG.CONTACT_EMAIL}.`
  } else {
    msg.className = 'form-msg err'
    msg.textContent = 'The inquiry form isn’t connected yet. Add a form endpoint in config.js.'
  }
})

/* ================================================================== */
/* Pop-up sheets                                                       */
/* ================================================================== */
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
  const r = panel.getBoundingClientRect()
  panel.style.setProperty('--ox', (ev?.clientX ?? innerWidth / 2) - r.left + 'px')
  panel.style.setProperty('--oy', (ev?.clientY ?? innerHeight / 2) - r.top + 'px')
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
    const f = $$('button, a[href], input, select, textarea, iframe', panel).filter(
      (x) => !x.disabled && x.offsetParent !== null,
    )
    if (!f.length) return
    const first = f[0]
    const last = f.at(-1)
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

function openSystem3D(code, ev) {
  const s = system(code)
  openSheet(
    `<div class="sh-split">
      <div class="sh-visual"><div class="vis-label eyebrow">System ${s.n} · ${s.code}${s.code === 'CR' ? ' · <span class="dot"></span> start here' : ''}</div><span class="ghost chrome">${s.n}</span></div>
      <div class="sh-copy">
        <div class="sh-block"><div class="eyebrow">System ${s.n}</div><h2 class="display" id="sheet-title">${esc(s.name)}</h2><p class="lede">${esc(s.scope)}.</p></div>
        <div class="sh-block"><h4>What changes</h4><p>${esc(s.outcome)}</p></div>
        <div class="sh-block"><h4>Services</h4><ul class="ticks">${servicesOf(s.code)
          .map((v) => `<li><b class="code">${v.code}</b>&nbsp;${esc(v.name)}</li>`)
          .join('')}</ul></div>
        <div class="sh-ctas"><button class="btn primary" data-book data-interest="Not sure yet">Talk about ${esc(s.name)}</button><button class="btn" data-close data-goto="packages">See packages</button></div>
      </div>
    </div>`,
    ev,
    () => show3D({ letter: s.code }),
  )
}

function openPackage(id, ev) {
  const p = pkgById(id)
  const sys = pkgSystems(p)
  openSheet(
    `<div class="sh-split">
      <div class="sh-visual"><div class="vis-label eyebrow">${esc(p.name)} · ${sys.map((s) => s.code).join(' + ')}</div></div>
      <div class="sh-copy">
        <div class="sh-block"><div class="eyebrow">Package · was ${esc(p.was)}</div><h2 class="display" id="sheet-title">${esc(p.name)}</h2><p class="lede">${esc(p.outcome)}.</p></div>
        <div class="fee-rows">
          <div class="fee"><span>Implementation</span><strong>${priceHTML(p.implementation)}</strong><em>one-time</em></div>
          <div class="fee"><span>Management</span><strong>${priceHTML(p.management)}</strong><em>per month</em></div>
          <div class="fee"><span>Term</span><strong>${priceHTML(p.term, (v) => v)}</strong></div>
        </div>
        ${sys
          .map(
            (s) =>
              `<div class="sh-block"><h4>${s.n} ${esc(s.name)}</h4><ul class="ticks">${p.services
                .filter((c) => service(c).system === s.code)
                .map((c) => `<li><b class="code">${c}</b>&nbsp;${esc(service(c).name)}</li>`)
                .join('')}</ul></div>`,
          )
          .join('')}
        <div class="sh-block"><h4>Available add-ons</h4><div class="syschips">${p.addOns.map((c) => `<span class="chip sm"><b>${c}</b>${esc(service(c).name)}</span>`).join('')}</div></div>
        <div class="sh-block"><h4>Performance option</h4><p>${p.performance ? 'Available. ' + esc(PERFORMANCE.summary) : 'Not on Capture. Performance pricing needs marketing run by us, so it starts at Pipeline.'}</p></div>
        <div class="sh-ctas"><button class="btn primary" data-book data-interest="${esc(p.name)} package" data-pkg="${p.id}">Start with ${esc(p.name)}</button>${p.performance ? '<button class="btn" data-performance>Performance rules</button>' : ''}</div>
      </div>
    </div>`,
    ev,
    () => show3D({ stack: sys.map((s) => s.code) }),
  )
}

function openPerformance(ev) {
  openSheet(
    `<div class="sh-copy" style="max-width:900px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Performance pricing${PERFORMANCE.approved ? '' : ' · <span class="proposed">Proposed terms</span>'}</div>
        <h2 class="display" id="sheet-title">Pay on results.</h2><p class="lede">${esc(PERFORMANCE.summary)}</p></div>
      <div class="rules">${PERFORMANCE.rules
        .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`)
        .join('')}</div>
      <div class="sh-ctas"><button class="btn primary" data-book data-interest="Pipeline package" data-perf="1">Ask about performance pricing</button></div>
    </div>`,
    ev,
  )
}

function workMediaHtml(m) {
  if (m.video)
    return `<video src="${m.video}" poster="${m.poster || ''}" autoplay muted loop playsinline></video>`
  return `<img src="${m.img}" alt="" />`
}
let workOpen = null
function openWork(i, ev) {
  const w = published[i]
  workOpen = w
  const links = w.links.filter((l) => l.url)
  const caseBlocks = [
    w.problem && `<div class="sh-block"><h4>The problem</h4><p>${esc(w.problem)}</p></div>`,
    w.solution?.length &&
      `<div class="sh-block"><h4>What we installed</h4><div class="syschips">${w.solution.map((c) => `<span class="chip sm"><b>${c}</b>${esc(service(c).name)}</span>`).join('')}</div></div>`,
    w.technology?.length &&
      `<div class="sh-block"><h4>Technology</h4><div class="syschips">${w.technology.map((t) => `<span class="chip sm">${esc(t)}</span>`).join('')}</div></div>`,
    w.process?.length &&
      `<div class="sh-block"><h4>Process</h4><ol class="mini-steps">${w.process.map((p) => `<li>${esc(p)}</li>`).join('')}</ol></div>`,
    isCase(w) &&
      `<div class="sh-block"><h4>Results</h4>${
        w.results?.length
          ? `<dl class="fields">${w.results.map((r) => `<div><dt>${esc(r.metric)}</dt><dd>${esc(r.value)} <span class="muted">· ${esc(r.period)} · ${esc(r.source)}</span></dd></div>`).join('')}</dl>`
          : '<p class="muted">Results are published once they’re verified and the client has approved them.</p>'
      }</div>`,
  ]
    .filter(Boolean)
    .join('')
  openSheet(
    `<div class="sh-work">
      <div class="gallery" id="gallery">${w.media[0] ? workMediaHtml(w.media[0]) : `<div class="work-media" style="height:100%"><div class="placeholder"><span class="chrome">${esc(w.systems[0] || 'SB')}</span></div></div>`}</div>
      ${
        w.media.length > 1
          ? `<div class="thumbs">${w.media.map((m, j) => `<button data-media="${j}" aria-current="${j === 0}" aria-label="Show item ${j + 1}"><img src="${m.poster || m.img}" alt="" /></button>`).join('')}</div>`
          : ''
      }
      <div class="sh-copy">
        <div class="sh-block full">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span><span>${esc(w.client)}</span></div>
          <h2 class="display" id="sheet-title">${esc(w.title)}</h2>
          <p class="lede">${esc(w.about)}</p>
          <div class="sh-ctas" style="margin-top:10px">
            ${links.map((l, j) => `<a class="btn ${j ? '' : 'primary'}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}
            ${w.embed ? `<button class="btn" data-embed="${esc(w.embed)}">Preview live here</button>` : ''}
            ${w.status === 'soon' ? `<button class="btn primary" data-book data-interest="Not sure yet">Get early access</button>` : ''}
          </div>
        </div>
        <div>${caseBlocks}</div>
        <div>${w.built?.length ? `<div class="sh-block"><h4>What we built</h4><ul class="ticks" style="grid-template-columns:1fr">${w.built.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>` : ''}
          ${w.systems.length ? `<div class="sh-block" style="margin-top:14px"><h4>Systems</h4><div class="syschips">${w.systems.map((k) => `<button class="chip" data-explore="${k}"><b>${system(k).n}</b>${esc(system(k).name)}</button>`).join('')}</div></div>` : ''}</div>
      </div>
    </div>`,
    ev,
  )
}
body.addEventListener('click', (e) => {
  const t = e.target.closest('[data-media]')
  if (t && workOpen) {
    $('#gallery').innerHTML = workMediaHtml(workOpen.media[+t.dataset.media])
    $$('[data-media]', body).forEach((b) => b.setAttribute('aria-current', b === t))
  }
  const emb = e.target.closest('[data-embed]')
  if (emb)
    $('#gallery').innerHTML =
      `<iframe src="${esc(emb.dataset.embed)}" title="Live preview" loading="lazy"></iframe>`
})

/* ---------- Global clicks ---------- */
document.addEventListener('click', (e) => {
  const book = e.target.closest('[data-book]')
  if (book && !book.disabled) {
    e.preventDefault()
    if (book.dataset.pkg) scope.package = book.dataset.pkg
    if (book.dataset.perf) $('#f-perf').checked = true
    return goInquiry(book.dataset.interest)
  }
  const ex = e.target.closest('[data-explore]')
  if (ex) {
    closeSheet()
    return explore(ex.dataset.explore)
  }
  const s3 = e.target.closest('[data-system3d]')
  if (s3) return openSystem3D(s3.dataset.system3d, e)
  const p = e.target.closest('[data-plan]')
  if (p) return openPackage(p.dataset.plan, e)
  if (e.target.closest('[data-performance]')) return openPerformance(e)
  const w = e.target.closest('[data-work]')
  if (w) return openWork(+w.dataset.work, e)
  const add = e.target.closest('[data-add]')
  if (add) {
    const c = add.dataset.add
    if (scope.services.has(c)) scope.services.delete(c)
    else scope.services.add(c)
    const open = add.closest('details')?.querySelector('summary .code')?.textContent
    syncSelections()
    if (open)
      $$('#ex-panel details')
        .find((d) => d.querySelector('.code').textContent === open)
        ?.setAttribute('open', '')
    return
  }
  const cfg = e.target.closest('[data-config-pkg]')
  if (cfg) {
    setView('packages')
    const card = document.getElementById('pkg-' + cfg.dataset.configPkg)
    document.getElementById('packages').scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' })
    card.classList.remove('focus')
    void card.offsetWidth
    card.classList.add('focus')
    return
  }
  const go = e.target.closest('[data-goto]')
  if (go)
    document
      .getElementById(go.dataset.goto)
      ?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' })
})
