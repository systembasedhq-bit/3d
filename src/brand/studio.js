/*
 * System-Based — 3D Brand Studio
 *
 * One scene, a handful of "shots" (website hero, sections, pricing, community post,
 * avatar, banner, story). Every shot uses the same chrome blocks, the same studio
 * lighting and the same type, so everything you export looks like one brand.
 *
 *   /brand-studio.html?shot=hero            preview a shot
 *   /brand-studio.html?shot=hero&anim=1     cinematic version (assemble + dolly)
 *   /brand-studio.html?shot=hero&render&t=2 fixed frame, no toolbar (used by the render script)
 */
import './studio.css'
import '@fontsource/michroma/400.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'

import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import sbSvg from '../../brand/logo/sb-monogram.svg?raw'

const params = new URLSearchParams(location.search)
const shotName = params.get('shot') || 'hero'
const renderMode = params.has('render')
const fixedT = params.has('t') ? parseFloat(params.get('t')) : null
const anim = params.get('anim') === '1'

const BG = '#0a0a0b'

/* ------------------------------------------------------------------ */
/* Content (edit copy here)                                            */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  {
    k: 'A',
    name: 'Client Response System',
    items: 'AI receptionist · missed-call text back · follow-up · booking · CRM',
  },
  { k: 'B', name: 'Growth System', items: 'Meta ads · landing pages · social · reporting' },
  { k: 'C', name: 'Brand & Build', items: 'Brand · websites · graphics · mockups' },
  { k: 'D', name: 'Custom AI & Ops', items: 'Custom agents · dashboards · integrations · SOPs' },
]

const PLANS = [
  {
    name: 'Basic',
    price: '$1,200',
    term: '3-month minimum',
    stack: ['A'],
    what: 'Client Response System',
  },
  {
    name: 'Growth',
    price: '$1,500',
    term: '2-month minimum',
    stack: ['A', 'B'],
    what: 'Basic + Growth System',
  },
  {
    name: 'Full',
    price: '$2,000',
    term: 'Month-to-month',
    stack: ['A', 'B', 'D'],
    what: 'Growth + custom AI agent + owner dashboard',
  },
]

// The SB monogram, traced from the master logo (brand/logo/original-lockup.webp)
const SB_PATH = sbSvg.match(/ d="([^"]+)"/)[1]
const SB_VIEW = sbSvg.match(/viewBox="([^"]+)"/)[1]
// unique gradient ids: a gradient inside the hidden toolbar would otherwise blank every copy
let gradId = 0
const monogram = (h) =>
  `<svg viewBox="${SB_VIEW}" width="${(h * SB_VIEW.split(' ')[2]) / SB_VIEW.split(' ')[3]}" height="${h}" style="display:block;flex:none" aria-hidden="true"><defs><linearGradient id="sbg${++gradId}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#f4f5f7"/><stop offset=".5" stop-color="#a9aeb5"/><stop offset="1" stop-color="#e9ebee"/></linearGradient></defs><path fill="url(#sbg${gradId})" fill-rule="evenodd" d="${SB_PATH}"/></svg>`
const minimark = monogram(18)

// Master lockup: SB | SYSTEM-BASED / SYSTEMS OVER LUCK.
const lockup = (size, { mark = true, tagline = true } = {}) =>
  `<div style="display:flex;align-items:center;gap:${size * 0.75}px">
    ${mark ? monogram(size * 1.5) + `<span style="width:1px;align-self:stretch;background:var(--sb-steel);opacity:.7"></span>` : ''}
    <div style="display:flex;flex-direction:column;gap:${size * 0.42}px">
      <span class="wordmark chrome-text" style="font-size:${size * 0.62}px;letter-spacing:.42em">System-Based</span>
      ${tagline ? `<span style="font:400 ${size * 0.26}px var(--sb-font-body);letter-spacing:.62em;color:var(--sb-silver);text-transform:uppercase">Systems over luck.</span>` : ''}
    </div>
  </div>`

/* ------------------------------------------------------------------ */
/* Renderer, studio lighting, floor, post                              */
/* ------------------------------------------------------------------ */

