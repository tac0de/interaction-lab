import { fadeIn } from '@kit/scroll/effects/fadeIn'

function generateCardSet(data) {
  return `
    <div class="grid-container">
      ${data.map(({ title, desc, className }) => `
        <section class="card ${className}" data-fade-in>
          <h2>${title}</h2>
          <p>${desc}</p>
        </section>
      `).join('')}
    </div>
  `
}

export function renderApp() {
  const app = document.querySelector('#app')
  if (!app) return

  // 카드 구성 정의
  const cards = [
    { title: 'Fade Card', desc: '기본 fade-in 효과입니다.', className: 'fade-card' },
    { title: 'Slide Box', desc: '왼쪽에서 슬라이드되며 등장합니다.', className: 'slide-box' },
    { title: 'Scale Block', desc: '확대되며 나타납니다.', className: 'scale-block' },
    { title: 'Rotate Block', desc: '살짝 회전하면서 등장합니다.', className: 'rotate-box' },
    { title: 'Flip Block', desc: 'Y축으로 회전하며 등장합니다.', className: 'flip-box' },
  ]

  // HTML 삽입
  app.innerHTML = generateCardSet(cards)

  // fade-in 애니메이션 적용
  fadeIn({
    elements: app.querySelectorAll('[data-fade-in]'),
    once: false,
    threshold: 0.4,
    stagger: 0.1,
  })
}
