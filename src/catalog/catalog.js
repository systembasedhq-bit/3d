/*
 * System-Based service catalog: the single source of truth.
 *
 * The website reads it today. Proposals, onboarding, fulfillment and the System-Based OS
 * read the same file later. Codes are permanent: a code never changes meaning.
 *
 * Commercial values (prices, terms, limits, performance rules) are DECISIONS, not policy.
 * Each one is { value, approved }. The site only shows a value as final when approved is
 * true. Unapproved values show as "Proposed" while CONFIG.SHOW_PROPOSED is on, and as a
 * "confirmed on your call" line when it's off. Approve them in the Business Architecture doc first.
 */

export const VERSION = '1.0.0'

const d = (value, approved = false) => ({ value, approved })

/* ------------------------------------------------------------------ */
/* Systems: categories of capability (never sold as products)          */
/* ------------------------------------------------------------------ */

export const SYSTEMS = [
  {
    code: 'CR',
    n: '01',
    id: 'response',
    name: 'Client Response',
    scope: 'Lead capture, communication, CRM, booking and follow-up',
    job: 'Answer, follow up and book every lead',
    problem:
      'Calls go to voicemail, texts sit unanswered and leads go cold before anyone follows up. Every missed inquiry is a job someone else books.',
    outcome:
      'Every call, text and form is answered in seconds and followed up until it books or closes. All of it is visible in one pipeline.',
    process: ['Lead reaches out', 'Instant reply', 'Qualified', 'Booked', 'Followed up'],
    upgrades: 'Extra phone lines or locations, bilingual receptionist, custom qualification flows',
  },
  {
    code: 'GR',
    n: '02',
    id: 'growth',
    name: 'Growth',
    scope: 'Advertising, lead generation, conversion and retention',
    job: 'Create a steady flow of new demand',
    problem:
      'Work comes in waves. Referrals slow down, posting is inconsistent, and ad money disappears without a clear picture of what it brought back.',
    outcome:
      'Campaigns, landing pages and content that feed straight into Client Response, with reporting from ad to booked job to revenue.',
    process: ['Campaign', 'Landing page', 'Inquiry', 'CRM', 'Report'],
    upgrades: 'More ad platforms, more content volume, video production',
  },
  {
    code: 'BB',
    n: '03',
    id: 'build',
    name: 'Brand & Build',
    scope: 'Websites, branding, product design and digital experiences',
    job: 'Look like the obvious choice',
    problem:
      'An outdated brand or a slow, confusing website makes good businesses look small. Visitors leave before they ever call.',
    outcome:
      'A clear brand and a fast, modern site that looks established and points every visitor to one next step, wired into Client Response from day one.',
    process: ['Positioning', 'Structure', 'Design', 'Launch', 'Measure'],
    upgrades: 'Extra pages, copywriting, photo and video shoots',
  },
  {
    code: 'AO',
    n: '04',
    id: 'ops',
    name: 'AI & Operations',
    scope: 'AI agents, workflows, dashboards and custom software',
    job: 'Connect the tools and remove the busywork',
    problem:
      'Information lives in five apps, the team repeats the same manual steps every day, and the owner can’t see what is happening without asking.',
    outcome:
      'AI agents and automations that connect your tools and remove repeat work, plus a dashboard that shows the business at a glance.',
    process: ['Map the process', 'Connect tools', 'Build the agent', 'Dashboard', 'SOPs'],
    upgrades: 'More agents, more data sources, extra user seats',
  },
]