function createWorld(w, h) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
  renderer.setPixelRatio(renderMode ? 1 : Math.min(devicePixelRatio, 2))
  renderer.setSize(w, h)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.outputColorSpace = THREE.SRGBColorSpace

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BG)
  scene.environment = makeStudioEnvironment(renderer)
  // The logo gets a brighter version of the same studio (an extra key card upper-left)
  // so its flat faces read as bright brushed silver, like the master logo
  mono.envMap = makeStudioEnvironment(renderer, [
    [6, 4, [-3.5, 3, 8], 0.85],
    [4, 3, [4, -2, 8], 0.2],
  ])
  mono.map = spunMetalTexture()
  scene.environmentIntensity = 1.0

  const camera = new THREE.PerspectiveCamera(30, w / h, 0.1, 100)

  // A key light for crisp bevel highlights (the environment does the rest)
  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(-4, 6, 5)
  scene.add(key)
  const rim = new THREE.DirectionalLight(0xdfe6ff, 1.6)
  rim.position.set(5, 3, -6)
  scene.add(rim)

  const composer = new EffectComposer(renderer)
  composer.setPixelRatio(renderer.getPixelRatio())
  composer.setSize(w, h)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(w, h), 0.3, 0.25, 1.2))
  composer.addPass(new OutputPass())
  const finish = new ShaderPass(FinishShader)
  composer.addPass(finish)

  return { renderer, scene, camera, composer, finish }
}

// Black room with long softboxes: this is what makes metal look like "chrome on black".
function makeStudioEnvironment(renderer, extra = []) {
  const room = new THREE.Scene()
  room.background = new THREE.Color(0x000000)
  const panel = (w, h, pos, intensity) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(1, 1, 1).multiplyScalar(intensity),
        side: THREE.DoubleSide,
      }),
    )
    m.position.set(...pos)
    m.lookAt(0, 0, 0)
    room.add(m)
  }
  panel(12, 2.0, [0, 7, 1], 2.2) // overhead softbox
  panel(1.0, 9, [-7, 1, 3.5], 6) // left strip (main streak)
  panel(0.6, 9, [7, 1, 1], 3) // right strip
  panel(10, 0.6, [0, 1.5, -7], 2.5) // back rim
  panel(16, 2.2, [0, -0.6, 9], 0.38) // wide front card: every face gets the same soft sheen
  panel(9, 3, [2, -1, 9], 0.06) // whisper of fill so shadows aren't dead black
  extra.forEach(([w, h, pos, k]) => panel(w, h, pos, k))

  const pmrem = new THREE.PMREMGenerator(renderer)
  const tex = pmrem.fromScene(room, 0.03).texture
  pmrem.dispose()
  return tex
}

function addFloor(scene, w, h, y, center = new THREE.Vector3(), dim = 0.78) {
  const reflector = new Reflector(new THREE.PlaneGeometry(60, 60), {
    textureWidth: Math.round(w * 0.6),
    textureHeight: Math.round(h * 0.6),
    color: 0x2a2a2f,
    clipBias: 0.003,
  })
  reflector.rotation.x = -Math.PI / 2
  reflector.position.set(center.x, y, center.z)
  scene.add(reflector)

  // Darkens the reflection and fades the floor into the background
  const fade = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 60),
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { uColor: { value: new THREE.Color(BG) }, uDim: { value: dim } },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        varying vec2 vUv; uniform vec3 uColor; uniform float uDim;
        void main(){
          float d = length(vUv - 0.5) * 2.0;
          float a = mix(uDim, 1.0, smoothstep(0.02, 0.16, d));
          gl_FragColor = vec4(uColor, a);
        }`,
    }),
  )
  fade.rotation.x = -Math.PI / 2
  fade.position.set(center.x, y + 0.001, center.z)
  scene.add(fade)
}

const FinishShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uVignette: { value: 0.55 },
    uGrain: { value: 0.035 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain; varying vec2 vUv;
    float rand(vec2 co){ return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 p = vUv - 0.5;
      float v = smoothstep(0.95, 0.25, length(p * vec2(1.0, 1.2)));
      c.rgb *= mix(1.0 - uVignette, 1.0, v);
      c.rgb += (rand(vUv * 1024.0 + fract(uTime)) - 0.5) * uGrain;
      gl_FragColor = c;
    }`,
}

