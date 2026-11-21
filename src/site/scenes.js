/*
 * The website's 3D hero, all built from the shared brand kit:
 *   createHero   the SB monogram assembles, a light sweeps it, then it follows the pointer
 * (The walkthrough phone is CSS 3D in experience/story.js, so its screen text stays crisp.)
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
  makeMark,
  animateMark,
  prepareLogoMaterial,
  clamp01,
  easeInOutCubic,
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

/**
 * Chapter 1, "Enter the system": the SB pieces assemble centre-screen, a light sweeps
 * the chrome, then the logo glides into its hero position as the page is revealed.
 * @param {HTMLCanvasElement} canvas
 * @param {{ intro?: boolean, onIntroEnd?: () => void, onLocked?: () => void }} opts
 * @returns {{ skip(): void } | undefined}
 */
export function createHero(canvas, { intro = true, onIntroEnd, onLocked } = {}) {
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

  // Two layouts: centre stage for the intro, then the hero position beside the copy
  const stage = { pos: new THREE.Vector3(), look: new THREE.Vector3(), rotY: -0.12, s: 0.8 }
  const home = { pos: new THREE.Vector3(), look: new THREE.Vector3(), rotY: -0.4, s: 0.72 }
  let camZ = 8.6
  const relayout = () => {
    if (!fit(renderer, composer, camera, canvas)) return
    const portrait = camera.aspect < 1
    camZ = portrait ? 10.5 : 8.6
    const half = camZ * Math.tan(Math.PI / 12)
    stage.s = portrait ? 0.56 : 0.8
    stage.pos.set(0, -1.06 + 1.06 * stage.s, 0)
    stage.look.set(0, -0.05, 0)
    home.s = portrait ? 0.5 : camera.aspect < 1.4 ? 0.62 : 0.72
    home.pos.set(portrait ? 0 : camera.aspect < 1.4 ? 1.35 : 2.05, -1.06 + 1.06 * home.s, 0)
    home.rotY = portrait ? -0.25 : -0.4
    // portrait: the logo sits in the top third, above the copy
    home.look.set(0, portrait ? -0.7 * half - 0.05 : -0.05, 0)
  }
  relayout()

  // Pointer parallax (after the intro)
  const target = { x: 0, y: 0 }
  const cur = { x: 0, y: 0 }
  addEventListener('pointermove', (e) => {
    target.x = e.clientX / innerWidth - 0.5
    target.y = e.clientY / innerHeight - 0.5
  })

  const ASSEMBLED = 3.4 // pieces locked and light sweep done
  const GLIDE = 1.3 // centre stage to hero position
  let offset = intro ? 0 : ASSEMBLED + GLIDE
  let locked = false
  let ended = false
  const look = new THREE.Vector3()
  const draw = (t) => {
    animateMark(mark, Math.min(t, 8), scene)
    const g = easeInOutCubic(clamp01((t - ASSEMBLED) / GLIDE))
    const s = stage.s + (home.s - stage.s) * g
    mark.scale.setScalar(s)
    mark.position.lerpVectors(stage.pos, home.pos, g)
    cur.x += (target.x - cur.x) * 0.05
    cur.y += (target.y - cur.y) * 0.05
    mark.rotation.y =
      stage.rotY + (home.rotY - stage.rotY) * g + (cur.x * 0.35 + Math.sin(t * 0.3) * 0.04) * g
    mark.rotation.x = cur.y * 0.15 * g
    const dolly = easeInOutCubic(clamp01(t / ASSEMBLED))
    camera.position.set(0.6 * (1 - dolly), 0.5, camZ + 1.6 * (1 - dolly))
    look.lerpVectors(stage.look, home.look, g)
    camera.lookAt(look)
    if (!locked && t > ASSEMBLED + GLIDE * 0.35) {
      locked = true
      onLocked?.()
    }
    if (!ended && t >= ASSEMBLED + GLIDE) {
      ended = true
      onIntroEnd?.()
    }
    if (composer) {
      composer.passes[3].uniforms.uTime.value = t
      composer.render()
    } else renderer.render(scene, camera)
  }

  addEventListener('resize', () => {
    relayout()
    if (REDUCED) draw(10)
  })
  if (REDUCED) {
    draw(10)
    onLocked?.()
    onIntroEnd?.()
    return { skip() {} }
  }
  let t0 = null
  let last = 0
  visibilityLoop(canvas, (now) => {
    if (t0 === null) t0 = now
    last = now - t0 + offset
    draw(last)
  })
  return {
    // jump straight to the glide
    skip() {
      if (last < ASSEMBLED) offset += ASSEMBLED - last
    },
  }
}