/* ------------------------------------------------------------------ */
/* Services: 20 coded services, each in exactly one system             */
/* soldAs: 'setup+managed' | 'managed' | 'project' | 'project|add-on'  */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  // 01 Client Response
  {
    code: 'CR-01',
    system: 'CR',
    name: 'AI receptionist',
    soldAs: 'setup+managed',
    deliverables: 'Answers calls and texts 24/7, qualifies, hands off hot leads',
    client: 'Services, pricing rules, service area, FAQs',
    ongoing: 'We tune scripts and review calls monthly',
  },
  {
    code: 'CR-02',
    system: 'CR',
    name: 'Missed-call text back',
    soldAs: 'setup+managed',
    deliverables: 'Tracking number, instant text on every missed call',
    client: 'Carrier or number access',
    ongoing: 'We monitor delivery',
  },
  {
    code: 'CR-03',
    system: 'CR',
    name: 'Follow-up sequences',
    soldAs: 'setup+managed',
    deliverables: 'Text and email follow-up until booked or closed, reminders, no-show recovery',
    client: 'Approve tone and offers',
    ongoing: 'We maintain and improve sequences',
  },
  {
    code: 'CR-04',
    system: 'CR',
    name: 'Online booking',
    soldAs: 'setup+managed',
    deliverables: 'Calendar, booking rules, confirmations',
    client: 'Calendar access, keeps availability current',
    ongoing: 'We maintain the rules',
  },
  {
    code: 'CR-05',
    system: 'CR',
    name: 'CRM and pipeline',
    soldAs: 'setup+managed',
    deliverables: 'Pipeline stages, lead records, owner alerts',
    client: 'Marks jobs won, lost or completed',
    ongoing: 'We maintain the pipeline and automations',
  },
  // 02 Growth
  {
    code: 'GR-01',
    system: 'GR',
    name: 'Meta ads management',
    soldAs: 'managed',
    deliverables: 'Campaign build, creative testing, weekly optimisation',
    client: 'Ad account, ad budget, job photos',
    ongoing: 'We run campaigns. Ad spend is billed to your own account',
  },
  {
    code: 'GR-02',
    system: 'GR',
    name: 'Landing pages',
    soldAs: 'setup+managed',
    deliverables: 'Campaign pages wired into your CRM',
    client: 'Offer, proof, approval',
    ongoing: 'We host and test pages',
  },
  {
    code: 'GR-03',
    system: 'GR',
    name: 'Social content',
    soldAs: 'managed',
    deliverables: 'A set number of posts a month',
    client: 'Photos and video from jobs',
    ongoing: 'We produce, you approve',
  },
  {
    code: 'GR-04',
    system: 'GR',
    name: 'Reporting and attribution',
    soldAs: 'managed',
    deliverables: 'Tracking and a monthly report from lead to booked job to revenue',
    client: 'Job outcomes in the CRM',
    ongoing: 'We report and review monthly',
  },
  {
    code: 'GR-05',
    system: 'GR',
    name: 'Retention',
    soldAs: 'managed',
    deliverables: 'Review requests, past-customer reactivation campaigns',
    client: 'Customer list',
    ongoing: 'We run campaigns',
  },
  // 03 Brand & Build
  {
    code: 'BB-01',
    system: 'BB',
    name: 'Website',
    soldAs: 'project',
    deliverables: 'Strategy, design, build, launch, wired into Client Response',
    client: 'Content, photos, one decision-maker',
    ongoing: 'Optional care plan (BB-05)',
  },
  {
    code: 'BB-02',
    system: 'BB',
    name: 'Brand kit',
    soldAs: 'project',
    deliverables: 'Logo, colour, type, templates, usage guide',
    client: 'Story, references, feedback rounds',
    ongoing: 'None',
  },
  {
    code: 'BB-03',
    system: 'BB',
    name: 'Graphics and templates',
    soldAs: 'project|add-on',
    deliverables: 'Social, print and sales templates',
    client: 'Brand assets',
    ongoing: 'None',
  },
  {
    code: 'BB-04',
    system: 'BB',
    name: '3D mockups and motion',
    soldAs: 'project',
    deliverables: 'Device mockups, product shots, logo animation',
    client: 'Screens, products, logo files',
    ongoing: 'None',
  },
  {
    code: 'BB-05',
    system: 'BB',
    name: 'Website care plan',
    soldAs: 'managed',
    deliverables: 'Hosting, updates, small edits, uptime checks',
    client: 'Edit requests',
    ongoing: 'We maintain the site',
  },
  // 04 AI & Operations
  {
    code: 'AO-01',
    system: 'AO',
    name: 'Custom AI agent',
    soldAs: 'setup+managed',
    deliverables: 'One agent for one defined workflow',
    client: 'A process walkthrough, tool access',
    ongoing: 'We monitor and improve it',
  },
  {
    code: 'AO-02',
    system: 'AO',
    name: 'Owner dashboard',
    soldAs: 'setup+managed',
    deliverables: 'KPIs from the CRM, ads and calls in one view',
    client: 'Data access',
    ongoing: 'We maintain data connections',
  },
  {
    code: 'AO-03',
    system: 'AO',
    name: 'Integrations and automation',
    soldAs: 'project',
    deliverables: 'Connected tools, automated handoffs',
    client: 'Tool access, admin contact',
    ongoing: 'Optional monitoring',
  },
  {
    code: 'AO-04',
    system: 'AO',
    name: 'SOPs and training',
    soldAs: 'project',
    deliverables: 'Documented processes, team walkthrough',
    client: 'Time with the person who does the job',
    ongoing: 'Optional updates',
  },
  {
    code: 'AO-05',
    system: 'AO',
    name: 'Custom software',
    soldAs: 'project',
    deliverables: 'Portals, internal tools, client apps, scoped per build',
    client: 'Requirements sign-off',
    ongoing: 'Optional support retainer',
  },
]