/* ------------------------------------------------------------------ */
/* The block: the single 3D part the whole brand is built from         */
/* ------------------------------------------------------------------ */

const silver = new THREE.MeshPhysicalMaterial({
  color: 0xd2d5da,
  metalness: 1,
  roughness: 0.15,
  anisotropy: 0.45,
  clearcoat: 0.5,
  clearcoatRoughness: 0.18,
})

const letterTextures = {}
function letterTexture(letter) {
  if (letterTextures[letter]) return letterTextures[letter]
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')
  g.fillStyle = '#000'
  g.fillRect(0, 0, 256, 256)
  g.fillStyle = '#fff'
  g.font = '500 190px "JetBrains Mono"'
  g.textAlign = 'center'
  g.textBaseline = 'middle'
  g.fillText(letter, 128, 140)
  const t = new THREE.CanvasTexture(c)
  t.anisotropy = 8
  return (letterTextures[letter] = t)
}

/**
 * @param {string} letter  section letter etched on the front face
 * @param {object} o       { w, h, d, lit, letterAt:[x,y], ledAt:[x,y] }
 */
function makeBlock(letter, o = {}) {
  const { w = 1, h = 1, d = 0.42, lit = false } = o
  const group = new THREE.Group()
  const body = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 6, Math.min(0.08, h * 0.25)), silver)
  group.add(body)

  if (letter) {
    const [lx, ly] = o.letterAt || [-w / 2 + 0.16, h / 2 - 0.16]
    const etch = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15, 0.15),
      new THREE.MeshStandardMaterial({
        color: 0x2b2d31,
        metalness: 0.4,
        roughness: 0.55,
        alphaMap: letterTexture(letter),
        transparent: true,
      }),
    )
    etch.position.set(lx, ly, d / 2 + 0.002)
    group.add(etch)
  }

  let led = null
  if (lit) {
    const [ex, ey] = o.ledAt || [w / 2 - 0.15, -h / 2 + 0.15]
    led = new THREE.Mesh(
      new THREE.CircleGeometry(0.032, 32),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 1, 1).multiplyScalar(8) }),
    )
    led.position.set(ex, ey, d / 2 + 0.003)
    group.add(led)
  }
  group.userData.led = led
  return group
}

function setLed(block, k) {
  const led = block.userData.led
  if (!led) return
  led.material.color.setScalar(8 * k + 0.02)
}

// The 3D SB: the traced monogram extruded into brushed chrome. Three pieces
// (top of the S, bottom of the S, the B) so it can assemble on camera.
// Same footprint as before: 2.12 units tall, bottom at y = -1.06.
const MARK_H = 2.12
const mono = new THREE.MeshPhysicalMaterial({
  color: 0xf0f2f5,
  metalness: 1,
  roughness: 0.3,
  anisotropy: 0.8,
  anisotropyRotation: Math.PI / 4,
  clearcoat: 0.6,
  clearcoatRoughness: 0.12,
  envMapIntensity: 1.0,
})
// Spun-metal finish: fine concentric rings, like the brushed highlights in the master logo.
// ExtrudeGeometry UVs are shape coordinates (SVG units), so the texture is mapped onto that.
function spunMetalTexture() {
  const N = 1024
  const c = document.createElement('canvas')
  c.width = c.height = N
  const g = c.getContext('2d')
  g.fillStyle = '#e6e6e6'
  g.fillRect(0, 0, N, N)
  let seed = 7
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  for (let r = 2; r < N; r += 1.5) {
    const v = 222 + rnd() * 33
    g.strokeStyle = `rgb(${v},${v},${v})`
    g.lineWidth = 1 + rnd() * 1.5
    g.beginPath()
    g.arc(N * 0.42, N * 0.5, r, 0, Math.PI * 2)
    g.stroke()
  }
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = THREE.SRGBColorSpace
  t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping
  t.repeat.set(1 / 1700, 1 / 1700)
  t.offset.set(0.5, 0.5)
  t.anisotropy = 8
  return t
}

