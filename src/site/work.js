/*
 * Work, case studies and live demos. Every project, demo and live site goes here.
 *
 * Case study fields (all optional; the pop-up shows the ones that are filled):
 *   problem     the starting situation, in the client's terms
 *   solution    what was installed, as catalog codes: ['CR-01', 'BB-01']
 *   technology  tools and platforms used
 *   process     what happened, step by step
 *   results     VERIFIED outcomes only: [{ metric, value, period, source }]
 *   approved    true once the client has signed off on publishing their name and results
 *   clientCase  true only for a paying client's project (shown as "Client case study")
 *   observed    what changed, in words, when there are no verified numbers
 *
 * Status labels on the site: live = "Live project", demo = "Working demo",
 * soon = "Concept / in progress". Never mark something live that isn't.
 *
 * To add a project:
 *   1. Put a screenshot (about 1600px wide, .jpg) in src/site/media/ and import it below.
 *   2. Copy an entry, fill it in, set `published: true`.
 *
 * Fields
 *   type      'site' (live website) | 'demo' (live demo) | 'brand' | 'ai' (agents & software)
 *   status    'live' | 'demo' | 'soon'
 *   client    business name. Only publish a client name with their OK.
 *   summary   one line for the card
 *   about     a paragraph for the pop-up
 *   built     what you built (bullets)
 *   systems   which System-Based systems it used: any of 'A' 'B' 'C' 'D'
 *   links     [{ label, url }]. Opens in a new tab.
 *   media     [{ img } or { video, poster }]. The first one is the card image.
 *   embed     a URL that may be shown live inside the pop-up (only for sites that allow framing)
 */
import { CONFIG } from './config.js'
import hero from './media/hero.jpg'
import avatar from './media/avatar.jpg'
import community from './media/community.jpg'
import banner from './media/banner.jpg'
import story from './media/story.jpg'
import sections from './media/sections.jpg'
import pricing from './media/pricing.jpg'
import mockupTool from './media/mockup-tool.jpg'
import logoReveal from './media/logo-reveal.mp4'

export const WORK = [
  {
    published: true,
    title: 'System-Based 3D identity',
    client: 'System-Based',
    type: 'brand',
    status: 'live',
    summary: 'A chrome SB monogram, a cinematic logo reveal and a full asset kit.',
    about:
      'We traced the SB monogram to vector, extruded it into spun silver and built a studio that renders every brand asset from the same 3D scene: website hero, social posts, stories, banners and the logo reveal.',
    built: [
      '3D SB logo in three interlocking pieces',
      'Cinematic logo reveal for reels and the website hero',
      'Website, community and social asset kit',
      'A brand system covering colour, type and motion rules',
    ],
    systems: ['BB'],
    problem:
      'A new company with a strong name and a 2D logo, but no visual system to carry it across a website, social and sales material.',
    solution: ['BB-02', 'BB-04'],
    technology: ['Three.js', 'Vector tracing', 'Vite', 'Playwright + FFmpeg rendering'],
    process: [
      'Traced the master SB artwork to a vector',
      'Extruded it into three interlocking 3D pieces',
      'Built a studio that renders every asset from one scene',
      'Exported stills, the logo reveal and the website hero',
    ],
    results: [],
    observed:
      'One brand system now drives the website hero, social assets and the logo reveal, all from the same 3D scene.',
    approved: true,
    clientCase: false,
    links: [],
    media: [
      { video: logoReveal, poster: avatar },
      { img: hero },
      { img: community },
      { img: story },
      { img: banner },
    ],
  },
  {
    published: true,
    title: '3D device mockup studio',
    client: 'In-house tool',
    type: 'ai',
    status: 'demo',
    summary: 'Drop in a screen recording and get a cinematic 3D phone video.',
    about:
      'A browser tool that puts any screen recording onto a 3D phone, with studio lighting, camera moves and video export. We use it to turn client websites, booking flows and AI receptionist demos into marketing videos.',
    built: [
      'Real-time 3D phone with your video on screen',
      'Lighting, camera and background controls',
      'One-click System-Based black and silver look',
      'Video recording in the browser',
    ],
    systems: ['BB', 'AO'],
    problem:
      'Turning screen recordings of websites and booking flows into marketing video took hours in editing tools.',
    solution: ['BB-04', 'AO-05'],
    technology: ['Vue', 'Three.js', 'MediaRecorder'],
    process: [
      'Load a 3D phone model',
      'Map the recording onto its screen',
      'Add lighting, camera and export controls',
    ],
    results: [],
    observed:
      'A screen recording becomes a lit, moving 3D phone video in minutes instead of hours.',
    approved: true,
    clientCase: false,
    links: [{ label: 'Open the tool', url: CONFIG.MOCKUP_TOOL_URL }],
    media: [{ img: mockupTool }],
  },
  {
    published: false, // retired: it shows the old lettered block diagram
    title: 'Services & pricing graphics',
    client: 'System-Based',
    type: 'brand',
    status: 'live',
    summary: 'The four systems and three packages as chrome 3D graphics.',
    about:
      'The system diagram and package stack used across the site and in sales decks. Each block is a system, and packages are stacks of them, so you can see what each one adds.',
    built: ['Four-system diagram', 'Pricing stack graphic', 'Matching social versions'],
    systems: ['BB'],
    solution: ['BB-03', 'BB-04'],
    approved: true,
    links: [],
    media: [{ img: sections }, { img: pricing }],
  },
  {
    published: true,
    title: 'AI receptionist demo line',
    client: 'Live demo',
    type: 'demo',
    status: 'soon',
    summary: 'Call or text a real number and see how it answers, qualifies and books.',
    about:
      'A public demo of the Client Response System. Call or text the number and the AI receptionist answers like it would for your business, then books a test appointment.',
    built: [
      'AI receptionist on a live phone number',
      'Missed-call text back',
      'Booking into a demo calendar',
    ],
    systems: ['CR'],
    solution: ['CR-01', 'CR-02', 'CR-04'],
    approved: true,
    links: [],
    media: [],
  },

  // ---- Client projects: fill in and flip `published` once the client has approved ----
  {
    published: false,
    title: 'Veterans Funeral Care',
    client: 'Veterans Funeral Care',
    type: 'site',
    status: 'live',
    summary: '',
    about: '',
    built: [],
    systems: [],
    problem: '',
    solution: [],
    technology: [],
    process: [],
    results: [],
    approved: false,
    links: [{ label: 'Visit site', url: '' }],
    media: [],
  },
  {
    published: false,
    title: 'Wreck & Refine',
    client: 'Wreck & Refine',
    type: 'site',
    status: 'live',
    summary: '',
    about: '',
    built: [],
    systems: [],
    problem: '',
    solution: [],
    technology: [],
    process: [],
    results: [],
    approved: false,
    links: [{ label: 'Visit site', url: '' }],
    media: [],
  },
  {
    published: false,
    title: 'Salvatore’s',
    client: 'Salvatore’s',
    type: 'site',
    status: 'live',
    summary: '',
    about: '',
    built: [],
    systems: [],
    problem: '',
    solution: [],
    technology: [],
    process: [],
    results: [],
    approved: false,
    links: [{ label: 'Visit site', url: '' }],
    media: [],
  },
]

export const WORK_TYPES = [
  { id: 'all', label: 'All work' },
  { id: 'case', label: 'Client case studies' },
  { id: 'site', label: 'Live sites' },
  { id: 'demo', label: 'Demos' },
  { id: 'brand', label: 'Brand' },
  { id: 'ai', label: 'AI & software' },
]
