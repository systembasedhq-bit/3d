/*
 * System-Based website: boots every section and routes shared clicks.
 * The new walkthrough, diagnostic, community and inquiry live in ./experience/.
 * Services, packages and prices come only from src/catalog/catalog.js.
 */
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
} from '../catalog/catalog.js'
import { STATEMENT, SYSTEM_LINES, PACKAGE_FIT, FAQ } from './content.js'
import { WORK, WORK_TYPES } from './work.js'
import { webglAvailable, createHero } from './scenes.js'
import { $, $$, esc, safeUrl, session, REDUCED, scrollToId } from './experience/util.js'
import { getScope, setScope, onScope, toggleService } from './experience/scope-store.js'
import { track } from './experience/analytics.js'
import { createDiagnostic } from './experience/diagnostic.js'
import { createStory } from './experience/story.js'
import { createCommunity } from './experience/community.js'
import { createInquiry } from './experience/inquiry.js'
import avatarImg from './media/avatar.jpg'
import heroImg from './media/hero.jpg'
import storyImg from './media/build-story.jpg'

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

document.documentElement.classList.add('js')
if (REDUCED) document.documentElement.classList.add('reduced')
$('#year').textContent = new Date().getFullYear()

/* ---------- Commercial decisions: approved vs proposed ---------- */
const showValue = (dec) => dec && dec.value != null && (dec.approved || CONFIG.SHOW_PROPOSED)
const tag = (dec) => (dec.approved ? '' : ' <span class="proposed">Proposed</span>')
const money = (n) => '$' + n.toLocaleString('en-US')
const priceHTML = (dec, fmt = money, fallback = 'Confirmed after scoping') =>
  showValue(dec) ? `${fmt(dec.value)}${tag(dec)}` : `<span class="muted">${fallback}</span>`
const soldAsLabel = {
  'setup+managed': 'Set up + managed',
  managed: 'Managed monthly',
  project: 'One-time project',
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
const menu = $('#menu')
const setMenu = (open) => {
  document.body.classList.toggle('menu-open', open)
  document.body.classList.toggle('locked', open)
  burger.setAttribute('aria-expanded', open)
  menu.setAttribute('aria-hidden', !open)
  if (open) $('a', menu).focus({ preventScroll: true })
}
burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')))
$$('#menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)))
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
    setMenu(false)
    burger.focus()
  }
})
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
  { rootMargin: '0px 0px -6% 0px' },
)
$$('[data-reveal]').forEach((el) => reveal.observe(el))

