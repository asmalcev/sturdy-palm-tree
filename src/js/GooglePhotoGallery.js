export class GooglePhotoGallery {
  constructor(imgUrlsArr, root) {
    this.url = imgUrlsArr
    this.root = root

    this.index = 0

    this.slider = document.createElement('div')
    this.slider.classList.add('slider')

    imgUrlsArr.forEach(url => {
      const img = document.createElement('div')
      img.classList.add('img')
      img.style.backgroundImage 
        = `url(${this._replaceUrlsMetrics(url, this.root.clientWidth, this.root.clientHeight)})`
      img.setAttribute('loading', 'lazy')
      this.slider.appendChild(img)
    })

    const rightBtn = document.createElement('button')
    rightBtn.innerHTML = '&#10095;'
    rightBtn.classList.add('right-btn')
    rightBtn.addEventListener('click', this.iterateSlide.bind(this, 1))

    const leftBtn = document.createElement('button')
    leftBtn.innerHTML = '&#10094;'
    leftBtn.classList.add('left-btn')
    leftBtn.addEventListener('click', this.iterateSlide.bind(this, -1))

    this.root.appendChild(this.slider)
    this.root.appendChild(rightBtn)
    this.root.appendChild(leftBtn)
  }

  changeSlide(index) {
    this.index = index

    this.slider.style.transform = `translateY(calc(${-index * 100}% - ${index * 64}px))`
  }

  iterateSlide(diff) {
    let newSlideIndex = this.index + diff
    if (newSlideIndex < 0) newSlideIndex = this.url.length - 1
    if (newSlideIndex >= this.url.length) newSlideIndex = 0
    this.changeSlide(newSlideIndex)
  }

  _replaceUrlsMetrics(str, width, height) {
    return str.replace(/(w[\d]*)-(h[\d]*)/, `w${width}-h${height}`)
  }
}