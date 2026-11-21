#!/usr/bin/env node
/*
 * Browser acceptance tests for the website (desktop + phone). Run: npm run test:e2e
 * Optional: npm run test:e2e -- --out <dir>   (screenshots go there)
 *
 * Uses the dev server and a local mock relay, so nothing real is contacted.
 * Needs Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
 */
import process from 'node:process'
import http from 'node:http'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createRequire } from 'node:module'
import { createServer } from 'vite'
import { SCENARIOS } from '../src/site/experience/scenarios.js'

const { chromium, devices } = createRequire(import.meta.url)('playwright')
const root = resolve(import.meta.dirname, '..')
const oi = process.argv.indexOf('--out')
const OUT = oi > -1 ? resolve(process.argv[oi + 1]) : resolve(root, 'test-results/site')
await mkdir(OUT, { recursive: true })

const results = []
const check = (id, name, pass, detail = '') => {
  results.push({ id, name, pass, detail })
  console.log(`${pass ? '✓' : '✗'} ${id} ${name}${detail ? ' · ' + detail : ''}`)
}

/* mock relay: CORS + JSON ack, records every request */
const received = []
const relay = http.createServer((req, res) => {
  const h = {
    'Access-Control-Allow-Origin': req.headers.origin || '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }
  if (req.method === 'OPTIONS') return res.writeHead(204, h).end()
  let body = ''
  req.on('data', (c) => (body += c))
  req.on('end', () => {
    received.push(JSON.parse(body || '{}'))
    setTimeout(
      () => res.writeHead(200, { ...h, 'Content-Type': 'application/json' }).end('{"ok":true}'),
      300,
    )
  })
})
await new Promise((r) => relay.listen(5261, r))

process.env.BRAND_RENDER = '1'
const server = await createServer({
  root,
  logLevel: 'error',
  server: { port: 5262, strictPort: false },
})
await server.listen()
const URL_ = server.resolvedUrls.local[0] + 'site/'
const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})

async function open(kind, cfg = {}, extra = {}) {
  const ctx =
    kind === 'phone'
      ? await browser.newContext({ ...devices['iPhone 13'], deviceScaleFactor: 1, ...extra })
      : await browser.newContext({ viewport: { width: 1440, height: 900 }, ...extra })
  await ctx.addInitScript((c) => {
    window.SB_CONFIG = c
    try {
      sessionStorage.setItem('sb-intro', 'seen')
    } catch {
      // sandboxed demo frames have no storage
    }
  }, cfg)
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto(URL_)
  await page.waitForTimeout(1200)
  return { ctx, page, errors }
}

// scroll so chapter i is the active one (re-measured, because the stage sticks as we scroll)
async function toBeat(page, i) {
  for (let k = 0; k < 4; k++) {
    await page.evaluate((i) => {
      const li = document.querySelectorAll('.chapter')[i]
      const st = document.getElementById('story-stage').getBoundingClientRect()
      const mobile = innerWidth < 960
      const trigger = mobile ? st.bottom + (innerHeight - st.bottom) * 0.3 : innerHeight * 0.55
      window.scrollBy({ top: li.getBoundingClientRect().top - trigger + 30, behavior: 'instant' })
    }, i)
    await page.waitForTimeout(120)
  }
  await page.waitForTimeout(350)
}
const state = (page) =>
  page.evaluate(() => ({
    beat: +document.getElementById('story').dataset.beat,
    active: [...document.querySelectorAll('.chapter')].findIndex((c) =>
      c.classList.contains('active'),
    ),
    pill: document.querySelector('#lead-card .pill')?.textContent || null,
    owner: document.getElementById('owner-card').classList.contains('show'),
    kpiBooked: [...document.querySelectorAll('#owner-card .kpi div')]
      .map((d) => [d.querySelector('em').textContent, d.querySelector('strong').textContent])
      .find(([k]) => /booked|scheduled/i.test(k))?.[1],
    screen: document.getElementById('ph-screen').dataset.type,
  }))

