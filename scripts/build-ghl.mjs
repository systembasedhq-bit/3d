#!/usr/bin/env node
/*
 * GoHighLevel export.
 *
 *   npm run build:ghl -- --url https://your-site-host.example/ \
 *     --webhook <GHL inbound webhook URL> --calendar <GHL calendar link> --community <link>
 *
 * Writes ghl-export/:
 *   site-files/            upload this folder to a static host (Netlify Drop, Cloudflare Pages...)
 *   site-files.zip         the same folder, zipped
 *   custom-code.html       paste into a GHL Custom Code element on a blank page
 *   sample-inquiry.json    a test payload for the GHL Inbound Webhook
 * See ghl/README.md for the full setup.
 */
import process from 'node:process'
import { build } from 'vite'
import { cp, mkdir, rm, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const out = resolve(root, 'ghl-export')
const arg = (name) => {
  const i = process.argv.indexOf(`--${name}`)
  return i > -1 ? process.argv[i + 1] : ''
}
let host = arg('url') || 'https://YOUR-SITE-HOST/'
if (!host.endsWith('/')) host += '/'
const siteUrl = host + 'site/'

process.env.BRAND_RENDER = '1' // no Vue devtools in the bundle
// GHL links baked into the build (each one overrides src/site/config.js when given)
if (arg('webhook')) process.env.VITE_SB_FORM_ENDPOINT = arg('webhook')
if (arg('calendar')) process.env.VITE_SB_BOOKING_URL = arg('calendar')
if (arg('community')) process.env.VITE_SB_COMMUNITY_URL = arg('community')
await build({ root, base: './', logLevel: 'warn' })

await rm(out, { recursive: true, force: true })
await mkdir(out, { recursive: true })
await cp(resolve(root, 'dist'), resolve(out, 'site-files'), { recursive: true })

const snippet = `<!--
  System-Based website for GoHighLevel.
  Paste this whole block into ONE Custom Code element (Custom JS/HTML) on a blank GHL page.
  The site itself is served from: ${siteUrl}
-->
<style>
  html, body { background: #0a0a0b !important; }
  #sb-site { position: fixed; inset: 0; width: 100%; height: 100%; border: 0; z-index: 999; background: #0a0a0b; }
</style>
<iframe id="sb-site" title="System-Based" allow="autoplay; fullscreen; clipboard-write"></iframe>
<script>
  (function () {
    var SITE = '${siteUrl}';
    // pass UTM tags and the real page URL through, so inquiries keep their attribution
    var q = new URLSearchParams(location.search);
    q.set('ghl_page', location.href.split('#')[0]);
    document.getElementById('sb-site').src = SITE + '?' + q.toString() + location.hash;
    // fire your pixels on this page when someone sends an inquiry inside the site
    window.addEventListener('message', function (e) {
      if (!e.data || e.data.type !== 'sb:inquiry') return;
      if (window.fbq) window.fbq('track', 'Lead');
      if (window.gtag) window.gtag('event', 'generate_lead');
    });
  })();
</script>
<noscript><a href="${siteUrl}">Open the System-Based website</a></noscript>
`
await writeFile(resolve(out, 'custom-code.html'), snippet)

const sample = {
  schema: 'system-based.inquiry.v1',
  catalogVersion: '1.0.0',
  submittedAt: new Date().toISOString(),
  contact: {
    name: 'Test Lead',
    business: 'Test Roofing',
    phone: '+15555550142',
    email: 'test@example.com',
  },
  need: { text: 'I need more people calling in the first place', system: 'GR' },
  scope: {
    interest: 'Pipeline package',
    package: 'pipeline',
    services: ['GR-01', 'CR-01'],
    projects: ['BB-01'],
    customProposal: false,
    performanceInterest: true,
  },
  message: 'Test inquiry from the System-Based website',
  source: { page: siteUrl, referrer: '', utm: { utm_source: 'test' } },
  first_name: 'Test',
  last_name: 'Lead',
  full_name: 'Test Lead',
  email: 'test@example.com',
  phone: '+15555550142',
  company_name: 'Test Roofing',
  tags: 'sb-inquiry,sb-pkg-pipeline,sb-sys-gr,sb-project,sb-performance',
  sb_interest: 'Pipeline package',
  sb_package: 'Pipeline',
  sb_services: 'GR-01, CR-01',
  sb_projects: 'BB-01',
  sb_system: 'Growth',
  sb_need: 'I need more people calling in the first place',
  sb_custom_proposal: 'no',
  sb_performance: 'yes',
  sb_message: 'Test inquiry from the System-Based website',
  sb_source_page: siteUrl,
  utm_source: 'test',
  utm_medium: '',
  utm_campaign: '',
  utm_content: '',
}
await writeFile(resolve(out, 'sample-inquiry.json'), JSON.stringify(sample, null, 2) + '\n')

try {
  execFileSync('zip', ['-qr', '../site-files.zip', '.'], { cwd: resolve(out, 'site-files') })
} catch {
  console.warn('zip not found: upload the site-files folder instead')
}

console.log(`
✓ GHL export ready in ghl-export/
  1. Upload ghl-export/site-files (or site-files.zip) to your static host.
     The site must then open at ${siteUrl}
  2. Paste ghl-export/custom-code.html into a Custom Code element on a blank GHL page.
  3. Follow ghl/README.md to connect the webhook, calendar and community.
`)
