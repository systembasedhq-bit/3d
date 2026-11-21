/*
 * Real client projects for the Work & Systems Showcase.
 *
 * Only facts the owner supplied or that are visible on the live sites go here.
 * `results` must be real numbers from the client's own accounts, with the source and
 * the period. Never estimate or round them up.
 *
 * Fields
 *   published  show it on the site (only with the client's OK)
 *   stage      'built' (finished, live) | 'building' (in progress / coming soon)
 *   status     short label on the card
 *   theme      colours for the cinematic film: bg, ink, accent, light (true = light stage)
 *   logo       { src, mask?: true (alpha-only artwork filled with the theme accent), wide?: true }
 *   emblem     optional second mark shown first in the film (e.g. a medallion)
 *   views      desktop viewpoints: [{ img, cap }]; phone: mobile viewpoints
 *   systems    System-Based systems involved (catalog codes, shown as names)
 *   scenario   which "How it works" walkthrough matches this project
 *   app        optional software chapter in the film: { label, host, views }
 *   demo       optional live demo opened on the site: { title, src (an .html?url import), note }
 */
import divineLogo from './media/clients/divine-logo.webp'
import wreckWordmark from './media/clients/wreck-wordmark.webp'
import wreckEmblem from './media/clients/wreck-emblem.webp'
import veteransLogo from './media/clients/veterans-logo.webp'
import cayenaMark from './media/clients/cayena-mark.webp'
import divineD0 from './media/clients/divine-d0.webp'
import divineD1 from './media/clients/divine-d1.webp'
import divineD2 from './media/clients/divine-d2.webp'
import divineD3 from './media/clients/divine-d3.webp'
import divineM0 from './media/clients/divine-m0.webp'
import divineM1 from './media/clients/divine-m1.webp'
import wreckD0 from './media/clients/wreck-d0.webp'
import wreckD1 from './media/clients/wreck-d1.webp'
import wreckD2 from './media/clients/wreck-d2.webp'
import wreckD3 from './media/clients/wreck-d3.webp'
import wreckM0 from './media/clients/wreck-m0.webp'
import wreckM1 from './media/clients/wreck-m1.webp'
import veteransD0 from './media/clients/veterans-d0.webp'
import veteransD1 from './media/clients/veterans-d1.webp'
import veteransD2 from './media/clients/veterans-d2.webp'
import veteransD3 from './media/clients/veterans-d3.webp'
import veteransM0 from './media/clients/veterans-m0.webp'
import veteransM1 from './media/clients/veterans-m1.webp'
import cayenaD0 from './media/clients/cayena-d0.webp'
import cayenaD1 from './media/clients/cayena-d1.webp'
import cayenaD2 from './media/clients/cayena-d2.webp'
import cayenaD3 from './media/clients/cayena-d3.webp'
import cayenaM0 from './media/clients/cayena-m0.webp'
import cayenaM1 from './media/clients/cayena-m1.webp'

import rocLogo from './media/clients/roc-logo.webp'
import rocD0 from './media/clients/roc-d0.webp'
import rocD1 from './media/clients/roc-d1.webp'
import rocD2 from './media/clients/roc-d2.webp'
import rocD3 from './media/clients/roc-d3.webp'
import rocA0 from './media/clients/roc-a0.webp'
import rocA1 from './media/clients/roc-a1.webp'
import rocA2 from './media/clients/roc-a2.webp'
import rocA3 from './media/clients/roc-a3.webp'
import rocM0 from './media/clients/roc-m0.webp'
import rocM1 from './media/clients/roc-m1.webp'
import rocDesigner from './media/demos/roc-monument-designer.html?url'

import guestnestLogo from './media/clients/guestnest-logo.webp'
import guestnestD0 from './media/clients/guestnest-d0.webp'
import guestnestD1 from './media/clients/guestnest-d1.webp'
import guestnestD2 from './media/clients/guestnest-d2.webp'
import guestnestD3 from './media/clients/guestnest-d3.webp'
import guestnestM0 from './media/clients/guestnest-m0.webp'
import guestnestM1 from './media/clients/guestnest-m1.webp'

