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
          distance(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < maxDistant
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

export class FilteredImage {
  constructor(imgSelector, canvasSelector) {
    const img = document.querySelector(imgSelector)
    const canvas = document.querySelector(canvasSelector)

    canvas.width = img.width
    canvas.height = img.height

    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
  }
}

  // var sourceimage = document.querySelector('img');
  // var canvas = document.querySelector('canvas');
  // canvas.height = canvas.width = 0;
  // var context = canvas.getContext('2d');
  // function copy() {
  //   var imgwidth = sourceimage.offsetWidth;
  //   var imgheight = sourceimage.offsetHeight;
  //   canvas.width = imgwidth;
  //   canvas.height = imgheight;
  //   context.drawImage(sourceimage, 0, 0);
  // }
  // var button = document.querySelector('button');
  // button.addEventListener('click', copy, false);