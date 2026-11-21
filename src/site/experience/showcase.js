/*
 * Work & Systems Showcase
 *   - a cinematic logo wall: every client logo "loads" on its own brand stage
 *   - three views: Built (finished), Building (in progress), How it works
 *   - a full-screen project film per client:
 *       1. logo reveal on the client's colours
 *       2. the website, from four camera viewpoints
 *       3. the phone experience
 *       4. what was built, the systems behind it and verified results
 *
 * Everything shown comes from src/site/clients.js. Results only appear when real
 * numbers with a source and period are recorded there.
 */
import { $, $$, esc, safeUrl, REDUCED, FINE_POINTER, scrollToId } from './util.js'
import { published as CLIENTS, client as clientById } from '../clients.js'
import { SYSTEMS } from '../../catalog/catalog.js'
import { setScope } from './scope-store.js'
import { track } from './analytics.js'

const sysName = (code) => SYSTEMS.find((s) => s.code === code)?.name || code
const themeVars = (c) => `--c-bg:${c.theme.bg};--c-ink:${c.theme.ink};--c-accent:${c.theme.accent}`
const hasFilm = (c) => !!(c.views && c.views.length)
const host = (u) => {
  try {
    return new URL(u).host.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/* ---------- logo artwork ---------- */
function logoArt(c, { big = false } = {}) {
  if (c.logo?.mask) {
    return `<span class="lg lg-mask${big ? ' big' : ''}" role="img" aria-label="${esc(c.name)} logo" style="--lg:url('${c.logo.src}')"></span>`
  }
  if (c.logo) {
    return `<span class="lg${c.logo.wide ? ' wide' : ''}${big ? ' big' : ''}${c.theme.light ? ' on-light' : ''}" style="--lg:url('${c.logo.src}')"><img src="${c.logo.src}" alt="${esc(c.name)} logo" decoding="async" /></span>`
  }
  const w = c.wordmark || { top: c.name, sub: '' }
  return `<span class="lg lg-word${big ? ' big' : ''}" role="img" aria-label="${esc(c.name)}"><b>${esc(w.top)}</b>${w.sub ? `<small>${esc(w.sub)}</small>` : ''}</span>`
}

/* ---------- formatting ---------- */
function fmt(v, f) {
  if (f === 'k') return (v / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  if (f === 'usd') return '$' + v.toFixed(2)
  return Math.round(v).toLocaleString('en-US')
}
function spark(points, w = 220, h = 54) {
  const max = Math.max(...points)
  const min = Math.min(0, ...points)
  const step = w / (points.length - 1)
  const xy = points.map((p, i) => [i * step, h - 4 - ((p - min) / (max - min || 1)) * (h - 10)])
  // smooth curve through the points
  let d = `M${xy[0][0]},${xy[0][1]}`
  for (let i = 1; i < xy.length; i++) {
    const [x0, y0] = xy[i - 1]
    const [x1, y1] = xy[i]
    const cx = (x0 + x1) / 2
    d += ` C${cx},${y0} ${cx},${y1} ${x1},${y1}`
  }
  const area = `${d} L${w},${h} L0,${h} Z`
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path class="sp-area" d="${area}"/><path class="sp-line" pathLength="1" d="${d}"/>${xy
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`)
    .join('')}</svg>`
}
function resultsHTML(r) {
  if (!r) return ''
  return `<div class="res">
    <div class="res-head"><span class="res-live"><i></i>${esc(r.title)}</span><span>${esc(r.period)}</span></div>
    <div class="res-kpis">${r.kpis
      .map(
        (k) =>
          `<div><strong data-count="${k.value}" data-format="${k.format || ''}">${fmt(k.value, k.format)}</strong><em>${esc(k.label)}</em></div>`,
      )
      .join('')}</div>
    <div class="res-sparks">${(r.series || [])
      .map(
        (s) =>
          `<figure><figcaption>${esc(s.label)} · weekly</figcaption>${spark(s.points)}</figure>`,
      )
      .join('')}</div>
    <p class="res-src">Source: ${esc(r.source)}. Real numbers, not projections.</p>
  </div>`
}

/* ================================================================== */
export function createShowcase() {
  const built = CLIENTS.filter((c) => c.stage === 'built')
  const building = CLIENTS.filter((c) => c.stage === 'building')

  /* ---------- logo wall ---------- */
  const wall = $('#brand-wall')
  wall.innerHTML = CLIENTS.map(
    (
      c,
      i,
    ) => `<button type="button" class="bw-tile${c.theme.light ? ' light' : ''}" style="${themeVars(c)};--i:${i}" ${
      hasFilm(c) ? `data-film="${c.id}"` : `data-show="${c.stage}" data-focus="${c.id}"`
    } aria-label="${esc(c.name)}: ${hasFilm(c) ? 'watch the project' : esc(c.status)}">
      <span class="bw-stage">${logoArt(c)}<span class="bw-sheen" aria-hidden="true"></span></span>
      <span class="bw-cap"><strong>${esc(c.name)}</strong><span>${esc(c.status)}${c.place ? ' · ' + esc(c.place.split(',').slice(-2).join(',').trim()) : ''}</span></span>
      <span class="bw-load" aria-hidden="true"></span>
    </button>`,
  ).join('')
  const lightUp = () => wall.classList.add('lit')
  if (REDUCED || !('IntersectionObserver' in window)) lightUp()
  else {
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          lightUp()
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(wall)
  }
  if (FINE_POINTER && !REDUCED) {
    const reset = (t) => {
      t.style.removeProperty('--rx')
      t.style.removeProperty('--ry')
    }
    wall.addEventListener('pointermove', (e) => {
      const t = e.target.closest('.bw-tile')
      $$('.bw-tile', wall).forEach((x) => x !== t && reset(x))
      if (!t) return
      const r = t.getBoundingClientRect()
      t.style.setProperty('--rx', ((e.clientY - r.top) / r.height - 0.5) * -10 + 'deg')
      t.style.setProperty('--ry', ((e.clientX - r.left) / r.width - 0.5) * 12 + 'deg')
    })
    wall.addEventListener('pointerleave', () => $$('.bw-tile', wall).forEach(reset))
  }

  /* ---------- project cards ---------- */
  const card = (
    c,
  ) => `<article class="proj${c.theme.light ? ' light' : ''}" id="proj-${c.id}" style="${themeVars(c)}">
    <div class="proj-stage">
      ${
        hasFilm(c)
          ? `<button type="button" class="proj-shot" data-film="${c.id}" aria-label="Watch the ${esc(c.name)} project">
              <span class="proj-browser"><span class="proj-chrome"><i></i><i></i><i></i><em>${esc(host(c.links?.[0]?.url || '') || c.name)}</em></span><img src="${c.views[0].img}" alt="" loading="lazy" decoding="async" /></span>
              <span class="proj-phone"><img src="${c.phone[0].img}" alt="" loading="lazy" decoding="async" /></span>
              <span class="proj-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
            </button>`
          : `<div class="proj-word">${logoArt(c, { big: true })}</div>`
      }
      ${hasFilm(c) ? `<span class="proj-logo">${logoArt(c)}</span>` : ''}
    </div>
    <div class="proj-info">
      <div class="proj-meta"><span class="pill ${c.stage === 'built' ? 'live' : 'soon'}">${esc(c.status)}</span><span>${esc(c.industry)}${c.place ? ' · ' + esc(c.place) : ''}</span></div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.summary)}</p>
      <ul class="proj-built">${c.built.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      <div class="sys-chips">${c.systems.map((s) => `<span>${esc(sysName(s))}</span>`).join('<i>+</i>')}</div>
      ${
        c.results
          ? `<div class="proj-res"><strong>${c.results.kpis.find((k) => /lead/i.test(k.label))?.value ?? ''}</strong> ${esc(
              c.results.kpis.find((k) => /lead/i.test(k.label))?.label || '',
            )} from ${esc(c.results.title)} · ${esc(c.results.period)}</div>`
          : ''
      }
      <div class="proj-actions">
        ${hasFilm(c) ? `<button type="button" class="btn primary" data-film="${c.id}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>Watch the build</button>` : ''}
        ${(c.links || [])
          .filter((l) => safeUrl(l.url))
          .map(
            (l) =>
              `<a class="link" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`,
          )
          .join('')}
      </div>
    </div>
  </article>`
  $('#proj-built').innerHTML = built.map(card).join('')
  $('#proj-building').innerHTML = building.map(card).join('')

  /* ---------- tabs ---------- */
  const tabs = $('#show-tabs')
  const setTab = (id, focus) => {
    $$('[role=tab]', tabs).forEach((t) => {
      const on = t.dataset.tab === id
      t.setAttribute('aria-selected', on)
      t.tabIndex = on ? 0 : -1
      if (on && focus) t.focus()
      $('#' + t.getAttribute('aria-controls')).hidden = !on
    })
    const on = $(`[data-tab="${id}"]`, tabs)
    const thumb = $('.thumb', tabs)
    thumb.style.left = on.offsetLeft + 'px'
    thumb.style.width = on.offsetWidth + 'px'
  }
  tabs.addEventListener('click', (e) => {
    const t = e.target.closest('[role=tab]')
    if (t) setTab(t.dataset.tab)
  })
  tabs.addEventListener('keydown', (e) => {
    const list = $$('[role=tab]', tabs)
    const i = list.findIndex((t) => t.getAttribute('aria-selected') === 'true')
    const n = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!n) return
    e.preventDefault()
    setTab(list[(i + n + list.length) % list.length].dataset.tab, true)
  })
  requestAnimationFrame(() => setTab('built'))
  addEventListener('resize', () =>
    setTab($('[aria-selected="true"]', tabs)?.dataset.tab || 'built'),
  )
  document.fonts?.ready.then(() =>
    setTab($('[aria-selected="true"]', tabs)?.dataset.tab || 'built'),
  )

  /* ---------- "how it works" links ---------- */
  $('#show-how').addEventListener('click', (e) => {
    const b = e.target.closest('[data-how]')
    if (!b) return
    if (b.dataset.how !== 'any') setScope({ scenarioId: b.dataset.how, journeySource: 'showcase' })
    scrollToId('how')
  })

  /* ================================================================ */
  /* Project film                                                     */
  /* ================================================================ */
  const film = $('#film')
  let CH = []
  let SYS = 3
  let cur = null
  let schedule = []
  let t = 0
  let playing = false
  let last = 0
  let raf = 0
  let stepIdx = -1
  let opener = null

  // each project's own chapter list: logo, website, (software), mobile, system
  const chaptersFor = (c) =>
    [
      { type: 'logo', name: 'Logo' },
      { type: 'screen', name: 'Website', views: c.views, host: host(c.links?.[0]?.url || '') },
      c.app && { type: 'screen', name: c.app.label, views: c.app.views, host: c.app.host },
      { type: 'phone', name: 'Mobile', views: c.phone },
      { type: 'system', name: 'System' },
    ].filter(Boolean)

  function buildSchedule(c) {
    const s = []
    CH.forEach((ch, k) => {
      if (ch.type === 'logo') s.push({ ch: k, i: 0, dur: c.emblem ? 4.2 : 3.4 })
      if (ch.type === 'screen') ch.views.forEach((_, i) => s.push({ ch: k, i, dur: 3 }))
      if (ch.type === 'phone') ch.views.forEach((_, i) => s.push({ ch: k, i, dur: 3.2 }))
      if (ch.type === 'system') s.push({ ch: k, i: 0, dur: Infinity })
    })
    let at = 0
    s.forEach((x) => {
      x.at = at
      at += x.dur
    })
    return s
  }
  const chStart = (ch) => schedule.find((x) => x.ch === ch).at
  const chEnd = (ch) => {
    const xs = schedule.filter((x) => x.ch === ch)
    const l = xs[xs.length - 1]
    return l.at + l.dur
  }

  const imgs = (views) =>
    views
      .map((v, i) => `<img data-v="${i}" src="${v.img}" alt="${esc(v.cap)}" decoding="async" />`)
      .join('')
  function sectionHTML(c, ch, k, links) {
    if (ch.type === 'logo')
      return `<section class="fs fs-logo" data-ch="${k}" aria-hidden="true">
        <div class="fl-glow"></div><div class="fl-flare"></div>
        ${c.emblem ? `<img class="fl-emblem" src="${c.emblem.src}" alt="" />` : ''}
        <div class="fl-logo">${logoArt(c, { big: true })}<span class="fl-sheen" style="--lg:url('${c.logo?.src || ''}')"></span></div>
        <div class="fl-meta"><span>${esc(c.industry)}</span>${c.place ? `<span>${esc(c.place)}</span>` : ''}<span>Built by System-Based</span></div>
      </section>`
    if (ch.type === 'screen')
      return `<section class="fs fs-web" data-ch="${k}" aria-hidden="true">
        <div class="fw-cam" data-pose="in">
          <div class="fw-browser">
            <div class="fw-chrome"><i></i><i></i><i></i><em>${esc(ch.host || c.name)}</em></div>
            <div class="fw-screen">${imgs(ch.views)}</div>
          </div>
        </div>
        <p class="fs-cap" aria-live="off"></p>
      </section>`
    if (ch.type === 'phone')
      return `<section class="fs fs-phone" data-ch="${k}" aria-hidden="true">
        <div class="fp-cam" data-pose="in">
          <div class="fp-phone"><span class="fp-island"></span><div class="fp-screen">${imgs(ch.views)}</div></div>
        </div>
        <div class="fp-side">${logoArt(c)}<p class="fs-cap"></p></div>
      </section>`
    return `<section class="fs fs-system" data-ch="${k}" aria-hidden="true">
        <div class="fsys">
          <div class="fsys-copy">
            <div class="fsys-logo">${logoArt(c)}</div>
            <h3>${esc(c.summary)}</h3>
            <ol class="fsys-built">${c.built.map((b, i) => `<li style="--d:${i}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(b)}</li>`).join('')}</ol>
            <div class="sys-chips">${c.systems.map((s) => `<span>${esc(sysName(s))}</span>`).join('<i>+</i>')}</div>
          </div>
          <div class="fsys-side">
            ${
              c.results
                ? resultsHTML(c.results)
                : `<div class="res res-none"><div class="res-head"><span class="res-live"><i></i>${esc(c.status)}</span></div><p>Results are added here once they are measured in the client's own accounts. No estimates, no projections.</p></div>`
            }
            <div class="fsys-cta">
              ${c.demo ? `<button type="button" class="btn primary" data-demo="${c.id}">Try the ${esc(c.demo.title)}</button>` : ''}
              ${links.map((l) => `<a class="btn" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}
              ${c.scenario ? `<button type="button" class="btn" data-film-how="${c.scenario}">See how the system works</button>` : ''}
              <button type="button" class="btn${c.demo ? '' : ' primary'}" data-book data-from="film-${c.id}">Start a project like this</button>
            </div>
          </div>
        </div>
      </section>`
  }

  function render(c) {
    film.className = 'film' + (c.theme.light ? ' light' : '') + (REDUCED ? ' reduced' : '')
    film.setAttribute('style', themeVars(c))
    $('#film-label').textContent = c.name
    const links = (c.links || []).filter((l) => safeUrl(l.url))
    $('#film-stage').innerHTML = CH.map((ch, k) => sectionHTML(c, ch, k, links)).join('')
    $('#film-chapters').innerHTML = CH.map(
      (ch, i) =>
        `<button type="button" data-ch="${i}" aria-label="${esc(ch.name)}"><span class="fc-bar"><i></i></span><span class="fc-n">${esc(ch.name)}</span></button>`,
    ).join('')
    const others = CLIENTS.filter(hasFilm)
    const k = others.findIndex((x) => x.id === c.id)
    $('#film-prev').dataset.go = others[(k - 1 + others.length) % others.length].id
    $('#film-next').dataset.go = others[(k + 1) % others.length].id
    $('#film-next').querySelector('em').textContent = clientById($('#film-next').dataset.go).name
  }

  function countUp(root) {
    $$('[data-count]', root).forEach((el) => {
      const v = +el.dataset.count
      const f = el.dataset.format
      if (REDUCED) return (el.textContent = fmt(v, f))
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / 1400)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = fmt(f === 'usd' ? v * e : Math.round(v * e), f)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }

  function apply(force) {
    const k = schedule.findIndex(
      (x, i) => t >= x.at && (i === schedule.length - 1 || t < schedule[i + 1].at),
    )
    const s = schedule[Math.max(0, k)]
    // chapter progress bars
    $$('#film-chapters [data-ch]').forEach((b) => {
      const ch = +b.dataset.ch
      const a = chStart(ch)
      const e = chEnd(ch)
      const p = ch === SYS ? (s.ch === SYS ? 1 : 0) : Math.max(0, Math.min(1, (t - a) / (e - a)))
      b.querySelector('i').style.transform = `scaleX(${p})`
      b.classList.toggle('on', ch === s.ch)
      b.setAttribute('aria-current', ch === s.ch ? 'step' : 'false')
    })
    if (Math.max(0, k) === stepIdx && !force) return
    const prev = schedule[stepIdx]
    stepIdx = Math.max(0, k)
    film.dataset.ch = s.ch
    $$('.fs', film).forEach((el) => {
      const on = +el.dataset.ch === s.ch
      el.classList.toggle('on', on)
      el.setAttribute('aria-hidden', !on)
    })
    const sec = $(`.fs[data-ch="${s.ch}"]`, film)
    const type = CH[s.ch].type
    if (type === 'logo' && (!prev || prev.ch !== s.ch)) {
      sec.classList.remove('play')
      void sec.offsetWidth
      sec.classList.add('play')
    }
    if (type === 'screen' || type === 'phone') {
      const list = CH[s.ch].views
      $$('[data-v]', sec).forEach((img) => img.classList.toggle('on', +img.dataset.v === s.i))
      $(type === 'screen' ? '.fw-cam' : '.fp-cam', sec).dataset.pose = String(s.i)
      $$('.fs-cap', sec).forEach((p) => (p.textContent = list[s.i].cap))
      $('#film-live').textContent = `${cur.name}, ${CH[s.ch].name}: ${list[s.i].cap}`
    } else {
      $('#film-live').textContent = `${cur.name}, ${CH[s.ch].name}`
    }
    if (type === 'system' && (!prev || prev.ch !== s.ch)) {
      sec.classList.remove('play')
      void sec.offsetWidth
      sec.classList.add('play')
      countUp(sec)
      track('sb_film_completed', { client: cur.id }, { once: true })
    }
    film.classList.toggle('bars', type === 'logo')
  }

  function loop(now) {
    raf = 0
    if (!playing || film.hidden) return
    t += Math.max(0, Math.min(0.1, (now - last) / 1000))
    last = now
    apply()
    if (schedule[stepIdx]?.ch === SYS) return setPlaying(false, true)
    raf = requestAnimationFrame(loop)
  }
  function setPlaying(on, ended) {
    playing = on
    const b = $('#film-pause')
    b.setAttribute('aria-pressed', !on)
    b.setAttribute('aria-label', on ? 'Pause' : ended ? 'Replay' : 'Play')
    b.dataset.state = on ? 'playing' : ended ? 'ended' : 'paused'
    if (on && !raf) {
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }
  }
  function seek(ch) {
    t = chStart(ch) + 0.001
    apply(true)
    setPlaying(ch !== SYS, ch === SYS)
  }

  function trap(e) {
    if (e.key === 'Escape') return close()
    if (e.key === ' ' && e.target === film) {
      e.preventDefault()
      return setPlaying(!playing)
    }
    if (e.key !== 'Tab') return
    const f = $$('button, a[href]', film).filter((x) => x.offsetParent !== null)
    if (!f.length) return
    const first = f[0]
    const lastEl = f[f.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      lastEl.focus()
    } else if (!e.shiftKey && document.activeElement === lastEl) {
      e.preventDefault()
      first.focus()
    }
  }

  function open(id, from) {
    const c = clientById(id)
    if (!c || !hasFilm(c)) return
    if (film.hidden) opener = from || document.activeElement
    cur = c
    CH = chaptersFor(c)
    SYS = CH.length - 1
    schedule = buildSchedule(c)
    t = 0
    stepIdx = -1
    render(c)
    film.hidden = false
    document.documentElement.classList.add('film-open')
    requestAnimationFrame(() => film.classList.add('in'))
    apply(true)
    setPlaying(true)
    $('#film-close').focus({ preventScroll: true })
    track('sb_film_opened', { client: c.id })
  }
  function close() {
    if (film.hidden) return
    setPlaying(false)
    film.classList.remove('in')
    film.hidden = true
    document.documentElement.classList.remove('film-open')
    opener?.focus?.({ preventScroll: true })
  }

  film.addEventListener('keydown', trap)
  film.addEventListener('click', (e) => {
    const t2 = e.target
    if (t2.closest('#film-close')) return close()
    if (t2.closest('#film-pause')) {
      if ($('#film-pause').dataset.state === 'ended') return seek(0)
      return setPlaying(!playing)
    }
    const ch = t2.closest('#film-chapters [data-ch]')
    if (ch) return seek(+ch.dataset.ch)
    const go = t2.closest('[data-go]')
    if (go) return open(go.dataset.go)
    const how = t2.closest('[data-film-how]')
    if (how) {
      close()
      setScope({ scenarioId: how.dataset.filmHow, journeySource: 'film' })
      return scrollToId('how')
    }
    if (t2.closest('[data-book]')) close() // the page's own router then opens the inquiry
  })
  // pause while the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) setPlaying(false)
  })

  document.addEventListener('click', (e) => {
    const f = e.target.closest('[data-film]')
    if (f) return open(f.dataset.film, f)
    const s = e.target.closest('[data-show]')
    if (s && s.closest('#brand-wall')) {
      setTab(s.dataset.show)
      const el = document.getElementById('proj-' + s.dataset.focus)
      el?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'center' })
      el?.classList.add('flash')
      setTimeout(() => el?.classList.remove('flash'), 1600)
    }
  })

  /* ================================================================ */
  /* Live demos: the real software, running in a sandboxed frame      */
  /* ================================================================ */
  const demos = CLIENTS.filter((c) => c.demo)
  $('#demo-grid').innerHTML =
    demos
      .map(
        (c) => `<article class="demo-card${c.theme.light ? ' light' : ''}" style="${themeVars(c)}">
      <button type="button" class="demo-shot" data-demo="${c.id}" aria-label="Launch the ${esc(c.demo.title)}">
        <img src="${(c.app || c).views[0].img}" alt="" loading="lazy" decoding="async" />
        <span class="demo-live"><i></i>Live software</span>
      </button>
      <div class="demo-info">
        <span class="demo-logo">${logoArt(c)}</span>
        <h3>${esc(c.demo.title)}</h3>
        <p>Built for ${esc(c.name)}. ${esc(c.demo.note)}</p>
        <div class="proj-actions">
          <button type="button" class="btn primary" data-demo="${c.id}">Launch the demo</button>
          ${hasFilm(c) ? `<button type="button" class="link" data-film="${c.id}">Watch the build →</button>` : ''}
        </div>
      </div>
    </article>`,
      )
      .join('') +
    `<button type="button" class="work-card next demo-next" data-book data-from="demos"><span class="eyebrow">Custom software</span><strong>Need a tool like this for your business?</strong><span class="link">Talk to us →</span></button>`

  const demo = $('#demo')
  const frame = $('#demo-iframe')
  let demoOpener = null
  const cache = {}
  async function openDemo(id, from) {
    const c = clientById(id)
    if (!c?.demo) return
    demoOpener = from || document.activeElement
    $('#demo-title').textContent = c.demo.title
    $('#demo-note').textContent = c.demo.note
    frame.title = c.demo.title
    demo.setAttribute('style', themeVars(c))
    demo.classList.toggle('light', !!c.theme.light)
    demo.hidden = false
    demo.classList.remove('ready')
    document.documentElement.classList.add('film-open')
    $('#demo-close').focus({ preventScroll: true })
    track('sb_demo_opened', { client: c.id })
    try {
      // fetched as text and shown with srcdoc: works from the CDN, and the sandbox keeps
      // the demo away from this page (no same-origin access, nothing stored)
      cache[id] ??= await fetch(c.demo.src).then((r) => {
        if (!r.ok) throw new Error(r.status)
        return r.text()
      })
      frame.srcdoc =
        '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base target="_blank">' +
        cache[id] +
        '</html>'
      frame.onload = () => demo.classList.add('ready')
    } catch {
      $('#demo-loading').textContent = 'The demo could not load. Please try again in a moment.'
    }
  }
  function closeDemo() {
    if (demo.hidden) return
    demo.hidden = true
    frame.srcdoc = ''
    $('#demo-loading').textContent = 'Loading…'
    if (film.hidden) document.documentElement.classList.remove('film-open')
    demoOpener?.focus?.({ preventScroll: true })
  }
  demo.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      return closeDemo()
    }
    if (e.key === 'Tab') {
      // only two stops: the close button and the demo itself
      e.preventDefault()
      ;(document.activeElement === frame ? $('#demo-close') : frame).focus()
    }
  })
  $('#demo-close').addEventListener('click', closeDemo)
  document.addEventListener('click', (e) => {
    const d = e.target.closest('[data-demo]')
    if (d) openDemo(d.dataset.demo, d)
  })

  return { open, close, openDemo, closeDemo }
}