/* ================================================================== */
/* Hero + intro                                                        */
/* ================================================================== */
const hero = $('.hero')
const playIntro = GL && !REDUCED && session.get('sb-intro') !== 'seen'
let heroCtl = null
const endIntro = () => {
  document.body.classList.remove('intro')
  hero.classList.add('ready')
  session.set('sb-intro', 'seen')
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
const skip = () => heroCtl?.skip()
$('#intro-skip').addEventListener('click', skip)
;['wheel', 'touchstart', 'keydown'].forEach((ev) =>
  addEventListener(ev, () => document.body.classList.contains('intro') && skip(), {
    passive: true,
  }),
)
if (playIntro) setTimeout(() => document.body.classList.contains('intro') && endIntro(), 7000)

$('#rail').innerHTML = SYSTEMS.map(
  (s) => `<button type="button" class="chip" data-explore="${s.code}">${esc(s.name)}</button>`,
).join('')

/* ================================================================== */
/* What we do                                                          */
/* ================================================================== */
$('#statement-line').textContent = STATEMENT.line
$('#statement-body').textContent = STATEMENT.body
$('#statement-who').textContent = STATEMENT.who
$('#facts').innerHTML = STATEMENT.facts
  .map(
    (f) =>
      `<div class="fact"><strong class="chrome">${esc(f.k)}</strong><span>${esc(f.v)}</span></div>`,
  )
  .join('')

/* ================================================================== */
/* Diagnostic → walkthrough → community invite                         */
/* ================================================================== */
const inquiry = createInquiry()
const community = createCommunity({
  media: { identity: heroImg, story: storyImg },
  isInquiryBusy: inquiry.busy,
})
const showRecommendation = (sc) => {
  if (sc.recommend.packageId) focusPackage(sc.recommend.packageId)
  else scrollToId('projects')
}
createDiagnostic({
  onSeeIncluded: () =>
    showRecommendation({ recommend: { packageId: getScope().recommendedPackageId } }),
})
createStory({
  onBeat: (beat, sc, sequential) => sequential && community.maybeInvite(beat),
  onChoose: showRecommendation,
})

/* ================================================================== */
/* The four systems                                                    */
/* ================================================================== */
const VISUAL = {
  CR: `<div class="mini mini-cr"><span class="b in">Hi, is anyone free tomorrow?</span><span class="b out">Yes! 9 AM or 1:30 PM?</span><span class="b in">9 works.</span><span class="tick">Booked</span></div>`,
  GR: `<div class="mini mini-gr"><div class="flowline"><span>Ad</span><i></i><span>Page</span><i></i><span>Lead</span></div><div class="bars"><b style="--h:35%"></b><b style="--h:55%"></b><b style="--h:48%"></b><b style="--h:72%"></b><b style="--h:86%"></b></div></div>`,
  BB: `<div class="mini mini-bb"><div class="win"><span class="bar"></span><span class="h"></span><span class="l"></span><span class="l s"></span><span class="cta">Book</span></div></div>`,
  AO: `<div class="mini mini-ao"><svg viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true"><path d="M40 26 L100 60 M160 26 L100 60 M40 94 L100 60 M160 94 L100 60"/></svg><span class="n n1">Inbox</span><span class="n n2">CRM</span><span class="n n3">Calendar</span><span class="n n4">Team</span><span class="hub">${monogram(18)}</span></div>`,
}
let exSystem = 'CR'
$('#ex-tabs').innerHTML = SYSTEMS.map(
  (
    s,
  ) => `<button type="button" class="ex-tab" role="tab" data-tab="${s.code}" aria-selected="${s.code === exSystem}">
    <span><strong>${esc(s.name)}</strong><em>${esc(SYSTEM_LINES[s.code])}</em></span></button>`,
).join('')
const inPackages = (code) => PACKAGES.filter((p) => p.services.includes(code)).map((p) => p.name)
function renderExplorer(keepOpen) {
  const s = system(exSystem)
  const picked = new Set(getScope().selectedServiceIds)
  const panel = $('#ex-panel')
  if (!keepOpen) {
    panel.classList.remove('swap')
    void panel.offsetWidth
    panel.classList.add('swap')
  }
  panel.innerHTML = `
    <div class="ex-top">
      <div class="ex-head"><h3 class="display">${esc(s.name)}</h3><p class="lede">${esc(SYSTEM_LINES[s.code])}</p></div>
      ${VISUAL[s.code]}
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
    <div class="sh-block"><h4>What’s included</h4>
      <div class="svc-list">${servicesOf(s.code)
        .map((v) => {
          const pk = inPackages(v.code)
          const on = picked.has(v.code)
          return `<details class="svc" data-svc="${v.code}"${keepOpen === v.code ? ' open' : ''}>
            <summary><strong>${esc(v.name)}</strong><span class="badge">${soldAsLabel[v.soldAs]}</span></summary>
            <dl>
              <div><dt>You get</dt><dd>${esc(v.deliverables)}</dd></div>
              <div><dt>You provide</dt><dd>${esc(v.client)}</dd></div>
              <div><dt>After launch</dt><dd>${esc(v.ongoing)}</dd></div>
              <div><dt>Where it’s sold</dt><dd>${pk.length ? `In ${pk.join(', ')}` : v.soldAs.startsWith('project') ? 'As a one-time project' : 'As an add-on'}</dd></div>
            </dl>
            <button type="button" class="link" data-add="${v.code}" aria-pressed="${on}">${on ? '✓ In your scope (remove)' : '+ Add to my scope'}</button>
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
  track('sb_system_explored', { system: exSystem })
})
renderExplorer()
const explore = (code) => {
  exSystem = code
  renderExplorer()
  scrollToId('systems')
  track('sb_system_explored', { system: code })
}

