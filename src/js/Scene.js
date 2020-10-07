import '../css/scenes.css'

export class SceneBuilder {

  constructor(rootElement) {
    this.root = rootElement
  }

  scene1() {
    this.root.innerHTML = ''

    const container = document.createElement('div')
    container.className = 'container scene1'

    this.root.appendChild(container)
  }

}