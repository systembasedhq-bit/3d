/*
 * Website story copy. Services, packages, prices and terms live in src/catalog/catalog.js.
 */

// 2. Understand the company
export const STATEMENT = {
  line: 'System-Based builds the systems that run service businesses.',
  body: 'We build how leads get answered, how demand gets created, how your brand earns trust and how the work gets done. Then we run those systems for you, or hand them over.',
  facts: [
    { k: '4', v: 'systems' },
    { k: '20', v: 'services' },
    { k: '3', v: 'ways to build' },
  ],
  who: 'For owner-led service businesses: trades, home services, auto, hospitality and local professional services.',
}

// 3. Identify the problem
export const NEEDS = [
  {
    q: 'Leads call or message, and nobody gets back fast enough',
    system: 'CR',
    start: 'capture',
    why: 'Start with Capture. It answers every lead in seconds and follows up until they book.',
  },
  {
    q: 'I need more people calling in the first place',
    system: 'GR',
    start: 'pipeline',
    why: 'Pipeline adds ads, landing pages and content on top of Capture, so the new leads get booked instead of wasted.',
  },
  {
    q: 'My brand or website makes us look smaller than we are',
    system: 'BB',
    start: 'project',
    why: 'Start with a Brand & Build project. It is quoted once and wired into Client Response, ready to hand off into Capture.',
  },
  {
    q: 'My tools and team don’t talk to each other',
    system: 'AO',
    start: 'command',
    why: 'Command includes a custom AI agent and an owner dashboard. Bigger operations builds are scoped as their own project.',
  },
]

// 5. See the infrastructure work: the order a customer moves through the systems
export const FIT_CHAPTERS = [
  {
    code: 'GR',
    title: 'Growth brings people in.',
    body: 'Ads, landing pages and content put you in front of the right local customers.',
  },
  {
    code: 'BB',
    title: 'Brand & Build earns the trust.',
    body: 'A sharp brand and a fast website make you the obvious choice when they compare.',
  },
  {
    code: 'CR',
    title: 'Client Response books the job.',
    body: 'Every call, text and form is answered in seconds, qualified, followed up and booked.',
  },
  {
    code: 'AO',
    title: 'AI & Operations runs it all.',
    body: 'Agents and automations connect every tool, and your dashboard shows what is working.',
  },
]

// Interactive lead demo: an illustrative business, not a client
export const JOURNEY = [
  {
    label: 'Missed call',
    time: '7:42 PM',
    caption: 'A homeowner calls after hours and nobody can pick up.',
    chat: [
      { from: 'sys', text: 'Missed call · (555) 014-2290' },
      {
        from: 'biz',
        text: 'Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?',
      },
    ],
    status: 'Responded',
    fields: { Source: 'Missed call', Reply: '8 seconds' },
    kpi: { leads: 1, reply: '8s', booked: 0, followups: 0 },
    codes: ['CR-02', 'CR-05'],
  },
  {
    label: 'Qualified',
    time: '7:44 PM',
    caption: 'The AI receptionist asks the questions you would ask.',
    chat: [
      {
        from: 'lead',
        text: 'Got a leak over the kitchen after the storm. Can someone look at it?',
      },
      { from: 'biz', text: 'We can help. What’s the address, and is the leak active right now?' },
      { from: 'lead', text: '418 Elm St. Yes, dripping slowly.' },
    ],
    status: 'Qualified',
    fields: { Service: 'Leak repair', Urgency: 'Active leak', Address: '418 Elm St' },
    kpi: { leads: 1, reply: '8s', booked: 0, followups: 0 },
    codes: ['CR-01'],
  },
  {
    label: 'Booked',
    time: '7:46 PM',
    caption: 'The job lands in your calendar and you get an alert.',
    chat: [
      {
        from: 'biz',
        text: 'I can get an inspector out tomorrow at 9:00 AM or 1:30 PM. Which works?',
      },
      { from: 'lead', text: '9 works.' },
      {
        from: 'biz',
        text: 'You’re booked for tomorrow at 9:00 AM. You’ll get a reminder tonight.',
      },
    ],
    status: 'Booked',
    fields: { Appointment: 'Tomorrow 9:00 AM', 'Owner alert': 'Sent' },
    kpi: { leads: 1, reply: '8s', booked: 1, followups: 0 },
    codes: ['CR-04'],
  },
  {
    label: 'Followed up',
    time: 'Next day',
    caption: 'Reminders, a review request and a clean record.',
    chat: [
      { from: 'biz', text: 'Reminder: your inspector arrives at 9:00 AM. Reply C to confirm.' },
      { from: 'lead', text: 'C' },
      { from: 'sys', text: 'After the job · review request sent' },
    ],
    status: 'Completed',
    fields: { Reminder: 'Confirmed', Review: 'Requested' },
    kpi: { leads: 1, reply: '8s', booked: 1, followups: 2 },
    codes: ['CR-03', 'GR-05', 'AO-02'],
  },
]

export const FAQ = [
  {
    q: 'What’s the difference between a system and a package?',
    a: 'The four systems are what we do: Client Response, Growth, Brand & Build, and AI & Operations. Packages (Capture, Pipeline, Command) are ready-made bundles of services from those systems. If a package doesn’t fit, we build a custom proposal from the same services.',
  },
  {
    q: 'What am I paying for?',
    a: 'Two parts. Implementation is a one-time fee to build and configure your system. Management is a monthly fee to run, monitor and improve it. Work outside the agreed scope is quoted before it starts, and ad spend is always paid from your own ad account.',
  },
  {
    q: 'How does performance pricing work?',
    a: 'On Pipeline and Command, you can swap the monthly fee for a reduced floor plus 10% of the collected revenue on each new job we bring in, or a fee that matches your ad spend. It requires marketing run by us, and only completed, paid jobs count. The full rules are under Packages.',
  },
  {
    q: 'Do I need all four systems?',
    a: 'No. Most businesses start with Capture and add more as the numbers justify it. If your brand or website is the bottleneck, start with a one-time project, which plugs into Capture at handoff.',
  },
  {
    q: 'Can you work with the tools I already use?',
    a: 'Usually, yes. On the fit call we look at your phone, calendar, CRM and website, then tell you what connects, what we’d replace and why.',
  },
  {
    q: 'What happens after I send an inquiry?',
    a: 'We review what you selected, then book a short fit call. You leave it with a recommended starting scope, the investment and a written next step.',
  },
  {
    q: 'What is Pressure Built?',
    a: 'Our community and product line for owners who want to build systems themselves. It’s separate from our done-for-you work, and members can move to implementation whenever they want it built for them.',
  },
]
