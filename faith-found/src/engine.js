/* =====================================================================================
   FAITH FOUND — 3D ENGINE  (three.js 0.180, ES module, no build step)
   One engine for every product and every screen:
     • builders  : procedural models for cap, hoodie, wall piece, flight tag (real-world scale, metres)
     • Stage     : product viewer (orbit, colour/size, measure, compare, film)
     • Showcase  : home-screen intro — products fall into lit niches, then idle
     • thumbs    : renders product stills for cards, so the site needs no image hosting
   Exposes window.FFEngine and fires the "ffengine:ready" event.
   Conventions (see docs/01-3d-principles.md): 1 unit = 1 m · front faces +Z · Y up ·
   models are built at the origin, base on y = 0 (wall pieces: back on z = 0).
   ===================================================================================== */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/+esm';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js/+esm';
import { RoomEnvironment } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/environments/RoomEnvironment.js/+esm';
import { DecalGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/geometries/DecalGeometry.js/+esm';
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/postprocessing/EffectComposer.js/+esm';
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/postprocessing/RenderPass.js/+esm';
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/postprocessing/UnrealBloomPass.js/+esm';
import { OutputPass } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/postprocessing/OutputPass.js/+esm';
import { GTAOPass } from 'https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/postprocessing/GTAOPass.js/+esm';

/* ------------------------------------------------------------------ basics */
const IN = 0.0254, TAU = Math.PI * 2, V3 = THREE.Vector3;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const EASE = {
  inOut: (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2),
  out: (x) => 1 - Math.pow(1 - x, 3),
  outExpo: (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x)),
  in: (x) => x * x * x,
  outBack: (x) => { const c = 1.4; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); },
};
const rnd = (seed) => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
const fmtIn = (m) => { const v = m / IN; return (v >= 10 ? v.toFixed(1) : v.toFixed(2)).replace(/\.?0+$/, '') + ' in'; };
const fmtCm = (m) => (m * 100 >= 10 ? (m * 100).toFixed(1) : (m * 100).toFixed(2)).replace(/\.?0+$/, '') + ' cm';
const REDUCED = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
let MAX_ANISO = 8;

/* ------------------------------------------------------------------ vector paths → contours → shapes */
function parseD(d, seg = 6) {
  const tok = d.match(/[MLHVQCZ]|-?\d*\.?\d+(?:e-?\d+)?/gi) || [];
  const out = []; let cur = null, cx = 0, cy = 0, sx = 0, sy = 0, cmd = '', i = 0;
  const num = () => parseFloat(tok[i++]);
  const push = (x, y) => cur.push([x, y]);
  while (i < tok.length) {
    if (/^[A-Za-z]$/.test(tok[i])) cmd = tok[i++].toUpperCase();
    if (cmd === 'M') { cur = []; out.push(cur); cx = num(); cy = num(); sx = cx; sy = cy; push(cx, cy); cmd = 'L'; }
    else if (cmd === 'L') { cx = num(); cy = num(); push(cx, cy); }
    else if (cmd === 'H') { cx = num(); push(cx, cy); }
    else if (cmd === 'V') { cy = num(); push(cx, cy); }
    else if (cmd === 'Q') { const x1 = num(), y1 = num(), x = num(), y = num(); for (let k = 1; k <= seg; k++) { const t = k / seg, u = 1 - t; push(u * u * cx + 2 * u * t * x1 + t * t * x, u * u * cy + 2 * u * t * y1 + t * t * y); } cx = x; cy = y; }
    else if (cmd === 'C') { const x1 = num(), y1 = num(), x2 = num(), y2 = num(), x = num(), y = num(); for (let k = 1; k <= seg + 2; k++) { const t = k / (seg + 2), u = 1 - t; push(u ** 3 * cx + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t ** 3 * x, u ** 3 * cy + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t ** 3 * y); } cx = x; cy = y; }
    else if (cmd === 'Z') { cx = sx; cy = sy; cmd = ''; }
    else i++;
  }
  return out.map((c) => { const a = c[0], b = c[c.length - 1]; if (c.length > 2 && Math.abs(a[0] - b[0]) < 1e-6 && Math.abs(a[1] - b[1]) < 1e-6) c.pop(); return c; }).filter((c) => c.length > 2);
}
const area2 = (c) => { let a = 0; for (let i = 0; i < c.length; i++) { const p = c[i], q = c[(i + 1) % c.length]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; };
const inPoly = (pt, poly) => { let r = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { const a = poly[i], b = poly[j]; if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < ((b[0] - a[0]) * (pt[1] - a[1])) / (b[1] - a[1]) + a[0]) r = !r; } return r; };
const toV2 = (c) => c.map(([x, y]) => new THREE.Vector2(x, y));
/** Contours (any winding) → Shapes with holes, by containment depth (even = solid, odd = hole). */
function shapesFrom(contours) {
  const items = contours.map((c) => ({ c, a: Math.abs(area2(c)) })).sort((p, q) => q.a - p.a);
  items.forEach((it, i) => { it.parents = items.slice(0, i).filter((p) => inPoly(it.c[0], p.c)); it.depth = it.parents.length; });
  const shapes = [];
  items.forEach((it) => { if (it.depth % 2 === 0) { it.shape = new THREE.Shape(toV2(it.c)); shapes.push(it.shape); } });
  items.forEach((it) => { if (it.depth % 2 === 1) { const host = it.parents[it.parents.length - 1]; if (host && host.shape) host.shape.holes.push(new THREE.Path(toV2(it.c))); } });
  return shapes;
}
/** Shrink a closed polygon by d (miter offset, clamped at sharp tips). */
function offsetPoly(poly, d) {
  const s = Math.sign(area2(poly)) || 1, n = poly.length, out = [];
  const nrm = (v) => { const l = Math.hypot(v[0], v[1]) || 1; return [v[0] / l, v[1] / l]; };
  for (let i = 0; i < n; i++) {
    const p0 = poly[(i - 1 + n) % n], p1 = poly[i], p2 = poly[(i + 1) % n];
    const e1 = nrm([p1[0] - p0[0], p1[1] - p0[1]]), e2 = nrm([p2[0] - p1[0], p2[1] - p1[1]]);
    const n1 = [-e1[1] * s, e1[0] * s], n2 = [-e2[1] * s, e2[0] * s];
    const m = nrm([n1[0] + n2[0], n1[1] + n2[1]]); const k = d / Math.max(0.35, m[0] * n1[0] + m[1] * n1[1]);
    out.push([p1[0] + m[0] * k, p1[1] + m[1] * k]);
  }
  return out;
}
const rectC = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];

/* ------------------------------------------------------------------ brand geometry (BRAND comes from brand.js) */
const CROSS_RAW = (() => { const cs = parseD(BRAND.CROSS); cs.sort((a, b) => Math.abs(area2(b)) - Math.abs(area2(a))); return { outer: cs[0], inner: cs[1] }; })();
const CROSS_OUTER_D = BRAND.CROSS.slice(0, BRAND.CROSS.indexOf('Z') + 1);
/** Lockup proportions, in units of the cross height H. x from the cross centre, y down from the cross top.
    stacked: caps, hoodies, wall pieces.  wide: flight tag and woven labels (text sits outside the arms). */
const LOCKUPS = { stacked: { cap: 0.25, mid: 0.6, gap: 0.115 }, wide: { cap: 0.48, mid: 0.52, gap: 0.42 } };
function lockupLayout(v = 'stacked') {
  const L = LOCKUPS[v], k = L.cap / BRAND.CAP, fw = BRAND.FAITH_W * k, uw = BRAND.FOUND_W * k;
  return { k, cap: L.cap, base: L.mid + L.cap / 2, capTop: L.mid - L.cap / 2, faithX: -L.gap - fw, foundX: L.gap, left: -L.gap - fw, right: L.gap + uw, width: 2 * L.gap + fw + uw };
}
/** cross contours in y-up space: centre x = cx, top at y = top, height H */
function crossC(H, cx = 0, top = 0) {
  const s = H / 100, m = (c) => c.map(([x, y]) => [cx + x * s, top - y * s]);
  return { outer: m(CROSS_RAW.outer), inner: m(CROSS_RAW.inner) };
}
/** glyph contours for a word (FAITH / FOUND / TAGLINE) in y-up space */
function wordC(glyphs, k, x0, baseline) {
  const out = [];
  for (const g of glyphs) for (const c of parseD(g.d, 5)) out.push(c.map(([gx, gy]) => [x0 + (g.x + gx) * k, baseline - gy * k]));
  return out;
}

/* ------------------------------------------------------------------ 2D art (canvas) — the same marks, painted */
const P2D = new Map(); const p2d = (d) => { if (!P2D.has(d)) P2D.set(d, new Path2D(d)); return P2D.get(d); };
function drawCross(ctx, cx, top, H, mode = 'outline') {
  ctx.save(); ctx.translate(cx, top); ctx.scale(H / 100, H / 100);
  if (mode === 'outline') ctx.fill(p2d(BRAND.CROSS), 'evenodd'); else ctx.fill(p2d(CROSS_OUTER_D));
  ctx.restore();
}
function drawGlyphs(ctx, glyphs, k, x0, baseline) {
  for (const g of glyphs) { ctx.save(); ctx.translate(x0 + g.x * k, baseline); ctx.scale(k, k); ctx.fill(p2d(g.d)); ctx.restore(); }
}
/** paint a lockup with the cross centred at cx; top = cross top; H = cross height (px) */
function drawLockup(ctx, cx, top, H, variant = 'stacked', crossMode = 'outline') {
  const L = lockupLayout(variant), k = L.k * H;
  drawCross(ctx, cx, top, H, crossMode);
  drawGlyphs(ctx, BRAND.FAITH, k, cx + L.faithX * H, top + L.base * H);
  drawGlyphs(ctx, BRAND.FOUND, k, cx + L.foundX * H, top + L.base * H);
}
function drawTagline(ctx, cx, baseline, capPx) { const k = capPx / BRAND.CAP; drawGlyphs(ctx, BRAND.TAGLINE, k, cx - (BRAND.TAGLINE_W * k) / 2, baseline); }
/** lockup as an SVG string (for the website's 2D art) */
function lockupSVG(variant = 'stacked', crossMode = 'outline') {
  const L = lockupLayout(variant), H = 100, k = L.k * H, w = L.width * H, ox = -L.left * H;
  const g = (glyphs, x0) => glyphs.map((gl) => `<path transform="translate(${(x0 + gl.x * k).toFixed(2)} ${(L.base * H).toFixed(2)}) scale(${k.toFixed(5)})" d="${gl.d}"/>`).join('');
  const cross = crossMode === 'outline' ? `<path fill-rule="evenodd" transform="translate(${ox.toFixed(2)} 0)" d="${BRAND.CROSS}"/>` : `<path transform="translate(${ox.toFixed(2)} 0)" d="${CROSS_OUTER_D}"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w.toFixed(1)} ${H}" fill="currentColor" aria-hidden="true">${cross}${g(BRAND.FAITH, ox + L.faithX * H)}${g(BRAND.FOUND, ox + L.foundX * H)}</svg>`;
}
function crossSVG(mode = 'outline') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-35.8 0 71.6 100" fill="currentColor" aria-hidden="true">${mode === 'outline' ? `<path fill-rule="evenodd" d="${BRAND.CROSS}"/>` : `<path d="${CROSS_OUTER_D}"/>`}</svg>`;
}

