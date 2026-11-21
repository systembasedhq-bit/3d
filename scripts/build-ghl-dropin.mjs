#!/usr/bin/env node
/*
 * GHL drop-in: the whole website as ONE block of code for a GHL Custom JS/HTML element.
 * Nothing to host: the built files are committed to ghl/drop/ and served by jsDelivr
 * straight from the public GitHub repo.
 *
 *   npm run build:ghl-dropin -- --cdn https://cdn.jsdelivr.net/gh/<owner>/<repo>@<commit>/ghl/drop/
 *
 * Writes ghl/drop/ (assets) and ghl/drop/custom-code.html (the block to paste).
 * Commit ghl/drop first, then rebuild with --cdn pointing at that commit.
 */
import process from 'node:process'
import { build } from 'vite'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const outDir = resolve(root, 'ghl/drop')
const i = process.argv.indexOf('--cdn')
let cdn = i > -1 ? process.argv[i + 1] : 'https://cdn.jsdelivr.net/gh/OWNER/REPO@COMMIT/ghl/drop/'
if (!cdn.endsWith('/')) cdn += '/'
const keep = process.argv.includes('--snippet-only')

process.env.BRAND_RENDER = '1'
if (!keep) {
  await build({
    root,
    configFile: false, // only the website: no mockup tool, no brand studio
    publicDir: false,
    base: './',
    logLevel: 'warn',
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: { input: { site: resolve(root, 'site/index.html') } },
    },
  })
}

const html = await readFile(resolve(outDir, keep ? 'site-index.html' : 'site/index.html'), 'utf8')
const head = html.slice(html.indexOf('<head>') + 6, html.indexOf('</head>'))
const bodyOpen = html.indexOf('<body')
const body = html.slice(html.indexOf('>', bodyOpen) + 1, html.indexOf('</body>'))
const abs = (s) => s.replaceAll('../assets/', cdn + 'assets/')
const tags = head.match(/<(link|script)\b[^>]*>(<\/script>)?/g) || []
const styles = tags.filter((t) => t.includes('stylesheet')).map(abs)
const preloads = tags.filter((t) => t.includes('modulepreload')).map(abs)
const module = tags.filter((t) => t.startsWith('<script')).map(abs)
const markup = body.replace(/<script type="module"[\s\S]*?<\/script>/, '').trim()
  // non-ASCII as entities, so the block survives any editor or page encoding
  .replace(/[^\t\n\r\x20-\x7E]/g, (c) => `&#${c.codePointAt(0)};`)

const snippet = `<!--
  SYSTEM-BASED WEBSITE for GoHighLevel
  Paste this whole block into ONE "Custom JS/HTML" element on a blank GHL page.
  Fill in the settings below whenever you have them; no rebuild needed.
-->
<script>
  // Fill these in when each one is real and tested. Leave blank otherwise: the site
  // then shows honest fallbacks (waitlist, "confirmed after scoping") instead of dead links.
  window.SB_CONFIG = {
    FORM_ENDPOINT: '',   // relay URL (recommended, see relay/worker.js) or a GHL Inbound Webhook URL
    FORM_MODE: 'auto',   // 'relay' | 'ghl' | 'auto' (decides from the URL)
    BOOKING_URL: '',     // GHL calendar booking link, shown after an inquiry is sent
    COMMUNITY_URL: '',   // System-Based Business Community join link. Blank = waitlist
    CONTACT_EMAIL: '',   // shown if online sending isn't switched on yet
    SHOW_PROPOSED: false, // keep false until the owner approves prices in the catalog
    MOCKUP_TOOL_URL: ''
  };
  // phones need a viewport tag; GHL pages normally have one, this adds it if not
  if (!document.querySelector('meta[name=viewport]')) {
    var vp = document.createElement('meta');
    vp.name = 'viewport';
    vp.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
    document.head.appendChild(vp);
  }
</script>
${styles.join('\n')}
${preloads.join('\n')}
<div id="sb-root" style="display:none">
${markup}
</div>
<script>
  (function () {
    // Runs once even if GHL re-executes custom code: put the site directly in <body>
    // and hide only GHL's own (now empty) page wrapper. Chat widgets, pixels and
    // other scripts GHL adds to <body> are left untouched.
    if (window.__sbMounted) return;
    var root = document.getElementById('sb-root');
    if (!root) return;
    window.__sbMounted = true;
    var wrap = root;
    while (wrap.parentElement && wrap.parentElement !== document.body) wrap = wrap.parentElement;
    document.body.insertBefore(root, document.body.firstChild);
    if (wrap !== root) wrap.style.display = 'none';
    root.style.display = '';
    document.body.classList.add('intro');
  })();
</script>
${module.join('\n')}
`
await writeFile(resolve(outDir, 'custom-code.html'), snippet)
await rm(resolve(outDir, 'site'), { recursive: true, force: true }).catch(() => {})
await writeFile(resolve(outDir, 'site-index.html'), html) // kept for --snippet-only rebuilds
console.log(
  `✓ ghl/drop/custom-code.html (${(snippet.length / 1024).toFixed(1)} KB) → assets from ${cdn}`,
)
