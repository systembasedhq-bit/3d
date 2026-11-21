/*
 * Funnel events. Only IDs travel (problem, scenario, system, service, package):
 * never names, emails, phone numbers or free text.
 * Sends to whatever the host page already loaded (GHL tracking, gtag, Meta Pixel, dataLayer).
 */
const sent = new Set()

export function track(event, props = {}, { once = false } = {}) {
  const key = event + JSON.stringify(props)
  if (once && sent.has(key)) return
  sent.add(key)
  try {
    window.dataLayer?.push({ event, ...props })
    window.gtag?.('event', event, props)
    window.fbq?.('trackCustom', event, props)
  } catch {
    /* analytics must never break the page */
  }
}

// The single Meta "Lead" conversion: only after a sales inquiry is accepted
export function trackLead(requestId) {
  if (sent.has('lead:' + requestId)) return
  sent.add('lead:' + requestId)
  try {
    window.fbq?.('track', 'Lead')
    window.gtag?.('event', 'generate_lead')
  } catch {
    /* ignore */
  }
}
