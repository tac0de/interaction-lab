export function createScrollTrigger(options) {
  const {
    selector,
    elements = null,
    onEnter,
    onExit,
    once = true,
    threshold = 0.2,
  } = options

  const targets = elements || (selector ? document.querySelectorAll(selector) : [])

  if (!targets.length) return

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting) {
        onEnter?.(el)
        if (once) observer.unobserve(el)
      } else {
        onExit?.(el)
      }
    })
  }, { threshold })

  targets.forEach(el => observer.observe(el))
}
