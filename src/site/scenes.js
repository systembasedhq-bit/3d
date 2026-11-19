/*
 * The website's three 3D scenes, all built from the shared brand kit:
 *   createHero   the SB monogram assembles, a light sweeps it, then it follows the pointer
 *   createFit    scroll-driven: the four system blocks arrive one by one and connect
 *   createViewer the small 3D object inside the pop-ups (a system block or a plan stack)
 * Quality scales down on phones and low-power devices; reduced motion renders still frames.
 */
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import {
  BG,
  makeStudioEnvironment,
  addFloor,
  FinishShader,
  makeBlock,
  setLed,
  makeMark,
  animateMark,
  prepareLogoMaterial,
  clamp01,
  easeOutExpo,
  easeInOutCubic,
  silver,
} from '../brand/kit.js'

export const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches
export const LOW =
  matchMedia('(max-width: 760px)').matches || (navigator.hardwareConcurrency || 8) <= 4

export function webglAvailable() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

function makeRenderer(canvas, { alpha = false } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !LOW,
    alpha,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(devicePixelRatio, LOW ? 1.5 : 1.75))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.outputColorSpace = THREE.SRGBColorSpace
  return renderer
}

function makeComposer(renderer, scene, camera, bloom = 0.3) {
  if (LOW) return null
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(256, 256), bloom, 0.3, 1.2))
  composer.addPass(new OutputPass())
  composer.addPass(new ShaderPass(FinishShader))
  return composer
}

// Runs a render loop only while `el` is on screen and the tab is visible
function visibilityLoop(el, tick) {
  let raf = 0
  let onScreen = false
  const loop = (now) => {
    tick(now / 1000)
    raf = requestAnimationFrame(loop)
  }
  const update = () => {
    const run = onScreen && !document.hidden
    if (run && !raf) raf = requestAnimationFrame(loop)
    if (!run && raf) {
      cancelAnimationFrame(raf)
      raf = 0
    }
  }
  new IntersectionObserver(([e]) => {
    onScreen = e.isIntersecting
    update()
  }).observe(el)
  document.addEventListener('visibilitychange', update)
}

function fit(renderer, composer, camera, canvas) {
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (!w || !h) return false
  renderer.setSize(w, h, false)
  composer?.setSize(w, h)
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  return true
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function createHero(canvas, { onLocked } = {}) {
  const renderer = makeRenderer(canvas)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BG)
  scene.environment = makeStudioEnvironment(renderer)
  prepareLogoMaterial(renderer)
  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(-4, 6, 5)
  scene.add(key)

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  const mark = makeMark()
  scene.add(mark)
  if (!LOW) addFloor(scene, 1200, 700, -1.06)
  const composer = makeComposer(renderer, scene, camera)

  // Layout: logo on the right on wide screens, centred above the copy on tall ones
  const layout = { base: new THREE.Vector3(), look: new THREE.Vector3(), rotY: -0.4, s: 0.72 }
  const relayout = () => {
    if (!fit(renderer, composer, camera, canvas)) return
    const portrait = camera.aspect < 1
    layout.s = portrait ? 0.5 : camera.aspect < 1.4 ? 0.62 : 0.72
    mark.scale.setScalar(layout.s)
    layout.base.set(portrait ? 0 : camera.aspect < 1.4 ? 1.35 : 2.05, -1.06 + 1.06 * layout.s, 0)
    layout.rotY = portrait ? -0.25 : -0.4
    camera.position.set(0, 0.5, portrait ? 10.5 : 8.6)
    // portrait: push the logo into the top third, above the copy
    layout.look.set(0, portrait ? -0.7 * (10.5 * Math.tan(Math.PI / 12)) - 0.05 : -0.05, 0)
    camera.lookAt(layout.look)
  }
  relayout()
  addEventListener('resize', () => {
    relayout()
    if (REDUCED) draw(10)
  })

  // Pointer parallax
  const target = { x: 0, y: 0 }
  const cur = { x: 0, y: 0 }
  addEventListener('pointermove', (e) => {
    target.x = e.clientX / innerWidth - 0.5
    target.y = e.clientY / innerHeight - 0.5
  })

  let locked = false
  const draw = (t) => {
    animateMark(mark, Math.min(t, 8), scene)
    cur.x += (target.x - cur.x) * 0.05
    cur.y += (target.y - cur.y) * 0.05
    mark.position.copy(layout.base)
    mark.rotation.y = layout.rotY + cur.x * 0.35 + Math.sin(t * 0.3) * 0.04
    mark.rotation.x = cur.y * 0.15
    const d = easeInOutCubic(clamp01(t / 4))
    camera.position.x = 0.9 * (1 - d)
    camera.lookAt(layout.look)
    if (!locked && t > 2.4) {
      locked = true
      onLocked?.()
    }
    if (composer) {
      composer.passes[3].uniforms.uTime.value = t
      composer.render()
    } else renderer.render(scene, camera)
  }

  if (REDUCED) {
    draw(10)
    onLocked?.()
    return
  }
  let t0 = null
  visibilityLoop(canvas, (now) => {
    if (t0 === null) t0 = now
    draw(now - t0)
  })
}

