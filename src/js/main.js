import { LightingParticles } from './LightingParticles'

import '../css/index.css'
import '../css/animations.css'

window.addEventListener('load', () => {
  const scene1Canvases = new LightingParticles('#particles', '#lighter')
  
  const cursorStyle = document.createElement('style')
  cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }'
  document.head.appendChild(cursorStyle)
})