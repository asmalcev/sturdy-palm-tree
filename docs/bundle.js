/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/utils.js
const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

const getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min) + min)
const getRandomFromRange = (min, max) => Math.random() * (max - min) + min

const isVisible = (element, offset = 0) => {
  const bounds = element.getBoundingClientRect()
  return bounds.top > offset && window.innerHeight - offset > bounds.bottom
}

const debounce = (fn, time) => {
  let timeoutId
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  }
}


// CONCATENATED MODULE: ./src/js/windowConstants.js
const vh = window.innerHeight / 100
const vw = window.innerWidth / 100

const getLargerUnit = () => {
  if (vh > vw) {
    return vh
  } else {
    return vw
  }
}
// CONCATENATED MODULE: ./src/js/LightingParticles.js



const maxDistant = getLargerUnit() * 5
let mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  xReal: undefined,
  yReal: undefined
}

class LightingParticles_Point {
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

class LightingParticles {

  constructor(queryParticles, queryLighter) {
    this.canvasParticles = document.querySelector(queryParticles)
    this.cP = this.canvasParticles.getContext('2d')

    this.lighter = document.querySelector(queryLighter)

    this.canvasParticles.width = document.body.clientWidth
    this.canvasParticles.height = window.innerHeight

    window.addEventListener('resize', () => {
      this.canvasParticles.width = document.body.clientWidth
      this.canvasParticles.height = window.innerHeight

      this.init()
    })

    this.canvasParticles.addEventListener('mouseenter', e => {
      mouse.x = e.pageX
      mouse.y = e.pageY
      this.lighter.classList.add('active')
      this.animationId = requestAnimationFrame(this.animate.bind(this))
    })

    this.canvasParticles.addEventListener('mousemove', e => {
      mouse.xReal = e.pageX
      mouse.yReal = e.pageY
    })

    this.canvasParticles.addEventListener('mouseleave', e => {
      this.lighter.classList.remove('active')
      mouse.x = mouse.y = undefined
      cancelAnimationFrame(this.animationId)
      this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)
  })

    this.init()
  }

  animate() {
    this.animationId = requestAnimationFrame(this.animate.bind(this))

    mouse.x += (mouse.xReal - mouse.x) * .07
    mouse.y += (mouse.yReal - mouse.y) * .07
    
    this.lighter.style['left'] = mouse.x + 'px'
    this.lighter.style['top'] = mouse.y + 'px'

    this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)
    this.points.forEach(p => { p.update() })
  }

  init() {
    this.points = []
    for (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {
      this.points.push(
        new LightingParticles_Point(this.canvasParticles, this.cP, this.points)
      )
    }
  }
}
// CONCATENATED MODULE: ./src/js/ScrollActivator.js


class ScrollActivator_ScrollActivator {
  constructor(attribute) {
    this.attribute = attribute

    this.check()
    window.addEventListener('scroll', debounce(this.check.bind(this), 50))
  }

  check() {
    document.querySelectorAll(`*[data-${this.attribute}]`).forEach(element => {
      if (isVisible(element)) {
        element.classList.add(element.dataset[this.attribute])
        element.removeAttribute(`data-${this.attribute}`)
      }
    })
  }
}
// CONCATENATED MODULE: ./src/js/ListOfClosable.js
class ListOfClosable {
  constructor(element, content) {
    this.listRoot = element
    this.content = []
    content.forEach((c, i) => {
      this.content.push({
        li: document.createElement('li'),
        closed: true
      })
      const label = document.createElement('label')
      label.innerHTML = c.label + '<span></span>'

      const p = document.createElement('p')
      p.innerHTML = c.p
      
      this.content[i].li.appendChild(label)
      this.content[i].li.appendChild(p)
      this.content[i].li.addEventListener('click', this.changeVisibility.bind(this, i))
      this.listRoot.appendChild(this.content[i].li)
    })
  }

  changeVisibility(index) {
    const listElement = this.content[index]
    if (listElement.closed) {
      listElement.li.classList.add('active')
    } else {
      listElement.li.classList.remove('active')
    }
    listElement.closed = ! listElement.closed
  }
}
// EXTERNAL MODULE: ./src/css/animations.css
var animations = __webpack_require__(0);

// EXTERNAL MODULE: ./src/css/index.css
var css = __webpack_require__(1);

// EXTERNAL MODULE: ./src/css/media.css
var media = __webpack_require__(2);

