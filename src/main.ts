import './styles/tokens.css'
import './styles/base.css'
import './styles/components/interaction.css'

const urlParams = new URLSearchParams(window.location.search)
const lesson = urlParams.get('lesson') || '01.fade-in'

console.log(lesson);

Promise.all([
  import(`./lessons/${lesson}/App.ts`),
  import(`./lessons/${lesson}/style.css`).catch(() => null)
]).then(([module]) => {
  module?.renderApp?.()
})
