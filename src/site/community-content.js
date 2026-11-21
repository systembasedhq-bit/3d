/*
 * System-Based Business Community: what exists today and what is planned.
 * Only list things that are real. A "planned" item says planned on the site.
 * Never add member counts, threads, testimonials or event dates that don't exist.
 */
export const COMMUNITY = {
  name: 'System-Based Business Community',
  short: 'Community',

  // Real work, shown as a public build log. Newest first.
  buildLog: [
    {
      date: 'Nov 2026',
      category: 'Website',
      title: 'Rebuilt the website around a scroll walkthrough',
      problem: 'Visitors couldn’t tell how the systems connect.',
      changed:
        'Four business stories now play on one phone, synced with a CRM card and an owner view.',
      media: 'story',
    },
    {
      date: 'Nov 2026',
      category: 'Operations',
      title: 'Shipped a custom 3D site inside GoHighLevel',
      problem: 'A coded website had to live on a GHL page and send leads into a workflow.',
      changed: 'One paste-in block, assets served from the repo, inquiries routed to the CRM.',
      media: 'ghl',
    },
    {
      date: 'Nov 2026',
      category: 'Brand & Build',
      title: 'Built the System-Based 3D identity',
      problem: 'A strong name with a flat logo and no visual system.',
      changed:
        'Traced the SB mark, extruded it into chrome, and built a studio that renders every asset.',
      media: 'identity',
    },
  ],

  // What members get. status: 'live' | 'planned'
  areas: [
    {
      title: 'Build log',
      text: 'Watch real systems get built: the problem, the approach, what changed.',
      status: 'live',
    },
    {
      title: 'Systems library',
      text: 'Starter checklists, scripts, sample pipelines and scoping worksheets.',
      status: 'planned',
    },
    {
      title: 'Office hours & build-alongs',
      text: 'Live sessions to ask questions and build alongside us.',
      status: 'planned',
    },
    {
      title: 'Operator discussions',
      text: 'Owners and operators comparing what actually worked.',
      status: 'planned',
    },
  ],

  path: [
    { step: 'Explore', note: 'Free build logs and starter resources' },
    { step: 'Learn & implement', note: 'Do it yourself with the playbooks' },
    { step: 'Ready-made systems', note: 'Templates and systems, once they’re released' },
    { step: 'Have it built', note: 'System-Based builds or runs it for you' },
  ],

  businessTypes: [
    'Trades / home services',
    'Auto / detailing',
    'Hospitality / food',
    'Professional services',
    'Creator / online business',
    'Other',
  ],
}
