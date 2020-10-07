import { Canvas } from './Canvas'
import { SceneBuilder } from './Scene'

import '../css/index.css'

window.addEventListener('load', () => {
  const canvasParticles = new Canvas('#particles')
  let scene

  document.querySelector('#init-btn').addEventListener('click', e => {
    const sceneRoot = document.createElement('div')
    sceneRoot.id = 'root'
    
    e.target.replaceWith(sceneRoot)
    scene = new SceneBuilder(sceneRoot)
    scene.scene1()
  })
})