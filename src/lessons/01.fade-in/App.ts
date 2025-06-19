export function renderApp() {
  const app = document.querySelector('#app')
  if (!app) return

  app.innerHTML = `
    <section data-fade-in class="section">Section 1</section>
    <section data-fade-in class="section">Section 2</section>
    <section data-fade-in class="section">Section 3</section>
  `

  import('../../scripts/interaction-kit/scroll/effects/fadeIn').then(({ fadeIn }) => {
    fadeIn('[data-fade-in]')
  })
}
