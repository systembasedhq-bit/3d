/*
 * Site settings. Fill these in when each piece is ready; the site adapts automatically.
 */
export const CONFIG = {
  // Your booking page (Calendly, Cal.com, GoHighLevel...). When set, every "Book a call"
  // button opens it. When empty, "Book a call" opens the built-in request form.
  BOOKING_URL: '',

  // Where the request form sends. Any form backend that accepts a JSON POST works
  // (Formspree, Basin, a GoHighLevel/Zapier webhook...). When empty, the form falls back to
  // opening an email to CONTACT_EMAIL. When both are empty, the form says it isn't connected yet.
  FORM_ENDPOINT: '',
  CONTACT_EMAIL: '',

  // Pressure Built community link (Skool, Discord, Circle...). Empty = "Opening soon".
  COMMUNITY_URL: '',
}
