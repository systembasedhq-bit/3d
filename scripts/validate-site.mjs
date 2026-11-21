#!/usr/bin/env node
/*
 * Content guardrails for the website. Run: npm run test:content
 *  - every service a scenario references exists in the catalog
 *  - every scenario has 8 beats; CRM stages only move forward
 *  - the dashboard never shows a booking before the lead card is booked
 *  - no internal system codes or the old community name in visitor-facing copy
 */
import process from 'node:process'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { SERVICES, PACKAGES, SYSTEMS } from '../src/catalog/catalog.js'
import { SCENARIOS, BEAT_LABELS } from '../src/site/experience/scenarios.js'

const root = resolve(import.meta.dirname, '..')
const errors = []
const fail = (m) => errors.push(m)
const codes = new Set(SERVICES.map((s) => s.code))
const CODE_RE = /\b(CR|GR|BB|AO)(-\d\d)?\b/

if (BEAT_LABELS.length !== 8) fail('BEAT_LABELS must have 8 entries')
for (const s of SCENARIOS) {
  const where = `scenario ${s.id}`
  s.services.forEach((c) => codes.has(c) || fail(`${where}: unknown service ${c}`))
  s.systems.forEach(
    (c) => SYSTEMS.some((x) => x.code === c) || fail(`${where}: unknown system ${c}`),
  )
  if (s.recommend.packageId && !PACKAGES.some((p) => p.id === s.recommend.packageId))
    fail(`${where}: unknown package ${s.recommend.packageId}`)
  if (s.beats.length !== 8) fail(`${where}: has ${s.beats.length} beats, needs 8`)
  let lastStage = -1
  s.beats.forEach((b, i) => {
    const at = `${where} beat ${i}`
    if (!b.title || !b.body || !b.screen) fail(`${at}: missing title, body or screen`)
    if (b.lead) {
      if (b.lead.stage < lastStage) fail(`${at}: CRM stage goes backwards`)
      lastStage = b.lead.stage
    }
    const booked = b.owner?.kpis.find(([k]) => /booked|scheduled/i.test(k))
    if (booked && +booked[1] > 0 && (!b.lead || b.lead.stage < 3))
      fail(`${at}: dashboard shows a booking before the lead is booked`)
    const visible = JSON.stringify([b.title, b.body, b.screen, b.lead?.fields, b.owner])
    if (CODE_RE.test(visible)) fail(`${at}: internal code in visitor-facing copy`)
  })
  if (!s.beats.some((b) => b.connected)) fail(`${where}: no "connected" beat`)
  if (!s.beats.at(-1).choose) fail(`${where}: last beat must be the "choose" beat`)
}

for (const f of [
  'site/index.html',
  'src/site/content.js',
  'src/site/main.js',
  'src/site/community-content.js',
]) {
  let text = ''
  try {
    text = await readFile(resolve(root, f), 'utf8')
  } catch {
    continue
  }
  if (/pressure built/i.test(text)) fail(`${f}: still mentions "Pressure Built"`)
}

if (errors.length) {
  console.error('✗ content checks failed:\n  ' + errors.join('\n  '))
  process.exit(1)
}
console.log(`✓ content checks passed (${SCENARIOS.length} scenarios, ${SERVICES.length} services)`)