/* ================================================================== */
/* Work                                                                */
/* ================================================================== */
const published = WORK.filter((w) => w.published)
const isClientCase = (w) => w.clientCase && w.approved
const STATUS = { live: 'Live project', demo: 'Working demo', soon: 'Concept / in progress' }
const TYPE_LABEL = { site: 'Website', demo: 'Demo', brand: 'Brand', ai: 'AI & software' }
let workFilter = 'all'
const typesInUse = new Set(published.map((w) => w.type))
$('#filters').innerHTML = WORK_TYPES.filter(
  (t) => t.id === 'all' || (t.id === 'case' ? published.some(isClientCase) : typesInUse.has(t.id)),
)
  .map(
    (t) =>
      `<button type="button" class="chip${t.id === 'all' ? ' on' : ''}" data-filter="${t.id}">${esc(t.label)}</button>`,
  )
  .join('')
const cardMedia = (w) => {
  const m = w.media[0]
  if (!m) return `<div class="placeholder"><span class="ph-glyph">${monogram(64)}</span></div>`
  return `<img src="${m.poster || m.img}" alt="" loading="lazy" />`
}
function renderWork() {
  const list = published.filter(
    (w) =>
      workFilter === 'all' || (workFilter === 'case' ? isClientCase(w) : w.type === workFilter),
  )
  $('#work-grid').innerHTML =
    list
      .map(
        (
          w,
          i,
        ) => `<button type="button" class="work-card${i === 0 && workFilter === 'all' ? ' wide' : ''}" data-work="${published.indexOf(w)}" style="animation-delay:${i * 0.07}s">
        <div class="work-media">${cardMedia(w)}</div>
        <div class="work-info">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span>${isClientCase(w) ? '<span>Client case study</span>' : ''}</div>
          <strong>${esc(w.title)}</strong>
          <p>${esc(w.summary)}</p>
        </div>
      </button>`,
      )
      .join('') +
    `<button type="button" class="work-card next" data-book data-from="work"><span class="eyebrow">Your project</span><strong>Your business could be next.</strong><span class="link">Start a project →</span></button>`
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
/* Packages + composer                                                 */
/* ================================================================== */
const anyUnapproved = PACKAGES.some((p) => !p.implementation.approved || !p.management.approved)
if (anyUnapproved && CONFIG.SHOW_PROPOSED) {
  $('#draft-note').hidden = false
  $('#draft-note').innerHTML =
    '<span class="proposed">Proposed</span> Prices marked this way are under review and can change before you sign.'
}
const ctoggle = $('#config-toggle')
const moveThumb = () => {
  const on = $('[aria-pressed="true"]', ctoggle)
  const thumb = $('.thumb', ctoggle)
  thumb.style.left = on.offsetLeft + 'px'
  thumb.style.width = on.offsetWidth + 'px'
}
const setView = (v) => {
  $$('[data-view]', ctoggle).forEach((x) => x.setAttribute('aria-pressed', x.dataset.view === v))
  $('#view-packages').hidden = v !== 'packages'
  $('#view-composer').hidden = v !== 'composer'
  moveThumb()
  if (v === 'composer') track('sb_composer_opened', {}, { once: true })
}
ctoggle.addEventListener('click', (e) => {
  const b = e.target.closest('[data-view]')
  if (b) setView(b.dataset.view)
})
requestAnimationFrame(moveThumb)
addEventListener('resize', moveThumb)
document.fonts?.ready.then(moveThumb)

const pkgSystems = (p) =>
  SYSTEMS.filter((s) => p.services.some((c) => service(c).system === s.code))
function renderPlans() {
  const { recommendedPackageId, acceptedPackageId } = getScope()
  $('#plans').innerHTML =
    PACKAGES.map((p) => {
      const rec = recommendedPackageId === p.id
      const acc = acceptedPackageId === p.id
      return `<article class="plan${rec ? ' recommended' : ''}${acc ? ' accepted' : ''}" id="pkg-${p.id}">
      ${acc ? '<span class="badge">Your choice</span>' : rec ? '<span class="badge">Suggested for you</span>' : ''}
      <h3>${esc(p.name)}</h3>
      <p class="fit">${esc(PACKAGE_FIT[p.id])}</p>
      <div class="sys-chips">${pkgSystems(p)
        .map((s) => `<span>${esc(s.name)}</span>`)
        .join('<i>+</i>')}</div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${priceHTML(p.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${priceHTML(p.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${priceHTML(p.term, (v) => v)}</strong></div>
      </div>
      <p class="count">${p.services.length} services included</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn ${rec || acc ? 'primary' : ''}" data-accept="${p.id}">${acc ? 'Selected · continue' : `Start with ${esc(p.name)}`}</button>
        <button type="button" class="link" data-plan="${p.id}" style="justify-self:center;font-size:14px">See what’s included →</button>
      </div>
    </article>`
    }).join('') +
    `<article class="plan custom-plan"><h3>Custom project</h3><p class="fit">For a bounded design, build, software or automation requirement.</p>
      <p class="muted">Pick exactly the services you need, or scope a one-time build.</p>
      <div style="display:grid;gap:10px;margin-top:auto">
        <button type="button" class="btn" data-view-composer>Build your own</button>
        <a class="link" href="#projects" style="justify-self:center;font-size:14px">See one-time projects →</a>
      </div></article>`
}
renderPlans()
function focusPackage(id) {
  setView('packages')
  scrollToId('packages')
  const card = document.getElementById('pkg-' + id)
  if (!card) return
  card.classList.remove('focus')
  void card.offsetWidth
  card.classList.add('focus')
  track('sb_package_viewed', { package: id })
}

const matrixCodes = [...new Set(PACKAGES.flatMap((p) => [...p.services, ...p.addOns]))]
$('#matrix').innerHTML =
  `<table class="matrix"><thead><tr><th>Service</th>${PACKAGES.map((p) => `<th>${esc(p.name)}</th>`).join('')}</tr></thead><tbody>${SYSTEMS.map(
    (s) =>
      `<tr class="grp"><td colspan="${PACKAGES.length + 1}">${esc(s.name)}</td></tr>` +
      matrixCodes
        .filter((c) => service(c).system === s.code)
        .map(
          (c) =>
            `<tr><td>${esc(service(c).name)}</td>${PACKAGES.map((p) =>
              p.services.includes(c)
                ? '<td class="yes">✓</td>'
                : p.addOns.includes(c)
                  ? '<td class="add">Add-on</td>'
                  : '<td class="no">—</td>',
            ).join('')}</tr>`,
        )
        .join(''),
  ).join(
    '',
  )}<tr><td>Usage limits (lines, minutes, posts, edit hours)</td>${PACKAGES.map((p) => `<td>${priceHTML(p.limits, (v) => v, 'Set during scoping')}</td>`).join('')}</tr></tbody></table>`
$('#compare-btn').addEventListener('click', (e) => {
  const m = $('#matrix')
  m.hidden = !m.hidden
  e.currentTarget.setAttribute('aria-expanded', !m.hidden)
  e.currentTarget.textContent = m.hidden ? 'See every service compared' : 'Hide comparison'
})

$('#comp-list').innerHTML = SYSTEMS.map(
  (s) =>
    `<fieldset class="comp-group"><legend>${esc(s.name)}</legend>${servicesOf(s.code)
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
  const on = toggleService(e.target.value)
  if (on) track('sb_service_added', { service: e.target.value })
})
function renderComposer() {
  const codes = getScope().selectedServiceIds
  $$('#comp-list input').forEach((i) => (i.checked = codes.includes(i.value)))
  const sum = $('#comp-sum')
  if (!codes.length) {
    sum.innerHTML = `<div class="eyebrow">Your scope</div><h3 class="display">Choose the services you need.</h3>
      <p class="muted">We’ll point out the closest package, or treat it as a custom proposal.</p>`
    return
  }
  const r = recommend(codes)
  const fits = r.pkg && !r.custom
  sum.innerHTML = `
    <div class="eyebrow">Your scope · ${codes.length} service${codes.length > 1 ? 's' : ''}</div>
    <h3 class="display">${fits ? `Closest fit: ${esc(r.pkg.name)}` : 'A custom proposal'}</h3>
    <p class="muted">${
      fits
        ? `${esc(r.pkg.name)} covers your recurring selections${r.unused.length ? ` and includes ${r.unused.length} more services` : ''}. Picking it is up to you.`
        : 'Your mix doesn’t match one package. We’ll scope it service by service after a short call.'
    }</p>
    <ul class="scope-list">${codes.map((c) => `<li>${esc(service(c).name)}<button type="button" class="link sm" data-add="${c}">Remove</button></li>`).join('')}</ul>
    ${r.projects.length ? `<p class="muted">Quoted as one-time projects: ${r.projects.map((c) => esc(service(c).name)).join(', ')}.</p>` : ''}
    <p class="fine-l">An estimate to start the conversation, not a quote or a checkout.</p>
    <div class="need-actions">
      <button type="button" class="btn primary" data-book data-from="composer">Send this scope →</button>
      ${fits ? `<button type="button" class="link" data-accept="${r.pkg.id}">Choose ${esc(r.pkg.name)}</button>` : ''}
      <button type="button" class="link" id="comp-clear">Clear</button>
    </div>`
}

/* ================================================================== */
/* Projects + upgrade path                                             */
/* ================================================================== */
$('#builds').innerHTML = PROJECTS.map(
  (p) =>
    `<button type="button" class="build" data-project="${p.code}"><strong>${esc(p.name)}</strong><span>${esc(p.note)}</span><em>${showValue(p.from) ? `From ${priceHTML(p.from)}` : 'Quoted after scoping'} →</em></button>`,
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
const pathEl = $('#path-track')
pathEl.innerHTML = PATH.map(
  (p, i) =>
    `<div class="path-step"><span class="node">${String(i + 1).padStart(2, '0')}</span><strong>${esc(p.step)}</strong><span>${esc(p.note)}</span><em>${esc(p.tag)}</em></div>`,
).join('')
const pathSteps = $$('.path-step', pathEl)
const onPath = () => {
  const r = pathEl.getBoundingClientRect()
  const p = REDUCED
    ? 1
    : Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (innerHeight * 0.6)))
  pathEl.style.setProperty('--p', p)
  pathSteps.forEach((s, i) => s.classList.toggle('on', p >= i / (PATH.length - 1) - 0.02))
}
addEventListener('scroll', onPath, { passive: true })
onPath()

/* ---------- FAQ ---------- */
$('#faq-list').innerHTML = FAQ.map(
  (f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`,
).join('')
$$('#faq-list details').forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) $$('#faq-list details').forEach((o) => o !== d && (o.open = false))
  }),
)

