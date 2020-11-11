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
      let width = this.root.clientWidth
      let height = this.root.clientHeight
      if (width < 512) width = 512
      if (width > 1000) width = 1000
      if (height < 512) height = 512
      if (height > 670) height = 670
      img.style.backgroundImage 
        = `url(${this._replaceUrlsMetrics(url, width, height)})`
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

    this.pickers = document.createElement('div')
    this.pickers.classList.add('pickers')
    const widthOfPicker
      = Math.floor((this.root.clientWidth - 12 * (imgUrlsArr.length + 1)) / imgUrlsArr.length)

    imgUrlsArr.forEach((url, index) => {
      const img = document.createElement('img')
      img.src = this._replaceUrlsMetrics(url, widthOfPicker, 200)
      img.setAttribute('loading', 'lazy')
      img.addEventListener('click', this.changeSlide.bind(this, index))
      this.pickers.appendChild(img)
    })

    this.root.appendChild(this.slider)
    this.root.appendChild(rightBtn)
    this.root.appendChild(leftBtn)
    this.root.appendChild(this.pickers)
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