/* ------------------------------------------------------------------ */
/* How it fits: scroll-driven system assembly                          */
/* ------------------------------------------------------------------ */

const pulseMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uOn: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      varying vec2 vUv; uniform float uTime, uOn;
      void main(){
        float base = 0.25;
        float pulse = smoothstep(0.12, 0.0, abs(fract(vUv.y - uTime * 0.6) - 0.5) - 0.38);
        vec3 c = vec3(1.0) * (base + pulse * 3.0);
        gl_FragColor = vec4(c, uOn * (0.35 + pulse));
      }`,
  })

/**
 * @param {HTMLCanvasElement} canvas
 * @param {string[]} order  system letters in chapter order, e.g. ['B','C','A','D']
 * @returns {{ setProgress(p:number):void }}
 */
export function createFit(canvas, order) {
  const renderer = makeRenderer(canvas)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BG)
  scene.environment = makeStudioEnvironment(renderer)
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  const composer = makeComposer(renderer, scene, camera, 0.45)
  // each WebGL context needs its own environment texture
  const bright = makeStudioEnvironment(renderer, [
    [6, 4, [-3.5, 3, 8], 0.85],
    [4, 3, [4, -2, 8], 0.2],
  ])

  const blocks = order.map((k) => {
    const b = makeBlock(k, { lit: k === 'A' })
    // brighter studio than the default, so the blocks read silver against the dark stage
    b.children[0].material = silver.clone()
    b.children[0].material.envMap = bright
    scene.add(b)
    return b
  })
  const links = order.slice(1).map(() => {
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(0.018, 0.018, 1, 8, 1, true),
      pulseMaterial(),
    )
    scene.add(m)
    return m
  })

  let homes = []
  const relayout = () => {
    if (!fit(renderer, composer, camera, canvas)) return
    const portrait = camera.aspect < 1.1
    homes = portrait
      ? [
          [-0.7, 0.7],
          [0.7, 0.7],
          [-0.7, -0.7],
          [0.7, -0.7],
        ]
      : order.map((_, i) => [(i - 1.5) * 1.75, 0])
    homes = homes.map(([x, y]) => new THREE.Vector3(x, y, 0))
    camera.position.set(0, portrait ? 0.4 : 1.0, portrait ? 11 : 9)
    camera.lookAt(0, portrait ? -0.47 : -0.45, 0)
    // link meshes span consecutive blocks
    links.forEach((m, i) => {
      const a = homes[i]
      const b = homes[i + 1]
      const mid = a.clone().add(b).multiplyScalar(0.5)
      const dir = b.clone().sub(a)
      const len = dir.length() - 1.05
      m.position.copy(mid)
      m.scale.set(1, Math.max(0.01, len), 1)
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
    })
  }
  relayout()

  let progress = 0
  const draw = (t) => {
    const n = order.length
    const P = progress * (n + 1) // one beat per block, plus a final "connected" beat
    blocks.forEach((b, i) => {
      const a = easeOutExpo(clamp01((P - i) / 0.6 + 0.35))
      const active = P >= i && P < i + 1
      const done = P >= n - 0.15
      b.position.copy(homes[i])
      b.position.y += -2.6 * (1 - a)
      b.position.z += (active ? 0.45 : 0) * a
      b.rotation.set(0.08, -0.35 + (1 - a) * 1.6 + Math.sin(t * 0.5 + i) * 0.03, 0)
      b.scale.setScalar(0.6 + 0.4 * a)
      b.visible = a > 0.01
      b.children[0].material.envMapIntensity = done || active ? 1 : 0.45
      if (order[i] === 'A') setLed(b, clamp01((P - i) * 2))
    })
    const connect = clamp01((P - n + 0.3) / 0.6)
    links.forEach((m, i) => {
      m.material.uniforms.uTime.value = t + i * 0.3
      m.material.uniforms.uOn.value = Math.max(connect, clamp01((P - i - 1) * 0.4) * 0.35)
    })
    if (composer) composer.render()
    else renderer.render(scene, camera)
  }

  addEventListener('resize', () => {
    relayout()
    draw(0)
  })
  if (REDUCED) {
    progress = 1
    draw(0)
    return { setProgress() {} }
  }
  visibilityLoop(canvas, draw)
  return {
    setProgress(p) {
      progress = p
    },
  }
}

/* ------------------------------------------------------------------ */
/* Pop-up viewer                                                       */
/* ------------------------------------------------------------------ */

export function createViewer() {
  const canvas = document.createElement('canvas')
  canvas.className = 'viewer-canvas'
  const renderer = makeRenderer(canvas, { alpha: true })
  const scene = new THREE.Scene()
  scene.environment = makeStudioEnvironment(renderer)
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100)
  camera.position.set(0, 0.4, 5.2)
  camera.lookAt(0, 0, 0)
  let obj = null
  let t0 = 0
  let raf = 0
  const pointer = { x: 0, y: 0 }
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect()
    pointer.x = (e.clientX - r.left) / r.width - 0.5
    pointer.y = (e.clientY - r.top) / r.height - 0.5
  })

  const build = (spec) => {
    const g = new THREE.Group()
    if (spec.stack) {
      spec.stack.forEach((k, j) => {
        const s = makeBlock(k, {
          w: 1.3,
          h: 0.34,
          d: 1.3,
          lit: k === 'A',
          letterAt: [-0.5, 0],
          ledAt: [0.52, 0],
        })
        s.position.y = -0.4 + j * 0.39
        s.userData.j = j
        g.add(s)
      })
      g.rotation.x = 0.25
    } else {
      const b = makeBlock(spec.letter, { lit: spec.letter === 'A' })
      b.scale.setScalar(1.25)
      g.add(b)
    }
    return g
  }

  const loop = (now) => {
    const t = (now - t0) / 1000
    if (obj) {
      const intro = REDUCED ? 1 : easeOutExpo(clamp01(t / 1.4))
      obj.rotation.y =
        -0.5 + (1 - intro) * 2.2 + (REDUCED ? 0 : Math.sin(t * 0.6) * 0.12) + pointer.x * 0.6
      obj.rotation.x = (obj.userData.rx || 0) + pointer.y * 0.3
      obj.children.forEach((c) => {
        if (c.userData.j !== undefined)
          c.position.y =
            -0.4 +
            c.userData.j * 0.39 +
            (1 - easeOutExpo(clamp01((t - c.userData.j * 0.18) / 1))) * 2.5
        if (c.userData.led) setLed(c, clamp01((t - 0.9) * 3))
      })
    }
    renderer.render(scene, camera)
    raf = REDUCED ? 0 : requestAnimationFrame(loop)
  }

  return {
    canvas,
    show(spec, host) {
      host.appendChild(canvas)
      if (obj) scene.remove(obj)
      obj = build(spec)
      obj.userData.rx = obj.rotation.x
      scene.add(obj)
      requestAnimationFrame(() => {
        const w = host.clientWidth
        const h = host.clientHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.position.z = spec.stack ? 6.2 : 5.6
        camera.updateProjectionMatrix()
        cancelAnimationFrame(raf)
        t0 = performance.now()
        raf = requestAnimationFrame(loop)
      })
    },
    hide() {
      cancelAnimationFrame(raf)
      raf = 0
    },
  }
}