/* ---------- Scope bar: the current scope, one tap from the form ---------- */
function renderScopeBar() {
  const s = getScope()
  const n = s.selectedServiceIds.length
  const bar = $('#scope-bar')
  const label = n
    ? `${n} service${n > 1 ? 's' : ''} in your scope`
    : s.acceptedPackageId
      ? `${pkgById(s.acceptedPackageId).name} selected`
      : ''
  bar.hidden = !label
  bar.innerHTML = label ? `<span class="dot"></span>${esc(label)} <b>Review →</b>` : ''
}
$('#scope-bar').addEventListener('click', () => inquiry.go('scope-bar'))

onScope(() => {
  renderPlans()
  renderComposer()
  renderScopeBar()
  renderExplorer($('#ex-panel details[open]')?.dataset.svc || '')
})
renderComposer()
renderScopeBar()

/* ================================================================== */
/* Pop-up sheets: package details, performance pricing, work           */
/* ================================================================== */
const sheet = $('#sheet')
const panel = $('.sheet-panel', sheet)
const body = $('#sheet-body')
let lastFocus = null
let closeTimer = 0
function openSheet(html, ev) {
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
    $('.sheet-close', sheet).focus({ preventScroll: true })
  })
}
function closeSheet() {
  if (!sheet.classList.contains('open')) return
  sheet.classList.add('closing')
  sheet.classList.remove('open')
  sheet.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('locked')
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
    if (e.shiftKey && document.activeElement === f[0]) {
      f.at(-1).focus()
      e.preventDefault()
    } else if (!e.shiftKey && document.activeElement === f.at(-1)) {
      f[0].focus()
      e.preventDefault()
    }
  }
})

