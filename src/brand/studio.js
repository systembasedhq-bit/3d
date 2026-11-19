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
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import {
  BG,
  monogram,
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
} from './kit.js'

const minimark = monogram(18)

const params = new URLSearchParams(location.search)
const shotName = params.get('shot') || 'hero'
const renderMode = params.has('render')
const fixedT = params.has('t') ? parseFloat(params.get('t')) : null
const anim = params.get('anim') === '1'

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
  prepareLogoMaterial(renderer)
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
