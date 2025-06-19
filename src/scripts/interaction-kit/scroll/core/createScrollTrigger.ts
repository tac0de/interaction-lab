interface TriggerOptions {
  selector: string
  onEnter: (el: HTMLElement) => void
  onExit?: (el: HTMLElement) => void
  once?: boolean
  threshold?: number
}

export function createScrollTrigger(options: TriggerOptions) {
  const {
    selector,
    onEnter,
    onExit,
    once = true,
    threshold = 0.2
  } = options

  const elements = document.querySelectorAll(selector)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        onEnter(el)
        if (once) observer.unobserve(el)
      } else {
        onExit?.(el)
      }
    })
  }, { threshold })

  elements.forEach(el => observer.observe(el))
}