function openPackage(id, ev) {
  const p = pkgById(id)
  track('sb_package_viewed', { package: id })
  openSheet(
    `<div class="sh-copy" style="max-width:980px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Package</div><h2 class="display" id="sheet-title">${esc(p.name)}</h2><p class="lede">${esc(PACKAGE_FIT[p.id])}</p></div>
      <div class="fee-rows">
        <div class="fee"><span>Implementation</span><strong>${priceHTML(p.implementation)}</strong><em>one-time</em></div>
        <div class="fee"><span>Management</span><strong>${priceHTML(p.management)}</strong><em>per month</em></div>
        <div class="fee"><span>Term</span><strong>${priceHTML(p.term, (v) => v)}</strong></div>
      </div>
      <div class="pkg-groups">${pkgSystems(p)
        .map(
          (s) =>
            `<div class="sh-block"><h4>${esc(s.name)}</h4><ul class="ticks">${p.services
              .filter((c) => service(c).system === s.code)
              .map(
                (c) =>
                  `<li><span><strong>${esc(service(c).name)}</strong><em>${esc(service(c).deliverables)}</em></span></li>`,
              )
              .join('')}</ul></div>`,
        )
        .join('')}</div>
      <div class="sh-block"><h4>Can be added</h4><div class="syschips">${p.addOns.map((c) => `<span class="chip sm">${esc(service(c).name)}</span>`).join('')}</div></div>
      <div class="sh-ctas"><button type="button" class="btn primary" data-accept="${p.id}">Start with ${esc(p.name)}</button>${p.performance ? '<button type="button" class="btn" data-performance>Performance pricing</button>' : ''}</div>
    </div>`,
    ev,
  )
}

