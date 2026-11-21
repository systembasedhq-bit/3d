/*
 * System-Based Instagram kit. Each asset renders at ?a=<name>; scripts/render-instagram.mjs
 * screenshots them at the right size. Copy comes from the website's own content files,
 * and the only numbers are the verified ones recorded in src/site/clients.js.
 */
import '@fontsource/michroma/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/jetbrains-mono/500.css'
import { monogram } from '../../src/brand/kit.js'
import { SYSTEMS } from '../../src/catalog/catalog.js'
import { SCENARIOS } from '../../src/site/experience/scenarios.js'
import { COMMUNITY } from '../../src/site/community-content.js'
import { CLIENTS } from '../../src/site/clients.js'

const avatar = '/brand/renders/avatar.png'
const client = (id) => CLIENTS.find((c) => c.id === id)
const HANDLE = '@systembasedhq'
const SITE = 'systembased.net'

const foot = (right = SITE) =>
  `<div class="foot"><span class="mark">${monogram(34)}System-Based</span><span>${right}</span></div>`

// chrome stroke used by the highlight icons
const chromeDefs = `<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#d9dce0"/><stop offset=".55" stop-color="#8a8f97"/><stop offset=".7" stop-color="#c9ccd1"/><stop offset="1" stop-color="#f2f3f5"/></linearGradient></defs></svg>`

const ICONS = {
  work: '<rect x="18" y="30" width="64" height="44" rx="6"/><path d="M38 30v-6a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6M18 50h64"/>',
  systems:
    '<circle cx="50" cy="22" r="9"/><circle cx="22" cy="74" r="9"/><circle cx="78" cy="74" r="9"/><circle cx="50" cy="56" r="7"/><path d="M50 31v18M44 60 29 69M56 60l15 9"/>',
  packages: '<path d="M50 14 84 32 50 50 16 32z"/><path d="M16 50l34 18 34-18M16 68l34 18 34-18"/>',
  community:
    '<circle cx="50" cy="34" r="12"/><circle cx="22" cy="44" r="8"/><circle cx="78" cy="44" r="8"/><path d="M28 82c0-12 10-22 22-22s22 10 22 22M8 78c0-9 6-16 14-16M92 78c0-9-6-16-14-16"/>',
  start: '<circle cx="50" cy="50" r="34"/><path d="M42 34 62 50 42 66z"/>',
}

