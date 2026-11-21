/*
 * One canonical, non-personal record of what the visitor has chosen.
 * Every section reads and writes it here, so the diagnostic, story, explorer,
 * packages, composer, community invite and inquiry can never disagree.
 * No names, emails or phone numbers are ever stored here.
 */
import { session } from './util.js'

const KEY = 'sb-scope-v2'
const fresh = () => ({
  selectedProblemId: null, // set only by a deliberate visitor choice
  scenarioId: 'response', // what the story shows (defaults to an example)
  recommendedSystem: null, // internal code, never shown
  recommendedPackageId: null, // a recommendation, not a purchase
  acceptedPackageId: null, // set only when the visitor picks a package
  selectedServiceIds: [],
  selectedProjectIds: [],
  customScope: false,
  currentStoryBeat: 0,
  communityInterest: false,
  communityEntryPoint: null,
  journeySource: null,
})

let state = fresh()
try {
  const saved = JSON.parse(session.get(KEY) || 'null')
  if (saved && typeof saved === 'object') state = { ...state, ...saved }
} catch {
  /* ignore corrupt storage */
}

const subs = new Set()
export const getScope = () => state
export function setScope(patch) {
  state = { ...state, ...patch }
  const persist = { ...state }
  delete persist.currentStoryBeat // the beat belongs to this page view only
  session.set(KEY, JSON.stringify(persist))
  subs.forEach((fn) => fn(state))
}
export const onScope = (fn) => (subs.add(fn), () => subs.delete(fn))

export function toggleService(code) {
  const set = new Set(state.selectedServiceIds)
  set.has(code) ? set.delete(code) : set.add(code)
  setScope({ selectedServiceIds: [...set] })
  return set.has(code)
}