/* ------------------------------------------------------------------ textures */
const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = Math.max(2, Math.round(w)); c.height = Math.max(2, Math.round(h)); return c; };
function ctex(c, srgb = true, rx = 1, ry = rx) {
  const t = new THREE.CanvasTexture(c); t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = MAX_ANISO;
  if (rx !== 1 || ry !== 1) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); }
  return t;
}
const TEX = {};
function tileTex(key, size, paint, srgb = false) {
  if (!TEX[key]) { const c = mkCanvas(size, size); paint(c.getContext('2d'), size); const t = ctex(c, srgb); t.wrapS = t.wrapT = THREE.RepeatWrapping; TEX[key] = t; }
  return TEX[key];
}
const tiled = (key, rx, ry) => { const t = TEX[key].clone(); t.repeat.set(rx, ry); t.needsUpdate = true; return t; };
function noise(x, s, seed, n, alpha, sz = 1.6) { const R = rnd(seed); for (let i = 0; i < n; i++) { const v = R() < 0.5 ? 0 : 255; x.fillStyle = `rgba(${v},${v},${v},${alpha})`; x.fillRect(R() * s, R() * s, 1 + R() * sz, 1 + R() * sz); } }
function initTiles() {
  tileTex('fleece', 256, (x, s) => { x.fillStyle = '#808080'; x.fillRect(0, 0, s, s); noise(x, s, 7, 9000, 0.18, 2.2); });
  tileTex('twill', 256, (x, s) => { x.fillStyle = '#808080'; x.fillRect(0, 0, s, s); const P = 8; x.lineWidth = 2.2; for (let c = -s; c < 2 * s; c += P) { x.strokeStyle = 'rgba(255,255,255,.35)'; x.beginPath(); x.moveTo(c, 0); x.lineTo(c + s, s); x.stroke(); } noise(x, s, 3, 3000, 0.08); });
  tileTex('rib', 256, (x, s) => { x.fillStyle = '#5a5a5a'; x.fillRect(0, 0, s, s); for (let i = 0; i < s; i += 8) { const g = x.createLinearGradient(i, 0, i + 8, 0); g.addColorStop(0, '#3a3a3a'); g.addColorStop(0.5, '#d0d0d0'); g.addColorStop(1, '#3a3a3a'); x.fillStyle = g; x.fillRect(i, 0, 8, s); } noise(x, s, 9, 1500, 0.1); });
  tileTex('mesh', 256, (x, s) => { x.fillStyle = '#fff'; x.fillRect(0, 0, s, s); x.fillStyle = '#000'; const P = 16; for (let r = 0; r < s / P; r++) for (let c = 0; c <= s / P; c++) { x.beginPath(); x.arc(c * P + (r % 2 ? P / 2 : 0), r * P + P / 2, P * 0.33, 0, TAU); x.fill(); } });
  tileTex('meshBump', 256, (x, s) => { x.fillStyle = '#fff'; x.fillRect(0, 0, s, s); x.fillStyle = '#222'; const P = 16; for (let r = 0; r < s / P; r++) for (let c = 0; c <= s / P; c++) { x.beginPath(); x.arc(c * P + (r % 2 ? P / 2 : 0), r * P + P / 2, P * 0.36, 0, TAU); x.fill(); } });
  tileTex('steel', 512, (x, s) => { x.fillStyle = '#7a7a7a'; x.fillRect(0, 0, s, s); const R = rnd(11); for (let i = 0; i < 80; i++) { const g = x.createRadialGradient(R() * s, R() * s, 0, R() * s, R() * s, s * (0.03 + R() * 0.15)); const v = R() < 0.5 ? 50 : 200; g.addColorStop(0, `rgba(${v},${v},${v},.22)`); g.addColorStop(1, 'rgba(128,128,128,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); } noise(x, s, 5, 8000, 0.07); });
  tileTex('plaster', 512, (x, s) => { x.fillStyle = '#808080'; x.fillRect(0, 0, s, s); const R = rnd(31); for (let i = 0; i < 220; i++) { const g = x.createRadialGradient(R() * s, R() * s, 0, R() * s, R() * s, s * (0.02 + R() * 0.12)); const v = R() < 0.5 ? 60 : 200; g.addColorStop(0, `rgba(${v},${v},${v},.13)`); g.addColorStop(1, 'rgba(128,128,128,0)'); x.fillStyle = g; x.fillRect(0, 0, s, s); } noise(x, s, 2, 16000, 0.05); });
  tileTex('merrow', 128, (x, s) => { x.fillStyle = '#777'; x.fillRect(0, 0, s, s); for (let i = -s; i < 2 * s; i += 6) { x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 3; x.beginPath(); x.moveTo(i, 0); x.lineTo(i + s * 0.6, s); x.stroke(); } });
}
/** Embroidery: colour map (thread over optional ground) + bump map (raised, rounded edges, satin ridges). */
function paintEmbroidery(w, h, draw, o) {
  const col = mkCanvas(w, h), cx = col.getContext('2d');
  if (o.ground) { cx.fillStyle = o.ground; cx.fillRect(0, 0, w, h); if (o.weave) { cx.globalAlpha = 0.5; for (let y = 0; y < h; y += 3) { cx.fillStyle = y % 6 ? 'rgba(255,255,255,.035)' : 'rgba(0,0,0,.12)'; cx.fillRect(0, y, w, 1.5); } cx.globalAlpha = 1; } }
  const th = mkCanvas(w, h), tx = th.getContext('2d');
  tx.fillStyle = o.thread; draw(tx);
  tx.globalCompositeOperation = 'source-atop';
  const step = Math.max(1.5, w / (o.stitches || 300)), ang = o.angle ?? 0.5; let i = 0;
  for (let x = -h; x < w + h; x += step, i++) { tx.strokeStyle = i % 2 ? 'rgba(255,255,255,.10)' : 'rgba(0,0,0,.20)'; tx.lineWidth = step * 0.5; tx.beginPath(); tx.moveTo(x, h); tx.lineTo(x + h * ang, 0); tx.stroke(); }
  cx.drawImage(th, 0, 0);
  const b = mkCanvas(w, h), bx = b.getContext('2d'); bx.fillStyle = '#000'; bx.fillRect(0, 0, w, h);
  const OFF = w * 3; bx.save(); bx.shadowColor = '#fff'; bx.shadowBlur = o.blur ?? Math.max(2, w / 160); bx.shadowOffsetX = OFF; bx.translate(-OFF, 0); bx.fillStyle = '#fff'; draw(bx); bx.restore();
  bx.globalAlpha = o.puff ? 0.85 : 0.45; bx.fillStyle = '#fff'; draw(bx); bx.globalAlpha = 1;
  bx.globalCompositeOperation = 'source-atop'; i = 0;
  for (let x = -h; x < w + h; x += step, i++) { bx.strokeStyle = i % 2 ? 'rgba(0,0,0,.18)' : 'rgba(255,255,255,.08)'; bx.lineWidth = step * 0.5; bx.beginPath(); bx.moveTo(x, h); bx.lineTo(x + h * ang, 0); bx.stroke(); }
  if (o.post) o.post(cx, bx);
  return { map: ctex(col, true), bump: ctex(b, false) };
}

/* ------------------------------------------------------------------ photos as texture sources
   The real mock-up photos (window.FF_IMAGES) are the reference for every product. Embroidery and tag faces
   are lifted straight from them: the thread is isolated by brightness and recoloured to the colourway. */
const PHOTO = {}; let PHOTOS_P = null;
function loadPhotos() {
  if (PHOTOS_P) return PHOTOS_P;
  const src = window.FF_IMAGES || {}, urls = window.FF_IMAGE_URLS || {};
  PHOTOS_P = Promise.all(Object.keys(src).map((n) => new Promise((res) => { const im = new Image(); im.onload = () => { PHOTO[n] = im; res(); }; im.onerror = () => res(); im.src = urls[n] || src[n]; })));
  return PHOTOS_P;
}
const hexRGB = (h) => { const c = new THREE.Color(h); return [c.r * 255, c.g * 255, c.b * 255].map((v) => Math.round(Math.pow(v / 255, 1 / 2.2) * 255)); };
/** photoArt(name, crop[x,y,w,h], {thread, ground, t0, t1}) → { color canvas, bump canvas, aspect } trimmed to the thread. */
function photoArt(name, crop, o = {}) {
  const im = PHOTO[name]; if (!im) return null;
  const [sx, sy, sw, sh] = crop || [0, 0, im.naturalWidth, im.naturalHeight];
  const c = mkCanvas(sw, sh), x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, sx, sy, sw, sh, 0, 0, sw, sh);
  const src = x.getImageData(0, 0, sw, sh).data, t0 = o.t0 ?? 0.2, t1 = o.t1 ?? 0.42;
  let bx0 = sw, by0 = sh, bx1 = 0, by1 = 0;
  const lum = new Float32Array(sw * sh);
  for (let i = 0; i < sw * sh; i++) { const l = (0.2126 * src[i * 4] + 0.7152 * src[i * 4 + 1] + 0.0722 * src[i * 4 + 2]) / 255; lum[i] = l; if (l > 0.5) { const px = i % sw, py = (i / sw) | 0; if (px < bx0) bx0 = px; if (px > bx1) bx1 = px; if (py < by0) by0 = py; if (py > by1) by1 = py; } }
  if (bx1 <= bx0) return null;
  const pad = Math.round(Math.max(bx1 - bx0, by1 - by0) * 0.03); bx0 = Math.max(0, bx0 - pad); by0 = Math.max(0, by0 - pad); bx1 = Math.min(sw - 1, bx1 + pad); by1 = Math.min(sh - 1, by1 + pad);
  const w = bx1 - bx0 + 1, h = by1 - by0 + 1, col = mkCanvas(w, h), bmp = mkCanvas(w, h);
  const cx = col.getContext('2d'), bxx = bmp.getContext('2d'), cd = cx.createImageData(w, h), bd = bxx.createImageData(w, h);
  const th = hexRGB(o.thread || '#f1ede6'), gr = o.ground ? hexRGB(o.ground) : null;
  for (let yy = 0; yy < h; yy++) for (let xx = 0; xx < w; xx++) {
    const l = lum[(yy + by0) * sw + xx + bx0], a = clamp((l - t0) / (t1 - t0), 0, 1), sh2 = clamp(0.42 + (l - 0.3) * 1.05, 0.38, 1.12), j = (yy * w + xx) * 4;
    for (let k = 0; k < 3; k++) { const t = Math.min(255, th[k] * sh2); cd.data[j + k] = gr ? gr[k] + (t - gr[k]) * a : t; }
    cd.data[j + 3] = gr ? 255 : a * 255;
    const b = Math.round(clamp(l * 1.3, 0, 1) * 255); bd.data[j] = bd.data[j + 1] = bd.data[j + 2] = b; bd.data[j + 3] = 255;
  }
  cx.putImageData(cd, 0, 0); bxx.putImageData(bd, 0, 0);
  return { color: col, bump: bmp, aspect: w / h };
}
/** where the art sits in each source photo (pixels in the cropped asset) */
const ART = {
  lockup: { photo: 'cap-foundation-detail', crop: null },
  cross: { photo: 'cap-emblem-detail', crop: null },
  tagFront: { photo: 'flight-tag-front', crop: [330, 20, 1120, 320] },
  tagBack: { photo: 'flight-tag-back', crop: [330, 20, 1120, 310] },
};
function artMaps(key, thread, ground) {
  const a = ART[key], r = a && photoArt(a.photo, a.crop, { thread, ground });
  if (!r) return null;
  return { map: ctex(r.color, true), bump: ctex(r.bump, false), aspect: r.aspect, canvas: r.color };
}

/* ------------------------------------------------------------------ materials */
const FINISH = {
  black: { color: '#121211', metalness: 0.2, roughness: 0.74, clearcoat: 0.08 },
  gunmetal: { color: '#3b3a37', metalness: 0.88, roughness: 0.42, clearcoat: 0.25 },
  brass: { color: '#bf9a5f', metalness: 1, roughness: 0.3, clearcoat: 0.1 },
};
function finishMat(id) {
  const f = FINISH[id] || FINISH.black;
  return new THREE.MeshPhysicalMaterial({ color: f.color, metalness: f.metalness, roughness: f.roughness, roughnessMap: TEX.steel, clearcoat: f.clearcoat, clearcoatRoughness: 0.45 });
}
function fabricMat(hex, bumpKey, rx, ry, bumpScale = 0.7, extra = {}) {
  const c = new THREE.Color(hex), lum = c.r * 0.3 + c.g * 0.59 + c.b * 0.11;
  return new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.94, sheen: 0.55, sheenRoughness: 0.8, sheenColor: c.clone().lerp(new THREE.Color('#ffffff'), lum < 0.1 ? 0.12 : 0.07), envMapIntensity: 0.7, bumpMap: tiled(bumpKey, rx, ry), bumpScale, ...extra });
}
const metalMat = (hex = '#c9c6bf', rough = 0.28) => new THREE.MeshPhysicalMaterial({ color: hex, metalness: 1, roughness: rough });
function decalMat(maps, rough = 0.62, bumpScale = 2.2) {
  return new THREE.MeshPhysicalMaterial({ map: maps.map, bumpMap: maps.bump, bumpScale, roughness: rough, sheen: 0.6, sheenRoughness: 0.4, sheenColor: new THREE.Color('#ffffff'), transparent: true, alphaTest: 0.04, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
}

/* ------------------------------------------------------------------ geometry helpers */
/** grid surface from f(u,v) → Vector3, u,v in [0,1]. Optional drop(u,v) removes faces. */
function surface(nu, nv, f, uvScale = [1, 1], drop = null) {
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) { const u = i / nu, v = j / nv, p = f(u, v); pos.push(p.x, p.y, p.z); uv.push(u * uvScale[0], (1 - v) * uvScale[1]); }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    if (drop && drop((i + 0.5) / nu, (j + 0.5) / nv)) continue;
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1; idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}
/** average normals across a wrapped seam (first and last column of a surface grid) */
function weldSeam(g, nu, nv) {
  const n = g.attributes.normal;
  for (let j = 0; j <= nv; j++) { const a = j * (nu + 1), b = a + nu; const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b), l = Math.hypot(x, y, z) || 1; n.setXYZ(a, x / l, y / l, z / l); n.setXYZ(b, x / l, y / l, z / l); }
  n.needsUpdate = true;
}
const catmull = (p0, p1, p2, p3, t) => 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
/** sample keyframed rows [[y, ...vals]] smoothly at parameter s (0..1 over the key list) */
function keyAt(keys, y) {
  let i = 0; while (i < keys.length - 2 && keys[i + 1][0] < y) i++;
  const k0 = keys[Math.max(0, i - 1)], k1 = keys[i], k2 = keys[i + 1], k3 = keys[Math.min(keys.length - 1, i + 2)];
  const t = clamp((y - k1[0]) / (k2[0] - k1[0] || 1), 0, 1);
  return k1.map((_, c) => (c === 0 ? y : catmull(k0[c], k1[c], k2[c], k3[c], t)));
}
const seXY = (th, a, b, n) => { const c = Math.cos(th), s = Math.sin(th); return [a * Math.sign(c) * Math.pow(Math.abs(c), 2 / n), b * Math.sign(s) * Math.pow(Math.abs(s), 2 / n)]; };
/** sweep a varying ellipse along a curve: r(t) → [rx, ry] */
function sweep(curve, rFn, nu = 28, nv = 48) {
  const fr = curve.computeFrenetFrames(nv, false);
  const g = surface(nu, nv, (u, v) => {
    const j = Math.round(v * nv), p = curve.getPointAt(v), N = fr.normals[j], B = fr.binormals[j], [rx, ry] = rFn(v), a = u * TAU;
    return p.clone().addScaledVector(N, Math.cos(a) * rx).addScaledVector(B, Math.sin(a) * ry);
  }, [1, 1]);
  weldSeam(g, nu, nv); return g;
}
function bevelExtrude(shapes, depth, bevel) {
  return new THREE.ExtrudeGeometry(shapes, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 2, curveSegments: 6 });
}
function shapesArea(shapes) { let a = 0; for (const s of shapes) { a += Math.abs(THREE.ShapeUtils.area(s.getPoints())); for (const h of s.holes) a -= Math.abs(THREE.ShapeUtils.area(h.getPoints())); } return a; }
/** place a projected decal: raycast `mesh` from +Z at (x, y), project along dir */
function decalOn(mesh, x, y, w, h, mat, depth = 0.08, dir = new V3(0, 0, 1)) {
  mesh.updateMatrixWorld(true);
  const ray = new THREE.Raycaster(new V3(x, y, 0).addScaledVector(dir, 3), dir.clone().negate());
  const hit = ray.intersectObject(mesh, false)[0]; if (!hit) return null;
  const o = new THREE.Object3D(); o.position.copy(hit.point); o.lookAt(hit.point.clone().add(dir));
  const geo = new DecalGeometry(mesh, hit.point, o.rotation, new V3(w, h, depth));
  const m = new THREE.Mesh(geo, mat); m.renderOrder = 2; m.userData.center = hit.point.clone(); return m;
}

/* ================================================================== BUILDERS
   Each returns a Model: { group, kind, size, color, radius, box, focus{}, measures[], spec{}, halo?, dispose() } */
function finishModel(m) {
  m.group.updateMatrixWorld(true);
  m.box = new THREE.Box3().setFromObject(m.group, true);
  if (m.halo) { const hb = new THREE.Box3().setFromObject(m.pieceOnly || m.group, true); m.box = hb; }
  const sph = m.box.getBoundingSphere(new THREE.Sphere());
  m.radius = sph.radius; m.focus = Object.assign({ center: sph.center.clone() }, m.focus || {});
  m.dispose = () => m.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; ms.forEach((mt) => { for (const k in mt) if (mt[k] && mt[k].isTexture && !Object.values(TEX).includes(mt[k])) mt[k].dispose(); mt.dispose(); }); });
  return m;
}

/* ---------- TRUCKER CAP — Richardson 112 proportions ----------
   Structured mid-profile 6-panel: two buckram-backed front panels, four mesh panels, pre-curved visor with
   8 rows of stitching, covered button, sweatband, plastic snapback. Proportions per the published 112 profile
   (crown about 3¾ in, visor about 2¾ in); confirm against Richardson's spec sheet. */
