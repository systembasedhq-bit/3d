/*
 * Public storytelling copy that isn't part of the catalog or the walkthrough.
 * Services, packages and prices: src/catalog/catalog.js
 * The four walkthrough stories: src/site/experience/scenarios.js
 * Community: src/site/community-content.js
 */

export const STATEMENT = {
  line: 'System-Based builds the systems behind how a business attracts customers, responds to them, books work and operates.',
  body: 'We set up the tools and processes that answer every inquiry, bring in new customers, make your business look the part and keep your team in sync. Then we run them for you, or hand them over.',
  facts: [
    { k: '4', v: 'systems' },
    { k: '20', v: 'services' },
    { k: '3', v: 'ways to build' },
  ],
  who: 'For owner-led service businesses: painting, roofing and trades, auto and detailing, hospitality and other local operations.',
}

// One line per system for the explorer. Keyed by catalog code (never shown).
export const SYSTEM_LINES = {
  CR: 'Respond to customers, qualify inquiries, track conversations and keep follow-up moving.',
  GR: 'Create new demand and see which campaigns bring in real opportunities.',
  BB: 'Build the identity, website and digital experience customers trust.',
  AO: 'Connect tools, reduce busywork and give your team a clearer view of the business.',
}

// What each package is for, shown before what's inside it
export const PACKAGE_FIT = {
  capture: 'For when inquiries and follow-ups are falling through the cracks.',
  pipeline: 'For when you need more demand, and a way to convert and track it.',
  command: 'For when you want connected visibility, agents and coordination across the operation.',
}

export const FAQ = [
  {
    q: 'What’s the difference between a system and a package?',
    a: 'The four systems are what we do: Client Response, Growth, Brand & Build, and AI & Operations. Packages (Capture, Pipeline, Command) are ready-made bundles of services from those systems. If none fits, we scope a custom proposal from the same services.',
  },
  {
    q: 'What am I paying for?',
    a: 'Usually two parts. Implementation is a one-time fee to build and set up your system. Management is a monthly fee to run, monitor and improve it. Anything outside the agreed scope is quoted before it starts, and ad spend is paid from your own ad account. Exact figures are confirmed after a short scoping call.',
  },
  {
    q: 'Do I need all four systems?',
    a: 'No. Most businesses start where work is slipping, often answering and following up on inquiries, and add more only when it makes sense. A website or brand project can also stand on its own.',
  },
  {
    q: 'Is the walkthrough on this page real?',
    a: 'It’s an illustrative example with fictional businesses and numbers, built to show how the pieces connect. Real projects are in the Work section, and we only publish client results with their approval.',
  },
  {
    q: 'Can you work with the tools I already use?',
    a: 'Often, yes. On the first call we look at your phone, calendar, CRM and website, then tell you what connects, what we’d replace and why. We confirm integrations during scoping rather than promising them up front.',
  },
  {
    q: 'What happens after I send my scope?',
    a: 'We read what you shared and reply personally with a recommendation and the next step, usually a short fit call. Nothing is built or billed until you agree to a written scope.',
  },
  {
    q: 'What is the System-Based Business Community?',
    a: 'A place to watch real systems being built, learn what works and connect with other owners and operators. It’s free to follow. Templates and done-for-you help are there if you want them, never required.',
  },
]
