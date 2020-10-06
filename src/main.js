import { Canvas } from './Canvas'
import { Scene } from './Scene'

window.addEventListener('load', () => {
  const canvasParticles = new Canvas('#particles')
  let scene

  document.querySelector('#init-btn').addEventListener('click', e => {
    const sceneRoot = document.createElement('div')
    sceneRoot.id = 'root'
    
    e.target.replaceWith(sceneRoot)
    scene = new Scene(sceneRoot)
  })
})