const R112 = { crown: 3.75 * IN, visor: 2.75 * IN, rx: 0.0855, rzF: 0.1005, rzB: 0.093 };
function bakedFabric(w, h, base, paint) { const c = mkCanvas(w, h), x = c.getContext('2d'); x.fillStyle = base; x.fillRect(0, 0, w, h); paint && paint(x, w, h); return c; }
const tone = (hex, k) => { const c = new THREE.Color(hex); const hsl = {}; c.getHSL(hsl); c.setHSL(hsl.h, hsl.s, clamp(hsl.l * k + (k > 1 ? 0.035 : 0), 0, 1)); return '#' + c.getHexString(); };
function stitchLine(x, pts, col, len = 6, gap = 4, wdt = 1.6) { x.save(); x.strokeStyle = col; x.lineWidth = wdt; x.setLineDash([len, gap]); x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.stroke(); x.restore(); }
function buildCap(p, size, color) {
  const g = new THREE.Group(), s = size.scale || 1;
  const rx = R112.rx * s, rzF = R112.rzF * s, rzB = R112.rzB * s, ry = R112.crown * s;
  const FR = 1.02;                                    // the two front panels span ±58° around the front
  const crown = (phi, th) => {                       // th: 0 = button → π/2 = base
    const fz = Math.max(0, Math.sin(phi)), pe = 2.15 + 1.1 * fz * fz;   // front panels upright, back rounder
    th = clamp(th, 0, Math.PI / 2); const hz = Math.pow(Math.sin(th), 2 / pe), y = Math.pow(Math.max(0, Math.cos(th)), 2 / pe);
    const x = -Math.cos(phi) * hz, z = Math.sin(phi) * hz;
    const back = 1 - Math.max(0, -Math.sin(phi)) * 0.16 * hz, lean = fz * fz * 0.014 * s * Math.pow(Math.max(0, y - 0.35) / 0.65, 1.5);
    return new V3(x * rx, y * ry * back - 0.0025 * s, z * (z > 0 ? rzF : rzB) - lean);
  };
  const nrmAt = (phi, th) => crown(phi, th + 0.01).sub(crown(phi, th - 0.01)).cross(crown(phi + 0.01, th).sub(crown(phi - 0.01, th))).normalize().negate();
  const thread = tone(color.front, 1.9);
  // front panels: colour, twill, centre seam with double topstitch, edge seams
  const FW = 1024, FH = 512;
  const fc = bakedFabric(FW, FH, color.front, (x, w, h) => {
    x.globalAlpha = 0.07; for (let c = -h; c < w; c += 5) { x.strokeStyle = c % 10 ? '#000' : '#fff'; x.beginPath(); x.moveTo(c, h); x.lineTo(c + h, 0); x.stroke(); } x.globalAlpha = 1;
    for (const X of [w / 2]) { x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(X - 1.5, 0, 3, h); stitchLine(x, [[X - 9, 0], [X - 9, h]], thread, 7, 4, 2); stitchLine(x, [[X + 9, 0], [X + 9, h]], thread, 7, 4, 2); }
    for (const X of [3, w - 3]) { x.fillStyle = 'rgba(0,0,0,.6)'; x.fillRect(X - 3, 0, 6, h); stitchLine(x, [[X < w / 2 ? X + 12 : X - 12, 0], [X < w / 2 ? X + 12 : X - 12, h]], thread, 7, 4, 2); }
    stitchLine(x, [[0, h - 10], [w, h - 10]], thread, 7, 4, 2);
  });
  const fb = bakedFabric(512, 256, '#808080', (x, w, h) => { noise(x, w, 4, 4000, 0.12); x.globalAlpha = 0.35; for (let c = -h; c < w; c += 3) { x.strokeStyle = c % 6 ? '#000' : '#fff'; x.beginPath(); x.moveTo(c, h); x.lineTo(c + h, 0); x.stroke(); } });
  const frontMat = new THREE.MeshPhysicalMaterial({ map: ctex(fc), bumpMap: ctex(fb, false), bumpScale: 0.6, roughness: 0.86, sheen: 0.35, sheenRoughness: 0.6, sheenColor: new THREE.Color(tone(color.front, 1.6)), side: THREE.DoubleSide });
  const frontGeo = surface(64, 40, (u, v) => crown(Math.PI / 2 - FR + u * 2 * FR, v * Math.PI / 2));
  const frontM = new THREE.Mesh(frontGeo, frontMat); frontM.castShadow = true; g.add(frontM);
  // mesh back (alpha-to-coverage for clean holes), snapback opening cut out
  const meshMat = new THREE.MeshStandardMaterial({ color: color.mesh, roughness: 0.8, alphaMap: tiled('mesh', 22, 7), alphaTest: 0.5, alphaToCoverage: true, bumpMap: tiled('meshBump', 22, 7), bumpScale: 0.8, side: THREE.DoubleSide });
  const backStart = Math.PI / 2 + FR, backLen = TAU - 2 * FR;
  const arch = (u, v) => { const phi = backStart + u * backLen, d = (phi - 1.5 * Math.PI) / 0.3; return Math.abs(d) < 1 && (v * Math.PI) / 2 > Math.PI / 2 - 0.42 * (1 - d * d); };
  const backM = new THREE.Mesh(surface(110, 40, (u, v) => crown(backStart + u * backLen, (v * Math.PI) / 2), [1, 1], arch), meshMat); backM.castShadow = true; g.add(backM);
  // seam ridges between every panel, and the binding round the base
  const seamMat = new THREE.MeshPhysicalMaterial({ color: tone(color.front, 0.85), roughness: 0.85 });
  const seamAt = (phi, mat, r = 0.0013) => { const pts = []; for (let i = 0; i <= 24; i++) { const th = 0.02 + (i / 24) * (Math.PI / 2 - 0.02); pts.push(crown(phi, th).addScaledVector(nrmAt(phi, th), r * 0.6)); } return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, r * s, 6), mat); };
  const meshSeam = new THREE.MeshStandardMaterial({ color: tone(color.mesh, 0.8), roughness: 0.8 });
  for (const phi of [Math.PI / 2, Math.PI / 2 - FR, Math.PI / 2 + FR]) g.add(seamAt(phi, seamMat));
  for (const k of [1, 2, 3]) { const phi = backStart + (k / 4) * backLen; if (Math.abs(phi - 1.5 * Math.PI) > 0.05) g.add(seamAt(phi, meshSeam)); }
  g.add(seamAt(1.5 * Math.PI, meshSeam));
  { const pts = []; for (let i = 0; i <= 120; i++) { const phi = Math.PI / 2 + (i / 120) * TAU; if (Math.abs(((phi % TAU) - 1.5 * Math.PI)) < 0.3) continue; pts.push(crown(phi, Math.PI / 2 - 0.004)); } const bind = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, 0.0018 * s, 6), seamMat); g.add(bind); }
  // sweatband inside the base
  const sb = surface(96, 2, (u, v) => { const phi = Math.PI / 2 + u * TAU, q = crown(phi, Math.PI / 2); return new V3(q.x * 0.95, 0.002 + v * 0.022 * s, q.z * 0.95); });
  g.add(new THREE.Mesh(sb, new THREE.MeshStandardMaterial({ color: '#141312', roughness: 0.7, side: THREE.DoubleSide })));
  // visor: flush to the crown base (bend grows outward from the seam, so there is no gap), 8 stitch rows
  const A = 1.18, vproj = R112.visor * s, vt = 0.0036 * s;
  const inner = (a) => { const q = crown(Math.PI / 2 + a, Math.PI / 2); return [q.x * 0.992, q.z * 0.992]; };
  const v2 = (u, v) => { const a = -A + 2 * A * u, [ix, iz] = inner(a), f = Math.pow(Math.cos((a / A) * (Math.PI / 2)), 0.62); return [ix * (1 + 0.075 * v), iz + vproj * f * v]; };
  const bend = (X, Y, v) => -0.0005 - v * (0.03 * s * Math.pow(Math.abs(X) / (rx * 1.08), 2.2) + 0.011 * s);
  const vtop = (u, v) => { const [X, Y] = v2(u, v); return new V3(X, bend(X, Y, v), Y); };
  const vbot = (u, v) => { const [X, Y] = v2(1 - u, v); return new V3(X, bend(X, Y, v) - vt, Y); };
  const vrim = (u, v) => { const [X, Y] = v2(u, 1); return new V3(X, bend(X, Y, 1) - vt * v, Y); };
  const vc = bakedFabric(1024, 512, color.visor, (x, w, h) => { x.globalAlpha = 0.07; for (let c = -h; c < w; c += 5) { x.strokeStyle = c % 10 ? '#000' : '#fff'; x.beginPath(); x.moveTo(c, h); x.lineTo(c + h, 0); x.stroke(); } x.globalAlpha = 1; for (let r = 0; r < 8; r++) { const y = h * (0.965 - r * 0.07); stitchLine(x, [[w * 0.02, y], [w * 0.98, y]], thread, 8, 4, 2.4); } });
  const vbmp = bakedFabric(1024, 512, '#808080', (x, w, h) => { for (let r = 0; r < 8; r++) { const y = h * (0.965 - r * 0.07); stitchLine(x, [[w * 0.02, y], [w * 0.98, y]], '#2a2a2a', 8, 4, 3); } });
  const visorMat = new THREE.MeshPhysicalMaterial({ map: ctex(vc), bumpMap: ctex(vbmp, false), bumpScale: 1.4, roughness: 0.86, sheen: 0.3, sheenColor: new THREE.Color(tone(color.visor, 1.6)), side: THREE.DoubleSide });
  const underMat = new THREE.MeshPhysicalMaterial({ color: tone(color.visor, 0.9), roughness: 0.9, side: THREE.DoubleSide });
  const visorM = new THREE.Group();
  [[vtop, 64, 14, visorMat], [vbot, 64, 8, underMat], [vrim, 96, 1, underMat]].forEach(([f, nu, nv, m]) => { const mm = new THREE.Mesh(surface(nu, nv, f), m); mm.castShadow = true; visorM.add(mm); });
  g.add(visorM);
  // covered button, embroidered eyelets
  const btn = new THREE.Mesh(new THREE.SphereGeometry(0.0082 * s, 32, 16), frontMat); btn.scale.y = 0.4; btn.position.set(0, ry - 0.002 * s, -0.004 * s); g.add(btn);
  const eyeMat = new THREE.MeshStandardMaterial({ color: tone(color.front, 0.7), roughness: 0.9 });
  for (const sg of [-1, 1]) { const ph = Math.PI / 2 + sg * 0.6, th = 0.6, pt = crown(ph, th); const e = new THREE.Mesh(new THREE.TorusGeometry(0.0028 * s, 0.001 * s, 10, 24), eyeMat); e.position.copy(pt); e.lookAt(pt.clone().add(nrmAt(ph, th))); g.add(e); const hole = new THREE.Mesh(new THREE.CircleGeometry(0.0019 * s, 16), new THREE.MeshBasicMaterial({ color: '#050505' })); hole.position.copy(pt).addScaledVector(nrmAt(ph, th), 0.0003); hole.lookAt(pt.clone().add(nrmAt(ph, th))); g.add(hole); }
  // snapback: two plastic straps with studs across the opening
  const plastic = new THREE.MeshPhysicalMaterial({ color: '#0e0e0e', roughness: 0.38, clearcoat: 0.4 });
  for (const [k, dy] of [[0.99, 0.006], [0.975, 0.0115]]) { const sg = new THREE.CylinderGeometry(1, 1, 0.012 * s, 48, 1, true, Math.PI - 0.34, 0.68); sg.scale(rx * k, 1, rzB * k); const st = new THREE.Mesh(sg, plastic); st.position.y = dy * s; g.add(st); }
  for (let i = -3; i <= 3; i++) { const a = Math.PI + i * 0.07, stud = new THREE.Mesh(new THREE.CylinderGeometry(0.0022 * s, 0.0022 * s, 0.0025 * s, 14), plastic); stud.rotation.z = Math.PI / 2; stud.position.set(Math.sin(a) * rx * 1.0, 0.009 * s, Math.cos(a) * rzB * 1.0); stud.lookAt(stud.position.clone().multiplyScalar(2)); stud.rotateX(Math.PI / 2); g.add(stud); }
  // embroidery, lifted from the photo (3D puff), at its real size
  const key = p.art === 'lockup' ? 'lockup' : 'cross';
  let maps = artMaps(key, color.thread), dw, dh, cx = 0, cy;
  if (p.art === 'lockup') { dw = 4.5 * IN * s; dh = maps ? dw / maps.aspect : dw / lockupLayout('stacked').width; cy = 0.048 * s; }
  else { dh = 2.5 * IN * s; dw = maps ? dh * maps.aspect : dh * 0.716; cy = 0.05 * s; }
  if (!maps) { const L = lockupLayout('stacked'), PX = 1400, ch = Math.round((PX * dh) / dw); const m2 = paintEmbroidery(PX, ch, p.art === 'lockup' ? (c) => drawLockup(c, (-L.left / L.width) * PX, 0, ch, 'stacked', 'outline') : (c) => drawCross(c, PX / 2, 0, ch, 'outline'), { thread: color.thread, puff: true, blur: PX / 120 }); maps = m2; if (p.art === 'lockup') cx = ((L.left + L.right) / 2) * (dw / L.width); }
  const dec = decalOn(frontM, cx, cy, dw, dh, decalMat(maps, 0.55, 4.5), 0.09);
  if (dec) g.add(dec);
  const artC = dec ? dec.userData.center : new V3(cx, cy, rzF);
  const vbox = new THREE.Box3().setFromObject(visorM);
  const m = finishModel({ group: g, kind: 'cap', size, color, focus: { art: artC, visor: new V3(vbox.max.x * 0.7, vbox.max.y, vbox.max.z * 0.6), top: new V3(0, ry, 0), back: new V3(0, ry * 0.4, -rzB) } });
  m.measures = [
    { a: new V3(rx + 0.012, 0, 0), b: new V3(rx + 0.012, ry, 0), label: 'Crown', v: ry },
    { a: new V3(vbox.min.x, vbox.min.y - 0.012, vbox.max.z - 0.002), b: new V3(vbox.max.x, vbox.min.y - 0.012, vbox.max.z - 0.002), label: 'Visor width', v: vbox.max.x - vbox.min.x },
    { a: new V3(0, vbox.max.y + 0.01, rzF), b: new V3(0, vbox.max.y + 0.01, vbox.max.z), label: 'Visor', v: vbox.max.z - rzF },
  ];
  m.spec = { 'Crown height': fmtIn(ry), 'Visor': fmtIn(vbox.max.z - rzF), 'Head size': size.fit, 'Decoration': `${fmtIn(dw)} × ${fmtIn(dh)}` };
  return m;
}