// CONCATENATED MODULE: ./src/js/GooglePhotoGallery.js
class GooglePhotoGallery {
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
// CONCATENATED MODULE: ./src/js/main.js









window.addEventListener('load', () => {
  const cursorStyle = document.createElement('style')
  cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }'
  document.head.appendChild(cursorStyle)

  const scene1Canvas = new LightingParticles('#particles', '#lighter')
  const scrllAct = new ScrollActivator_ScrollActivator('scroll')

  const closelst = new ListOfClosable(
    document.querySelector('#close-list'),
    [
      {
        label: 'JavaScript',
        p: '<span class="secondary">Skills:</span> React, Webpack, Node.js, AJAX, Canvas, WebSocket'
      },
      {
        label: 'C++',
        p: '<span class="secondary">Skills:</span> SDL1.2'
      },
      {
        label: 'Python',
        p: '<span class="secondary">Skills:</span> Django, Uvicorn'
      },
      {
        label: 'Other',
        p: '<span class="secondary">Skills:</span> Git, SQL, Algorithms and Structs of data'
      },
    ])

  const gpg = new GooglePhotoGallery([
    'https://lh3.googleusercontent.com/pw/ACtC-3dqJrFjvDNctoj0JMBKnZSEZ5MEHkY2wclwHeF6defUod_qFpPUIG7efsfaKy0KLn1XtNK3rrFnx33yZ1cvTqZH_-FnMfd5GjTo9KOTn_PY-weN2Xrk1MODlnp-ouS_91KHA5RT8_Y83p9TCo9y_boQLg=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3cceCtmtEEmveWhr791Qe1QxDledMIJ4PPtO13gLw27u4VHnE4zwdpX6Ap9V21b4kKI-70Qd7oHNHW-PHp-iV0HEfvZu98RRBzymxq_JTZNHQRMD8Pgt1DrWHR5eEqt8DzAblU34P0MNYfAD0yTxOukvA=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3eX4ShFiSu7lku-FbyDG_BCRXuEzcFu9yu_N8kC5EeAPqzPN9foNkbF-8HzKYtkkJ_Kva1JDTtm5PNCYH8H-hSlDZJk92l_40exd5skpqezbVEqPNN4l-QWYnCax0hNXpBNXaraOG5yukg63FODqkfw6g=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3fYzy70Up_VSrRTCjxk_Dz1IHvdUs_lpgbpocv0XFLOZNvWmj9NGFDpZTjIIzbugGEdlSW-3kGL_FPXmFipeXKJU9v3lfzAj4vsyIjUxrMRftm6kFx4mmipG_BIvGBuHj1x9hnY8-tU-djkETeFGI2kYA=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3egLVinw4SJS6bCF0ttlHGC35D7bf4XPLs_y3UtSYcWlx5dJnCbZb_vQ1GAp2sCSvZvXgW93V4hRcNT-QFuXL0IoJMwJA_KP-v4yG8UBXrKu0cqKznAjbxqtcAXHMkLF7M4cCRVxuMu3xAkhwhWkV9F4A=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3fUr_UCSn9v8GQEooz-It8mY4_cVKJXYpjn5NgBgx6-iS0dcZH5DtdWqZyWL2xaCJY2sLYqbaVIJp2GgkY8XmlKqXtjolVRTsmdI_u34rLR5ZaSiwcT2ji0PvGIGJfGfKCrMV-yWXJn6QBdoukH0g3qRA=w1418-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3eS8X4Qpd1N9inYrdHqch2p2NuyQivYihqmZOGyIoc-BA9qrPqajw-Gg65BmX2-RZRGSURG83o_G5i5C2vfazhBc1mDScmUCeixPBMSqsI5KNH6o76ue634IATqGs5PsSmt6oW7Mx3_a_pcqK6tbrXyuw=w1418-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3f9oiLVJDsGUfgSdAKititqnyZBOlm1ZWjaCxZjr1vXWVa2jVoqviPMODZPjPvzF0JMqyACzO-43Kuggixr2WdGPZmgLjl3fRdSPJcLs9Ay9Vzf6W13n6aNW8jq99L2jNNk-F96LpivuY8m_YqatV_K9w=w1260-h945-no?authuser=0',
    'https://lh3.googleusercontent.com/pw/ACtC-3emUEbYxNFzY7oEMU0XHxgF3NqgIKgAZNkkMyXPBwpuSV0KUBrPy5qv6LWK4bL6RlW1kdcD6BVaxb04pavEvZTNYpjrXOg5zOmzW23afuHokhVNlpiU_TjzkZz4h9tOxlG3O1aofBmLKojyWO13Y3A7tA=w1418-h945-no?authuser=0'
  ], document.querySelector('#gallery'))
})

/***/ })
/******/ ]);