for (const kind of ['desktop', 'phone']) {
  /* ---------- layout, copy hygiene, initial state ---------- */
  {
    const { ctx, page, errors } = await open(kind)
    const text = await page.evaluate(() => document.body.innerText)
    check('UX-12', `${kind}: no "Pressure Built" anywhere`, !/pressure built/i.test(text))
    const codes = text.match(/\b(CR|GR|BB|AO)(-\d\d)?\b/g)
    check(
      'UX-09',
      `${kind}: no internal system codes in visible text`,
      !codes,
      codes ? codes.join(',') : '',
    )
    const pressed = await page.$$eval('.need-card[aria-pressed="true"]', (e) => e.length)
    check('UX-01', `${kind}: no problem pre-selected on load`, pressed === 0)
    const anchors = await page.evaluate(() =>
      [
        'top',
        'company',
        'start',
        'how',
        'journey',
        'systems',
        'work',
        'packages',
        'projects',
        'community',
        'faq',
        'inquiry',
      ].filter((id) => !document.getElementById(id)),
    )
    check('UX-20', `${kind}: legacy anchors present`, !anchors.length, anchors.join(','))
    const priced = await page.$$eval('#plans .fee strong', (els) => els.map((e) => e.textContent))
    check(
      'UX-10',
      `${kind}: unapproved prices hidden by default`,
      priced.every((t) => !/\$\d/.test(t)),
      priced.slice(0, 2).join(' | '),
    )
    await page.screenshot({ path: `${OUT}/${kind}-hero.png` })
    check('UX-19', `${kind}: no page errors`, !errors.length, errors.join(' | '))
    await ctx.close()
  }

  /* ---------- the four scenarios: forward, then backward ---------- */
  for (const sc of SCENARIOS) {
    const { ctx, page } = await open(kind)
    await page.evaluate(() =>
      document.getElementById('start').scrollIntoView({ behavior: 'instant' }),
    )
    await page.click(`[data-problem="${sc.id}"]`)
    await page.waitForTimeout(300)
    if (sc.id === 'response') await page.screenshot({ path: `${OUT}/${kind}-diagnostic.png` })
    let ok = true
    const log = []
    for (let i = 0; i < 8; i++) {
      await toBeat(page, i)
      const s = await state(page)
      const b = sc.beats[i]
      const want = b.lead ? sc.stages[b.lead.stage] : null
      const good =
        s.beat === i && s.active === i && (want ? s.pill === want : true) && s.owner === !!b.owner
      if (!good) ok = false
      log.push(`${i}:${s.pill || '-'}`)
      if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7)
        await page.screenshot({ path: `${OUT}/${kind}-${sc.id}-beat${i}.png` })
      if (await page.evaluate(() => !document.getElementById('invite').hidden)) {
        await page.keyboard.press('Escape')
        await page.waitForTimeout(450)
      }
    }
    check(
      `UX-0${['response', 'growth', 'brand', 'ops'].indexOf(sc.id) + 2}`,
      `${kind}: "${sc.id}" story syncs phone, card, owner view and copy`,
      ok,
      log.join(' '),
    )
    // backwards
    let back = true
    for (const i of [6, 4, 2, 0]) {
      await toBeat(page, i)
      const s = await state(page)
      const b = sc.beats[i]
      if (s.beat !== i || (b.lead && s.pill !== sc.stages[b.lead.stage]) || s.owner !== !!b.owner)
        back = false
      if (s.kpiBooked && +s.kpiBooked > 0 && (!b.lead || b.lead.stage < 3)) back = false
    }
    check('UX-06', `${kind}: "${sc.id}" reverses consistently when scrolling up`, back)
    await ctx.close()
  }

  /* ---------- community invitation ---------- */
  {
    const { ctx, page } = await open(kind)
    await toBeat(page, 5)
    const early = await page.evaluate(() => !document.getElementById('invite').hidden)
    check('UX-13', `${kind}: no invite without a chosen bottleneck`, !early)
    await page.evaluate(() =>
      document.getElementById('start').scrollIntoView({ behavior: 'instant' }),
    )
    await page.click('[data-problem="growth"]')
    for (const i of [1, 2, 3, 4, 5]) await toBeat(page, i)
    await page.waitForTimeout(1300)
    const shown = await page.evaluate(() => !document.getElementById('invite').hidden)
    const focusIn = await page.evaluate(() =>
      document.getElementById('invite').contains(document.activeElement),
    )
    await page.screenshot({ path: `${OUT}/${kind}-invite.png` })
    const btn = await page.$eval('.invite-ctas .btn.primary', (b) => b.textContent.trim())
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
    const closed = await page.evaluate(
      () => document.getElementById('invite').hidden && !document.body.classList.contains('locked'),
    )
    await toBeat(page, 6)
    await toBeat(page, 5)
    await page.waitForTimeout(900)
    const again = await page.evaluate(() => !document.getElementById('invite').hidden)
    check(
      'UX-13',
      `${kind}: invite after choice + owner view, focus trapped, Esc closes, not repeated`,
      shown && focusIn && closed && !again,
      `button: ${btn}`,
    )
    check(
      'UX-12',
      `${kind}: no join link offered while the community link is empty`,
      /notified/i.test(btn),
    )
    await ctx.close()
  }

  /* ---------- inquiry: failure keeps data, success sends one record ---------- */
  {
    const { ctx, page } = await open(kind, {
      FORM_ENDPOINT: 'http://127.0.0.1:9/nothing',
      FORM_MODE: 'relay',
    })
    await page.evaluate(() =>
      document.getElementById('inquiry').scrollIntoView({ behavior: 'instant' }),
    )
    await page.fill('#f-name', 'Test Person')
    await page.fill('#f-email', 'test@example.com')
    await page.click('#inquiry-form button[type=submit]')
    await page.waitForTimeout(1500)
    const err = await page.textContent('#form-msg')
    const kept = await page.inputValue('#f-name')
    const done = await page.evaluate(() => !document.getElementById('inquiry-done').hidden)
    check(
      'UX-15',
      `${kind}: failed send shows an error, keeps the details, no false success`,
      /didn|try again/i.test(err) && kept === 'Test Person' && !done,
      err,
    )
    await ctx.close()
  }
  {
    received.length = 0
    const { ctx, page } = await open(kind, {
      FORM_ENDPOINT: 'http://127.0.0.1:5261/relay',
      FORM_MODE: 'relay',
    })
    await page.evaluate(() =>
      document.getElementById('start').scrollIntoView({ behavior: 'instant' }),
    )
    await page.click('[data-problem="response"]')
    await page.evaluate(() =>
      document.getElementById('packages').scrollIntoView({ behavior: 'instant' }),
    )
    const jumped = await page.evaluate(() => !document.getElementById('invite').hidden)
    check('UX-13', `${kind}: jumping past the story with a link never pops the invite`, !jumped)
    await page.click('[data-accept="capture"]')
    await page.waitForTimeout(900)
    await page.fill('#f-name', 'Jordan Rivera')
    await page.fill('#f-email', 'jordan@example.com')
    await page.click('#inquiry-form button[type=submit]')
    await page.click('#inquiry-form button[type=submit]').catch(() => {})
    await page.waitForTimeout(1500)
    const r = received[0] || {}
    const ok =
      received.length === 1 &&
      r.sb_problem_id === 'response' &&
      r.sb_accepted_package === 'capture' &&
      r.sb_recommended_package === 'capture' &&
      r.first_name === 'Jordan' &&
      r.sb_intake_source === 'website_inquiry' &&
      /sb-inquiry/.test(r.tags)
    check(
      'UX-14',
      `${kind}: one inquiry record with the chosen problem and package (double click sends once)`,
      ok,
      `requests: ${received.length} ${received.map((x) => `${x.sb_intake_source}/${x.sb_request_id?.slice(0, 6)}/${x.sb_problem_id}/${x.sb_accepted_package}`).join(' ')}`,
    )
    await page.screenshot({ path: `${OUT}/${kind}-inquiry-done.png` })
    await ctx.close()
  }

  /* ---------- waitlist is community, not sales ---------- */
  {
    received.length = 0
    const { ctx, page } = await open(kind, {
      FORM_ENDPOINT: 'http://127.0.0.1:5261/relay',
      FORM_MODE: 'relay',
    })
    await page.evaluate(() =>
      document.getElementById('community').scrollIntoView({ behavior: 'instant' }),
    )
    await page.waitForTimeout(600)
    await page.screenshot({ path: `${OUT}/${kind}-community.png` })
    await page.click('#community-cta [data-community-invite]')
    await page.waitForTimeout(1100)
    await page.click('[data-waitlist-open]')
    await page.fill('#wl-email', 'owner@example.com')
    await page.click('#waitlist button[type=submit]')
    await page.waitForTimeout(300)
    const needsConsent = /tick/i.test(await page.textContent('#wl-msg'))
    await page.check('#wl-consent')
    await page.click('#waitlist button[type=submit]')
    await page.waitForTimeout(1200)
    const r = received[0] || {}
    check(
      'UX-12',
      `${kind}: waitlist needs consent and is tagged community, not inquiry`,
      needsConsent && r.sb_intake_source === 'community_waitlist' && !/sb-inquiry/.test(r.tags),
    )
    await ctx.close()
  }
}