/* ---------- HOODIE — heavyweight, boxy, dropped shoulder (ghost-mannequin pose, like the product photos) ---------- */
function orientOutward(geo, c) {
  const pos = geo.attributes.position, nor = geo.attributes.normal; let d = 0;
  for (let i = 0; i < pos.count; i += 7) d += (pos.getX(i) - c.x) * nor.getX(i) + (pos.getY(i) - c.y) * nor.getY(i) + (pos.getZ(i) - c.z) * nor.getZ(i);
  if (d < 0) { const idx = geo.index.array; for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; } geo.index.needsUpdate = true; geo.computeVertexNormals(); }
  return geo;
}
function foldTex() {
  return tileTex('folds', 512, (x, s) => { x.fillStyle = '#808080'; x.fillRect(0, 0, s, s); const R = rnd(21); for (let i = 0; i < 26; i++) { const x0 = R() * s, y0 = R() * s, len = s * (0.2 + R() * 0.35), ang = -0.4 + R() * 0.8 + Math.PI / 2; const gr = x.createLinearGradient(0, -8, 0, 8); gr.addColorStop(0, 'rgba(0,0,0,0)'); gr.addColorStop(0.5, `rgba(${R() < 0.5 ? 40 : 210},${R() < 0.5 ? 40 : 210},${R() < 0.5 ? 40 : 210},.35)`); gr.addColorStop(1, 'rgba(0,0,0,0)'); x.save(); x.translate(x0, y0); x.rotate(ang); x.fillStyle = gr; x.fillRect(0, -8, len, 16); x.restore(); } noise(x, s, 13, 12000, 0.1, 1.4); });
}
function buildHoodie(p, size, color) {
  const g = new THREE.Group();
  const A = (size.chest * IN) / 2, L = size.length * IN, SL = size.sleeve * IN, ak = A / 0.311;
  foldTex();
  const fabric = new THREE.MeshPhysicalMaterial({ color: color.body, roughness: 0.96, sheen: 0.45, sheenRoughness: 0.85, sheenColor: new THREE.Color(tone(color.body, 1.7)), bumpMap: tiled('fleece', 9, 9), bumpScale: 0.45, normalScale: new THREE.Vector2(1, 1), side: THREE.DoubleSide, envMapIntensity: 0.6 });
  const folds = fabric.clone(); folds.bumpMap = tiled('folds', 2.2, 2.2); folds.bumpScale = 2.4;
  const ribMat = new THREE.MeshPhysicalMaterial({ color: tone(color.body, 0.92), roughness: 0.95, sheen: 0.3, sheenColor: new THREE.Color(tone(color.body, 1.5)), bumpMap: tiled('rib', 26, 2), bumpScale: 1.4, side: THREE.DoubleSide });
  const inside = new THREE.MeshStandardMaterial({ color: tone(color.body, 0.45), roughness: 1, side: THREE.DoubleSide });
  // torso: [y/L, halfWidth/A, halfDepth/A, superellipse n]
  const body = [[0.075, 0.93, 0.39, 2.6], [0.1, 0.99, 0.42, 2.7], [0.3, 1.0, 0.43, 2.8], [0.62, 1.0, 0.44, 2.8], [0.8, 1.0, 0.43, 2.7], [0.88, 0.97, 0.4, 2.6], [0.925, 0.82, 0.36, 2.4], [0.96, 0.58, 0.3, 2.2], [0.985, 0.37, 0.26, 2.1], [1.0, 0.3, 0.24, 2.0]];
  const rib = [[0, 0.9, 0.37, 2.6], [0.05, 0.905, 0.375, 2.6], [0.095, 0.92, 0.385, 2.6]];
  const sect = (keys, t) => { const k = keyAt(keys, t); return { a: k[1] * A, b: k[2] * A, n: k[3] }; };
  const loft = (keys, t0, t1, nv, fold) => surface(96, nv, (u, v) => {
    const t = lerp(t0, t1, v), s2 = sect(keys, t), ang = -Math.PI / 2 - u * TAU; let [x, z] = seXY(ang, s2.a, s2.b, s2.n);
    if (fold) { const f = fold(ang, t); x *= 1 + f; z *= 1 + f; }
    return new V3(x, t * L, z);
  }, [2.4 * A * 2, L * (t1 - t0)]);
  // soft drape: blousing above the hem rib, gentle folds under the arms
  const drape = (ang, t) => { const bl = Math.exp(-Math.pow((t - 0.135) / 0.04, 2)) * (0.025 + 0.012 * Math.sin(ang * 11)); const side = Math.abs(Math.cos(ang)); const arm = Math.exp(-Math.pow((t - 0.72) / 0.1, 2)) * side * side * 0.012 * Math.sin(ang * 7 + t * 30); return bl + arm; };
  const torsoGeo = loft(body, 0.075, 1.0, 90, drape); weldSeam(torsoGeo, 96, 90);
  const torso = new THREE.Mesh(torsoGeo, fabric); torso.castShadow = true; torso.receiveShadow = true; g.add(torso);
  const hem = new THREE.Mesh(loft(rib, 0, 0.095, 6), ribMat); weldSeam(hem.geometry, 96, 6); hem.castShadow = true; g.add(hem);
  const hemCap = new THREE.Mesh(new THREE.CircleGeometry(1, 48), inside); hemCap.rotation.x = -Math.PI / 2; hemCap.scale.set(A * 0.88, A * 0.36, 1); hemCap.position.y = 0.004; g.add(hemCap);
  const neckCap = new THREE.Mesh(new THREE.CircleGeometry(1, 32), inside); neckCap.rotation.x = -Math.PI / 2; neckCap.scale.set(A * 0.3, A * 0.24, 1); neckCap.position.y = L * 0.995; g.add(neckCap);
  const frontZ = (x, y) => { const t = clamp(y / L, 0, 1), s2 = sect(t > 0.095 ? body : rib, t), r = Math.min(0.999, Math.abs(x / s2.a)); return s2.b * Math.pow(1 - Math.pow(r, s2.n), 1 / s2.n) * (1 + drape(Math.PI / 2, t)); };
  // sleeves: from a dropped shoulder seam, hanging beside the body; stacked folds above the cuff
  const sh = 0.88 * L, arm = SL - A * 1.0;
  let sleeveR = null;
  for (const side of [-1, 1]) {
    const pts = [[0.8 * A, sh - 0.06 * ak, -0.008], [A - 0.01, sh - 0.085 * ak, 0], [A + 0.022, sh - 0.22 * ak, 0.004], [A + 0.036, sh - 0.4 * ak, 0.012], [A + 0.034, sh - arm * 0.9, 0.018]].map(([x, y, z]) => new V3(x * side, y, z));
    const curve = new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const rr = (t) => { let r = t < 0.12 ? lerp(0.084, 0.09, t / 0.12) : t < 0.55 ? lerp(0.092, 0.08, (t - 0.12) / 0.43) : lerp(0.08, 0.066, (t - 0.55) / 0.45); if (t > 0.8) r *= 1 + 0.07 * Math.sin((t - 0.8) * 70) * ((t - 0.8) / 0.2); return [r * ak, r * ak * 0.94]; };
    const slv = new THREE.Mesh(sweep(curve, rr, 40, 90), side > 0 ? folds : folds); slv.castShadow = true; slv.receiveShadow = true; g.add(slv);
    const end = curve.getPointAt(1), dirv = curve.getTangentAt(1);
    const cc = new THREE.CatmullRomCurve3([end.clone().addScaledVector(dirv, -0.012), end.clone().addScaledVector(dirv, 0.035), end.clone().addScaledVector(dirv, 0.075)]);
    const cuff = new THREE.Mesh(sweep(cc, (t) => [lerp(0.057, 0.05, t) * ak, lerp(0.054, 0.047, t) * ak], 40, 6), ribMat); cuff.castShadow = true; g.add(cuff);
    const cap = new THREE.Mesh(new THREE.CircleGeometry(0.046 * ak, 28), inside); cap.position.copy(cc.getPointAt(1)); cap.lookAt(cap.position.clone().add(dirv)); g.add(cap);
    if (side > 0) sleeveR = { mesh: slv, curve, cuffTop: end };
  }
  // hood: a shell that rises from the neckline and rests on the shoulders, opening facing forward
  const neckY = L * 0.965, Hh = 0.245 * ak, Rx = 0.158 * ak, Rz = 0.155 * ak, zc = -0.02 * ak, a0 = 0.79 * Math.PI;
  const hoodPt = (u, v, k = 1) => { const al = -a0 + 2 * a0 * u, sv = Math.pow(Math.cos((v * Math.PI) / 2), 0.4), lift = Math.pow(Math.sin((v * Math.PI) / 2), 0.85); const flare = 1 + 0.12 * (1 - v) * (1 - v); return new V3(Rx * sv * Math.sin(al) * k * flare, neckY + Hh * lift - (1 - k) * 0.01, zc - Rz * sv * Math.cos(al) * k - 0.075 * ak * v * v); };
  const hoodGeo = orientOutward(surface(72, 40, (u, v) => hoodPt(u, v), [1.4, 1.4]), new V3(0, neckY + Hh * 0.4, zc - 0.03));
  const hoodOut = new THREE.Mesh(hoodGeo, fabric); hoodOut.castShadow = true; g.add(hoodOut);
  const hoodIn = new THREE.Mesh(orientOutward(surface(72, 40, (u, v) => hoodPt(u, v, 0.965)), new V3(0, neckY + Hh * 0.4, zc - 0.03)), new THREE.MeshStandardMaterial({ color: tone(color.body, 0.6), roughness: 1, side: THREE.BackSide })); g.add(hoodIn);
  const rimPts = []; for (let i = 0; i <= 40; i++) rimPts.push(hoodPt(0, i / 40, 0.985)); for (let i = 40; i >= 0; i--) rimPts.push(hoodPt(1, i / 40, 0.985));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rimPts), 160, 0.011 * ak, 10), fabric));
  const seamPts = []; for (let i = 6; i <= 40; i++) seamPts.push(hoodPt(0.5, i / 40, 1.004));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(seamPts), 60, 0.0022, 6), fabric));
  // eyelets on the hood edge and flat drawcords with metal tips
  const metal = metalMat('#cfccc5', 0.25), cordMat = new THREE.MeshPhysicalMaterial({ color: tone(color.body, 0.9), roughness: 0.8, sheen: 0.4 });
  for (const sg of [-1, 1]) {
    const e = hoodPt(sg < 0 ? 0.02 : 0.98, 0.1, 1.0); const ey = new THREE.Mesh(new THREE.TorusGeometry(0.0058, 0.0018, 10, 24), metal); ey.position.copy(e).add(new V3(0, 0, 0.004)); g.add(ey);
    const y1 = L * 0.8, cp = [0, 0.25, 0.6, 1].map((t) => { const y = lerp(e.y - 0.004, y1, t), x = e.x * (1 - 0.15 * t); return new V3(x, y, Math.max(e.z + 0.004 - 0.02 * t, frontZ(x, y) + 0.009)); });
    const cc = new THREE.CatmullRomCurve3(cp); const cord = new THREE.Mesh(new THREE.TubeGeometry(cc, 40, 0.0045, 8), cordMat); cord.scale.z = 1; cord.castShadow = true; g.add(cord);
    const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.0052, 0.005, 0.03, 18), metal); tip.position.copy(cc.getPointAt(1)).add(new V3(0, -0.013, 0)); g.add(tip);
  }
  // kangaroo pocket, sewn on, with a topstitched edge and shadowed openings
  const py0 = 0.105 * L, py1 = 0.4 * L, pb = 0.6 * A, pt = 0.4 * A;
  const pk = (u, v, off = 0) => { const y = lerp(py0, py1, v), hw = lerp(pb, pt, v), x = lerp(-hw, hw, u), edge = Math.min(u, 1 - u, v * 2.4, (1 - v) * 3.5); return new V3(x, y, frontZ(x, y) + 0.0025 + 0.007 * Math.min(1, edge * 7) + off); };
  const pocketM = new THREE.Mesh(surface(36, 16, (u, v) => pk(u, v)), fabric); pocketM.castShadow = true; pocketM.receiveShadow = true; g.add(pocketM);
  const stitchMat = new THREE.MeshStandardMaterial({ color: tone(color.body, 1.25), roughness: 0.9 });
  const outline = []; for (let i = 0; i <= 20; i++) outline.push(pk(0.04 + 0.92 * (i / 20), 0.97, 0.0015)); g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(outline), 40, 0.0009, 5), stitchMat));
  const bottom = []; for (let i = 0; i <= 20; i++) bottom.push(pk(0.02 + 0.96 * (i / 20), 0.03, 0.0015)); g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(bottom), 40, 0.0009, 5), stitchMat));
  for (const u of [0, 1]) { const op = []; for (let i = 0; i <= 12; i++) op.push(pk(u, 0.05 + 0.9 * (i / 12), -0.001)); const shade = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(op), 24, 0.0035, 6), new THREE.MeshBasicMaterial({ color: '#030303' })); g.add(shade); }
  // embroidery from the photographs
  const decals = [];
  if (p.art === 'lockup') {
    const mp = artMaps('lockup', color.thread), dw = 11 * IN, dh = mp ? dw / mp.aspect : dw / lockupLayout('stacked').width, top = L - 3 * IN - 4.5 * IN;
    const maps = mp || paintEmbroidery(1600, Math.round(1600 / lockupLayout('stacked').width), (c) => { const Lk = lockupLayout('stacked'); drawLockup(c, (-Lk.left / Lk.width) * 1600, 0, Math.round(1600 / Lk.width), 'stacked', 'outline'); }, { thread: color.thread, blur: 4 });
    const d = decalOn(torso, 0, top - dh / 2, dw, dh, decalMat(maps, 0.62, 1.6), 0.1); if (d) { g.add(d); decals.push(d); }
  } else {
    const mp = artMaps('cross', color.thread), dh = 3.25 * IN, dw = mp ? dh * mp.aspect : dh * 0.716;
    const maps = mp || paintEmbroidery(700, Math.round(700 / 0.716), (c) => drawCross(c, 350, 0, Math.round(700 / 0.716), 'outline'), { thread: color.thread, blur: 4 });
    const d = decalOn(torso, 4 * IN, L - 7.5 * IN - dh / 2, dw, dh, decalMat(maps, 0.62, 1.8), 0.1); if (d) { g.add(d); decals.push(d); }
  }
  // woven label on the left sleeve (wearer's left = +X), 2 in above the cuff seam
  let labelC = null;
  { const lw = 2.75 * IN, lh = 1.0 * IN, PX = 900, ch = Math.round((PX * lh) / lw);
    const maps = paintEmbroidery(PX, ch, (c) => { const Lw = lockupLayout('wide'), Hc = Math.min(ch * 0.5, (PX * 0.84) / Lw.width); drawLockup(c, PX / 2 - ((Lw.left + Lw.right) / 2) * Hc, ch * 0.4 - Hc / 2, Hc, 'wide', 'outline'); drawTagline(c, PX / 2, ch * 0.84, Math.min(ch * 0.085, (PX * 0.8 * BRAND.CAP) / BRAND.TAGLINE_W)); },
      { thread: color.labelThread, ground: color.label, weave: true, blur: 1.5, stitches: 600, post: (cx) => { cx.strokeStyle = 'rgba(255,255,255,.18)'; cx.setLineDash([5, 4]); cx.lineWidth = 2; cx.strokeRect(10, 10, PX - 20, ch - 20); } });
    const mat = new THREE.MeshPhysicalMaterial({ map: maps.map, bumpMap: maps.bump, bumpScale: 1, roughness: 0.7, sheen: 0.5, polygonOffset: true, polygonOffsetFactor: -4 });
    const sm = sleeveR.mesh; sm.updateMatrixWorld(true);
    const at = sleeveR.cuffTop.clone().add(new V3(0, 0.055 + lh / 2, 0)), dir = new V3(0.45, 0, 0.89).normalize();
    const hit = new THREE.Raycaster(at.clone().addScaledVector(dir, 0.5), dir.clone().negate()).intersectObject(sm)[0];
    if (hit) { const o = new THREE.Object3D(); o.position.copy(hit.point); o.lookAt(hit.point.clone().add(dir)); const lab = new THREE.Mesh(new DecalGeometry(sm, hit.point, o.rotation, new V3(lw, lh, 0.05)), mat); lab.renderOrder = 2; g.add(lab); labelC = hit.point.clone(); }
  }
  const artC = decals[0] ? decals[0].userData.center : new V3(0, L * 0.75, A * 0.45);
  const m = finishModel({ group: g, kind: 'hoodie', size, color, focus: { art: artC, label: labelC || new V3(A, 0.1, 0.05), hood: new V3(0, L * 1.05, 0), back: new V3(0, L * 0.6, -A * 0.4) } });
  const chestY = L * 0.72, zf = A * 0.48;
  m.measures = [
    { a: new V3(-A, chestY, zf), b: new V3(A, chestY, zf), label: 'Chest (flat)', v: A * 2 },
    { a: new V3(-A - 0.17, 0, 0), b: new V3(-A - 0.17, L, 0), label: 'Body length', v: L },
  ];
  m.spec = { 'Chest (flat, pit to pit)': fmtIn(A * 2), 'Body length (HPS)': fmtIn(L), 'Sleeve (centre back)': fmtIn(SL), 'Decoration': p.art === 'lockup' ? '9 in lockup, centre chest' : '3¼ in cross, left chest' };
  return m;
}

/* ---------- WALL PIECE (two layers of cut steel on stand-offs) ---------- */
const KELVIN = { 2700: '#ffb36a', 3000: '#ffc58c', 4000: '#ffe3c4' };
function wallLayout(art) {
  if (art === 'lockup') { const L = lockupLayout('stacked'), ext = 0.08; return { left: L.left - ext, right: L.right + ext, span: L.width + 2 * ext, L }; }
  return { left: -0.358, right: 0.358, span: 0.716 };   // Emblem: the cross alone
}
function wallFootprint(p, size) { const lay = wallLayout(p.art), H = size.h && p.art !== 'lockup' ? size.h * IN : (size.w * IN) / lay.span, W = H * lay.span; return { w: W, h: H, cx: ((lay.left + lay.right) / 2) * H }; }
function buildWall(p, size, color, opt = {}) {
  const g = new THREE.Group(), piece = new THREE.Group(); g.add(piece);
  const lay = wallLayout(p.art), H = p.art !== 'lockup' && size.h ? size.h * IN : (size.w * IN) / lay.span, W = H * lay.span;
  const T = 0.003, SO_BACK = 1 * IN, SO_FRONT = 1.75 * IN;
  const groups = [];                                  // contour groups for the back layer (y-up, metres; cross top at y = 0). One group per glyph / bar,
  const glyphGroups = (glyphs, k, x0, base) => glyphs.forEach((g) => groups.push(wordC([g], k, x0, base)));   // so overlaps never read as holes
  if (p.art === 'lockup') {
    const L = lay.L, k = L.k * H, base = -L.base * H, capTop = -L.capTop * H, rt = 0.02 * H, ov = 0.003 * H;
    glyphGroups(BRAND.FAITH, k, L.faithX * H, base); glyphGroups(BRAND.FOUND, k, L.foundX * H, base);
    groups.push([rectC(lay.left * H, capTop - ov, lay.right * H, capTop - ov + rt)]);
    groups.push([rectC(lay.left * H, base + ov - rt, lay.right * H, base + ov)]);
    const tcap = 0.07 * H, tk = tcap / BRAND.CAP, tw = BRAND.TAGLINE_W * tk, tcx = ((lay.left + lay.right) / 2) * H;
    glyphGroups(BRAND.TAGLINE, tk, tcx - tw / 2, -1.06 * H - tcap);
  }
  const backC = groups.flat(), backShapes = groups.flatMap((gc) => shapesFrom(gc));
  // the spine and rails overlap the cross and each other: extrude per shape to keep it robust
  const accentMat = finishMat(color.accent), bodyMat = finishMat(color.body);
  if (backShapes.length) { const back = new THREE.Mesh(bevelExtrude(backShapes, T, 0.0005), accentMat); back.position.z = SO_BACK; back.castShadow = back.receiveShadow = true; piece.add(back); }
  const cc = crossC(H, 0, 0), core = offsetPoly(cc.inner, 0.009 * H);
  const ring = shapesFrom([cc.outer, cc.inner]), coreS = shapesFrom([core]);
  const crossM = new THREE.Mesh(bevelExtrude([...ring, ...coreS], T * 1.6, 0.0006), bodyMat); crossM.position.z = SO_FRONT; crossM.castShadow = crossM.receiveShadow = true; piece.add(crossM);
  // stand-offs
  const hw = metalMat('#9a978f', 0.35);
  const posts = p.art === 'lockup' ? [[lay.left * H * 0.9, -0.6 * H, SO_BACK], [lay.right * H * 0.9, -0.6 * H, SO_BACK], [0, -0.12 * H, SO_FRONT], [0, -0.9 * H, SO_FRONT], [0, -0.6 * H, SO_FRONT]] : [[0, -0.12 * H, SO_FRONT], [0, -0.9 * H, SO_FRONT], [-0.28 * H, -0.338 * H, SO_FRONT], [0.28 * H, -0.338 * H, SO_FRONT]];
  for (const [x, y, len] of posts) { const cg = new THREE.CylinderGeometry(0.007, 0.007, len, 16); cg.rotateX(Math.PI / 2); const c = new THREE.Mesh(cg, hw); c.position.set(x, y, len / 2); piece.add(c); }
  // halo: LED glow painted on the wall from the silhouette, plus bloom
  const all = [...backC, cc.outer], bb = new THREE.Box2(); all.flat().forEach(([x, y]) => bb.expandByPoint(new THREE.Vector2(x, y)));
  const pad = 0.22 + SO_FRONT * 3, spanX = bb.max.x - bb.min.x + pad * 2, spanY = bb.max.y - bb.min.y + pad * 2;
  const PXm = Math.min(900 / spanX, 900 / spanY), cw = Math.round(spanX * PXm), chh = Math.round(spanY * PXm);
  const hc = mkCanvas(cw, chh), hx = hc.getContext('2d');
  const sil = (ctx) => { ctx.beginPath(); for (const c of all) { c.forEach(([x, y], i) => { const X = (x - bb.min.x + pad) * PXm, Y = (bb.max.y + pad - y) * PXm; i ? ctx.lineTo(X, Y) : ctx.moveTo(X, Y); }); ctx.closePath(); } };
  const spread = (0.03 + SO_FRONT * 2.4) * PXm;
  for (const [blur, alpha] of [[spread * 2.6, 0.5], [spread, 0.85], [spread * 0.35, 1]]) { hx.save(); hx.shadowColor = `rgba(255,255,255,${alpha})`; hx.shadowBlur = blur; hx.shadowOffsetX = 6000; hx.translate(-6000, 0); hx.fillStyle = '#fff'; sil(hx); hx.fill('nonzero'); hx.restore(); }
  const haloMat = new THREE.MeshBasicMaterial({ map: ctex(hc), color: new THREE.Color(KELVIN[3000]), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 });
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(spanX, spanY), haloMat); halo.position.set((bb.min.x + bb.max.x) / 2, (bb.min.y + bb.max.y) / 2, 0.0015); g.add(halo);
  const m = { group: g, pieceOnly: piece, kind: 'wall', size, color };
  m.halo = { mesh: halo, value: 0, kelvin: 3000, set(v, k) { this.value = v; if (k) this.kelvin = k; haloMat.opacity = Math.min(1, v * 1.15); haloMat.color.set(KELVIN[this.kelvin]).multiplyScalar(0.18 + 0.34 * v); halo.visible = v > 0.001; } };
  m.halo.set(0);
  finishModel(m);
  const steel = shapesArea(backShapes) + shapesArea(ring) + shapesArea(coreS), kg = (shapesArea(backShapes) * T + (shapesArea(ring) + shapesArea(coreS)) * T * 1.6) * 7850;
  const b = m.box, depth = SO_FRONT + T * 1.6;
  m.focus.art = new V3(lay.right * H * 0.55, -0.6 * H, SO_BACK);
  m.focus.edge = new V3(0.2 * H, -0.3 * H, SO_FRONT);
  m.measures = [
    { a: new V3(b.min.x, b.min.y - 0.05, depth), b: new V3(b.max.x, b.min.y - 0.05, depth), label: 'Width', v: b.max.x - b.min.x },
    { a: new V3(b.max.x + 0.05, b.min.y, depth), b: new V3(b.max.x + 0.05, b.max.y, depth), label: 'Height', v: b.max.y - b.min.y },
    { a: new V3(b.max.x + 0.05, b.max.y + 0.03, 0), b: new V3(b.max.x + 0.05, b.max.y + 0.03, depth), label: 'Off the wall', v: depth },
  ];
  m.spec = { 'Overall': `${fmtIn(b.max.x - b.min.x)} × ${fmtIn(b.max.y - b.min.y)}`, 'Metric': `${fmtCm(b.max.x - b.min.x)} × ${fmtCm(b.max.y - b.min.y)}`, 'Off the wall': fmtIn(depth), 'Cross height': fmtIn(H), 'Est. steel weight': `${(kg * 2.2046).toFixed(1)} lb (${kg.toFixed(1)} kg)` };
  m.footprint = { w: b.max.x - b.min.x, h: b.max.y - b.min.y, kg };
  return m;
}

