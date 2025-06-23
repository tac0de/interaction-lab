import { createScrollTrigger } from '@kit/scroll/core/createScrollTrigger.js'

export function fadeIn({
  selector,
  elements,
  once = true,
  threshold = 0.2,
  stagger = 0,
  onReveal = null,
  baseClass = 'fade-in',
  visibleClass = 'fade-in-visible'
} = {}) {
  const targets = elements || (selector ? document.querySelectorAll(selector) : [])

  if (!targets.length) return

  // 초기 상태 세팅 (스타일과 transition-delay)
  let index = 0
  targets.forEach(el => {
    el.classList.add(baseClass)
    el.style.transitionDelay = stagger
      ? `${index * stagger}s`
      : (el.dataset.delay || '0s')
    index++
  })

  createScrollTrigger({
    elements: targets,
    once,
    threshold,
    onEnter: el => {
      el.classList.add(visibleClass)
      if (typeof onReveal === 'function') onReveal(el)
    },
    onExit: el => {
      el.classList.remove(visibleClass)
    }
  })
}
