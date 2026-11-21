#!/usr/bin/env node
/*
 * Renders the System-Based Instagram kit to brand/instagram/out/.
 *
 *   npm run brand:instagram              stills + reels
 *   npm run brand:instagram -- --stills  stills only
 *   npm run brand:instagram -- --reels   reels only (needs ffmpeg)
 *
 * Stills come from brand/instagram/kit.html. Reels are the website's own project films,
 * recorded in portrait (1080x1920) from the real site, with the player controls hidden
 * and a System-Based end card.
 */
import process from 'node:process'
import { Buffer } from 'node:buffer'
import { createServer } from 'vite'
import { createRequire } from 'node:module'
import { spawnSync } from 'node:child_process'
import { mkdir, rm, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'

const { chromium } = createRequire(import.meta.url)('playwright')
const args = process.argv.slice(2)
const doStills = !args.includes('--reels')
const doReels = !args.includes('--stills')
const only = args.filter((a) => !a.startsWith('--'))

const root = resolve(import.meta.dirname, '..')
const out = join(root, 'brand', 'instagram', 'out')
await mkdir(out, { recursive: true })

process.env.BRAND_RENDER = '1'
const server = await createServer({
  root,
  logLevel: 'error',
  server: { port: 5198, strictPort: false },
})
await server.listen()
const base = server.resolvedUrls.local[0]
const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
})

const POST = [1080, 1350]
const STORY = [1080, 1920]
const STILLS = {
  'hl-work': STORY,
  'hl-systems': STORY,
  'hl-packages': STORY,
  'hl-community': STORY,
  'hl-start': STORY,
  'p-statement': POST,
  'p-bottlenecks': POST,
  'p-results': POST,
  'p-wall': POST,
  'p-systems': POST,
  'p-community': POST,
  'cover-divine': STORY,
  'cover-roc': STORY,
  'cover-wreck': STORY,
  end: STORY,
}

async function still(name) {
  const [w, h] = STILLS[name]
  const page = await browser.newPage({ viewport: { width: w, height: h } })
  page.on('pageerror', (e) => console.error(`[${name}]`, e.message))
  await page.goto(`${base}brand/instagram/kit.html?a=${name}&w=${w}&h=${h}`)
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 })
  await page.screenshot({ path: join(out, `${name}.png`) })
  await page.close()
  console.log('✓', name)
}

if (doStills)
  for (const n of Object.keys(STILLS)) if (!only.length || only.includes(n)) await still(n)

/* ---------- reels: the site's project films in portrait ---------- */
async function reel(id, seconds) {
  const frames = join(out, `.frames-${id}`)
  await rm(frames, { recursive: true, force: true })
  await mkdir(frames, { recursive: true })
  // phone-width layout at 2x: the film fills the frame and its captions stay readable
  const ctx = await browser.newContext({
    viewport: { width: 540, height: 960 },
    deviceScaleFactor: 2,
  })
  await ctx.addInitScript(() => {
    try {
      sessionStorage.setItem('sb-intro', 'seen')
    } catch {
      /* sandboxed frames */
    }
  })
  const page = await ctx.newPage()
  await page.goto(`${base}site/`)
  await page.waitForTimeout(1500)
  // hide the player controls; keep the film itself
  await page.addStyleTag({
    content: `.film-top,.film-bottom{display:none!important}.film .fs{padding-top:70px;padding-bottom:90px}.film .fs-cap{font-size:20px}.fs-phone{gap:46px!important}.fp-phone{height:min(46vh,460px)!important}`,
  })
  const cdp = await ctx.newCDPSession(page)
  const shots = []
  cdp.on('Page.screencastFrame', async (f) => {
    shots.push({ data: f.data, t: f.metadata.timestamp })
    await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {})
  })
  await page.evaluate((id) => {
    document.getElementById('work').scrollIntoView({ behavior: 'instant' })
    document.querySelector(`#brand-wall [data-film="${id}"]`).click()
  }, id)
  await cdp.send('Page.startScreencast', {
    format: 'jpeg',
    quality: 92,
    maxWidth: 1080,
    maxHeight: 1920,
    everyNthFrame: 1,
  })
  await page.waitForTimeout(seconds * 1000)
  await cdp.send('Page.stopScreencast')
  await ctx.close()

  // frames → constant 30 fps using their real timestamps
  const list = []
  for (let i = 0; i < shots.length; i++) {
    const file = join(frames, `${String(i).padStart(5, '0')}.jpg`)
    await writeFile(file, Buffer.from(shots[i].data, 'base64'))
    const d = i < shots.length - 1 ? shots[i + 1].t - shots[i].t : 1 / 30
    list.push(`file '${file}'\nduration ${Math.max(0.001, d).toFixed(4)}`)
  }
  list.push(`file '${join(frames, `${String(shots.length - 1).padStart(5, '0')}.jpg`)}'`)
  await writeFile(join(frames, 'list.txt'), list.join('\n'))
  const film = join(frames, 'film.mp4')
  const ff = (a) => {
    const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', ...a])
    if (r.status) throw new Error(r.stderr.toString())
  }
  ff([
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    join(frames, 'list.txt'),
    '-vf',
    'fps=30,scale=1080:1920,format=yuv420p',
    '-c:v',
    'libx264',
    '-crf',
    '18',
    '-preset',
    'medium',
    film,
  ])
  // end card: 2.5 s, faded in
  const endCard = join(frames, 'end.mp4')
  ff([
    '-loop',
    '1',
    '-t',
    '2.5',
    '-i',
    join(out, 'end.png'),
    '-vf',
    'fps=30,scale=1080:1920,format=yuv420p,fade=t=in:st=0:d=0.5',
    '-c:v',
    'libx264',
    '-crf',
    '18',
    endCard,
  ])
  ff([
    '-i',
    film,
    '-i',
    endCard,
    '-filter_complex',
    '[0:v][1:v]concat=n=2:v=1[v]',
    '-map',
    '[v]',
    '-c:v',
    'libx264',
    '-crf',
    '19',
    '-preset',
    'medium',
    '-movflags',
    '+faststart',
    join(out, `reel-${id}.mp4`),
  ])
  await rm(frames, { recursive: true, force: true })
  console.log('✓ reel', id, `${shots.length} frames`)
}

if (doReels) {
  if (!only.length || only.includes('end')) await still('end')
  const REELS = { divine: 25, roc: 37, wreck: 26 }
  for (const [id, s] of Object.entries(REELS))
    if (!only.length || only.includes(id)) await reel(id, s)
}

await browser.close()
await server.close()
