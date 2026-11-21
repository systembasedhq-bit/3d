/*
 * System-Based form relay (Cloudflare Worker). Recommended for production.
 *
 * Why: a GHL Inbound Webhook URL in a public page can be read by anyone and spammed,
 * and browsers can't confirm delivery to it. The relay keeps the real webhook URL
 * secret, validates and size-limits every record, drops bots and duplicate submits,
 * rate-limits each visitor, and answers the browser with { ok: true } only after GHL
 * accepted the record.
 *
 * Deploy (free tier is plenty):
 *   npm create cloudflare@latest sb-relay   (choose "Hello World" worker), replace its
 *   src/index.js with this file, then:
 *   npx wrangler secret put GHL_WEBHOOK_URL        your GHL Inbound Webhook URL
 *   npx wrangler secret put GHL_COMMUNITY_WEBHOOK_URL   optional: a separate workflow
 *   set ALLOWED_ORIGINS in wrangler.toml [vars], e.g. "https://systembased.net,https://www.systembased.net"
 *   npx wrangler deploy
 * Then put the worker URL in SB_CONFIG.FORM_ENDPOINT (FORM_MODE 'relay' or 'auto').
 */

const MAX_BYTES = 16000
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map() // per-isolate rate limit; add a KV / Rate Limiting binding for stricter limits

const REQUIRED = {
  'system-based.inquiry.v2': ['full_name', 'email', 'sb_request_id'],
  'system-based.community.v1': ['email', 'sb_request_id'],
}

function cors(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  const ok = allowed.includes(origin)
  return {
    'Access-Control-Allow-Origin': ok ? origin : allowed[0] || 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}
const reply = (status, body, headers) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  })

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || ''
    const h = cors(origin, env)
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: h })
    if (request.method !== 'POST') return reply(405, { ok: false, error: 'method' }, h)

    const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim())
    if (!allowed.includes(origin)) return reply(403, { ok: false, error: 'origin' }, h)

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown'
    const now = Date.now()
    const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
    if (recent.length >= MAX_PER_WINDOW) return reply(429, { ok: false, error: 'rate' }, h)
    hits.set(ip, [...recent, now])

    const text = await request.text()
    if (text.length > MAX_BYTES) return reply(413, { ok: false, error: 'size' }, h)
    let rec
    try {
      rec = JSON.parse(text)
    } catch {
      return reply(400, { ok: false, error: 'json' }, h)
    }
    const need = REQUIRED[rec.schema]
    if (!need) return reply(400, { ok: false, error: 'schema' }, h)
    if (rec.website) return reply(200, { ok: true }, h) // honeypot: pretend success, send nothing
    for (const k of need)
      if (!rec[k] || String(rec[k]).length > 500)
        return reply(400, { ok: false, error: `field:${k}` }, h)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rec.email))
      return reply(400, { ok: false, error: 'email' }, h)

    // Idempotency: the same request id within 24h is acknowledged, not re-sent
    const cache = caches.default
    const key = new Request(`https://relay.local/seen/${encodeURIComponent(rec.sb_request_id)}`)
    if (await cache.match(key)) return reply(200, { ok: true, duplicate: true }, h)

    const target =
      rec.schema === 'system-based.community.v1' && env.GHL_COMMUNITY_WEBHOOK_URL
        ? env.GHL_COMMUNITY_WEBHOOK_URL
        : env.GHL_WEBHOOK_URL
    if (!target) return reply(500, { ok: false, error: 'not-configured' }, h)

    // keep only plain fields GHL can map, plus the full record for reference
    const flat = Object.fromEntries(
      Object.entries(rec)
        .filter(([, v]) => v === null || typeof v !== 'object')
        .map(([k, v]) => [k, typeof v === 'string' ? v.slice(0, 2000) : v]),
    )
    const res = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...flat, received_by: 'sb-relay' }),
    })
    if (!res.ok) return reply(502, { ok: false, error: `ghl:${res.status}` }, h)
    ctx.waitUntil(
      cache.put(key, new Response('1', { headers: { 'Cache-Control': 'max-age=86400' } })),
    )
    return reply(200, { ok: true }, h)
  },
}
