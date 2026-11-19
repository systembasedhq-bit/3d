/*
 * Site settings. Fill these in when each piece is ready; the site adapts automatically.
 */
export const CONFIG = {
  // Your booking page (Calendly, Cal.com, GoHighLevel...). When set, the inquiry form offers
  // "Pick a time" after it sends, so qualified leads book straight away.
  BOOKING_URL: '',

  // Where the inquiry form sends. It POSTs one JSON object in the `system-based.inquiry.v1`
  // shape (see src/catalog/README.md), ready for a CRM webhook (GoHighLevel, Zapier, Make)
  // and, later, the System-Based OS. When empty, the form falls back to an email to
  // CONTACT_EMAIL. When both are empty, the form says it isn't connected yet.
  FORM_ENDPOINT: '',
  CONTACT_EMAIL: '',

  // Pressure Built community link (Skool, Discord, Circle...). Empty = "Opening soon".
  COMMUNITY_URL: '',

  // Prices, terms and limits in src/catalog/catalog.js are proposals until approved.
  // true  = show proposed values with a "Proposed" tag (for review)
  // false = show "Confirmed on your fit call" for anything not approved (use for launch)
  SHOW_PROPOSED: true,
}
