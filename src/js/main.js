import { LightingParticles } from './LightingParticles'
import { ScrollActivator } from './ScrollActivator'
import { ListOfClosable } from './ListOfClosable'

import '../css/animations.css'
import '../css/index.css'
import '../css/media.css'

window.addEventListener('load', () => {
  const cursorStyle = document.createElement('style')
  cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }'
  document.head.appendChild(cursorStyle)

  const scene1Canvas = new LightingParticles('#particles', '#lighter')
  const scrllAct = new ScrollActivator('scroll')

  const closelst = new ListOfClosable(
    document.querySelector('#close-list'),
    [
      {
        label: 'JavaScript',
        p: 'Skills: React, Webpack, Node.js, AJAX, Canvas, WebSocket'
      },
      {
        label: 'C++',
        p: 'Skills: SDL1.2'
      },
      {
        label: 'Python',
        p: 'Skills: Django, Uvicorn'
      },
      {
        label: 'Other',
        p: 'Skills: Git, SQL, Algorithms and Structs of data'
      },
    ])
})