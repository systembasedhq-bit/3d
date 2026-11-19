/*
 * All website copy that isn't a project. Edit text, prices and lists here.
 */

export const SYSTEMS = [
  {
    k: 'A',
    id: 'response',
    name: 'Client Response System',
    short: 'Client Response',
    job: 'Catch, answer and book every lead',
    problem:
      'Calls go to voicemail, texts sit unanswered and leads go cold before anyone follows up. Every missed inquiry is a job someone else books.',
    outcome:
      'Every call, text and form gets an answer in seconds, every lead is followed up until it books or closes, and you can see all of it in one place.',
    flow: ['Lead reaches out', 'Instant reply', 'Qualified', 'Booked', 'Followed up'],
    deliverables: [
      'AI receptionist that answers calls and texts',
      'Missed-call text back within seconds',
      'Automated follow-up until the lead books or closes',
      'Online booking into your calendar',
      'CRM pipeline set up for how you work',
      'Owner alerts for hot leads and booked jobs',
    ],
    you: 'Your services, pricing rules, service area, calendar and how you want leads handled.',
    plans: 'Included in Basic, Growth and Full',
  },
  {
    k: 'B',
    id: 'growth',
    name: 'Growth System',
    short: 'Growth',
    job: 'Bring in a steady flow of new leads',
    problem:
      'Work comes in waves. Referrals slow down, posting is inconsistent, and ad money disappears without a clear picture of what it brought back.',
    outcome:
      'Campaigns, landing pages and social content that feed straight into your Client Response System, with reporting that shows what turned into booked jobs.',
    flow: ['Campaign', 'Landing page', 'Inquiry', 'CRM', 'Report'],
    deliverables: [
      'Meta ad campaigns: build, launch and optimise',
      'Landing pages built to convert ad traffic',
      'Social media content',
      'Monthly reporting tied to leads and booked jobs',
    ],
    you: 'Your offer, photos or footage from jobs, ad account access and a monthly ad budget.',
    plans: 'Included in Growth and Full',
  },
  {
    k: 'C',
    id: 'build',
    name: 'Brand & Build',
    short: 'Brand & Build',
    job: 'Look like the best choice in your market',
    problem:
      'An outdated logo or a slow, confusing website makes good businesses look small. People leave before they ever call.',
    outcome:
      'A clear brand and a fast, modern website that makes you look established and points every visitor to one next step.',
    flow: ['Positioning', 'Structure', 'Design', 'Launch', 'Measure'],
    deliverables: [
      'Websites and landing pages',
      'Brand kits: logo, colours, type and templates',
      'Graphics and social templates',
      '3D mockups, product shots and logo animation',
    ],
    you: 'Your story, services, photos and a decision-maker for reviews.',
    plans: 'One-time build, quoted per project',
  },
  {
    k: 'D',
    id: 'ops',
    name: 'Custom AI & Ops',
    short: 'Custom AI & Ops',
    job: 'Connect your tools and run on autopilot',
    problem:
      'Information lives in five apps, the team does the same manual steps every day, and the owner can’t see what is happening without asking.',
    outcome:
      'Custom AI agents and automations that connect your tools, remove repeat work, and an owner dashboard that shows the business at a glance.',
    flow: ['Map the process', 'Connect tools', 'Build the agent', 'Dashboard', 'SOPs'],
    deliverables: [
      'Custom AI agents for your workflows',
      'Owner dashboard',
      'Connecting your tools together',
      'SOPs so the team runs it the same way every time',
    ],
    you: 'Access to the tools involved and time with whoever runs the process today.',
    plans: 'One agent + dashboard in Full. Larger builds quoted per project.',
  },
]

// "How it fits": the order a customer actually moves through the system
export const FIT_CHAPTERS = [
  {
    k: 'B',
    title: 'Growth brings people in.',
    body: 'Ads, landing pages and social content put your business in front of the right local customers.',
  },
  {
    k: 'C',
    title: 'Brand & Build earns the trust.',
    body: 'A sharp brand and a fast website make you the obvious choice when they compare options.',
  },
  {
    k: 'A',
    title: 'Client Response books the job.',
    body: 'Every call, text and form is answered in seconds, qualified, followed up and booked.',
  },
  {
    k: 'D',
    title: 'Custom AI & Ops runs it all.',
    body: 'Agents and automations connect every tool, and your dashboard shows what is working.',
  },
]

export const NEEDS = [
  {
    q: 'Leads call or message and nobody gets back fast enough',
    k: 'A',
    plan: 'Basic',
    why: 'Start with the Client Response System. It answers every lead in seconds and follows up until they book.',
  },
  {
    q: 'I need more people calling in the first place',
    k: 'B',
    plan: 'Growth',
    why: 'Growth adds ads, landing pages and content on top of Client Response, so the new leads get booked rather than wasted.',
  },
  {
    q: 'My brand or website makes us look smaller than we are',
    k: 'C',
    plan: 'One-time build',
    why: 'Start with Brand & Build. It’s a one-time project. When we hand it over, you can keep it booking leads with Basic.',
  },
  {
    q: 'My tools and team don’t talk to each other',
    k: 'D',
    plan: 'Full',
    why: 'Full includes a custom AI agent and an owner dashboard. Bigger ops builds are scoped and quoted on their own.',
  },
]

