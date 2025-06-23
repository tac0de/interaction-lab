import { fadeIn } from '@kit/scroll/effects/fadeIn'

export function renderApp() {
  const app = document.querySelector('#app')
  if (!app) return

  const html = `
    <section class="section fade-card" data-fade-in>
      <h2>Fade In Basic</h2>
      <p>This element will fade in as you scroll.</p>
    </section>
    <section class="section fade-card" data-fade-in>
      <h2>Another Block</h2>
      <p>This one also fades in.</p>
    </section>
  `

  app.innerHTML = html

  fadeIn({
    elements: app.querySelectorAll('[data-fade-in]'),
    once: true,
    threshold: 0.2,
    stagger: 0.1
  })
}