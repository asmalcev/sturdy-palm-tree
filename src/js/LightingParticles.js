import distance from './utils'

let mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  xReal: undefined,
  yReal: undefined
}

class Point {
  constructor(canvas, ctx, pointsArray) {
    this.canvas = canvas
    this.ctx = ctx

    this.x = Math.random() * (this.canvas.width - 10) + 5
    this.y = Math.random() * (this.canvas.height - 10) + 5

    this.dx = Math.random() * 0.2 - 0.1
    this.dy	= Math.random() * 0.2 - 0.1
    this.c = 0
    this.r = 0.5
    
    this.pointsArray = pointsArray
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = '#ff7f11'
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.closePath()
  }

  update() {
    if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx
    if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy

    if (
      distance(mouse.x, mouse.y, this.x, this.y) < 100
    ) {
      for (let j = 0; j < this.pointsArray.length; j++) {
        if (
          distance(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < 70
          && this.c < 3
          && this.pointsArray[j].c < 3
          && distance(mouse.x, mouse.y, this.pointsArray[j].x, this.pointsArray[j].y) < 100
        ) {
          this.ctx.beginPath()
          this.ctx.strokeStyle = '#ff7f11'
          this.ctx.moveTo(this.x, this.y)
          this.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y)
          this.ctx.stroke()
          this.ctx.closePath()
          this.c++
        }
      }
      this.c = 0
    }

    if ( distance(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3 ) {
      this.r += 0.2
    } else if (this.r > 0.1) {
      this.r -= 0.1
    } else {
      this.r = 0
    }

    this.x += this.dx
    this.y += this.dy

    this.draw()
  }
}

export class LightingParticles {

  constructor(queryParticles, queryLighter) {
    this.canvasParticles = document.querySelector(queryParticles)
    this.cP = this.canvasParticles.getContext('2d')

    this.lighter = document.querySelector(queryLighter)

    this.canvasParticles.width = document.body.clientWidth
    this.canvasParticles.height = window.innerHeight

    this.points = []

    window.addEventListener('resize', () => {
      this.canvasParticles.width = document.body.clientWidth
      this.canvasParticles.height = window.innerHeight

      this.points = []
      for (let i = 0; i < Math.floor(window.innerWidth / 5); i++)
        this.points.push(new Point(this.canvasParticles, this.cP, this.points))
    })

    this.canvasParticles.addEventListener('mousemove', e => {
      mouse.xReal = e.pageX
      mouse.yReal = e.pageY

      if (!mouse.x || !mouse.y) {
        mouse.x = e.pageX
        mouse.y = e.pageY
        this.lighter.classList.add('active')
      }
    })

    this.canvasParticles.addEventListener('mouseleave', e => {
      this.lighter.classList.remove('active')
      mouse.x = mouse.y = undefined
    })

    this.init()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    mouse.x += (mouse.xReal - mouse.x) * .07
    mouse.y += (mouse.yReal - mouse.y) * .07
    
    this.lighter.style['left'] = mouse.x + 'px'
    this.lighter.style['top'] = mouse.y + 'px'

    this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)
    this.points.forEach(p => { p.update() })
  }

  init() {
    for (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {
      this.points.push(
        new Point(this.canvasParticles, this.cP, this.points)
      )
    }

    this.animate()
  }
}