/* ---------- FLIGHT TAG ---------- */
let FONTS_READY = null;
function ensureFonts() {
  if (FONTS_READY) return FONTS_READY;
  FONTS_READY = (document.fonts && document.fonts.load ? Promise.race([document.fonts.load('700 64px Oswald'), new Promise((r) => setTimeout(r, 2500))]) : Promise.resolve()).catch(() => {});
  return FONTS_READY;
}
function buildTag(p, size, color) {
  const g = new THREE.Group(), w = size.w * IN, h = size.h * IN, t = 0.0021, r = h * 0.16;
  const gx = -w / 2 + h * 0.55, gr = h * 0.13;     // grommet centre, hole radius
  const sh = new THREE.Shape(); sh.moveTo(-w / 2 + r, -h / 2); sh.lineTo(w / 2 - r, -h / 2); sh.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); sh.lineTo(w / 2, h / 2 - r); sh.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); sh.lineTo(-w / 2 + r, h / 2); sh.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); sh.lineTo(-w / 2, -h / 2 + r); sh.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const hole = new THREE.Path(); hole.absarc(gx, 0, gr, 0, TAU, true); sh.holes.push(hole);
  const groundMat = fabricMat(color.ground, 'twill', 14, 3, 0.5);
  const body = new THREE.Mesh(bevelExtrude([sh], t, 0.0003), groundMat); body.position.z = -t / 2; body.castShadow = true; g.add(body);
  // merrowed edge
  const pp = sh.getSpacedPoints(160).map((v) => new V3(v.x, v.y, 0)); pp.pop();
  const edge = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pp, true), 240, t * 0.62, 8, true), fabricMat(color.edge, 'merrow', 90, 1, 1.4)); g.add(edge);
  // faces
  const PX = 1600, ch = Math.round((PX * h) / w), ppm = PX / w, holeX = (gx + w / 2) * ppm;
  const punch = (cx) => { cx.save(); cx.globalCompositeOperation = 'destination-out'; cx.beginPath(); cx.arc(holeX, ch / 2, gr * ppm * 1.05, 0, TAU); cx.fill(); cx.restore(); };
  const photoFace = (key, mirror) => (c) => {   // the embroidered text from the photo, centred in the clear area
    const art = ART[key] && photoArt(ART[key].photo, ART[key].crop, { thread: color.thread }); if (!art) return false;
    const x0 = (mirror ? h * 0.3 : h * 1.12) * ppm, x1 = PX - (mirror ? h * 1.12 : h * 0.3) * ppm, avail = x1 - x0, ah = ch * 0.62, k = Math.min(avail / art.color.width, ah / art.color.height);
    const dw = art.color.width * k, dh = art.color.height * k; c.drawImage(art.color, (x0 + x1) / 2 - dw / 2, (ch - dh) / 2, dw, dh); return true;
  };
  const frontArt = (c) => { if (photoFace('tagFront', false)(c)) return; const Lw = lockupLayout('wide'), x0 = h * 1.12 * ppm, x1 = PX - h * 0.32 * ppm, avail = x1 - x0, Hc = Math.min(ch * 0.66, avail / Lw.width), cx = (x0 + x1) / 2 - ((Lw.left + Lw.right) / 2) * Hc; drawLockup(c, cx, (ch - Hc) / 2 - Hc * 0.02, Hc, 'wide', 'outline'); };
  const backArt = (c) => { if (photoFace('tagBack', true)(c)) return; const x0 = h * 0.3 * ppm, x1 = PX - h * 1.12 * ppm; let fs = ch * 0.62; c.font = `700 ${fs}px Oswald, "Arial Narrow", Impact, sans-serif`; const txt = p.back || 'REMOVE BEFORE FLIGHT'; let tw = c.measureText(txt).width; if (tw > x1 - x0) { fs *= (x1 - x0) / tw; c.font = `700 ${fs}px Oswald, "Arial Narrow", Impact, sans-serif`; tw = c.measureText(txt).width; } c.textBaseline = 'middle'; c.fillText(txt, (x0 + x1) / 2 - tw / 2, ch / 2 + fs * 0.04); };
  const faceMat = (art, mirror) => { const hx = mirror ? PX - holeX : holeX; const mp = paintEmbroidery(PX, ch, () => {}, { thread: color.thread, ground: color.ground, weave: true, blur: 3, stitches: 700, post: (cx, bx) => { cx.fillStyle = color.thread; art(cx); cx.save(); cx.globalCompositeOperation = 'destination-out'; cx.beginPath(); cx.arc(hx, ch / 2, gr * ppm * 1.05, 0, TAU); cx.fill(); cx.restore(); bx.save(); bx.globalAlpha = 0.6; bx.drawImage(cx.canvas, 0, 0); bx.restore(); } }); return new THREE.MeshPhysicalMaterial({ map: mp.map, bumpMap: mp.bump, bumpScale: 1.6, roughness: 0.78, sheen: 0.5, sheenRoughness: 0.5, transparent: true, alphaTest: 0.5 }); };
  const fw = w - t * 0.9, fh = h - t * 0.9;
  const fm = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), faceMat(frontArt, false)); fm.position.z = t / 2 + 0.0004; g.add(fm);
  const bm = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), faceMat(backArt, true)); bm.position.z = -t / 2 - 0.0004; bm.rotation.y = Math.PI; g.add(bm);
  // grommet + split ring
  const met = metalMat('#d6d3cc', 0.22);
  for (const z of [t / 2 + 0.0006, -t / 2 - 0.0006]) { const gm = new THREE.Mesh(new THREE.TorusGeometry(gr * 1.35, gr * 0.38, 12, 32), met); gm.scale.z = 0.5; gm.position.set(gx, 0, z); g.add(gm); }
  const ringR = 0.0125, ring = new THREE.Group(); ring.position.set(gx - ringR + gr * 0.4, 0, 0); ring.rotation.y = 1.25; g.add(ring);
  for (const dz of [-0.0009, 0.0009]) { const tr = new THREE.Mesh(new THREE.TorusGeometry(ringR, 0.0009, 10, 64), met); tr.position.z = dz; ring.add(tr); }
  const m = finishModel({ group: g, kind: 'tag', size, color, focus: { art: new V3(w * 0.12, 0, t), grommet: new V3(gx, 0, t), edge: new V3(w / 2, -h / 2, 0) } });
  m.measures = [
    { a: new V3(-w / 2, -h / 2 - 0.006, 0), b: new V3(w / 2, -h / 2 - 0.006, 0), label: 'Length', v: w },
    { a: new V3(w / 2 + 0.006, -h / 2, 0), b: new V3(w / 2 + 0.006, h / 2, 0), label: 'Height', v: h },
  ];
  m.spec = { 'Size': `${fmtIn(w)} × ${fmtIn(h)}`, 'Metric': `${fmtCm(w)} × ${fmtCm(h)}`, 'Thickness': 'about 2 mm', 'Ring': '1 in (25 mm) split ring' };
  return m;
}

const BUILDERS = { cap: buildCap, hoodie: buildHoodie, wall: buildWall, tag: buildTag };
function buildModel(p, sizeIdx = 0, colorIdx = 0) {
  if (!TEX.fleece) initTiles();
  const size = p.sizes[clamp(sizeIdx, 0, p.sizes.length - 1)], color = p.colors[clamp(colorIdx, 0, p.colors.length - 1)];
  const m = BUILDERS[p.model](p, size, color); m.product = p; m.sizeIdx = sizeIdx; m.colorIdx = colorIdx; return m;
}

/* ================================================================== CINEMATICS
   A shot = camera move between two framings. az/el in radians around the focus point; d = distance in
   "frame fills" (1 = the product's bounding sphere fills the frame height at that lens); lens in mm (full-frame). */
const FILMS = {
  cap: [
    { name: 'Reveal', dur: 4.6, lens: [50, 50], from: { f: 'center', az: 0.0, el: 0.05, d: 2.2 }, to: { f: 'center', az: 0.0, el: 0.12, d: 1.45 }, lights: [0, 1], cap: '{name}', sub: '{color}' },
    { name: 'Orbit', dur: 5.6, lens: [35, 35], from: { f: 'center', az: -1.0, el: 0.28, d: 1.35 }, to: { f: 'center', az: 1.0, el: 0.18, d: 1.35 }, cap: 'Richardson 112', sub: 'Structured front · mesh back' },
    { name: 'Stitch', dur: 4.4, lens: [100, 100], from: { f: 'art', az: 0.4, el: 0.06, d: 0.42 }, to: { f: 'art', az: 0.12, el: 0.02, d: 0.34 }, cap: '{deco}', sub: 'Embroidered, not printed' },
    { name: 'Profile', dur: 4.4, lens: [85, 85], from: { f: 'center', az: 1.45, el: 0.1, d: 1.3 }, to: { f: 'center', az: 1.62, el: 0.16, d: 1.2 }, cap: 'Pre-curved visor', sub: 'Snapback strap' },
    { name: 'Hero', dur: 5, lens: [35, 28], from: { f: 'center', az: -0.35, el: -0.05, d: 1.2 }, to: { f: 'center', az: -0.22, el: 0.04, d: 1.9 }, cap: 'FAITH FOUND', sub: 'Love · Integrity · Purpose' },
  ],
  hoodie: [
    { name: 'Reveal', dur: 4.8, lens: [50, 50], from: { f: 'center', az: 0, el: 0.02, d: 1.6 }, to: { f: 'center', az: 0, el: 0.06, d: 1.18 }, lights: [0, 1], cap: '{name}', sub: '{color}' },
    { name: 'Orbit', dur: 6, lens: [35, 35], from: { f: 'center', az: -0.8, el: 0.12, d: 1.15 }, to: { f: 'center', az: 2.6, el: 0.1, d: 1.15 }, cap: 'Heavyweight fleece', sub: 'Dropped shoulder · double-layer hood' },
    { name: 'Chest', dur: 4.4, lens: [100, 100], from: { f: 'art', az: 0.3, el: 0.05, d: 0.35 }, to: { f: 'art', az: 0.08, el: 0.0, d: 0.27 }, cap: '{deco}', sub: 'Embroidered, not printed' },
    { name: 'Label', dur: 4, lens: [100, 100], from: { f: 'label', az: 0.9, el: 0.05, d: 0.2 }, to: { f: 'label', az: 0.55, el: 0.02, d: 0.16 }, cap: 'Woven label', sub: 'Left sleeve' },
    { name: 'Hero', dur: 5, lens: [35, 28], from: { f: 'center', az: 0.3, el: -0.12, d: 1.05 }, to: { f: 'center', az: 0.15, el: 0.0, d: 1.55 }, cap: 'FAITH FOUND', sub: 'Love · Integrity · Purpose' },
  ],
  wall: [
    { name: 'Lights on', dur: 5.4, lens: [50, 50], from: { f: 'center', az: 0, el: 0.02, d: 1.9 }, to: { f: 'center', az: 0, el: 0.0, d: 1.3 }, halo: [0, 1], cap: '{name}', sub: 'With the LED halo, 3000K' },
    { name: 'Orbit', dur: 5.4, lens: [35, 35], from: { f: 'center', az: -0.62, el: 0.06, d: 1.15 }, to: { f: 'center', az: 0.62, el: 0.1, d: 1.15 }, cap: 'Cut, layered, floated', sub: 'Two layers of steel' },
    { name: 'Detail', dur: 4.4, lens: [85, 100], from: { f: 'art', az: 0.38, el: -0.06, d: 0.32 }, to: { f: 'art', az: 0.18, el: -0.03, d: 0.26 }, cap: '{color}', sub: 'Powder-coated steel' },
    { name: 'Profile', dur: 4.4, lens: [85, 85], from: { f: 'edge', az: 1.05, el: 0.05, d: 0.55 }, to: { f: 'edge', az: 0.88, el: 0.1, d: 0.48 }, cap: 'Floats off the wall', sub: '1¾ in on stand-offs' },
    { name: 'Room', dur: 6, lens: [35, 28], from: { f: 'center', az: -0.1, el: -0.12, d: 1.4 }, to: { f: 'center', az: 0.16, el: -0.08, d: 2.4 }, cap: 'FAITH FOUND', sub: 'Love · Integrity · Purpose' },
  ],
  tag: [
    { name: 'Reveal', dur: 4.4, lens: [50, 50], from: { f: 'center', az: 0, el: 0.02, d: 1.6 }, to: { f: 'center', az: 0, el: 0.05, d: 1.15 }, lights: [0, 1], cap: '{name}', sub: '{color}' },
    { name: 'Flip', dur: 4.6, lens: [50, 50], from: { f: 'center', az: 0.2, el: 0.08, d: 1.2 }, to: { f: 'center', az: -0.2, el: 0.08, d: 1.2 }, spin: [0, Math.PI], cap: 'Two sides', sub: 'REMOVE BEFORE FLIGHT' },
    { name: 'Grommet', dur: 4, lens: [100, 100], from: { f: 'grommet', az: 0.5, el: 0.15, d: 0.3 }, to: { f: 'grommet', az: 0.2, el: 0.08, d: 0.24 }, spin: [Math.PI, Math.PI], cap: 'Metal grommet', sub: 'Merrowed edge · split ring' },
    { name: 'Hero', dur: 4.6, lens: [35, 28], from: { f: 'center', az: -0.4, el: 0.1, d: 1.0 }, to: { f: 'center', az: -0.15, el: 0.05, d: 1.5 }, spin: [Math.PI * 2, Math.PI * 2], cap: 'FAITH FOUND', sub: 'In every Drop 01 box' },
  ],
};
const lensFov = (mm) => (2 * Math.atan(12 / mm) * 180) / Math.PI;

/* ================================================================== STAGE (viewer)  */
const CSS = `.ff3d{position:relative;width:100%;height:100%;overflow:hidden;background:#080707;touch-action:pan-y}.ff3d canvas{display:block;width:100%!important;height:100%!important;outline:none}
.ff3d-ov{position:absolute;inset:0;pointer-events:none}.ff3d-lb{position:absolute;transform:translate(-50%,-50%);font:500 11px/1.2 'JetBrains Mono',ui-monospace,monospace;letter-spacing:.04em;color:#efe8dc;background:rgba(12,11,10,.78);border:1px solid rgba(199,162,106,.5);padding:4px 7px;white-space:nowrap}
.ff3d-lb small{display:block;color:#9b9286;font-size:9px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:2px}
.ff3d-cap{position:absolute;left:clamp(16px,4%,32px);bottom:clamp(16px,6%,40px);color:#efe8dc;opacity:0;transform:translateY(8px);transition:opacity .5s,transform .5s;text-shadow:0 2px 18px rgba(0,0,0,.7)}.ff3d-cap.on{opacity:1;transform:none}
.ff3d-bars.on .ff3d-cap{bottom:calc(9% + 14px)}
.ff3d-cap .s{font:500 10px/1.4 Inter,system-ui,sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#b8ae9f}.ff3d-cap .t{font:500 clamp(22px,3vw,34px)/1.1 'Cormorant Garamond',Georgia,serif}
.ff3d-bars:before,.ff3d-bars:after{content:'';position:absolute;left:0;right:0;height:0;background:#000;transition:height .7s cubic-bezier(.2,.7,.2,1);z-index:2}.ff3d-bars:before{top:0}.ff3d-bars:after{bottom:0}.ff3d-bars.on:before,.ff3d-bars.on:after{height:9%}
.ff3d-fade{position:absolute;inset:0;background:#000;opacity:0;transition:opacity .3s;pointer-events:none;z-index:3}.ff3d-fade.on{opacity:1}`;
function injectCSS() { if (document.getElementById('ff3d-css')) return; const s = document.createElement('style'); s.id = 'ff3d-css'; s.textContent = CSS; document.head.appendChild(s); }

