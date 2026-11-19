/*
 * System-Based 3D kit: the pieces every 3D scene shares (studio lighting, mirror floor,
 * film finish, the chrome A-D block, the extruded SB monogram and its assembly motion).
 * Used by the brand studio (brand-studio.html) and the website (site/).
 */
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js'
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import sbSvg from '../../brand/logo/sb-monogram.svg?raw'

export const BG = '#0a0a0b'
// The SB monogram, traced from the master logo (brand/logo/original-lockup.webp)
const SB_PATH = sbSvg.match(/ d="([^"]+)"/)[1]
const SB_VIEW = sbSvg.match(/viewBox="([^"]+)"/)[1]
// unique gradient ids: a gradient inside the hidden toolbar would otherwise blank every copy
let gradId = 0
const monogram = (h) =>
  `<svg viewBox="${SB_VIEW}" width="${(h * SB_VIEW.split(' ')[2]) / SB_VIEW.split(' ')[3]}" height="${h}" style="display:block;flex:none" aria-hidden="true"><defs><linearGradient id="sbg${++gradId}" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#f4f5f7"/><stop offset=".5" stop-color="#a9aeb5"/><stop offset="1" stop-color="#e9ebee"/></linearGradient></defs><path fill="url(#sbg${gradId})" fill-rule="evenodd" d="${SB_PATH}"/></svg>`

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

// Call once per renderer: gives the SB logo its brighter studio and spun-metal finish
export function prepareLogoMaterial(renderer) {
  mono.envMap = makeStudioEnvironment(renderer, [
    [6, 4, [-3.5, 3, 8], 0.85],
    [4, 3, [4, -2, 8], 0.2],
  ])
  mono.map = spunMetalTexture()
}

export {
  SB_PATH,
  SB_VIEW,
  monogram,
  makeStudioEnvironment,
  addFloor,
  FinishShader,
  silver,
  mono,
  makeBlock,
  setLed,
  makeMark,
  MARK_H,
  animateMark,
  clamp01,
  easeOutExpo,
  easeInOutCubic,
  easeOutBack,
}