function openPerformance(ev) {
  const showTerms = PERFORMANCE.approved || CONFIG.SHOW_PROPOSED
  openSheet(
    `<div class="sh-copy" style="max-width:900px;margin:0 auto">
      <div class="sh-block"><div class="eyebrow">Performance pricing${PERFORMANCE.approved ? '' : ' · <span class="proposed">Under review</span>'}</div>
        <h2 class="display" id="sheet-title">Pay on results.</h2>
        <p class="lede">${
          showTerms
            ? esc(PERFORMANCE.summary)
            : 'For some marketing engagements, part of the fee can be tied to results instead of a flat monthly fee. It needs marketing run by us and tracking we can verify. Exact terms are confirmed during scoping.'
        }</p></div>
      ${showTerms ? `<div class="rules">${PERFORMANCE.rules.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</div>` : ''}
      <div class="sh-ctas"><button type="button" class="btn primary" data-book data-from="performance" data-perf="1">Ask about performance pricing</button></div>
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
  const links = w.links.map((l) => ({ ...l, url: safeUrl(l.url) })).filter((l) => l.url)
  const blocks = [
    w.problem && `<div class="sh-block"><h4>The problem</h4><p>${esc(w.problem)}</p></div>`,
    w.solution?.length &&
      `<div class="sh-block"><h4>Services used</h4><div class="syschips">${w.solution.map((c) => `<span class="chip sm">${esc(service(c).name)}</span>`).join('')}</div></div>`,
    w.technology?.length &&
      `<div class="sh-block"><h4>Technology</h4><div class="syschips">${w.technology.map((t) => `<span class="chip sm">${esc(t)}</span>`).join('')}</div></div>`,
    w.process?.length &&
      `<div class="sh-block"><h4>Process</h4><ol class="mini-steps">${w.process.map((p) => `<li>${esc(p)}</li>`).join('')}</ol></div>`,
    w.results?.length
      ? `<div class="sh-block"><h4>Results</h4><dl class="fields">${w.results.map((r) => `<div><dt>${esc(r.metric)}</dt><dd>${esc(r.value)} <span class="muted">· ${esc(r.period)} · ${esc(r.source)}</span></dd></div>`).join('')}</dl></div>`
      : w.observed && `<div class="sh-block"><h4>What changed</h4><p>${esc(w.observed)}</p></div>`,
  ]
    .filter(Boolean)
    .join('')
  openSheet(
    `<div class="sh-work">
      <div class="gallery" id="gallery">${w.media[0] ? workMediaHtml(w.media[0]) : `<div class="work-media" style="height:100%"><div class="placeholder"><span class="ph-glyph">${monogram(80)}</span></div></div>`}</div>
      ${w.media.length > 1 ? `<div class="thumbs">${w.media.map((m, j) => `<button type="button" data-media="${j}" aria-current="${j === 0}" aria-label="Show item ${j + 1}"><img src="${m.poster || m.img}" alt="" /></button>`).join('')}</div>` : ''}
      <div class="sh-copy">
        <div class="sh-block full">
          <div class="work-meta"><span class="pill ${w.status}">${STATUS[w.status]}</span><span>${esc(TYPE_LABEL[w.type] || '')}</span><span>${esc(w.client)}</span></div>
          <h2 class="display" id="sheet-title">${esc(w.title)}</h2>
          <p class="lede">${esc(w.about)}</p>
          <div class="sh-ctas" style="margin-top:10px">
            ${links.map((l, j) => `<a class="btn ${j ? '' : 'primary'}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}
            ${w.status === 'soon' ? '<button type="button" class="btn primary" data-community-invite="work">Follow the build</button>' : ''}
          </div>
        </div>
        <div>${blocks}</div>
        <div>${w.built?.length ? `<div class="sh-block"><h4>What we built</h4><ul class="ticks" style="grid-template-columns:1fr">${w.built.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>` : ''}
          ${w.systems.length ? `<div class="sh-block" style="margin-top:14px"><h4>Systems</h4><div class="syschips">${w.systems.map((k) => `<button type="button" class="chip" data-explore="${k}">${esc(system(k).name)}</button>`).join('')}</div></div>` : ''}</div>
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
})

/* ---------- Shared clicks ---------- */
document.addEventListener('click', (e) => {
  const t = e.target
  if (t.closest('[data-hero-primary]')) track('sb_hero_primary_click')
  const book = t.closest('[data-book]')
  if (book && !book.disabled) {
    e.preventDefault()
    if (book.dataset.perf) $('#f-perf').checked = true
    setMenu(false)
    closeSheet()
    return inquiry.go(book.dataset.from)
  }
  const accept = t.closest('[data-accept]')
  if (accept) {
    const id = accept.dataset.accept
    setScope({ acceptedPackageId: id })
    track('sb_package_selected', { package: id })
    closeSheet()
    return inquiry.go('package')
  }
  const proj = t.closest('[data-project]')
  if (proj) {
    const set = new Set(getScope().selectedServiceIds)
    set.add(proj.dataset.project)
    setScope({ selectedServiceIds: [...set], customScope: true })
    track('sb_service_added', { service: proj.dataset.project })
    return inquiry.go('project')
  }
  const ex = t.closest('[data-explore]')
  if (ex) {
    closeSheet()
    return explore(ex.dataset.explore)
  }
  if (t.closest('[data-view-composer]')) return setView('composer')
  const p = t.closest('[data-plan]')
  if (p) return openPackage(p.dataset.plan, e)
  if (t.closest('[data-performance]')) return openPerformance(e)
  const w = t.closest('[data-work]')
  if (w) return openWork(+w.dataset.work, e)
  if (t.closest('#comp-clear')) return setScope({ selectedServiceIds: [] })
  const add = t.closest('[data-add]')
  if (add) {
    const on = toggleService(add.dataset.add)
    if (on) track('sb_service_added', { service: add.dataset.add })
  }
})
