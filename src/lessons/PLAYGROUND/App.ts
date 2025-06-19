export function renderApp() {
  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    <div style="padding:1rem;">
      <label for="variant">Choose fadeIn version:</label>
      <select id="variant">
        <option value="basic">fadeIn_basic</option>
        <option value="withDataset">fadeIn_withDataset</option>
        <option value="modular">fadeIn_modular</option>
        <option value="OO">fadeIn_OO</option>
        <option value="extended">fadeIn_extended</option>
        <option value="scrollTimeline">fadeIn_scrollTimeline (CSS-only)</option>
      </select>
    </div>
    <section data-fade-in class="section">Section 1</section>
    <section data-fade-in class="section">Section 2</section>
    <section data-fade-in class="section">Section 3</section>
  `

  const selector = '[data-fade-in]'
  const dropdown = document.getElementById('variant') as HTMLSelectElement

  function load(type) {
    if (type === 'scrollTimeline') return // no JS needed

    import(`../../../.private/drafts/fadeIn_${type}.ts`)
      .then(module => {
        if (type === 'OO') {
          new module.ScrollFadeUnit(selector)
        } else if (typeof module.fadeIn === 'function') {
          module.fadeIn(selector)
        } else if (typeof module.fadeInExtended === 'function') {
          module.fadeInExtended(selector, { direction: 'up', once: false })
        }
      })
      .catch(console.error)
  }

  dropdown.addEventListener('change', (e) => {
    document.querySelectorAll(selector).forEach(el => el.className = 'section')
    load((e.target as HTMLSelectElement).value)
  })

  load(dropdown.value)
}
