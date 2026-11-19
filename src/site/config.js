/*
 * Site settings. Fill these in when each piece is ready; the site adapts automatically.
 * The GHL links can also be passed at build time instead of edited here:
 *   npm run build:ghl -- --url <host> --webhook <url> --calendar <url> --community <url>
 */
// Settings set on the page itself win (the GHL drop-in code defines window.SB_CONFIG)
const RT = (typeof window !== 'undefined' && window.SB_CONFIG) || {}
const pick = (key, envValue, fallback) => RT[key] ?? (envValue || fallback)

export const CONFIG = {
  // GoHighLevel setup: see ghl/README.md for the full walkthrough.

  // Your GHL calendar booking link (Calendars > Share > Permanent link). After the inquiry
  // sends, the form shows the calendar so qualified leads book straight away.
  BOOKING_URL: pick('BOOKING_URL', import.meta.env.VITE_SB_BOOKING_URL, ''),
  // true = show the calendar inside the page, false = a "Pick a time" button that opens it
  BOOKING_EMBED: pick('BOOKING_EMBED', null, true),

  // Your GHL Inbound Webhook URL (Automation > Workflow > trigger: Inbound Webhook).
  // The form POSTs one `system-based.inquiry.v1` record with flat GHL-ready fields
  // (first_name, email, phone, tags, sb_package ...). See ghl/README.md for the mapping.
  // When empty, the form falls back to an email to CONTACT_EMAIL.
  FORM_ENDPOINT: pick('FORM_ENDPOINT', import.meta.env.VITE_SB_FORM_ENDPOINT, ''),
  CONTACT_EMAIL: pick('CONTACT_EMAIL', null, ''),

  // Pressure Built link: your GHL Communities group (or Skool, Discord...). Empty = "Opening soon".
  COMMUNITY_URL: pick('COMMUNITY_URL', import.meta.env.VITE_SB_COMMUNITY_URL, ''),

  // Prices, terms and limits in src/catalog/catalog.js are proposals until approved.
  // true  = show proposed values with a "Proposed" tag (for review)
  // false = show "Confirmed on your fit call" for anything not approved (use for launch)
  SHOW_PROPOSED: pick('SHOW_PROPOSED', null, true),

  // The 3D mockup tool link in Work. Empty hides the link (the GHL drop-in has no tool).
  MOCKUP_TOOL_URL: pick('MOCKUP_TOOL_URL', import.meta.env.VITE_SB_MOCKUP_URL, '../index.html'),
}
