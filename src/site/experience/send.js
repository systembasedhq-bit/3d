/*
 * Sends one record (inquiry or community waitlist) to CONFIG.FORM_ENDPOINT.
 *
 * Two modes, one request each, never a duplicate retry:
 *  - relay (recommended): the endpoint is the small relay in relay/worker.js. JSON in,
 *    JSON { ok: true } out, with CORS. Success is CONFIRMED by the server.
 *  - ghl: the endpoint is a GoHighLevel Inbound Webhook URL. GHL doesn't send CORS
 *    headers to browsers, so the record goes as one form-encoded POST the browser
 *    can't read the answer to. It is SENT but UNCONFIRMED, and the UI says so.
 */
import { CONFIG } from '../config.js'

export const MAX_BYTES = 16000

function modeFor(url) {
  if (CONFIG.FORM_MODE === 'relay' || CONFIG.FORM_MODE === 'ghl') return CONFIG.FORM_MODE
  return /leadconnectorhq\.com|msgsndr\.com|gohighlevel\.com/i.test(url) ? 'ghl' : 'relay'
}

/** @returns {Promise<{ ok: boolean, confirmed: boolean, reason?: string }>} */
export async function sendRecord(record) {
  const url = CONFIG.FORM_ENDPOINT
  if (!url) return { ok: false, confirmed: false, reason: 'not-configured' }
  const json = JSON.stringify(record)
  if (json.length > MAX_BYTES) return { ok: false, confirmed: false, reason: 'too-large' }
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 15000)
  try {
    if (modeFor(url) === 'relay') {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: json,
        signal: ctrl.signal,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.ok === false)
        return { ok: false, confirmed: false, reason: data.error || `status ${res.status}` }
      return { ok: true, confirmed: true }
    }
    // GHL direct: flat fields + the full record as `payload`, one opaque request
    const flat = Object.fromEntries(
      Object.entries(record).filter(([, v]) => v === null || typeof v !== 'object'),
    )
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams({ ...flat, payload: json }),
      signal: ctrl.signal,
    })
    return { ok: true, confirmed: false }
  } catch (err) {
    return {
      ok: false,
      confirmed: false,
      reason: err.name === 'AbortError' ? 'timeout' : 'network',
    }
  } finally {
    clearTimeout(timer)
  }
}

export function utmFromPage() {
  const q = new URLSearchParams(location.search)
  return Object.fromEntries(
    [...q].filter(([k]) => k.startsWith('utm_')).map(([k, v]) => [k, v.slice(0, 120)]),
  )
}