let sbShapes = null
function monogramShapes() {
  if (sbShapes) return sbShapes
  const data = new SVGLoader().parse(sbSvg)
  const [, , vw, vh] = SB_VIEW.split(' ').map(Number)
  // Shapes stay in SVG units (1000 tall); makeMark scales the finished geometry.
  // toCreasedNormals hashes positions at 0.01, so building small would merge vertices.
  sbShapes = data.paths
    .flatMap((p) => SVGLoader.createShapes(p))
    .map((shape) => {
      // flip SVG y-down into three's y-up and centre on the origin
      const pts = shape.getPoints().map((v) => new THREE.Vector2(v.x - vw / 2, vh / 2 - v.y))
      const flipped = new THREE.Shape(pts)
      const c = pts.reduce((a, v) => a.add(v), new THREE.Vector2()).divideScalar(pts.length)
      return { shape: flipped, c }
    })
    .sort((a, b) => a.c.x + a.c.y * 0.01 - (b.c.x + b.c.y * 0.01))
  return sbShapes
}

// Keep the front and back faces perfectly flat so the chrome reads as one plane
function flattenCaps(g) {
  const pos = g.attributes.position
  const nor = g.attributes.normal
  const a = new THREE.Vector3()
  const b = new THREE.Vector3()
  const c = new THREE.Vector3()
  for (let i = 0; i < pos.count; i += 3) {
    a.fromBufferAttribute(pos, i)
    b.fromBufferAttribute(pos, i + 1)
    c.fromBufferAttribute(pos, i + 2)
    const n = b.sub(a).cross(c.sub(a)).normalize()
    if (Math.abs(n.z) > 0.999) for (let j = 0; j < 3; j++) nor.setXYZ(i + j, 0, 0, Math.sign(n.z))
  }
  nor.needsUpdate = true
}

function makeMark() {
  const mark = new THREE.Group()
  const [, , , vh] = SB_VIEW.split(' ').map(Number)
  const k = MARK_H / vh
  const u = 1 / k // one scene unit in SVG units
  const pieces = monogramShapes().map(({ shape, c }) => {
    let g = new THREE.ExtrudeGeometry(shape, {
      depth: 0.3 * u,
      bevelEnabled: true,
      bevelThickness: 0.035 * u,
      bevelSize: 0.024 * u,
      bevelSegments: 5,
      curveSegments: 1,
    })
    g.translate(0, 0, -0.15 * u)
    g = toCreasedNormals(g, Math.PI / 6)
    flattenCaps(g)
    g.scale(k, k, k)
    c.multiplyScalar(k)
    const m = new THREE.Mesh(g, mono)
    m.userData.c = c
    mark.add(m)
    return m
  })
  mark.userData.pieces = pieces
  return mark
}

/* ------------------------------------------------------------------ */
/* Motion                                                              */
/* ------------------------------------------------------------------ */

const clamp01 = (x) => Math.min(1, Math.max(0, x))
const easeOutExpo = (x) => (x >= 1 ? 1 : 1 - Math.pow(2, -10 * x))
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

const easeOutBack = (x) => 1 + 2.2 * Math.pow(x - 1, 3) + 1.2 * Math.pow(x - 1, 2)

// The three SB pieces slide in along the logo's diagonal cuts and lock together,
// then a light sweep runs across the chrome.
const ENTRY = [
  [-2.6, 1.8, -2.2, 0.5], // S top: from upper-left, behind
  [-1.2, -2.4, 1.6, -0.6], // S bottom: from below, in front
  [3.2, 0.6, -1.4, 0.8], // B: from the right, behind
]
function animateMark(mark, t, scene) {
  mark.userData.pieces.forEach((m, i) => {
    const raw = clamp01((t - 0.2 - i * 0.22) / 1.7)
    const p = easeOutBack(raw)
    const [x, y, z, r] = ENTRY[i]
    m.position.set(x * (1 - p), y * (1 - p), z * (1 - p))
    m.rotation.set(r * 0.6 * (1 - p), -r * (1 - p), r * 0.3 * (1 - p))
  })
  if (scene) {
    // light sweep after the lock (t = 2.4s to 3.9s), then a slow idle drift
    const sweep = easeInOutCubic(clamp01((t - 2.4) / 1.5))
    const r = -0.9 + sweep * 1.5 + Math.sin(Math.max(0, t - 3.9) * 0.3) * 0.12
    scene.environmentRotation.y = r
    mono.envMapRotation.y = r
  }
}