class Stage {
  constructor(el, o = {}) {
    injectCSS(); this.el = el; this.o = o; el.classList.add('ff3d');
    this.small = Math.min(innerWidth, innerHeight) < 700;
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: !!o.preserve, powerPreference: 'high-performance' }));
    r.setPixelRatio(Math.min(devicePixelRatio || 1, o.dpr || (this.small ? 1.5 : 2)));
    r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1;
    r.shadowMap.enabled = o.shadows !== false && !this.small; r.shadowMap.type = THREE.PCFSoftShadowMap;
    MAX_ANISO = r.capabilities.getMaxAnisotropy();
    el.prepend(r.domElement);
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color('#070606');
    const pm = new THREE.PMREMGenerator(r); this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose();
    this.camera = new THREE.PerspectiveCamera(30, 1, 0.005, 60);
    this.root = new THREE.Group(); this.scene.add(this.root);
    this.rig = new THREE.Group(); this.scene.add(this.rig);
    if (o.controls !== false) {
      this.controls = new OrbitControls(this.camera, r.domElement);
      Object.assign(this.controls, { enableDamping: true, dampingFactor: 0.08, enablePan: false, rotateSpeed: 0.8 });
      this.controls.addEventListener('start', () => { this.userMoved = true; this.intro = null; if (this.film) this.stopFilm(); });
    }
    this.bloomOn = o.bloom !== false && !this.small; this.aoOn = o.ao !== false && !this.small;
    if (this.bloomOn || this.aoOn) {
      const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
      this.composer = new EffectComposer(r, rt); this.composer.addPass(new RenderPass(this.scene, this.camera));
      if (this.aoOn) { this.gtao = new GTAOPass(this.scene, this.camera, 4, 4); this.gtao.blendIntensity = 0.85; this.composer.addPass(this.gtao); }
      if (this.bloomOn) { this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.3, 0.5, 0.88); this.composer.addPass(this.bloom); }
      this.composer.addPass(new OutputPass());
    }
    this.ov = document.createElement('div'); this.ov.className = 'ff3d-ov'; el.appendChild(this.ov);
    this.capEl = document.createElement('div'); this.capEl.className = 'ff3d-cap'; this.capEl.innerHTML = '<div class="s"></div><div class="t"></div>'; el.appendChild(this.capEl);
    this.fadeEl = document.createElement('div'); this.fadeEl.className = 'ff3d-fade'; el.appendChild(this.fadeEl);
    el.classList.add('ff3d-bars');
    this.cache = new Map(); this.labels = []; this.extras = new THREE.Group(); this.scene.add(this.extras);
    this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(el); this.resize();
    this.clock = new THREE.Clock(); this.tick = null; this.visible = true;
    this.io = new IntersectionObserver((e) => { this.visible = e[0].isIntersecting; }); this.io.observe(el);
    r.setAnimationLoop(() => this.loop());
  }
  resize() {
    const w = this.o.fixed ? this.o.fixed[0] : this.el.clientWidth || 1, h = this.o.fixed ? this.o.fixed[1] : this.el.clientHeight || 1;
    this.renderer.setSize(w, h, false); if (this.composer) { this.composer.setPixelRatio(this.renderer.getPixelRatio()); this.composer.setSize(w, h); if (this.bloom) this.bloom.resolution.set(w / 2, h / 2); }
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix(); this.w = w; this.h = h;
    if (this.model && !this.film && !this.userMoved) this.frame(!!this.intro);
  }
  /* --- staging: lights + set, sized to the product --- */
  setStaging(kind, opt = {}) {
    this.rig.clear(); this.stagingKind = kind; this.stagingOpt = opt;
    const R = this.model ? this.model.radius : 0.4, c = this.model ? this.model.focus.center : new V3();
    const shadows = this.renderer.shadowMap.enabled;
    if (kind === 'wall') {
      const wallCol = opt.wall === 'charcoal' ? '#2c2b29' : '#c9c0b1';
      this.scene.background.set(opt.wall === 'charcoal' ? '#0b0a09' : '#141210');
      const wall = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), new THREE.MeshPhysicalMaterial({ color: wallCol, roughness: 0.95, bumpMap: tiled('plaster', 5, 2.2), bumpScale: 2.2 })); wall.position.set(0, 3 - 0.0, -0.0005); wall.receiveShadow = true; this.rig.add(wall);
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(14, 6), new THREE.MeshPhysicalMaterial({ color: '#2a211a', roughness: 0.55, clearcoat: 0.3 })); floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 3); floor.receiveShadow = true; this.rig.add(floor);
      const base = new THREE.Mesh(new THREE.BoxGeometry(14, 0.1, 0.015), new THREE.MeshStandardMaterial({ color: opt.wall === 'charcoal' ? '#242321' : '#d6cfc3', roughness: 0.7 })); base.position.set(0, 0.05, 0.0075); this.rig.add(base);
      const key = new THREE.SpotLight('#fff0dc', 18, 0, 0.55, 0.7, 1.4); key.position.set(c.x - 1.1, c.y + 2.0, 2.2); key.target.position.copy(c); key.castShadow = shadows; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0002; key.shadow.normalBias = 0.004; key.shadow.camera.near = 0.5; key.shadow.camera.far = 8; this.rig.add(key, key.target);
      const fill = new THREE.PointLight('#ffd9ad', 0.9, 7, 2); fill.position.set(c.x + 1.8, c.y - 0.4, 2.4); this.rig.add(fill);
      this.rig.add(new THREE.AmbientLight('#ffffff', 0.04));
      this.scene.environmentIntensity = 0.28; this.renderer.toneMappingExposure = 1.05; if (this.bloom) this.bloom.strength = 0.34;
      this.keyLights = [key, fill]; this.keyBase = [18, 0.9];
    } else {
      this.scene.background.set('#070606');
      // backdrop glow + floor pool, baked into canvas gradients (cheap on phones)
      const bc = mkCanvas(512, 512), bx = bc.getContext('2d'), gr = bx.createRadialGradient(256, 230, 10, 256, 256, 256); gr.addColorStop(0, '#2b2520'); gr.addColorStop(0.55, '#110f0d'); gr.addColorStop(1, '#070606'); bx.fillStyle = gr; bx.fillRect(0, 0, 512, 512);
      const back = new THREE.Mesh(new THREE.PlaneGeometry(R * 16, R * 10), new THREE.MeshBasicMaterial({ map: ctex(bc), toneMapped: false })); back.position.set(c.x, c.y + R * 1.2, c.z - R * 5); this.rig.add(back);
      const fc = mkCanvas(512, 512), fx = fc.getContext('2d'), fg = fx.createRadialGradient(256, 256, 0, 256, 256, 256); fg.addColorStop(0, '#fff'); fg.addColorStop(0.35, 'rgba(255,255,255,.75)'); fg.addColorStop(1, 'rgba(255,255,255,0)'); fx.fillStyle = fg; fx.fillRect(0, 0, 512, 512);
      // unlit floor that fades into the backdrop (predictable on every GPU), plus a shadow-only layer on top
      const floor = new THREE.Mesh(new THREE.CircleGeometry(R * 4.4, 64), new THREE.MeshBasicMaterial({ color: '#1c1916', alphaMap: ctex(fc, false), transparent: true, depthWrite: false })); floor.rotation.x = -Math.PI / 2; floor.position.set(c.x, this.floorY ?? 0, c.z); this.rig.add(floor);
      const shade = new THREE.Mesh(new THREE.CircleGeometry(R * 3, 48), new THREE.ShadowMaterial({ opacity: 0.55, transparent: true, depthWrite: false })); shade.rotation.x = -Math.PI / 2; shade.position.set(c.x, (this.floorY ?? 0) + 0.0005, c.z); shade.receiveShadow = true; this.rig.add(shade);
      if (!shadows && this.model) { const bc2 = mkCanvas(128, 128), b2 = bc2.getContext('2d'), g2 = b2.createRadialGradient(64, 64, 0, 64, 64, 64); g2.addColorStop(0, 'rgba(0,0,0,.6)'); g2.addColorStop(1, 'rgba(0,0,0,0)'); b2.fillStyle = g2; b2.fillRect(0, 0, 128, 128); const bx2 = this.model.box.clone().applyMatrix4(this.model.group.matrixWorld), s2 = bx2.getSize(new V3()); const blob = new THREE.Mesh(new THREE.PlaneGeometry(s2.x * 1.3, s2.z * 1.6 + 0.02), new THREE.MeshBasicMaterial({ map: ctex(bc2), transparent: true, depthWrite: false })); blob.rotation.x = -Math.PI / 2; blob.position.set(c.x, 0.001, c.z); this.rig.add(blob); }
      const key = new THREE.DirectionalLight('#fff2e2', 3.1); key.position.set(c.x - R * 2.2, c.y + R * 3.4, c.z + R * 3); key.target.position.copy(c); key.castShadow = shadows;
      Object.assign(key.shadow.camera, { left: -R * 1.6, right: R * 1.6, top: R * 1.6, bottom: -R * 1.6, near: R * 0.5, far: R * 10 }); key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 6; this.rig.add(key, key.target);
      const rimL = new THREE.DirectionalLight('#dfe5f0', 3.2); rimL.position.set(c.x - R * 3, c.y + R * 1.5, c.z - R * 3); rimL.target.position.copy(c); this.rig.add(rimL, rimL.target);
      const rimR = new THREE.DirectionalLight('#ffe6cf', 3.6); rimR.position.set(c.x + R * 3, c.y + R * 2, c.z - R * 2.4); rimR.target.position.copy(c); this.rig.add(rimR, rimR.target);
      const fill = new THREE.HemisphereLight('#fff6ec', '#1a1612', 0.6); this.rig.add(fill);
      this.scene.environmentIntensity = 0.5; this.renderer.toneMappingExposure = 1.15; if (this.bloom) this.bloom.strength = 0.12;
      this.keyLights = [key, rimL, rimR, fill]; this.keyBase = [3.1, 3.2, 3.6, 0.6];
    }
  }
  aoFor(R) { if (this.gtao) this.gtao.updateGtaoMaterial({ radius: Math.max(0.01, R * 0.22), distanceExponent: 1.6, thickness: Math.max(0.01, R * 0.12), scale: 1.1 }); }
  setLights(k) { (this.keyLights || []).forEach((L, i) => (L.intensity = this.keyBase[i] * k)); }
  /* --- product --- */
  async show(p, sizeIdx = 0, colorIdx = 0, opt = {}) {
    await loadPhotos(); if (p.model === 'tag') await ensureFonts();
    const key = `${p.id}|${sizeIdx}|${colorIdx}`;
    let m = this.cache.get(key);
    if (!m) { m = buildModel(p, sizeIdx, colorIdx); this.cache.set(key, m); if (this.cache.size > 5) { const [k0, old] = this.cache.entries().next().value; if (old !== this.model) { old.dispose(); this.cache.delete(k0); } } }
    const sameKind = this.model && this.model.product.id === p.id && this.model.sizeIdx === sizeIdx;
    if (this.model) this.root.remove(this.model.group);
    this.model = m; this.root.add(m.group);
    m.group.position.set(0, 0, 0); m.group.rotation.set(0, 0, 0);
    if (m.kind === 'wall') m.group.position.y = 1.45;
    else if (m.kind === 'hoodie') m.group.position.y = -m.box.min.y + 0.05;
    else if (m.kind === 'tag') m.group.position.y = -m.box.min.y + 0.02;
    else m.group.position.y = -m.box.min.y + 0.001;
    m.group.updateMatrixWorld(true);
    m.focusW = {}; for (const k in m.focus) m.focusW[k] = m.focus[k].clone().applyMatrix4(m.group.matrixWorld);
    this.floorY = 0;
    const kind = m.kind === 'wall' ? 'wall' : 'studio';
    if (!sameKind || this.stagingKind !== kind || opt.restage) this.setStaging(kind, Object.assign({}, this.stagingOpt, opt.staging || {}));
    this.aoFor(m.radius);
    if (m.halo) m.halo.set(this.haloLevel ?? (opt.halo === false ? 0 : 1));
    if (this.measuring) this.showMeasures(true);
    if (this.comparing) this.showCompare(true);
    if (!sameKind) { this.userMoved = false; this.frame(!REDUCED && opt.intro !== false); }
    return m;
  }
  setHalo(v, kelvin) { this.haloLevel = v; if (this.model && this.model.halo) this.model.halo.set(v, kelvin); }
  frameDist(R, fovDeg) { return R / Math.tan((fovDeg * Math.PI) / 360); }
  frame(animate = true) {
    const m = this.model; if (!m) return;
    const c = m.focusW.center, b = m.box.clone().applyMatrix4(m.group.matrixWorld), sz = b.getSize(new V3());
    this.camera.fov = 30; this.camera.updateProjectionMatrix();
    const t = Math.tan((30 * Math.PI) / 360), asp = this.camera.aspect;
    const d = Math.max((sz.y / 2) / t, (sz.x / 2) / (t * asp)) * (m.kind === 'wall' ? 1.35 : 1.28) + sz.z / 2;
    const az = m.kind === 'wall' ? 0 : m.kind === 'tag' ? 0.12 : 0.32, el = m.kind === 'wall' ? 0.0 : 0.12;
    const end = new V3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(d).add(c);
    if (this.controls) {
      const ctl = this.controls; ctl.target.copy(c); ctl.minDistance = d * 0.25; ctl.maxDistance = d * 2.2;
      if (m.kind === 'wall') { ctl.minAzimuthAngle = -1.2; ctl.maxAzimuthAngle = 1.2; ctl.minPolarAngle = 0.5; ctl.maxPolarAngle = 1.9; } else { ctl.minAzimuthAngle = -Infinity; ctl.maxAzimuthAngle = Infinity; ctl.minPolarAngle = 0.15; ctl.maxPolarAngle = m.kind === 'tag' ? 2.6 : 1.68; }
    }
    if (animate) { const az0 = az - 0.28, start = new V3(Math.sin(az0) * Math.cos(el + 0.06), Math.sin(el + 0.06), Math.cos(az0) * Math.cos(el + 0.06)).multiplyScalar(d * 1.12).add(c); this.intro = { t: 0, dur: 1.6, from: start, to: end, tgt: c.clone() }; this.camera.position.copy(start); }
    else this.camera.position.copy(end);
    this.camera.lookAt(c); this.home = { pos: end.clone(), tgt: c.clone() };
  }
  resetView() { this.userMoved = false; if (this.film) this.stopFilm(); this.frame(true); }
  /* --- measures (dimension lines with labels) --- */
  clearLabels() { this.labels.forEach((l) => l.el.remove()); this.labels = []; }
  addLabel(pos, html) { const e = document.createElement('div'); e.className = 'ff3d-lb'; e.innerHTML = html; this.ov.appendChild(e); this.labels.push({ el: e, pos }); }
  showMeasures(on) {
    this.measuring = on; this.extras.children.filter((o) => o.userData.measure).forEach((o) => this.extras.remove(o)); this.clearLabels();
    if (this.comparing) this.drawCompare();
    if (!on || !this.model) return;
    const m = this.model, M = m.group.matrixWorld, mat = new THREE.LineBasicMaterial({ color: '#c7a26a', depthTest: false, transparent: true, opacity: 0.95 });
    for (const ms of m.measures) {
      const a = ms.a.clone().applyMatrix4(M), b = ms.b.clone().applyMatrix4(M), dir = b.clone().sub(a).normalize(), tick = Math.max(0.006, m.radius * 0.035);
      const perp = Math.abs(dir.y) > 0.9 ? new V3(1, 0, 0) : new V3(0, 1, 0);
      const pts = [a, b, a.clone().addScaledVector(perp, -tick), a.clone().addScaledVector(perp, tick), b.clone().addScaledVector(perp, -tick), b.clone().addScaledVector(perp, tick)];
      const geo = new THREE.BufferGeometry().setFromPoints([pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]]);
      const ln = new THREE.LineSegments(geo, mat); ln.renderOrder = 10; ln.userData.measure = true; this.extras.add(ln);
      this.addLabel(a.clone().lerp(b, 0.5), `<small>${ms.label}</small>${fmtIn(ms.v)} · ${fmtCm(ms.v)}`);
    }
  }
  /* --- size comparison: the other sizes as outlines + an everyday reference --- */
  showCompare(on) {
    this.comparing = on; this.drawCompare();
    const m = this.model; if (!m || m.kind === 'cap' || this.film) return;
    if (on) {
      const b = new THREE.Box3(); this.extras.children.filter((o) => o.userData.compare).forEach((o) => b.expandByObject(o)); b.union(m.box.clone().applyMatrix4(m.group.matrixWorld));
      const c = b.getCenter(new V3()), sz = b.getSize(new V3()), t = Math.tan((30 * Math.PI) / 360), d = Math.max(sz.y / 2 / t, sz.x / 2 / (t * this.camera.aspect)) * 1.18 + sz.z;
      this.intro = { t: 0, dur: 1.1, from: this.camera.position.clone(), to: new V3(0, 0.05, 1).normalize().multiplyScalar(d).add(c), tgt: c }; if (this.controls) this.controls.maxDistance = Math.max(this.controls.maxDistance, d * 1.3);
    } else this.resetView();
  }
  drawCompare() {
    this.extras.children.filter((o) => o.userData.compare).forEach((o) => { this.extras.remove(o); o.traverse((q) => q.geometry && q.geometry.dispose()); });
    this.labels.filter((l) => l.compare).forEach((l) => l.el.remove()); this.labels = this.labels.filter((l) => !l.compare);
    if (!this.comparing || !this.model) return;
    const m = this.model, p = m.product, grp = new THREE.Group(); grp.userData.compare = true; this.extras.add(grp);
    const dash = (w, h, cx, cy, z, label, active) => {
      const pts = [new V3(-w / 2, -h / 2, 0), new V3(w / 2, -h / 2, 0), new V3(w / 2, h / 2, 0), new V3(-w / 2, h / 2, 0), new V3(-w / 2, -h / 2, 0)];
      const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineDashedMaterial({ color: active ? '#c7a26a' : '#8a8378', dashSize: Math.max(0.004, w * 0.02), gapSize: Math.max(0.003, w * 0.014), depthTest: false, transparent: true, opacity: active ? 0.95 : 0.7 }));
      l.computeLineDistances(); l.position.set(cx, cy, z); l.renderOrder = 9; grp.add(l);
      const lb = document.createElement('div'); lb.className = 'ff3d-lb'; lb.textContent = label; this.ov.appendChild(lb); this.labels.push({ el: lb, pos: new V3(cx + w / 2, cy - h / 2, z), compare: true });
    };
    const M = m.group.matrixWorld;
    if (m.kind === 'wall') {
      const fp = wallFootprint(p, m.size), wy = m.group.position.y, top = wy, cyOf = (h) => top - h / 2;
      p.sizes.forEach((s, i) => { const f = wallFootprint(p, s); dash(f.w, f.h, f.cx, cyOf(f.h), 0.06, s.label, i === m.sizeIdx); });
      const person = personMesh(1.778); person.position.set(fp.cx + fp.w / 2 + 0.55, 0, 0.35); grp.add(person);
      this.addLabel(new V3(fp.cx + fp.w / 2 + 0.55, 1.86, 0.35), '<small>Reference</small>5′10″ · 178 cm'); this.labels[this.labels.length - 1].compare = true;
    } else if (m.kind === 'tag') {
      const c = m.focusW.center;
      p.sizes.forEach((s, i) => dash(s.w * IN, s.h * IN, c.x, c.y, c.z + 0.004, s.label, i === m.sizeIdx));
      const cx2 = c.x + (p.sizes[p.sizes.length - 1].w * IN) / 2 + 0.06; const card = cardMesh(); card.position.set(cx2, c.y + 0.027, c.z); grp.add(card);
      this.addLabel(new V3(cx2, c.y - 0.012, c.z), '<small>Reference</small>Bank card 3.37 × 2.13 in'); this.labels[this.labels.length - 1].compare = true;
    } else if (m.kind === 'hoodie') {
      const zf = m.box.max.z + 0.02, base = m.group.position.y;
      p.sizes.forEach((s, i) => { const w = s.chest * IN, h = s.length * IN; dash(w, h, 0, base + h / 2, zf, s.label, i === m.sizeIdx); });
    }
    void M;
  }
  /* --- film --- */
  playFilm(opt = {}) {
    const m = this.model; if (!m) return;
    this.film = { shots: opt.shots || FILMS[m.kind], i: opt.index || 0, t: 0, single: !!opt.single, onEnd: opt.onEnd, onShot: opt.onShot };
    if (this.controls) this.controls.enabled = false; this.el.classList.add('on'); this.intro = null; this.startShot(this.film.i);
  }
  startShot(i) {
    const f = this.film, s = f.shots[i], m = this.model, p = m.product; f.i = i; f.t = 0;
    const tok = (str) => (str || '').replace('{name}', p.name).replace('{color}', m.color.name).replace('{size}', m.size.label).replace('{level}', p.level).replace('{deco}', p.deco && p.deco[0] ? p.deco[0].art : p.name).replace('3000K', ((m.halo && m.halo.kelvin) || 3000) + 'K');
    this.capEl.querySelector('.t').textContent = tok(s.cap); this.capEl.querySelector('.s').textContent = tok(s.sub); this.capEl.classList.add('on');
    if (f.onShot) f.onShot(i, s);
  }
  stopFilm(silent) {
    const f = this.film; if (!f) return; this.film = null;
    if (this.controls) this.controls.enabled = true; this.el.classList.remove('on'); this.capEl.classList.remove('on'); this.fadeEl.classList.remove('on');
    this.setLights(1); if (this.model) { this.model.group.rotation.y = 0; if (this.model.halo) this.model.halo.set(this.haloLevel ?? 1); }
    if (!silent) { this.camera.fov = 30; this.camera.updateProjectionMatrix(); if (this.controls && this.home) { this.camera.position.copy(this.home.pos); this.controls.target.copy(this.home.tgt); } }
    if (f.onEnd) f.onEnd();
  }
  updateFilm(dt) {
    const f = this.film, s = f.shots[f.i], m = this.model; f.t += dt;
    const u = Math.min(1, f.t / s.dur), e = EASE.inOut(u);
    const tgt = m.focusW[s.from.f] || m.focusW.center, tgt2 = m.focusW[s.to.f] || m.focusW.center, T = tgt.clone().lerp(tgt2, e);
    const lens = lerp(s.lens[0], s.lens[1], e), fov = lensFov(lens);
    const az = lerp(s.from.az, s.to.az, e), el = lerp(s.from.el, s.to.el, e), d = lerp(s.from.d, s.to.d, e) * this.frameDist(m.radius, fov) * (this.camera.aspect < 1 ? 1 / Math.max(0.56, this.camera.aspect) : 1);
    this.camera.fov = fov; this.camera.updateProjectionMatrix();
    this.camera.position.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(d).add(T); this.camera.lookAt(T);
    if (this.controls) this.controls.target.copy(T);
    if (s.spin) { m.group.rotation.y = lerp(s.spin[0], s.spin[1], EASE.inOut(clamp((f.t - 0.4) / (s.dur - 0.8), 0, 1))); }
    else if (m.kind === 'tag') m.group.rotation.y = 0;
    if (s.lights) this.setLights(lerp(s.lights[0] * 0.15 + 0.05, s.lights[1], EASE.out(clamp(f.t / 2.2, 0, 1))));
    if (s.halo && m.halo) m.halo.set(lerp(s.halo[0], s.halo[1], clamp((f.t - 0.8) / 2.6, 0, 1)) * (this.haloLevel || 1));
    const last = f.single || f.i === f.shots.length - 1;
    this.fadeEl.classList.toggle('on', (s.dur - f.t < 0.28 && !last) || f.t < 0.1);
    if (u >= 1) { if (last) this.stopFilm(); else this.startShot(f.i + 1); }
  }
  /* --- loop --- */
  projectLabels() {
    if (!this.labels.length) return;
    for (const l of this.labels) { const v = l.pos.clone().project(this.camera); l.el.style.left = ((v.x + 1) / 2) * this.w + 'px'; l.el.style.top = ((1 - v.y) / 2) * this.h + 'px'; l.el.style.display = v.z < 1 ? '' : 'none'; }
  }
  loop() {
    const dt = Math.min(this.clock.getDelta(), this.recording ? 0.25 : 1 / 20);
    if (!this.visible && !this.recording) return;
    if (this.film) this.updateFilm(dt);
    else if (this.intro) { const it = this.intro; it.t += dt; const e = EASE.out(clamp(it.t / it.dur, 0, 1)); this.camera.position.copy(it.from).lerp(it.to, e); this.camera.lookAt(it.tgt); if (this.controls) this.controls.target.copy(it.tgt); if (e >= 1) this.intro = null; }
    else if (this.controls) this.controls.update();
    if (this.tick) this.tick(dt);
    this.projectLabels();
    if (this.composer) this.composer.render(); else this.renderer.render(this.scene, this.camera);
  }
  snapshot(type = 'image/png', q) { if (this.composer) this.composer.render(); else this.renderer.render(this.scene, this.camera); return this.renderer.domElement.toDataURL(type, q); }
  dispose() {
    this.renderer.setAnimationLoop(null); this.ro.disconnect(); this.io.disconnect();
    this.cache.forEach((m) => m.dispose()); this.cache.clear(); this.clearLabels();
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    if (this.controls) this.controls.dispose(); if (this.composer) this.composer.dispose();
    this.renderer.dispose(); this.renderer.forceContextLoss(); this.renderer.domElement.remove(); this.ov.remove(); this.capEl.remove(); this.fadeEl.remove();
  }
}
function personMesh(H) {
  const c = mkCanvas(256, 768), x = c.getContext('2d'), s = 768 / 1.0;
  x.fillStyle = '#fff';
  const rr = (X, Y, W, Hh, r) => { x.beginPath(); x.roundRect(X, Y, W, Hh, r); x.fill(); };
  x.beginPath(); x.ellipse(128, 0.065 * s, 0.05 * s, 0.062 * s, 0, 0, TAU); x.fill();
  rr(128 - 0.12 * s, 0.14 * s, 0.24 * s, 0.4 * s, 0.07 * s);
  rr(128 - 0.165 * s, 0.16 * s, 0.06 * s, 0.33 * s, 0.03 * s); rr(128 + 0.105 * s, 0.16 * s, 0.06 * s, 0.33 * s, 0.03 * s);
  rr(128 - 0.1 * s, 0.48 * s, 0.09 * s, 0.52 * s, 0.035 * s); rr(128 + 0.01 * s, 0.48 * s, 0.09 * s, 0.52 * s, 0.035 * s);
  const t = ctex(c); const m = new THREE.Mesh(new THREE.PlaneGeometry(H / 3, H), new THREE.MeshBasicMaterial({ map: t, color: '#6d665d', transparent: true, opacity: 0.55, depthWrite: false }));
  m.position.y = H / 2; const g = new THREE.Group(); m.position.y = H / 2; g.add(m); return g;
}
function cardMesh() {
  const w = 0.0856, h = 0.05398, r = 0.003, s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2); s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r); s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2); s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r); s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const m = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshStandardMaterial({ color: '#5d5850', roughness: 0.4, transparent: true, opacity: 0.75 }));
  const chip = new THREE.Mesh(new THREE.PlaneGeometry(0.011, 0.009), new THREE.MeshStandardMaterial({ color: '#a8916a', metalness: 0.8, roughness: 0.3 })); chip.position.set(-w * 0.3, 0.004, 0.0003); m.add(chip);
  m.position.y = -h / 2; const g = new THREE.Group(); g.add(m); return g;
}