/* ---------- reduced motion, widths, menu ---------- */
{
  const { ctx, page, errors } = await open('phone', {}, { reducedMotion: 'reduce' })
  await page.click('[data-problem="brand"]').catch(() => {})
  await toBeat(page, 4)
  const s = await state(page)
  check('UX-08', 'reduced motion: story still advances, no errors', s.beat === 4 && !errors.length)
  await ctx.close()
}
{
  const bad = []
  for (const w of [320, 375, 390, 430, 768, 1024, 1440, 1920]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: w < 800 ? 800 : 900 } })
    await ctx.addInitScript(() => sessionStorage.setItem('sb-intro', 'seen'))
    const page = await ctx.newPage()
    await page.goto(URL_)
    await page.waitForTimeout(800)
    for (const id of ['start', 'how', 'systems', 'packages', 'community', 'inquiry']) {
      await page.evaluate(
        (id) => document.getElementById(id).scrollIntoView({ behavior: 'instant' }),
        id,
      )
      const o = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
      if (o > 0) bad.push(`${w}px #${id} +${o}`)
      if (o > 0 && process.env.DBG)
        console.log(
          await page.evaluate(() => {
            const W = innerWidth
            return [...document.querySelectorAll('body *')]
              .filter((el) => {
                const rc = el.getBoundingClientRect()
                return rc.right > W + 0.5 && rc.width > 0 && !el.closest('.ex-tabs')
              })
              .slice(0, 12)
              .map(
                (el) =>
                  el.tagName +
                  '#' +
                  el.id +
                  '.' +
                  String(el.className).slice(0, 40) +
                  ' r' +
                  Math.round(el.getBoundingClientRect().right - W),
              )
              .join(' | ')
          }),
        )
    }
    await ctx.close()
  }
  check('UX-19', 'no horizontal overflow at 320–1920px', !bad.length, bad.join(', '))
}
{
  const { ctx, page } = await open('phone')
  await page.click('.burger')
  await page.waitForTimeout(500)
  await page.click('#menu a[href="#packages"]')
  await page.waitForTimeout(900)
  const stuck = await page.evaluate(
    () =>
      document.body.classList.contains('menu-open') || document.body.classList.contains('locked'),
  )
  check('UX-18', 'phone menu opens, navigates and closes without locking the page', !stuck)
  await ctx.close()
}