export const CLIENTS = [
  {
    id: 'divine',
    published: true,
    stage: 'built',
    status: 'Live',
    name: 'Divine Detailing',
    place: 'Stuart, FL',
    industry: 'Mobile yacht & luxury auto detailing',
    summary:
      'An estimate-first website, AI responses and Meta ads, all feeding one pipeline the owner can see.',
    built: [
      'Brand and estimate-first website',
      'Intake that turns every request into a customer record',
      'AI processes: a custom response to each inquiry',
      'Meta ad campaigns and content',
      'Owner notifications when anything changes',
    ],
    systems: ['CR', 'GR', 'BB', 'AO'],
    theme: { bg: '#07090c', ink: '#eef0f3', accent: '#d4932a', light: false },
    logo: { src: divineLogo },
    views: [
      { img: divineD0, cap: 'The first screen sells the result and asks for the estimate' },
      { img: divineD1, cap: 'Services, each with its own path to a quote' },
      { img: divineD2, cap: 'Intake: the boat, the location and the job, in one short form' },
      { img: divineD3, cap: 'Real before-and-after work, no stock photos' },
    ],
    phone: [
      { img: divineM0, cap: 'Every service, one tap from a quote' },
      { img: divineM1, cap: 'Owner-led, and the site says so' },
    ],
    results: {
      title: 'Meta ads',
      period: 'Oct 20 – Nov 20, 2026',
      source: 'Divine Detailing ad account, GoHighLevel Ad Manager',
      kpis: [
        { label: 'Impressions', value: 29120, format: 'k' },
        { label: 'Clicks', value: 685 },
        { label: 'Facebook leads', value: 26 },
        { label: 'Cost per lead', value: 35.8, format: 'usd' },
        { label: 'Avg. cost per click', value: 1.36, format: 'usd' },
      ],
      // weekly shape, read from the Ad Manager chart (week of Oct 20 → week of Nov 17)
      series: [
        { label: 'Impressions', points: [6200, 6700, 5900, 7200, 3120] },
        { label: 'Clicks', points: [182, 144, 151, 127, 81] },
        { label: 'Leads', points: [7, 6, 5, 3, 5] },
      ],
    },
    links: [{ label: 'Visit the live site', url: 'https://divinedetailingestimate.com/' }],
    scenario: 'response',
  },
  {
    id: 'wreck',
    published: true,
    stage: 'built',
    status: 'Live',
    name: 'Wreck & Refine',
    place: 'Rochester, NY',
    industry: 'Landscaping, cleanups & snow removal',
    summary:
      'A website that books estimates, answers every lead and keeps the jobs, customers and seasons organised.',
    built: [
      'Website with an estimate request built in',
      'Lead response the moment a request comes in',
      'Custom notifications for the owner and crew',
      'Customer database',
      'Operations: seasonal services and snow-route sign-ups',
    ],
    systems: ['CR', 'BB', 'AO'],
    theme: { bg: '#0a0b0a', ink: '#f2f2ee', accent: '#5fd03f', light: false },
    emblem: { src: wreckEmblem },
    logo: { src: wreckWordmark, wide: true },
    views: [
      { img: wreckD0, cap: 'A bold first screen with the estimate one tap away' },
      { img: wreckD1, cap: 'Wrecked, then refined: real before-and-after projects' },
      { img: wreckD2, cap: 'Every service, including the winter snow route' },
      { img: wreckD3, cap: 'Straight answers that pre-qualify the job' },
    ],
    phone: [
      { img: wreckM0, cap: 'Built for the phone first' },
      { img: wreckM1, cap: 'Before and after, swipe by swipe' },
    ],
    links: [
      { label: 'Visit the live site', url: 'https://wreckandrefinelandscaping.com/estimate' },
    ],
    scenario: 'ops',
  },
  {
    id: 'veterans',
    published: true,
    stage: 'built',
    status: 'Live',
    name: 'Veterans Funeral Care',
    place: 'Clearwater, FL',
    industry: 'Funeral home & cremation',
    summary:
      'A calm, respectful website with published prices, a guided intake and the integrations behind it.',
    built: [
      'Website design',
      'Guided intake: three questions to the right next step',
      'Published pricing families can read on their own',
      'Integrations behind the intake',
    ],
    systems: ['CR', 'BB'],
    theme: { bg: '#ffffff', ink: '#0e2b58', accent: '#c8102e', light: true },
    logo: { src: veteransLogo, wide: true },
    views: [
      { img: veteransD0, cap: 'Veterans at the heart of the first screen' },
      { img: veteransD1, cap: 'Clear, published prices for every plan' },
      { img: veteransD2, cap: 'Intake: three questions to the right next step' },
      { img: veteransD3, cap: 'Plan ahead, without pressure' },
    ],
    phone: [
      { img: veteransM0, cap: 'Calm and readable on any phone' },
      { img: veteransM1, cap: 'Military honors, explained plainly' },
    ],
    links: [],
    scenario: 'brand',
  },
  {
    id: 'roc',
    published: true,
    stage: 'built',
    status: 'Website + software',
    name: 'ROC Memorials & Monuments',
    place: 'Hilton, NY',
    industry: 'Custom monuments & memorials',
    summary:
      'A full website and a monument designer: families design the stone themselves, and ROC gets a production-ready proof.',
    built: [
      'Full website: memorial types, design collection, granite and artwork libraries',
      'Cemetery check: the rules for each cemetery before anyone designs',
      'ROC Monument Designer: shape, granite, size, lettering, art and the back of the stone',
      'Proof PDF and design summary, built for the production handoff',
      'Staff view: production checks, supplier sheets and work-order routing',
      'Ready to send each design into the GoHighLevel pipeline as a deal',
    ],
    systems: ['BB', 'CR', 'AO'],
    theme: { bg: '#f5f2ee', ink: '#231f20', accent: '#2f5d46', light: true },
    logo: { src: rocLogo, wide: true },
    views: [
      { img: rocD0, cap: 'Made to remember someone, at the Hilton showroom' },
      { img: rocD1, cap: 'Every kind of memorial, with real ROC work' },
      { img: rocD2, cap: 'The details are what make it theirs' },
      { img: rocD3, cap: 'Cemetery check before anyone falls in love with a stone' },
    ],
    app: {
      label: 'Designer',
      host: 'ROC Monument Designer',
      views: [
        { img: rocA0, cap: 'Start from a design or the kind of memorial' },
        { img: rocA1, cap: 'Real granite colours, rendered on the stone' },
        { img: rocA2, cap: 'Names, dates and lettering, laid out live' },
        { img: rocA3, cap: 'Review: production checks and a sample estimate' },
      ],
    },
    phone: [
      { img: rocM0, cap: 'Call, design or visit, from any phone' },
      { img: rocM1, cap: 'The designer works on a phone too' },
    ],
    demo: {
      title: 'ROC Monument Designer',
      src: rocDesigner,
      note: 'A working copy. Nothing you enter is sent to ROC or saved.',
    },
    links: [],
    scenario: 'brand',
  },
  {
    id: 'guestnest',
    published: true,
    stage: 'built',
    status: 'Live',
    name: 'My Guest Nest',
    place: "Florida's Treasure Coast",
    industry: 'Concierge · Co-host · Home watch',
    summary:
      'A new brand and website for a local concierge, co-hosting and home-watch company, with a path for owners and one for guests.',
    built: [
      'Brand and logo',
      'Website with separate paths for property owners and vacation guests',
      'Co-hosting, home watch and concierge, each with a clear next step',
      'Concierge setups guests can choose before they arrive',
      'Service-area check before an owner signs up',
    ],
    systems: ['BB', 'CR'],
    theme: { bg: '#ffffff', ink: '#12304d', accent: '#c9a35a', light: true },
    logo: { src: guestnestLogo },
    views: [
      { img: guestnestD0, cap: 'A trusted local hand, with a home-watch report up front' },
      { img: guestnestD1, cap: 'Owners and guests each get their own path' },
      { img: guestnestD2, cap: 'Co-hosting, home watch and concierge, explained simply' },
      { img: guestnestD3, cap: 'Concierge setups guests can pick before they arrive' },
    ],
    phone: [
      { img: guestnestM0, cap: 'Built for owners checking in from anywhere' },
      { img: guestnestM1, cap: 'Photos and updates with every visit' },
    ],
    links: [],
    scenario: 'brand',
  },
  {
    id: 'cayena',
    published: true,
    stage: 'building',
    status: 'Coming soon',
    name: 'Cayena Food Garden',
    place: 'Eau Gallie Arts District, Melbourne, FL',
    industry: 'Restaurant',
    summary:
      'A restaurant opening in the Eau Gallie Arts District: the brand, the coming-soon site and the reservations behind it.',
    built: [
      'Brand and logo',
      'Coming-soon website that builds the guest list',
      'Reservations and guest intake',
      'Business operations, ready for opening day',
    ],
    systems: ['BB', 'CR', 'AO'],
    theme: { bg: '#0d0b08', ink: '#f6efe2', accent: '#d8b45a', light: false },
    logo: { src: cayenaMark, mask: true },
    views: [
      { img: cayenaD0, cap: 'A new table is coming to Eau Gallie' },
      { img: cayenaD1, cap: 'Built for the district and the people in it' },
      { img: cayenaD2, cap: 'Guest intake: what would bring you in?' },
      { img: cayenaD3, cap: 'Cayena is taking root' },
    ],
    phone: [
      { img: cayenaM0, cap: 'The same experience on a phone' },
      { img: cayenaM1, cap: 'Get your seat: the guest list in a few taps' },
    ],
    links: [{ label: 'Visit the live site', url: 'https://www.cayenafoodgarden.com/home' }],
    scenario: 'brand',
  },
  {
    id: 'faith',
    published: true,
    stage: 'building',
    status: 'Launching December',
    name: 'Faith Found',
    place: '',
    industry: 'Product launch',
    summary: 'Product development, brand and website, with intake and operations ready for launch.',
    built: ['Product development', 'Website and brand', 'Intake and business operations'],
    systems: ['BB', 'CR', 'AO'],
    theme: { bg: '#0e0c10', ink: '#f3eee6', accent: '#c9a56a', light: false },
    wordmark: { top: 'Faith Found', sub: 'Launching December' },
    links: [],
  },
  {
    id: 'hunters',
    published: false, // a prospect: publish only once they agree to the live build feed
    stage: 'building',
    status: 'Live build',
    name: 'Hunters Marine Detailing',
    place: '',
    industry: 'Marine detailing',
    summary: 'A live build: follow the pitch as it is designed, from first concept to launch.',
    built: ['Pitch concept', 'Website preview'],
    systems: ['BB'],
    theme: { bg: '#06101a', ink: '#eef3f7', accent: '#4fb0d8', light: false },
    wordmark: { top: 'Hunters Marine', sub: 'Live build' },
    links: [],
  },
]

export const published = CLIENTS.filter((c) => c.published)
export const client = (id) => CLIENTS.find((c) => c.id === id)