/* ================================================================== SHOWCASE (home intro)
   A wall of lit niches. Columns = product line, rows = level (Foundation over Emblem); on a portrait
   phone the grid turns to 2 × 3 (columns = level). Products fall in one by one; each niche light
   comes on as its product lands. */
class Showcase {
  constructor(el, products, o = {}) {
    this.st = new Stage(el, { controls: false, shadows: false, bloom: false, ao: o.ao });
    this.products = products; this.o = o; this.items = []; this.t = 0; this.state = 'idle'; this.models = {}; this.pivots = {};
    const st = this.st; st.scene.background.set('#060505'); st.scene.environmentIntensity = 0.12; st.renderer.toneMappingExposure = 1.0;
    st.aoFor(0.55);
    if (!TEX.fleece) initTiles();
    this.pointer = new THREE.Vector2(0, 0); this.pTarget = new THREE.Vector2(0, 0); this.hover = -1;
    this.wallGroup = new THREE.Group(); st.scene.add(this.wallGroup);
    this.amb = new THREE.AmbientLight('#ffffff', 0); st.scene.add(this.amb);
    this.front = new THREE.DirectionalLight('#fff4e6', 0); this.front.position.set(0.6, 1.4, 4); st.scene.add(this.front);
    this.rim = new THREE.DirectionalLight('#e8ecf5', 0); this.rim.position.set(-2, 2.5, -1); st.scene.add(this.rim);
    this.layout();
    st.tick = (dt) => this.update(dt);
    this.ray = new THREE.Raycaster();
    const ce = st.renderer.domElement;
    this.onMove = (e) => { const r = ce.getBoundingClientRect(); this.pTarget.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1)); this.pick(this.pTarget, e.pointerType !== 'touch'); };
    this.onLeave = () => { this.pTarget.set(0, 0); this.setHover(-1); };
    this.onClick = (e) => { const r = ce.getBoundingClientRect(); const v = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1)); const i = this.pick(v, false); if (this.state !== 'idle-ready') { this.skip(); return; } if (i >= 0) this.select(i); };
    ce.addEventListener('pointermove', this.onMove); ce.addEventListener('pointerleave', this.onLeave); ce.addEventListener('click', this.onClick);
    st.ro.disconnect(); st.ro = new ResizeObserver(() => { st.resize(); this.relayout(); }); st.ro.observe(el);
  }
  grid() { const portrait = this.st.camera.aspect < 0.9; return portrait ? { cols: 2, rows: 3, portrait } : { cols: 3, rows: 2, portrait }; }
  layout() {
    const st = this.st, G = this.grid(); this.G = G;
    this.wallGroup.clear();
    const NW = G.portrait ? 1.1 : 1.25, NH = 1, ND = 0.7, GAP = G.portrait ? 0.24 : 0.2, FR = 0.07;
    const W = G.cols * NW + (G.cols - 1) * GAP, H = G.rows * NH + (G.rows - 1) * GAP;
    this.size = { W, H, NW, NH, ND };
    // wall face with openings
    const face = new THREE.Shape(); face.moveTo(-W / 2 - 4, -H / 2 - 3); face.lineTo(W / 2 + 4, -H / 2 - 3); face.lineTo(W / 2 + 4, H / 2 + 3); face.lineTo(-W / 2 - 4, H / 2 + 3); face.closePath();
    const cells = [];
    for (let r = 0; r < G.rows; r++) for (let c = 0; c < G.cols; c++) { const x = -W / 2 + NW / 2 + c * (NW + GAP), y = H / 2 - NH / 2 - r * (NH + GAP); cells.push({ r, c, x, y }); const h = new THREE.Path(); const rr = 0.02; h.moveTo(x - NW / 2 + rr, y - NH / 2); h.lineTo(x + NW / 2 - rr, y - NH / 2); h.quadraticCurveTo(x + NW / 2, y - NH / 2, x + NW / 2, y - NH / 2 + rr); h.lineTo(x + NW / 2, y + NH / 2 - rr); h.quadraticCurveTo(x + NW / 2, y + NH / 2, x + NW / 2 - rr, y + NH / 2); h.lineTo(x - NW / 2 + rr, y + NH / 2); h.quadraticCurveTo(x - NW / 2, y + NH / 2, x - NW / 2, y + NH / 2 - rr); h.lineTo(x - NW / 2, y - NH / 2 + rr); h.quadraticCurveTo(x - NW / 2, y - NH / 2, x - NW / 2 + rr, y - NH / 2); face.holes.push(h); }
    const wallMat = new THREE.MeshStandardMaterial({ color: '#141210', roughness: 0.95 });
    const fg = new THREE.ExtrudeGeometry(face, { depth: FR, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 2 });
    const fm = new THREE.Mesh(fg, wallMat); fm.position.z = -FR; this.wallGroup.add(fm);
    const nicheMat = new THREE.MeshStandardMaterial({ color: '#2e2823', roughness: 0.96, side: THREE.BackSide });
    // product order: columns = line, rows = level (landscape); transposed on portrait
    const lines = ['wall', 'hoodie', 'cap'];
    this.cells = cells.map((cell) => {
      const lineIdx = G.portrait ? cell.r : cell.c, level = G.portrait ? cell.c : cell.r;
      const p = this.products.find((q) => q.model === lines[lineIdx] && (level === 0 ? q.level === 'Foundation' : q.level === 'Emblem'));
      const box = new THREE.Mesh(new THREE.BoxGeometry(NW, NH, ND), nicheMat); box.position.set(cell.x, cell.y, -FR - ND / 2 + 0.001); this.wallGroup.add(box);
      const strip = new THREE.Mesh(new THREE.BoxGeometry(NW * 0.86, 0.008, 0.012), new THREE.MeshBasicMaterial({ color: '#ffd6a3', toneMapped: false })); strip.position.set(cell.x, cell.y + NH / 2 - 0.006, -FR - 0.03); this.wallGroup.add(strip);
      const L = new THREE.SpotLight('#ffd3a0', 0, 0, 0.78, 0.75, 2); L.position.set(cell.x, cell.y + NH / 2 - 0.02, -FR - 0.06); L.target.position.set(cell.x, cell.y - NH / 2, -FR - ND * 0.8); this.wallGroup.add(L, L.target);
      const glow = new THREE.PointLight('#ffcf98', 0, 1.1, 2); glow.position.set(cell.x, cell.y + 0.05, -FR + 0.25); this.wallGroup.add(glow);
      const proxy = new THREE.Mesh(new THREE.PlaneGeometry(NW, NH), new THREE.MeshBasicMaterial({ visible: false })); proxy.position.set(cell.x, cell.y, 0.01); this.wallGroup.add(proxy);
      return { ...cell, p, box, strip, light: L, glow, proxy, floor: cell.y - NH / 2, back: -FR - ND };
    });
    // camera fit
    const fov = 32, ft = G.portrait ? 0.16 : 0.1, fb = G.portrait ? 0.34 : 0.35;
    st.camera.fov = fov; st.camera.updateProjectionMatrix();
    const t = Math.tan((fov * Math.PI) / 360), asp = st.camera.aspect;
    let needH = H / (1 - ft - fb), needW = W + (G.portrait ? 0.15 : 0.35); needH = Math.max(needH, needW / asp); const marginTop = needH * ft, marginBot = needH - H - marginTop;
    const d = needH / 2 / t;
    this.camBase = new V3(0, (marginBot - marginTop) / -2 + 0.0, d); this.camTgt = new V3(0, (marginBot - marginTop) / -2, -0.3);
    st.camera.position.copy(this.camBase); st.camera.lookAt(this.camTgt);
    this.items = this.cells.map((cell, i) => ({ cell, p: cell.p, order: i, model: cell.p ? this.models[cell.p.id] : null, pivot: cell.p ? this.pivots[cell.p.id] : null }));
  }
  relayout() {
    const st = this.state; this.layout();
    if (!Object.keys(this.models).length) return;
    if (st === 'intro') { this.skip(); return; }
    this.placeAll(st === 'idle-ready'); if (st === 'idle-ready') this.items.forEach((it) => it.pivot && (it.pivot.visible = true));
  }
  async load() {
    await Promise.all([ensureFonts(), loadPhotos()]);
    const SHOW = { 'cap-emblem': 2, 'hoodie-emblem': 1, 'wall-emblem': 2 };
    const ps = this.items.map((it) => it.p).filter(Boolean);
    for (const p of ps) { if (!this.models[p.id]) this.models[p.id] = buildModel(p, 1, SHOW[p.id] || 0); await new Promise((r) => requestAnimationFrame(r)); }
    this.items.forEach((it) => { if (it.p) it.model = this.models[it.p.id]; });
    this.placeAll(false);
  }
  placeAll(settled) {
    const { NW, NH } = this.size;
    for (const it of this.items) {
      const m = it.model, c = it.cell; if (!m) continue;
      const pivot = this.pivots[it.p.id] || new THREE.Group(); this.pivots[it.p.id] = pivot; it.pivot = pivot; pivot.clear(); pivot.add(m.group);
      m.group.position.set(0, 0, 0); m.group.rotation.set(0, 0, 0); m.group.scale.setScalar(1); m.group.updateMatrixWorld(true);
      const b = m.box, sz = b.getSize(new V3()), ctr = b.getCenter(new V3());
      let s, rest = new V3(), rotY = 0;
      if (m.kind === 'wall') { s = Math.min((NW * 0.84) / sz.x, (NH * 0.72) / sz.y); rest.set(c.x, c.y + 0.02, c.back + 0.002); m.group.position.set(-ctr.x * s, -ctr.y * s, 0); if (m.halo) m.halo.set(0); }
      else if (m.kind === 'cap') { s = Math.min((NW * 0.66) / sz.x, (NH * 0.62) / sz.y); rest.set(c.x, c.floor, c.back + this.size.ND * 0.48); m.group.position.set(-ctr.x * s, -b.min.y * s, -ctr.z * s); rotY = 0.55; }
      else { s = Math.min((NW * 0.8) / sz.x, (NH * 0.9) / sz.y); rest.set(c.x, c.y - 0.01, c.back + this.size.ND * 0.48); m.group.position.set(-ctr.x * s, -ctr.y * s, -ctr.z * s); rotY = -0.28; }
      m.group.scale.setScalar(s);
      pivot.userData = { rest, rotY, s };
      if (!pivot.parent) this.st.scene.add(pivot);
      if (settled) { pivot.position.copy(rest); pivot.rotation.set(0, rotY, 0); pivot.scale.set(1, 1, 1); this.lightOn(it, 1); it.landed = true; it.done = true; }
      else { pivot.position.set(rest.x, rest.y + 3.2, rest.z + 1.6); pivot.visible = false; it.landed = false; it.done = false; this.lightOn(it, 0); }
    }
    this.state = settled ? 'idle-ready' : 'loaded';
  }
  lightOn(it, k) { const c = it.cell; c.light.intensity = 5.2 * k; c.glow.intensity = 0.45 * k; c.strip.material.color.set('#ffd6a3').multiplyScalar(0.1 + 0.9 * k); if (it.model && it.model.halo) it.model.halo.set(0.85 * k); }
  play() {
    if (REDUCED) { this.placeAll(true); this.amb.intensity = 0.18; this.front.intensity = 0.55; this.rim.intensity = 0.7; this.items.forEach((it) => it.pivot && (it.pivot.visible = true)); this.finish(); return; }
    this.state = 'intro'; this.t = 0; this.amb.intensity = 0;
    this.items.forEach((it, i) => { it.t0 = 0.55 + i * 0.3 + (it.model && it.model.kind === 'wall' ? 0 : 0.05); if (it.pivot) { it.pivot.visible = false; it.landed = false; it.done = false; it.R = rnd(17 + i); } this.lightOn(it, 0); });
    this.endAt = 0.55 + this.items.length * 0.3 + 1.2;
  }
  skip() { if (this.state === 'intro' || this.state === 'loaded') { this.placeAll(true); this.amb.intensity = 0.18; this.front.intensity = 0.55; this.rim.intensity = 0.7; this.items.forEach((it) => it.pivot && (it.pivot.visible = true)); this.finish(); } }
  finish() { this.state = 'idle-ready'; if (this.o.onReady) this.o.onReady(); }
  update(dt) {
    const st = this.st; this.t += dt;
    this.pointer.lerp(this.pTarget, 1 - Math.pow(0.002, dt));
    // camera breathes with the pointer; on touch it drifts slowly
    const drift = this.o.touch ? new THREE.Vector2(Math.sin(this.t * 0.25) * 0.4, Math.cos(this.t * 0.2) * 0.25) : this.pointer;
    if (!this.selecting) { st.camera.position.set(this.camBase.x + drift.x * 0.16, this.camBase.y + drift.y * 0.09, this.camBase.z); st.camera.lookAt(this.camTgt); }
    if (this.state === 'intro') {
      const ak = EASE.out(clamp(this.t / 1.2, 0, 1)); this.amb.intensity = 0.18 * ak; this.front.intensity = 0.55 * ak; this.rim.intensity = 0.7 * ak;
      for (const it of this.items) {
        if (!it.pivot) continue; const u = this.t - it.t0; if (u < 0) continue; it.pivot.visible = true;
        const { rest, rotY } = it.pivot.userData, metal = it.model.kind === 'wall';
        const Tf = metal ? 0.55 : 0.62;
        if (u < Tf) {
          const k = u / Tf;
          if (metal) { it.pivot.position.set(rest.x, rest.y + (1 - EASE.out(k)) * 0.25, rest.z + (1 - EASE.outExpo(k)) * 1.4); it.pivot.rotation.set((1 - k) * 0.25, rotY + (1 - k) * 0.4, (1 - k) * -0.12); }
          else { it.pivot.position.set(rest.x, rest.y + 2.4 * (1 - k * k), rest.z + 1.5 * (1 - EASE.out(k))); it.pivot.rotation.set((1 - k) * 0.7, rotY + (1 - k) * 1.6, (1 - k) * -0.5); }
        } else {
          if (!it.landed) { it.landed = true; it.landT = u; if (metal) this.shake = 0.012; }
          const b = u - Tf;
          if (metal) { it.pivot.position.copy(rest); it.pivot.rotation.set(0, rotY, 0); }
          else {
            const bounce = Math.max(0, Math.sin(Math.min(1, b / 0.24) * Math.PI)) * 0.07 * (b < 0.24 ? 1 : 0) + (b > 0.24 && b < 0.38 ? Math.sin(((b - 0.24) / 0.14) * Math.PI) * 0.014 : 0);
            it.pivot.position.set(rest.x, rest.y + bounce, rest.z);
            const sq = b < 0.16 ? Math.sin((b / 0.16) * Math.PI) * 0.07 : 0; it.pivot.scale.set(1 + sq * 0.4, 1 - sq, 1 + sq * 0.4);
            const wob = Math.exp(-b * 6) * Math.sin(b * 22) * 0.06; it.pivot.rotation.set(wob, rotY + wob * 0.5, -wob * 0.6);
          }
          const lk = clamp(b / 0.45, 0, 1); const flick = b < 0.12 ? (b < 0.05 ? 0.6 : 0.2) : 1; this.lightOn(it, EASE.out(lk) * flick);
          if (b > 0.6) it.done = true;
        }
      }
      if (this.t > this.endAt) { this.items.forEach((it) => { if (it.pivot) { it.pivot.position.copy(it.pivot.userData.rest); it.pivot.scale.set(1, 1, 1); it.pivot.rotation.set(0, it.pivot.userData.rotY, 0); } this.lightOn(it, 1); }); this.finish(); }
    }
    if (this.shake > 0.0002) { st.camera.position.x += (Math.random() - 0.5) * this.shake; st.camera.position.y += (Math.random() - 0.5) * this.shake; this.shake *= Math.pow(0.0008, dt); }
    if (this.state === 'idle-ready') {
      for (const [i, it] of this.items.entries()) {
        if (!it.pivot) continue; const { rest, rotY } = it.pivot.userData, h = i === this.hover;
        it.hk = lerp(it.hk || 0, h ? 1 : 0, 1 - Math.pow(0.0005, dt));
        const lift = it.model.kind === 'wall' ? 0 : 0.035 * it.hk;
        it.pivot.position.set(rest.x, rest.y + lift, rest.z + (it.model.kind === 'wall' ? 0.02 * it.hk : 0.06 * it.hk));
        if (h) it.spin = (it.spin || 0) + dt * 1.6 * Math.min(1, it.hk * 1.5);
        else if (it.spin) { it.spin = Math.atan2(Math.sin(it.spin), Math.cos(it.spin)); it.spin *= Math.pow(0.004, dt); if (Math.abs(it.spin) < 0.002) it.spin = 0; }
        it.pivot.rotation.y = rotY * (1 - 0.75 * it.hk) + (it.spin || 0);
        this.lightOn(it, 1 + 0.35 * it.hk);
      }
    }
    if (this.selecting) { const s = this.selecting; s.t += dt; const e = EASE.in(clamp(s.t / 0.75, 0, 1)); st.camera.position.copy(s.from).lerp(s.to, e); st.camera.lookAt(s.look); if (s.t > 0.45) st.fadeEl.classList.add('on'); if (s.t > 0.78 && !s.fired) { s.fired = true; this.o.onSelect && this.o.onSelect(s.id); } }
    if (this.o.onFrame) this.o.onFrame(this);
  }
  pick(v, hoverOnly) {
    if (this.state !== 'idle-ready') return -1;
    this.ray.setFromCamera(v, this.st.camera); const hits = this.ray.intersectObjects(this.cells.map((c) => c.proxy));
    const i = hits.length ? this.cells.findIndex((c) => c.proxy === hits[0].object) : -1;
    if (hoverOnly !== false) this.setHover(i);
    return i;
  }
  setHover(i) { if (i === this.hover) return; this.hover = i; this.st.renderer.domElement.style.cursor = i >= 0 ? 'pointer' : ''; if (this.o.onHover) this.o.onHover(i, i >= 0 ? this.items[i].p : null); }
  select(i) { const it = this.items[i]; if (!it || !it.p) return; const c = it.cell; this.selecting = { t: 0, from: this.st.camera.position.clone(), to: new V3(c.x, c.y, 1.0), look: new V3(c.x, c.y, c.back), id: it.p.id }; }
  /** screen positions of the niche label anchors (bottom-centre of each opening) */
  anchors() {
    const out = []; const cam = this.st.camera;
    for (const it of this.items) { const c = it.cell; const v = new V3(c.x, c.y - this.size.NH / 2 - 0.02, 0.02).project(cam); out.push({ x: ((v.x + 1) / 2) * this.st.w, y: ((1 - v.y) / 2) * this.st.h, p: it.p, r: c.r, c: c.c }); }
    return out;
  }
  rowAnchors() { const cam = this.st.camera, G = this.G, out = []; const n = G.portrait ? G.cols : G.rows; for (let i = 0; i < n; i++) { const cell = this.cells.find((c) => (G.portrait ? c.c === i && c.r === 0 : c.r === i && c.c === 0)); const v = (G.portrait ? new V3(cell.x, cell.y + this.size.NH / 2 + 0.08, 0) : new V3(cell.x - this.size.NW / 2 - 0.12, cell.y, 0)).project(cam); out.push({ x: ((v.x + 1) / 2) * this.st.w, y: ((1 - v.y) / 2) * this.st.h, level: i === 0 ? 'Foundation' : 'Emblem', portrait: G.portrait }); } return out; }
  dispose() { const ce = this.st.renderer.domElement; ce.removeEventListener('pointermove', this.onMove); ce.removeEventListener('pointerleave', this.onLeave); ce.removeEventListener('click', this.onClick); Object.values(this.models).forEach((m) => m.dispose()); this.st.dispose(); }
}