/* ------------------------------------------------------------------ */
/* Packages: commercial bundles assembled from services                */
/* ------------------------------------------------------------------ */

export const PACKAGES = [
  {
    id: 'capture',
    name: 'Capture',
    was: 'Basic',
    outcome: 'Every lead answered, followed up and booked',
    services: ['CR-01', 'CR-02', 'CR-03', 'CR-04', 'CR-05'],
    addOns: ['GR-05', 'AO-01', 'AO-02', 'BB-05'],
    implementation: d(1500),
    management: d(1200),
    term: d('3-month minimum'),
    limits: d(null),
    performance: false,
  },
  {
    id: 'pipeline',
    name: 'Pipeline',
    was: 'Growth',
    outcome: 'A steady flow of new leads, booked automatically',
    services: ['CR-01', 'CR-02', 'CR-03', 'CR-04', 'CR-05', 'GR-01', 'GR-02', 'GR-03', 'GR-04'],
    addOns: ['GR-05', 'AO-01', 'AO-02', 'BB-05'],
    implementation: d(2500),
    management: d(2000),
    term: d('3-month minimum'),
    limits: d(null),
    performance: true,
    featured: true,
  },
  {
    id: 'command',
    name: 'Command',
    was: 'Full',
    outcome: 'The whole business connected and visible in one dashboard',
    services: [
      'CR-01',
      'CR-02',
      'CR-03',
      'CR-04',
      'CR-05',
      'GR-01',
      'GR-02',
      'GR-03',
      'GR-04',
      'GR-05',
      'AO-01',
      'AO-02',
    ],
    addOns: ['BB-05', 'AO-03'],
    implementation: d(4500),
    management: d(3000),
    term: d('Month-to-month'),
    limits: d(null),
    performance: true,
  },
]

export const BUNDLE_DISCOUNT = d({ management: 0.1, implementation: 0.25 })