/* ------------------------------------------------------------------ */
/* Shots                                                               */
/* ------------------------------------------------------------------ */

const SHOTS = {
  hero: {
    label: 'Website hero',
    w: 1920,
    h: 1080,
    overlay: `
      <nav style="position:absolute;left:120px;right:120px;top:44px;display:flex;align-items:center;justify-content:space-between">
        ${lockup(26, { tagline: false })}
        <div style="display:flex;gap:44px;font:500 16px var(--sb-font-body);color:var(--sb-silver)">
          <span>Systems</span><span>Pricing</span><span>Community</span><span>Work</span>
        </div>
        <span class="btn" style="padding:13px 20px;font-size:15px">Book a call</span>
      </nav>
      <div style="position:absolute;left:120px;top:300px;width:820px" >
        <div class="eyebrow" data-in="2.7"><span class="dot" style="margin-right:12px"></span>AI client response for local businesses</div>
        <h1 class="display chrome-text" data-in="2.9" style="font-size:80px;margin:30px 0 30px">Systems<br/>over luck.</h1>
        <p class="body" data-in="3.1" style="font-size:22px;width:600px">Every call answered. Every lead followed up. Every job booked. Built, run and reported by System-Based.</p>
        <div data-in="3.3" style="display:flex;gap:16px;margin-top:44px">
          <span class="btn primary">Book a strategy call &rarr;</span>
          <span class="btn">See the system</span>
        </div>
      </div>
      <div class="mono" data-in="3.5" style="position:absolute;left:120px;bottom:48px;font-size:13px;letter-spacing:.2em;color:var(--sb-steel)">A&nbsp; CLIENT RESPONSE &nbsp;·&nbsp; B&nbsp; GROWTH &nbsp;·&nbsp; C&nbsp; BRAND &amp; BUILD &nbsp;·&nbsp; D&nbsp; CUSTOM AI &amp; OPS</div>`,
    build({ scene, camera, w, h }) {
      const mark = makeMark()
      mark.scale.setScalar(0.72)
      mark.position.set(2.15, -1.06 + 1.06 * 0.72, 0)
      mark.rotation.y = -0.42
      scene.add(mark)
      addFloor(scene, w, h, -1.06, mark.position)
      camera.position.set(0, 0.5, 8.6)
      const look = new THREE.Vector3(0, -0.05, 0)
      return (t) => {
        if (anim) {
          animateMark(mark, t, scene)
          const d = easeInOutCubic(clamp01(t / 4.5))
          camera.position.set(0.9 * (1 - d), 0.5 + 0.5 * (1 - d), 8.6 + 2.2 * (1 - d))
          mark.rotation.y = -0.42 + Math.sin(Math.max(0, t - 4.5) * 0.35) * 0.06
        }
        camera.lookAt(look)
      }
    },
  },

  sections: {
    label: 'Four sections',
    w: 1920,
    h: 1080,
    overlay: `
      <div style="position:absolute;top:90px;left:0;right:0;text-align:center">
        <div class="eyebrow">The System-Based model</div>
        <h2 class="display chrome-text" style="font-size:58px;margin-top:26px">Four systems. One business.</h2>
        <p class="body" style="font-size:20px;margin-top:20px;color:var(--sb-steel)">Every service sits in exactly one. Most clients start with A.</p>
      </div>
      ${SECTIONS.map(
        (s, i) => `
        <div class="tag" data-anchor="${-3.3 + i * 2.2},-0.82,0" style="width:360px;white-space:normal">
          <div class="mono" style="font-size:15px;letter-spacing:.24em;color:var(--sb-steel)">${s.k === 'A' ? '<span class="dot" style="margin-right:10px"></span>' : ''}SECTION ${s.k}</div>
          <div style="font:600 25px var(--sb-font-body);color:var(--sb-chrome);margin-top:14px">${s.name}</div>
          <div style="font-size:16px;line-height:1.5;color:var(--sb-steel);margin:10px auto 0;width:300px">${s.items}</div>
        </div>`,
      ).join('')}`,
    build({ scene, camera, w, h }) {
      const blocks = SECTIONS.map((s, i) => {
        const b = makeBlock(s.k, { lit: s.k === 'A' })
        b.position.set(-3.3 + i * 2.2, 0, 0)
        b.rotation.y = -0.32 - Math.atan2(b.position.x, 12.2)
        b.userData.rotY = b.rotation.y
        scene.add(b)
        return b
      })
      addFloor(scene, w, h, -0.5)
      camera.position.set(0, 1.25, 12.2)
      const look = new THREE.Vector3(0, -0.55, 0)
      return (t) => {
        if (anim) {
          blocks.forEach((b, i) => {
            const p = easeOutExpo(clamp01((t - i * 0.25) / 1.6))
            b.position.y = 2.5 * (1 - p)
            b.rotation.y = b.userData.rotY + (1 - p) * 1.5
            setLed(b, clamp01((t - 1.9) / 0.3))
          })
        }
        camera.lookAt(look)
      }
    },
  },

  pricing: {
    label: 'Pricing stacks',
    w: 1920,
    h: 1080,
    overlay: `
      <div style="position:absolute;top:80px;left:0;right:0;text-align:center">
        <div class="eyebrow">Pricing</div>
        <h2 class="display chrome-text" style="font-size:54px;margin-top:24px">Stack the system you need.</h2>
        <p class="body" style="font-size:20px;margin-top:18px;color:var(--sb-steel)">Every plan starts with A. Add layers as you grow.</p>
      </div>
      ${PLANS.map(
        (p, i) => `
        <div class="tag" data-anchor="${-3.1 + i * 3.1},-1.0,1.0" style="padding-top:178px;width:420px;white-space:normal">
          <div class="mono" style="font-size:15px;letter-spacing:.24em;color:var(--sb-steel)">${p.name.toUpperCase()} &nbsp;·&nbsp; ${p.stack.join(' + ')}</div>
          <div class="display" style="font-size:44px;margin-top:16px">${p.price}<span style="font:500 18px var(--sb-font-body);color:var(--sb-steel)"> /mo</span></div>
          <div style="font:500 17px var(--sb-font-body);color:var(--sb-silver);margin-top:12px">${p.what}</div>
          <div style="font-size:15px;color:var(--sb-steel);margin-top:6px">${p.term}</div>
        </div>`,
      ).join('')}
      <div style="position:absolute;bottom:46px;left:0;right:0;text-align:center;font-size:15px;color:var(--sb-steel)">
        Performance option: 10% per booked job or ad-spend match &nbsp;·&nbsp; Brand &amp; Build (C) quoted per project
      </div>`,
    build({ scene, camera, w, h }) {
      const floorY = -1.0
      const slabs = []
      PLANS.forEach((p, i) => {
        p.stack.forEach((k, j) => {
          const s = makeBlock(k, {
            w: 1.3,
            h: 0.34,
            d: 1.3,
            lit: k === 'A',
            letterAt: [-0.5, 0],
            ledAt: [0.52, 0],
          })
          s.position.set(-3.1 + i * 3.1, floorY + 0.17 + j * 0.39, 0)
          s.rotation.y = 0.42
          s.userData.homeY = s.position.y
          s.userData.j = j
          s.userData.i = i
          scene.add(s)
          slabs.push(s)
        })
      })
      addFloor(scene, w, h, floorY, undefined, 0.93)
      camera.position.set(0, 2.4, 12.5)
      const look = new THREE.Vector3(0, -1.25, 0)
      return (t) => {
        if (anim) {
          slabs.forEach((s) => {
            const p = easeOutExpo(clamp01((t - s.userData.i * 0.3 - s.userData.j * 0.35) / 1.2))
            s.position.y = s.userData.homeY + 3 * (1 - p)
            setLed(s, clamp01((t - 2.2) / 0.3))
          })
        }
        camera.lookAt(look)
      }
    },
  },

  community: {
    label: 'Community post 4:5',
    w: 1080,
    h: 1350,
    overlay: `
      <div style="position:absolute;top:96px;left:0;right:0;text-align:center">
        <div class="eyebrow">The System-Based community</div>
        <h1 class="display chrome-text" style="font-size:88px;margin-top:34px;letter-spacing:.04em">PRESSURE<br/>BUILT</h1>
      </div>
      <div class="scrim"></div>
      <div style="position:absolute;bottom:92px;left:0;right:0;text-align:center">
        <div class="mono" style="font-size:20px;letter-spacing:.18em;color:var(--sb-silver)">FREE &nbsp;&rarr;&nbsp; MEMBERS &nbsp;&rarr;&nbsp; DONE-FOR-YOU</div>
        <div style="font-size:18px;color:var(--sb-steel);margin-top:20px;letter-spacing:.5em;text-transform:uppercase">Systems over luck.</div>
      </div>`,
    build({ scene, camera, w, h }) {
      const mark = makeMark()
      mark.rotation.y = -0.3
      mark.scale.setScalar(0.6)
      scene.add(mark)
      addFloor(scene, w, h, -1.06 * 0.6)
      camera.position.set(0, 1.0, 10.2)
      const look = new THREE.Vector3(0, 0.05, 0)
      return (t) => {
        if (anim) {
          animateMark(mark, t, scene)
          mark.rotation.y = -0.3 + Math.sin(t * 0.4) * 0.08
        }
        camera.lookAt(look)
      }
    },
  },

  avatar: {
    label: 'Avatar 1:1',
    w: 1080,
    h: 1080,
    overlay: '',
    build({ scene, camera, w, h, finish }) {
      finish.uniforms.uVignette.value = 0.7
      const mark = makeMark()
      mark.rotation.y = -0.28
      mark.scale.setScalar(0.78)
      mark.position.y = -1.06 + 1.06 * 0.78
      scene.add(mark)
      addFloor(scene, w, h, -1.06)
      camera.position.set(0, 0.35, 8.2)
      const look = new THREE.Vector3(0, -0.12, 0)
      return (t) => {
        if (anim) {
          animateMark(mark, t, scene)
          mark.rotation.y = -0.28 + Math.sin(t * 0.5) * 0.1
        }
        camera.lookAt(look)
      }
    },
  },

  banner: {
    label: 'Banner 3:1',
    w: 1500,
    h: 500,
    overlay: `
      <div style="position:absolute;left:96px;top:50%;transform:translateY(-50%)">
        ${lockup(64, { mark: false })}
      </div>`,
    build({ scene, camera, w, h }) {
      const mark = makeMark()
      mark.position.set(4.0, 0, 0)
      mark.rotation.y = -0.45
      mark.scale.setScalar(0.8)
      scene.add(mark)
      addFloor(scene, w, h, -1.06 * 0.8, mark.position)
      camera.position.set(0, 0.3, 9)
      const look = new THREE.Vector3(0, -0.15, 0)
      return (t) => {
        if (anim) animateMark(mark, t, scene)
        camera.lookAt(look)
      }
    },
  },

  story: {
    label: 'Story 9:16',
    w: 1080,
    h: 1920,
    overlay: `
      <div style="position:absolute;top:110px;left:0;right:0;display:flex;justify-content:center">${lockup(46, { mark: false, tagline: false })}</div>
      <div class="scrim" style="height:52%"></div>
      <div style="position:absolute;left:90px;right:90px;bottom:250px">
        <h2 class="display chrome-text" style="font-size:74px" data-in="2.8">Systems<br/>over luck.</h2>
        <p class="body" style="font-size:30px;margin-top:34px" data-in="3.1">Every call answered. Every lead followed up. Every job booked.</p>
      </div>
      <div style="position:absolute;left:0;right:0;bottom:110px;text-align:center" data-in="3.4">
        <span class="btn primary" style="font-size:24px;padding:24px 36px">Book a strategy call</span>
      </div>`,
    build({ scene, camera, w, h }) {
      const mark = makeMark()
      mark.rotation.y = -0.3
      mark.scale.setScalar(0.66)
      mark.position.y = -1.06 + 1.06 * 0.66
      scene.add(mark)
      addFloor(scene, w, h, -1.06)
      camera.position.set(0, 0.8, 13)
      const look = new THREE.Vector3(0, -1.25, 0)
      return (t) => {
        if (anim) {
          animateMark(mark, t, scene)
          mark.rotation.y = -0.3 + Math.sin(Math.max(0, t - 3) * 0.4) * 0.07
        }
        camera.lookAt(look)
      }
    },
  },
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */

async function main() {
  const shot = SHOTS[shotName] || SHOTS.hero
  const { w, h } = shot
  document.body.classList.toggle('render', renderMode)

  // Fonts must be ready before etching letters into textures and before screenshots
  await Promise.all([
    document.fonts.load('400 40px "Michroma"'),
    document.fonts.load('500 40px "JetBrains Mono"'),
    document.fonts.load('400 40px "Inter"'),
    document.fonts.load('600 40px "Inter"'),
  ])

  const stage = document.getElementById('stage')
  const overlay = document.getElementById('overlay')
  stage.style.width = w + 'px'
  stage.style.height = h + 'px'
  overlay.innerHTML = shot.overlay

  buildToolbar(shot)
  const fit = () => {
    const s = Math.min(innerWidth / w, (innerHeight - 48) / h, 1) * 0.96
    stage.style.transform = `scale(${s})`
  }
  if (!renderMode) {
    fit()
    addEventListener('resize', fit)
  }

  const world = createWorld(w, h)
  stage.prepend(world.renderer.domElement)
  const update = shot.build({ ...world, w, h })

  const tags = [...overlay.querySelectorAll('[data-anchor]')].map((el) => ({
    el,
    p: new THREE.Vector3(...el.dataset.anchor.split(',').map(Number)),
  }))
  const fades = [...overlay.querySelectorAll('[data-in]')]
  const v = new THREE.Vector3()

  const frame = (t) => {
    update(t)
    world.camera.updateMatrixWorld()
    for (const { el, p } of tags) {
      v.copy(p).project(world.camera)
      el.style.left = ((v.x + 1) / 2) * w + 'px'
      el.style.top = ((1 - v.y) / 2) * h + 'px'
    }
    for (const el of fades) {
      const k = anim ? easeInOutCubic(clamp01((t - parseFloat(el.dataset.in)) / 0.7)) : 1
      el.style.opacity = k
      el.style.transform = `translateY(${(1 - k) * 18}px)`
    }
    world.finish.uniforms.uTime.value = t
    world.composer.render()
  }

  if (fixedT !== null || renderMode) {
    // Deterministic frame (render the same time twice so the floor reflection is settled)
    const t = fixedT ?? 10
    frame(t)
    frame(t)
    window.__ready = true
    // Lets the render script step through time without reloading the page
    window.__frame = (nt) => {
      frame(nt)
      return true
    }
    return
  }

  const start = performance.now()
  const loop = () => {
    const t = (performance.now() - start) / 1000
    frame(anim ? t % 12 : 0)
    requestAnimationFrame(loop)
  }
  loop()
  window.__ready = true
}

function buildToolbar(current) {
  const bar = document.getElementById('toolbar')
  const link = (shot, a) => {
    const q = new URLSearchParams({ shot })
    if (a) q.set('anim', '1')
    return `?${q}`
  }
  bar.innerHTML =
    `<span style="display:flex;align-items:center;gap:10px;margin-right:12px">${minimark}<span class="wordmark" style="font-size:12px;color:var(--sb-chrome)">Studio</span></span>` +
    Object.entries(SHOTS)
      .map(
        ([k, s]) =>
          `<a href="${link(k, anim)}" class="${s === current ? 'active' : ''}">${s.label}</a>`,
      )
      .join('') +
    '<span class="spacer"></span>' +
    `<a href="${link(shotName, !anim)}">${anim ? '■ Still' : '▶ Cinematic'}</a>`
}

main()
