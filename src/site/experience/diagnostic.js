/*
 * "What's slowing your business down?": four equal choices.
 * Nothing is pre-selected: the story below plays an example until the visitor chooses.
 * A choice updates the shared scope, re-scripts the walkthrough and sends a silver
 * trace from the card down toward the phone.
 */
import { $, $$, esc, scrollToId } from './util.js'
import { SCENARIOS } from './scenarios.js'
import { getScope, setScope, onScope } from './scope-store.js'
import { track } from './analytics.js'

export function createDiagnostic({ onSeeIncluded } = {}) {
  const grid = $('#need-list')
  const out = $('#need-out')
  grid.innerHTML = SCENARIOS.map(
    (s, i) => `<button type="button" class="need-card" data-problem="${s.id}" aria-pressed="false">
      <span class="nc-num">0${i + 1}</span><strong>${esc(s.problem)}</strong><span class="nc-sub">${esc(s.problemSub)}</span><i class="trace" aria-hidden="true"></i></button>`,
  ).join('')

  function render() {
    const { selectedProblemId } = getScope()
    $$('.need-card', grid).forEach((c) =>
      c.setAttribute('aria-pressed', c.dataset.problem === selectedProblemId),
    )
    const s = SCENARIOS.find((x) => x.id === selectedProblemId)
    out.classList.toggle('picked', !!s)
    out.innerHTML = s
      ? `<p class="need-outcome">${esc(s.outcome)}</p>
         <div class="need-actions">
           <button type="button" class="btn primary" data-watch>Watch how it works <span aria-hidden="true">&darr;</span></button>
           <button type="button" class="link" data-see-included>See what’s included</button>
           <button type="button" class="link" data-book data-from="diagnostic">Talk about my business</button>
         </div>`
      : `<p class="need-outcome muted">Pick the one that sounds most like you. The walkthrough below changes to match.</p>
         <div class="need-actions"><button type="button" class="btn" data-watch>Or watch an example <span aria-hidden="true">&darr;</span></button></div>`
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('[data-problem]')
    if (!card) return
    const s = SCENARIOS.find((x) => x.id === card.dataset.problem)
    setScope({
      selectedProblemId: s.id,
      scenarioId: s.id,
      recommendedSystem: s.recommend.system,
      recommendedPackageId: s.recommend.packageId,
      journeySource: 'diagnostic',
    })
    card.classList.toggle('locked', false)
    void card.offsetWidth
    card.classList.toggle('locked', true)
    track('sb_problem_selected', { problem: s.id })
  })
  out.addEventListener('click', (e) => {
    if (e.target.closest('[data-watch]')) scrollToId('how')
    if (e.target.closest('[data-see-included]')) onSeeIncluded?.()
  })
  onScope(render)
  render()
}
