#!/usr/bin/env node
/*
 * Renders the System Based brand shots to brand/renders/.
 *
 *   npm run brand:render                      all stills (PNG)
 *   npm run brand:render -- hero community    just these stills
 *   npm run brand:render -- --video hero      cinematic MP4 (needs ffmpeg)
 *   npm run brand:render -- --video hero --seconds 6 --fps 30 --scale 0.5
 */
import process from 'node:process'
import { createServer } from 'vite'
import { createRequire } from 'node:module'
import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

// Playwright is loaded with require so a global install works too.
// First time on your machine: npm i -D playwright && npx playwright install chromium
let chromium
try {
  ;({ chromium } = createRequire(import.meta.url)('playwright'))
} catch {
  console.error('Playwright not found. Run: npm i -D playwright && npx playwright install chromium')
  process.exit(1)
}

const SIZES = {
  hero: [1920, 1080],
  sections: [1920, 1080],
  pricing: [1920, 1080],
  community: [1080, 1350],
  avatar: [1080, 1080],
  banner: [1500, 500],
  story: [1080, 1920],
}

const args = process.argv.slice(2)
const opt = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  if (i === -1) return fallback
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}
const video = opt('video', null)
const seconds = parseFloat(opt('seconds', '7'))
const fps = parseInt(opt('fps', '30'), 10)
const scale = parseFloat(opt('scale', '1'))
const stills = args.length ? args : video ? [] : Object.keys(SIZES)

const outDir = resolve(import.meta.dirname, '..', 'brand', 'renders')
await mkdir(outDir, { recursive: true })

process.env.BRAND_RENDER = '1' // keeps the Vue devtools badge out of the renders
const server = await createServer({
  root: resolve(import.meta.dirname, '..'),
  logLevel: 'error',
  server: { port: 5199, strictPort: false },
})
await server.listen()
const base = server.resolvedUrls.local[0]

const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
})

async function open(shot, query) {
  const [w, h] = SIZES[shot]
  const page = await browser.newPage({
    viewport: { width: w, height: h },
    deviceScaleFactor: scale,
  })
  page.on('pageerror', (e) => console.error(`[${shot}]`, e.message))
  await page.goto(`${base}brand-studio.html?shot=${shot}&render&${query}`)
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 })
  return page
}

for (const shot of stills) {
  if (!SIZES[shot]) {
    console.error(`Unknown shot "${shot}". Options: ${Object.keys(SIZES).join(', ')}`)
    continue
  }
  const page = await open(shot, 't=10')
  const file = resolve(outDir, `${shot}.png`)
  await page.screenshot({ path: file })
  await page.close()
  console.log('✓', file)
}

if (video) {
  const [w, h] = SIZES[video]
  const page = await open(video, 'anim=1&t=0')
  const file = resolve(outDir, `${video}-cinematic.mp4`)
  const ff = spawn(
    'ffmpeg',
    [
      '-y',
      '-f',
      'image2pipe',
      '-framerate',
      String(fps),
      '-i',
      '-',
      '-vf',
      `scale=${Math.round((w * scale) / 2) * 2}:${Math.round((h * scale) / 2) * 2}`,
      '-c:v',
      'libx264',
      '-pix_fmt',
      'yuv420p',
      '-crf',
      '18',
      '-movflags',
      '+faststart',
      file,
    ],
    { stdio: ['pipe', 'ignore', 'inherit'] },
  )
  const total = Math.round(seconds * fps)
  for (let i = 0; i < total; i++) {
    await page.evaluate((t) => window.__frame(t), i / fps)
    ff.stdin.write(await page.screenshot({ type: 'png' }))
    if (i % fps === 0) process.stdout.write(`\r${video}: ${i}/${total} frames`)
  }
  ff.stdin.end()
  await new Promise((r) => ff.on('close', r))
  console.log('\n✓', file)
}

await browser.close()
await server.close()
