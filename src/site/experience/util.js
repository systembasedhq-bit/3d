/* Small DOM and storage helpers shared by the site modules */
export const $ = (s, el = document) => el.querySelector(s)
export const $$ = (s, el = document) => [...el.querySelectorAll(s)]

export const esc = (s = '') =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )

// Only real http(s) links ever reach an href or iframe (no javascript: or data: URLs)
export function safeUrl(u) {
  if (!u || !String(u).trim()) return ''
  try {
    const url = new URL(String(u || ''), location.href)
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : ''
  } catch {
    return ''
  }
}

export const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches
export const FINE_POINTER = matchMedia('(hover: hover) and (pointer: fine)').matches

const wrap = (area) => ({
  get(k) {
    try {
      return window[area].getItem(k)
    } catch {
      return null
    }
  },
  set(k, v) {
    try {
      window[area].setItem(k, v)
    } catch {
      /* private mode or blocked storage: the site works without it */
    }
  },
})
export const session = wrap('sessionStorage')
export const local = wrap('localStorage')

export const scrollToId = (id, block = 'start') =>
  document.getElementById(id)?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block })

export const uid = () =>
  (crypto.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2)).slice(
    0,
    36,
  )