/* ================================================================== THUMBNAILS
   Renders product stills in the browser for cards (no image hosting). Cached per product + colour. */
let THUMB = null; const THUMBS = new Map();
async function thumb(p, colorIdx = 0, w = 640, h = 800, view = 0) {
  const key = `${p.id}|${colorIdx}|${w}x${h}|${view}`; if (THUMBS.has(key)) return THUMBS.get(key);
  const job = (async () => {
    if (!THUMB) { const el = document.createElement('div'); el.style.cssText = `position:fixed;left:-10000px;top:0;width:${w}px;height:${h}px`; document.body.appendChild(el); THUMB = new Stage(el, { controls: false, fixed: [w, h], dpr: 1, bloom: true, shadows: true, preserve: true }); THUMB.renderer.setAnimationLoop(null); }
    const st = THUMB; if (st.w !== w || st.h !== h) { st.o.fixed = [w, h]; st.resize(); }
    const si = p.model === 'wall' ? 1 : p.model === 'tag' ? 1 : p.model === 'hoodie' ? 1 : 1;
    await st.show(p, si, colorIdx, { intro: false, staging: { wall: 'charcoal' }, restage: true, halo: true });
    st.setHalo(1); st.userMoved = false; st.frame(false);
    const m = st.model, c = m.focusW.center, d = st.camera.position.distanceTo(c);
    const az = (m.kind === 'wall' ? 0.0 : m.kind === 'tag' ? -0.25 : m.kind === 'cap' ? 0.55 : 0.0) + (view ? (m.kind === 'wall' ? 0.55 : m.kind === 'tag' ? Math.PI : 2.5) : 0), el = m.kind === 'cap' ? 0.2 : m.kind === 'tag' ? 0.12 : 0.04;
    st.camera.position.set(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(d * (m.kind === 'wall' ? 0.95 : 1.02)).add(c); st.camera.lookAt(c);
    if (m.kind === 'tag') m.group.rotation.set(0, 0, -0.18);
    const url = st.snapshot('image/webp', 0.86); if (m.kind === 'tag') m.group.rotation.set(0, 0, 0);
    st.cache.forEach((mm) => mm.dispose()); st.cache.clear(); if (st.model) st.root.remove(st.model.group); st.model = null;
    return url;
  })();
  THUMBS.set(key, job); return job;
}
/** queue thumbnails one at a time so the page stays responsive */
let THUMB_Q = Promise.resolve();
function thumbQueued(p, ci, w, h, view) { const r = THUMB_Q.then(() => thumb(p, ci, w, h, view || 0)); THUMB_Q = r.catch(() => {}); return r; }

/* ================================================================== exports */
function webglOK() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } }
const FFEngine = { THREE, Stage, Showcase, loadPhotos, FILMS, buildModel, thumb: thumbQueued, lockupSVG, crossSVG, lockupLayout, wallFootprint, webglOK, fmtIn, fmtCm, IN, ensureFonts, version: '1.0.0' };
window.FFEngine = FFEngine;
window.dispatchEvent(new Event('ffengine:ready'));
export default FFEngine;