/* ------------------------------------------------------------------ */
/* Projects: one-time builds, quoted after scoping                     */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
  { code: 'BB-01', name: 'Website', note: 'Pages, copy, integrations', from: d(null) },
  { code: 'BB-02', name: 'Brand kit', note: 'Logo, colour, type, templates', from: d(null) },
  { code: 'BB-03', name: 'Graphics and templates', note: 'Social, print, sales', from: d(null) },
  {
    code: 'BB-04',
    name: '3D mockups and motion',
    note: 'Scenes, product shots, logo reveals',
    from: d(null),
  },
  { code: 'AO-01', name: 'Custom AI agent', note: 'One workflow, tools connected', from: d(null) },
  {
    code: 'AO-03',
    name: 'Integrations and automation',
    note: 'Tools and flows connected',
    from: d(null),
  },
  { code: 'AO-05', name: 'Custom software', note: 'Portals, internal tools, apps', from: d(null) },
]

export const PROJECT_PROCESS = [
  { step: 'Fit call', note: 'Problem, budget range, decision-maker' },
  { step: 'Scoping', note: 'Larger builds get a paid session, credited to the project' },
  { step: 'Fixed quote', note: 'Codes, deliverables, revision rounds, timeline' },
  { step: 'Deposit', note: '50% to start, 50% at launch' },
  { step: 'Build', note: 'Review checkpoints agreed up front' },
  {
    step: 'Launch and handoff',
    note: 'Walkthrough, then the option to keep it running on Capture',
  },
]

/* ------------------------------------------------------------------ */
/* Performance pricing (proposed terms)                                */
/* ------------------------------------------------------------------ */

export const PERFORMANCE = {
  approved: false,
  eligible: ['pipeline', 'command'],
  summary:
    'On Pipeline and Command, swap the monthly fee for 10% of each new job we bring in, or a fee that matches your ad spend. You must be running marketing with us, and only completed, paid jobs count.',
  rules: [
    [
      'Who it’s for',
      'Pipeline or Command, with System-Based running your campaigns above a minimum monthly ad spend',
    ],
    [
      'Tracking',
      'Leads come in through our tracking numbers, forms or booking. Other channels don’t count',
    ],
    ['Implementation', 'Charged in full'],
    ['Monthly floor', 'A reduced fee that covers tools and phone costs, plus the performance fee'],
    [
      'Choice',
      '10% per qualifying job, or a fee matching monthly ad spend. Switchable at the end of the minimum term',
    ],
    [
      'What counts',
      'A new customer who first contacted you through our channels, booked, and whose job was completed and invoiced',
    ],
    ['Attribution window', 'First contact within 30 days before the booking'],
    ['Excluded', 'Existing customers, referrals, repeat work, channels we don’t run'],
    [
      'Commission basis',
      '10% of collected revenue on the first invoice, not quoted or booked value',
    ],
    [
      'Cancellations',
      'Cancelled and no-show jobs aren’t billable. Refunds within 30 days are credited back',
    ],
    ['Reporting', 'You mark each job’s outcome and invoice in the CRM within 14 days'],
  ],
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const service = (code) => SERVICES.find((s) => s.code === code)
export const system = (code) => SYSTEMS.find((s) => s.code === code)
export const servicesOf = (sys) => SERVICES.filter((s) => s.system === sys)

/** Closest package for a set of service codes: smallest package covering the most of them */
export function recommend(codes) {
  const set = new Set(codes)
  if (!set.size) return null
  const recurring = [...set].filter((c) => service(c).soldAs !== 'project')
  const projects = [...set].filter((c) => service(c).soldAs === 'project')
  let best = null
  for (const p of PACKAGES) {
    const covered = recurring.filter((c) => p.services.includes(c)).length
    const extra = p.services.filter((c) => !set.has(c)).length
    const score = covered * 10 - extra
    if (covered && (!best || score > best.score)) best = { pkg: p, score, covered }
  }
  const pkg = best?.pkg ?? null
  const addOns = pkg ? recurring.filter((c) => !pkg.services.includes(c)) : recurring
  const unused = pkg ? pkg.services.filter((c) => !set.has(c)) : []
  // a package that covers everything asked for still fits, even if it includes more
  const custom = !pkg || addOns.length > 2
  return { pkg, addOns, projects, unused, custom }
}