// Example lead journey (illustrative business, not a client)
export const JOURNEY = [
  {
    label: 'Missed call',
    time: '7:42 PM',
    caption: 'A homeowner calls after hours. Nobody can pick up.',
    chat: [
      { from: 'sys', text: 'Missed call · (555) 014-2290' },
      {
        from: 'biz',
        text: 'Hey, this is Northside Roofing. Sorry we missed your call! What can we help with?',
      },
    ],
    status: 'Responded',
    fields: { Source: 'Missed call', Reply: '8 seconds' },
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
      {
        from: 'biz',
        text: 'We can help. What’s the address, and is the leak active right now?',
      },
      { from: 'lead', text: '418 Elm St. Yes, dripping slowly.' },
    ],
    status: 'Qualified',
    fields: { Service: 'Leak repair', Urgency: 'Active leak', Address: '418 Elm St' },
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
  },
  {
    label: 'Followed up',
    time: 'Next day',
    caption: 'Reminders, a review request and a clean record in the CRM.',
    chat: [
      { from: 'biz', text: 'Reminder: your inspector arrives at 9:00 AM. Reply C to confirm.' },
      { from: 'lead', text: 'C' },
      { from: 'sys', text: 'After the job · review request sent' },
    ],
    status: 'Completed',
    fields: { Reminder: 'Confirmed', Review: 'Requested' },
  },
]

export const PLANS = [
  {
    name: 'Basic',
    price: 1200,
    term: '3-month minimum',
    stack: ['A'],
    summary: 'Client Response System',
    includes: [
      'AI receptionist for calls and texts',
      'Missed-call text back',
      'Automated follow-up',
      'Online booking',
      'CRM pipeline and owner alerts',
    ],
    performance: false,
  },
  {
    name: 'Growth',
    price: 1500,
    term: '2-month minimum',
    stack: ['A', 'B'],
    summary: 'Basic + Growth System',
    includes: [
      'Everything in Basic',
      'Meta ad campaigns',
      'Landing pages',
      'Social media content',
      'Monthly reporting',
    ],
    performance: true,
    featured: true,
  },
  {
    name: 'Full',
    price: 2000,
    term: 'Month-to-month',
    stack: ['A', 'B', 'D'],
    summary: 'Growth + Custom AI & Ops',
    includes: ['Everything in Growth', 'One custom AI agent', 'Owner dashboard'],
    performance: true,
  },
]

export const BUILDS = [
  { name: 'Websites', note: 'Sites and landing pages' },
  { name: 'Brand kits', note: 'Logo, colour, type, templates' },
  { name: 'Mockups', note: '3D, product and device mockups' },
  { name: 'Custom agents', note: 'AI built around one workflow' },
  { name: 'Custom software', note: 'Tools, portals and dashboards' },
]

export const PATH = [
  { step: 'Brand & Build', note: 'One-time build. Look the part.', tag: 'One-time' },
  { step: 'Basic', note: 'Answer and book every lead.', tag: '$1,200/mo' },
  { step: 'Growth', note: 'Bring in more of them.', tag: '$1,500/mo' },
  { step: 'Full', note: 'Automate and see everything.', tag: '$2,000/mo' },
]

export const FAQ = [
  {
    q: 'Do I need all four systems?',
    a: 'No. Most businesses start with the Client Response System on Basic and add systems as they grow. If your brand or website is the bottleneck, start with a one-time Brand & Build.',
  },
  {
    q: 'How does performance pricing work?',
    a: 'It’s available on Growth and Full. Instead of the monthly fee, you choose one: 10% commission on each job we book, or a fee that matches your monthly ad spend. It requires active marketing, because the campaigns we run are what create the booked jobs we’re paid on.',
  },
  {
    q: 'What are the minimum commitments?',
    a: 'Basic has a 3-month minimum and Growth has a 2-month minimum. Full is month-to-month. One-time builds are quoted per project.',
  },
  {
    q: 'Can you work with the tools I already use?',
    a: 'Usually, yes. On the first call we look at your current phone, calendar, CRM and website, then tell you what connects, what we would replace and why.',
  },
  {
    q: 'Is ad spend included in Growth or Full?',
    a: 'No. Ad spend is paid directly to Meta from your own ad account and is separate from the plan fee, so you always own the account and see exactly what was spent.',
  },
  {
    q: 'What happens after I book a call?',
    a: 'A short fit call about how leads reach you today and where they slip. You leave with a recommended starting system, a price, and a written next step.',
  },
  {
    q: 'What is Pressure Built?',
    a: 'The System-Based community for owners who want to learn to build systems themselves. Start free, upgrade to members, and move to done-for-you whenever you want us to build it.',
  },
]