/* ---------- Work & Systems Showcase ---------- */
for (const kind of ['desktop', 'phone']) {
  const { ctx, page, errors } = await open(kind)
  await page.evaluate(() => document.getElementById('work').scrollIntoView({ behavior: 'instant' }))
  await page.waitForTimeout(2600)
  const wall = await page.evaluate(() => {
    const tiles = [...document.querySelectorAll('#brand-wall .bw-tile')]
    return {
      names: tiles.map((t) => t.querySelector('.bw-cap strong').textContent),
      broken: [...document.querySelectorAll('#brand-wall img, #work img')]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.src),
      lit: document.getElementById('brand-wall').classList.contains('lit'),
    }
  })
  check(
    'UX-21',
    `${kind}: logo wall shows the published clients only, every logo loads`,
    wall.lit &&
      wall.names.includes('Divine Detailing') &&
      wall.names.includes('Wreck & Refine') &&
      wall.names.includes('Veterans Funeral Care') &&
      wall.names.includes('Cayena Food Garden') &&
      wall.names.includes('ROC Memorials & Monuments') &&
      !wall.names.some((n) => /hunters/i.test(n)) &&
      !wall.broken.length,
    wall.names.join(', ') + (wall.broken.length ? ' · broken: ' + wall.broken.join(' ') : ''),
  )

  // tabs: keyboard
  await page.focus('#tab-built')
  await page.keyboard.press('ArrowRight')
  const tab = await page.evaluate(() => ({
    building: !document.getElementById('show-building').hidden,
    built: !document.getElementById('show-built').hidden,
    focus: document.activeElement.id,
  }))
  check(
    'UX-22',
    `${kind}: work tabs switch with the keyboard`,
    tab.building && !tab.built && tab.focus === 'tab-building',
  )

  // film: open from the wall, chapters, results, focus and Escape
  const opener = await page.$('#brand-wall [data-film="divine"]')
  await opener.click()
  await page.waitForTimeout(1500)
  const f1 = await page.evaluate(() => ({
    open: !document.getElementById('film').hidden,
    ch: document.getElementById('film').dataset.ch,
    focus: document.activeElement.id,
    locked: getComputedStyle(document.documentElement).overflow === 'hidden',
  }))
  await page.screenshot({ path: `${OUT}/${kind}-film-logo.png` })
  await page.click('#film-chapters [data-ch="1"]')
  await page.waitForTimeout(2800)
  const web = await page.evaluate(() => ({
    ch: document.getElementById('film').dataset.ch,
    img: !!document.querySelector('.fw-screen img.on')?.naturalWidth,
  }))
  await page.screenshot({ path: `${OUT}/${kind}-film-web.png` })
  await page.click('#film-chapters [data-ch="3"]')
  await page.waitForTimeout(2200)
  const sys = await page.evaluate(() => ({
    ch: document.getElementById('film').dataset.ch,
    kpis: [...document.querySelectorAll('.fs-system .res-kpis strong')].map((s) => s.textContent),
    src: document.querySelector('.fs-system .res-src')?.textContent || '',
    paused: document.getElementById('film-pause').dataset.state,
  }))
  await page.screenshot({ path: `${OUT}/${kind}-film-system.png` })
  // focus stays inside the film
  for (let i = 0; i < 14; i++) await page.keyboard.press('Tab')
  const inside = await page.evaluate(() => !!document.activeElement.closest('#film'))
  await page.keyboard.press('Escape')
  await page.waitForTimeout(400)
  const f2 = await page.evaluate(() => ({
    hidden: document.getElementById('film').hidden,
    back: document.activeElement.dataset?.film,
    locked: document.documentElement.classList.contains('film-open'),
  }))
  check(
    'UX-23',
    `${kind}: project film opens, plays its chapters, traps focus, Escape closes and returns focus`,
    f1.open &&
      f1.ch === '0' &&
      f1.focus === 'film-close' &&
      f1.locked &&
      web.ch === '1' &&
      web.img &&
      sys.ch === '3' &&
      inside &&
      f2.hidden &&
      f2.back === 'divine' &&
      !f2.locked,
    JSON.stringify({ f1, web, f2 }),
  )
  check(
    'UX-24',
    `${kind}: Divine results match the ad account exactly, with source and period`,
    sys.kpis.join('|') === '29.1K|685|26|$35.80|$1.36' && /Ad Manager/.test(sys.src),
    sys.kpis.join(' · '),
  )

  // "see how the system works" hands off to the walkthrough with the matching scenario
  await page.click('#brand-wall [data-film="wreck"]')
  await page.waitForTimeout(600)
  await page.click('#film-chapters [data-ch="3"]')
  await page.waitForTimeout(900)
  await page.click('[data-film-how]')
  await page.waitForTimeout(1600)
  const how = await page.evaluate(() => ({
    hidden: document.getElementById('film').hidden,
    scenario: JSON.parse(sessionStorage.getItem('sb-scope-v2') || '{}').scenarioId,
  }))
  check(
    'UX-25',
    `${kind}: film hands off to the matching walkthrough`,
    how.hidden && how.scenario === 'ops',
    JSON.stringify(how),
  )
  const ow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)
  check(
    'UX-19',
    `${kind}: no page errors or overflow after the showcase`,
    !errors.length && ow <= 0,
    errors.join(' | '),
  )
  await ctx.close()
}
for (const kind of ['desktop', 'phone']) {
  // live demo: the real ROC designer runs sandboxed, closes cleanly
  const { ctx, page, errors } = await open(kind)
  await page.evaluate(() =>
    document.getElementById('demo-grid').scrollIntoView({ behavior: 'instant', block: 'center' }),
  )
  await page.waitForTimeout(500)
  const launch = await page.$('#demo-grid .btn[data-demo="roc"]')
  await launch.click()
  await page.waitForTimeout(3500)
  const d = await page.evaluate(() => {
    const f = document.getElementById('demo-iframe')
    return {
      open: !document.getElementById('demo').hidden,
      ready: document.getElementById('demo').classList.contains('ready'),
      sandbox: f.getAttribute('sandbox'),
      focus: document.activeElement.id,
    }
  })
  const text = await page
    .frameLocator('#demo-iframe')
    .locator('body')
    .innerText()
    .catch(() => '')
  await page.screenshot({ path: `${OUT}/${kind}-demo.png` })
  await page.keyboard.press('Escape')
  await page.waitForTimeout(300)
  const after = await page.evaluate(() => ({
    hidden: document.getElementById('demo').hidden,
    back: document.activeElement.dataset?.demo,
    unlocked: !document.documentElement.classList.contains('film-open'),
  }))
  check(
    'UX-26',
    `${kind}: live demo runs the ROC designer sandboxed (no same-origin), Escape closes and returns focus`,
    d.open &&
      d.ready &&
      !/allow-same-origin/.test(d.sandbox) &&
      d.focus === 'demo-close' &&
      /Monument Designer/.test(text) &&
      after.hidden &&
      after.back === 'roc' &&
      after.unlocked &&
      !errors.length,
    JSON.stringify({ d, after, errors: errors.slice(0, 2) }),
  )
  await ctx.close()
}
{
  // reduced motion: the film still works, as cuts
  const { ctx, page, errors } = await open('phone', {}, { reducedMotion: 'reduce' })
  await page.evaluate(() => document.getElementById('work').scrollIntoView({ behavior: 'instant' }))
  await page.waitForTimeout(400)
  await page.click('#brand-wall [data-film="veterans"]')
  await page.waitForTimeout(4200)
  const r = await page.evaluate(() => ({
    reduced: document.getElementById('film').classList.contains('reduced'),
    ch: +document.getElementById('film').dataset.ch,
    lit: document.getElementById('brand-wall').classList.contains('lit'),
  }))
  check(
    'UX-08',
    'reduced motion: logo wall shows at once, film advances with cuts',
    r.reduced && r.ch >= 1 && r.lit && !errors.length,
    JSON.stringify(r),
  )
  await ctx.close()
}

await browser.close()
await server.close()
relay.close()
const failed = results.filter((r) => !r.pass)
console.log(
  `\n${results.length - failed.length}/${results.length} checks passed · screenshots in ${OUT}`,
)
process.exit(failed.length ? 1 : 0)