function spark(points, w = 888, h = 150) {
  const max = Math.max(...points)
  const step = w / (points.length - 1)
  const xy = points.map((p, i) => [i * step, h - 10 - (p / max) * (h - 26)])
  let d = `M${xy[0][0]},${xy[0][1]}`
  for (let i = 1; i < xy.length; i++) {
    const cx = (xy[i - 1][0] + xy[i][0]) / 2
    d += ` C${cx},${xy[i - 1][1]} ${cx},${xy[i][1]} ${xy[i][0]},${xy[i][1]}`
  }
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path class="a" d="${d} L${w},${h} L0,${h} Z"/><path class="l" d="${d}"/>${xy.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7"/>`).join('')}</svg>`
}

const logoTile = (c, wide) => {
  const style = `background:${c.theme.bg}`
  if (c.logo?.mask)
    return `<div class="tile mask${wide ? ' wide' : ''}" style="${style};--lg:url('${c.logo.src}')"><span></span></div>`
  if (c.logo)
    return `<div class="tile${wide ? ' wide' : ''}" style="${style}"><img src="${c.logo.src}" alt=""></div>`
  return ''
}

const A = {
  avatar: () => `<div class="avatar"><img src="${avatar}" alt=""></div>`,

  ...Object.fromEntries(
    Object.entries(ICONS).map(([k, path]) => [
      `hl-${k}`,
      () =>
        `${chromeDefs}<div class="pad hl"><div class="hl-ring"><svg viewBox="0 0 100 100">${path}</svg></div></div>`,
    ]),
  ),

  'p-statement': () => `<div class="pad statement">
      <div class="eyebrow">Business systems for <b>service companies</b></div>
      <img class="logo" src="${avatar}" alt="" style="-webkit-mask:radial-gradient(closest-side,#000 62%,transparent);mask:radial-gradient(closest-side,#000 62%,transparent)">
      <h1 class="display">Systems<br>over luck.</h1>
      <p class="lede">We connect how your business gets customers, responds to them and gets work done.</p>
      ${foot()}
    </div>`,

  'p-bottlenecks': () => `<div class="pad">
      <div class="eyebrow">Start with the problem</div>
      <h1 class="display sm" style="margin-top:26px">What&rsquo;s slowing your business down?</h1>
      <div class="needs">${SCENARIOS.map(
        (s, i) =>
          `<div class="need"><span>0${i + 1}</span><strong>${s.problem}</strong><em>${s.problemSub}</em></div>`,
      ).join('')}</div>
      ${foot('Pick one · link in bio')}
    </div>`,

  'p-results': () => {
    const c = client('divine')
    const r = c.results
    const k = Object.fromEntries(r.kpis.map((x) => [x.label, x.value]))
    return `<div class="pad">
      <div class="eyebrow">Real numbers · <b>${r.title}</b></div>
      <div class="res-top"><img src="${c.logo.src}" alt=""><div><strong>${c.name}</strong><em>${c.place} · ${r.period}</em></div></div>
      <div class="big-num"><b>${k['Facebook leads']}</b><span>Facebook leads<br>in 30 days</span></div>
      <div class="kpis">
        <div><strong>$${k['Cost per lead'].toFixed(2)}</strong><em>per lead</em></div>
        <div><strong>${(k.Impressions / 1000).toFixed(1)}K</strong><em>impressions</em></div>
        <div><strong>${k.Clicks}</strong><em>clicks</em></div>
      </div>
      ${spark(r.series.find((s) => s.label === 'Leads').points)}
      <div class="src">Weekly leads. Source: the client&rsquo;s own ad account. No projections.</div>
      ${foot()}
    </div>`
  },

  'p-wall': () => {
    const ids = ['divine', 'wreck', 'veterans', 'roc', 'guestnest', 'cayena']
    return `<div class="pad">
      <div class="eyebrow">Built by System-Based</div>
      <h1 class="display sm" style="margin-top:26px">Real businesses.<br>Real systems.</h1>
      <div class="wall">${ids.map((id) => logoTile(client(id))).join('')}</div>
      ${foot('See it running · ' + SITE)}
    </div>`
  },

  'p-systems': () => `<div class="pad">
      <div class="eyebrow">How we build</div>
      <h1 class="display sm" style="margin-top:26px">Four systems.<br>One business.</h1>
      <div class="systems">${SYSTEMS.map(
        (s) =>
          `<div class="sys"><span>${s.n}</span><div><strong>${s.name}</strong><em>${s.job}</em></div></div>`,
      ).join('')}</div>
      ${foot()}
    </div>`,

  'p-community': () => `<div class="pad">
      <div class="eyebrow">System-Based <b>Business Community</b></div>
      <h1 class="display sm" style="margin-top:26px">Watch us build.<br>Build with us.</h1>
      <p class="lede" style="margin-top:28px">Builds, launches and lessons from real projects, posted as they happen.</p>
      <div class="log">${COMMUNITY.buildLog
        .slice(0, 3)
        .map((e) => `<div><i></i><span><strong>${e.title}</strong><em>Build log</em></span></div>`)
        .join('')}</div>
      <span class="cta">Get notified when it opens</span>
      ${foot(HANDLE)}
    </div>`,

  ...Object.fromEntries(
    ['divine', 'roc', 'wreck'].map((id) => [
      `cover-${id}`,
      () => {
        const c = client(id)
        const art = c.emblem
          ? `<img src="${c.emblem.src}" alt="" style="border-radius:50%;max-height:300px">`
          : `<img src="${c.logo.src}" alt="">`
        return `<div class="pad cover"><div class="stage">
          <div class="eyebrow">Project film</div>
          <div class="cl" style="background:${c.theme.bg}">${art}</div>
          <h1 class="display">${c.name}</h1>
          <div class="eyebrow">${c.industry} · ${c.place}</div>
        </div></div>`
      },
    ]),
  ),

  end: () => `<div class="pad cover end"><div class="stage">
      <img class="logo" src="${avatar}" alt="" style="-webkit-mask:radial-gradient(closest-side,#000 62%,transparent);mask:radial-gradient(closest-side,#000 62%,transparent)">
      <h1 class="display">Systems<br>over luck.</h1>
      <div class="url">${SITE.toUpperCase()}</div>
    </div></div>`,
}

const q = new URLSearchParams(location.search)
const name = q.get('a') || 'p-statement'
const frame = document.getElementById('frame')
frame.style.width = (q.get('w') || 1080) + 'px'
frame.style.height = (q.get('h') || 1350) + 'px'
frame.innerHTML = (A[name] || A['p-statement'])()

// signal the renderer once fonts and images are in
Promise.all([
  document.fonts.ready,
  ...[...frame.querySelectorAll('img')].map((i) =>
    i.complete ? null : new Promise((r) => (i.onload = i.onerror = r)),
  ),
]).then(() => setTimeout(() => (window.__ready = true), 300))

export const ASSETS = Object.keys(A)
