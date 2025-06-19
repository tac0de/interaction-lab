import { createScrollTrigger } from '../core/createScrollTrigger'

export function fadeIn(selector: string) {
  createScrollTrigger({
    selector,
    onEnter: el => el.classList.add('fade-in-visible'),
    onExit: el => el.classList.remove('fade-in-visible'),
    once: false
  })
}