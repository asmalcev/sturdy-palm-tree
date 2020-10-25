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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/animations.css":
/*!********************************!*\
  !*** ./src/css/animations.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/animations.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/media.css":
/*!***************************!*\
  !*** ./src/css/media.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/media.css?");

/***/ }),

/***/ "./src/js/GooglePhotoGallery.js":
/*!**************************************!*\
  !*** ./src/js/GooglePhotoGallery.js ***!
  \**************************************/
/*! exports provided: GooglePhotoGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GooglePhotoGallery\", function() { return GooglePhotoGallery; });\nclass GooglePhotoGallery {\n  constructor(imgUrlsArr, root) {\n    this.url = imgUrlsArr\n    this.root = root\n\n    this.index = 0\n\n    this.slider = document.createElement('div')\n    this.slider.classList.add('slider')\n\n    imgUrlsArr.forEach(url => {\n      const img = document.createElement('div')\n      img.classList.add('img')\n      img.style.backgroundImage \n        = `url(${this._replaceUrlsMetrics(url, this.root.clientWidth, this.root.clientHeight)})`\n      img.setAttribute('loading', 'lazy')\n      this.slider.appendChild(img)\n    })\n\n    const rightBtn = document.createElement('button')\n    rightBtn.innerHTML = '&#10095;'\n    rightBtn.classList.add('right-btn')\n    rightBtn.addEventListener('click', this.iterateSlide.bind(this, 1))\n\n    const leftBtn = document.createElement('button')\n    leftBtn.innerHTML = '&#10094;'\n    leftBtn.classList.add('left-btn')\n    leftBtn.addEventListener('click', this.iterateSlide.bind(this, -1))\n\n    this.pickers = document.createElement('div')\n    this.pickers.classList.add('pickers')\n    const widthOfPicker\n      = Math.floor((this.root.clientWidth - 12 * (imgUrlsArr.length + 1)) / imgUrlsArr.length)\n    imgUrlsArr.forEach((url, index) => {\n      const img = document.createElement('img')\n      img.src = this._replaceUrlsMetrics(url, widthOfPicker, 200)\n      img.setAttribute('loading', 'lazy')\n      img.addEventListener('click', this.changeSlide.bind(this, index))\n      this.pickers.appendChild(img)\n    })\n\n    this.root.appendChild(this.slider)\n    this.root.appendChild(rightBtn)\n    this.root.appendChild(leftBtn)\n    this.root.appendChild(this.pickers)\n  }\n\n  changeSlide(index) {\n    this.index = index\n\n    this.slider.style.transform = `translateY(calc(${-index * 100}% - ${index * 64}px))`\n  }\n\n  iterateSlide(diff) {\n    let newSlideIndex = this.index + diff\n    if (newSlideIndex < 0) newSlideIndex = this.url.length - 1\n    if (newSlideIndex >= this.url.length) newSlideIndex = 0\n    this.changeSlide(newSlideIndex)\n  }\n\n  _replaceUrlsMetrics(str, width, height) {\n    return str.replace(/(w[\\d]*)-(h[\\d]*)/, `w${width}-h${height}`)\n  }\n}\n\n//# sourceURL=webpack:///./src/js/GooglePhotoGallery.js?");

/***/ }),

/***/ "./src/js/LightingParticles.js":
/*!*************************************!*\
  !*** ./src/js/LightingParticles.js ***!
  \*************************************/
/*! exports provided: LightingParticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightingParticles\", function() { return LightingParticles; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _windowConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowConstants */ \"./src/js/windowConstants.js\");\n\n\n\nconst maxDistant = Object(_windowConstants__WEBPACK_IMPORTED_MODULE_1__[\"getLargerUnit\"])() * 5\nlet mouse = {\n  x: window.innerWidth / 2,\n  y: window.innerHeight / 2,\n  xReal: undefined,\n  yReal: undefined\n}\n\nclass Point {\n  constructor(canvas, ctx, pointsArray) {\n    this.canvas = canvas\n    this.ctx = ctx\n\n    this.x = Math.random() * (this.canvas.width - 10) + 5\n    this.y = Math.random() * (this.canvas.height - 10) + 5\n\n    this.dx = Math.random() * 0.2 - 0.1\n    this.dy\t= Math.random() * 0.2 - 0.1\n    this.c = 0\n    this.r = 0.5\n    \n    this.pointsArray = pointsArray\n  }\n\n  draw() {\n    this.ctx.beginPath()\n    this.ctx.fillStyle = '#ff7f11'\n    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)\n    this.ctx.fill()\n    this.ctx.closePath()\n  }\n\n  update() {\n    if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx\n    if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy\n\n    if (\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 100\n    ) {\n      for (let j = 0; j < this.pointsArray.length; j++) {\n        if (\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < maxDistant\n          && this.c < 3\n          && this.pointsArray[j].c < 3\n          && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.pointsArray[j].x, this.pointsArray[j].y) < 100\n        ) {\n          this.ctx.beginPath()\n          this.ctx.strokeStyle = '#ff7f11'\n          this.ctx.moveTo(this.x, this.y)\n          this.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y)\n          this.ctx.stroke()\n          this.ctx.closePath()\n          this.c++\n        }\n      }\n      this.c = 0\n    }\n\n    if ( Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3 ) {\n      this.r += 0.2\n    } else if (this.r > 0.1) {\n      this.r -= 0.1\n    } else {\n      this.r = 0\n    }\n\n    this.x += this.dx\n    this.y += this.dy\n\n    this.draw()\n  }\n}\n\nclass LightingParticles {\n\n  constructor(queryParticles, queryLighter) {\n    this.canvasParticles = document.querySelector(queryParticles)\n    this.cP = this.canvasParticles.getContext('2d')\n\n    this.lighter = document.querySelector(queryLighter)\n\n    this.canvasParticles.width = document.body.clientWidth\n    this.canvasParticles.height = window.innerHeight\n\n    window.addEventListener('resize', () => {\n      this.canvasParticles.width = document.body.clientWidth\n      this.canvasParticles.height = window.innerHeight\n\n      this.init()\n    })\n\n    this.canvasParticles.addEventListener('mouseenter', e => {\n      mouse.x = e.pageX\n      mouse.y = e.pageY\n      this.lighter.classList.add('active')\n      this.animationId = requestAnimationFrame(this.animate.bind(this))\n    })\n\n    this.canvasParticles.addEventListener('mousemove', e => {\n      mouse.xReal = e.pageX\n      mouse.yReal = e.pageY\n    })\n\n    this.canvasParticles.addEventListener('mouseleave', e => {\n      this.lighter.classList.remove('active')\n      mouse.x = mouse.y = undefined\n      cancelAnimationFrame(this.animationId)\n      this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)\n  })\n\n    this.init()\n  }\n\n  animate() {\n    this.animationId = requestAnimationFrame(this.animate.bind(this))\n\n    mouse.x += (mouse.xReal - mouse.x) * .07\n    mouse.y += (mouse.yReal - mouse.y) * .07\n    \n    this.lighter.style['left'] = mouse.x + 'px'\n    this.lighter.style['top'] = mouse.y + 'px'\n\n    this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)\n    this.points.forEach(p => { p.update() })\n  }\n\n  init() {\n    this.points = []\n    for (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {\n      this.points.push(\n        new Point(this.canvasParticles, this.cP, this.points)\n      )\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/LightingParticles.js?");

/***/ }),

/***/ "./src/js/ListOfClosable.js":
/*!**********************************!*\
  !*** ./src/js/ListOfClosable.js ***!
  \**********************************/
/*! exports provided: ListOfClosable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfClosable\", function() { return ListOfClosable; });\nclass ListOfClosable {\n  constructor(element, content) {\n    this.listRoot = element\n    this.content = []\n    content.forEach((c, i) => {\n      this.content.push({\n        li: document.createElement('li'),\n        closed: true\n      })\n      const label = document.createElement('label')\n      label.innerHTML = c.label + '<span></span>'\n\n      const p = document.createElement('p')\n      p.innerHTML = c.p\n      \n      this.content[i].li.appendChild(label)\n      this.content[i].li.appendChild(p)\n      this.content[i].li.addEventListener('click', this.changeVisibility.bind(this, i))\n      this.listRoot.appendChild(this.content[i].li)\n    })\n  }\n\n  changeVisibility(index) {\n    const listElement = this.content[index]\n    if (listElement.closed) {\n      listElement.li.classList.add('active')\n    } else {\n      listElement.li.classList.remove('active')\n    }\n    listElement.closed = ! listElement.closed\n  }\n}\n\n//# sourceURL=webpack:///./src/js/ListOfClosable.js?");

/***/ }),

/***/ "./src/js/ScrollActivator.js":
/*!***********************************!*\
  !*** ./src/js/ScrollActivator.js ***!
  \***********************************/
/*! exports provided: ScrollActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollActivator\", function() { return ScrollActivator; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nclass ScrollActivator {\n  constructor(attribute) {\n    this.attribute = attribute\n\n    this.check()\n    window.addEventListener('scroll', Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(this.check.bind(this), 50))\n  }\n\n  check() {\n    document.querySelectorAll(`*[data-${this.attribute}]`).forEach(element => {\n      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isVisible\"])(element)) {\n        element.classList.add(element.dataset[this.attribute])\n        element.removeAttribute(`data-${this.attribute}`)\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/js/ScrollActivator.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LightingParticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightingParticles */ \"./src/js/LightingParticles.js\");\n/* harmony import */ var _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollActivator */ \"./src/js/ScrollActivator.js\");\n/* harmony import */ var _ListOfClosable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListOfClosable */ \"./src/js/ListOfClosable.js\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/animations.css */ \"./src/css/animations.css\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_animations_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/media.css */ \"./src/css/media.css\");\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_media_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _GooglePhotoGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GooglePhotoGallery */ \"./src/js/GooglePhotoGallery.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  const cursorStyle = document.createElement('style')\n  cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }'\n  document.head.appendChild(cursorStyle)\n\n  const scene1Canvas = new _LightingParticles__WEBPACK_IMPORTED_MODULE_0__[\"LightingParticles\"]('#particles', '#lighter')\n  const scrllAct = new _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__[\"ScrollActivator\"]('scroll')\n\n  const closelst = new _ListOfClosable__WEBPACK_IMPORTED_MODULE_2__[\"ListOfClosable\"](\n    document.querySelector('#close-list'),\n    [\n      {\n        label: 'JavaScript',\n        p: '<span class=\"secondary\">Skills:</span> React, Webpack, Node.js, AJAX, Canvas, WebSocket'\n      },\n      {\n        label: 'C++',\n        p: '<span class=\"secondary\">Skills:</span> SDL1.2'\n      },\n      {\n        label: 'Python',\n        p: '<span class=\"secondary\">Skills:</span> Django, Uvicorn'\n      },\n      {\n        label: 'Other',\n        p: '<span class=\"secondary\">Skills:</span> Git, SQL, Algorithms and Structs of data'\n      },\n    ])\n\n  const gpg = new _GooglePhotoGallery__WEBPACK_IMPORTED_MODULE_6__[\"GooglePhotoGallery\"]([\n    'https://lh3.googleusercontent.com/pw/ACtC-3dqJrFjvDNctoj0JMBKnZSEZ5MEHkY2wclwHeF6defUod_qFpPUIG7efsfaKy0KLn1XtNK3rrFnx33yZ1cvTqZH_-FnMfd5GjTo9KOTn_PY-weN2Xrk1MODlnp-ouS_91KHA5RT8_Y83p9TCo9y_boQLg=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3cceCtmtEEmveWhr791Qe1QxDledMIJ4PPtO13gLw27u4VHnE4zwdpX6Ap9V21b4kKI-70Qd7oHNHW-PHp-iV0HEfvZu98RRBzymxq_JTZNHQRMD8Pgt1DrWHR5eEqt8DzAblU34P0MNYfAD0yTxOukvA=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3eX4ShFiSu7lku-FbyDG_BCRXuEzcFu9yu_N8kC5EeAPqzPN9foNkbF-8HzKYtkkJ_Kva1JDTtm5PNCYH8H-hSlDZJk92l_40exd5skpqezbVEqPNN4l-QWYnCax0hNXpBNXaraOG5yukg63FODqkfw6g=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3fYzy70Up_VSrRTCjxk_Dz1IHvdUs_lpgbpocv0XFLOZNvWmj9NGFDpZTjIIzbugGEdlSW-3kGL_FPXmFipeXKJU9v3lfzAj4vsyIjUxrMRftm6kFx4mmipG_BIvGBuHj1x9hnY8-tU-djkETeFGI2kYA=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3egLVinw4SJS6bCF0ttlHGC35D7bf4XPLs_y3UtSYcWlx5dJnCbZb_vQ1GAp2sCSvZvXgW93V4hRcNT-QFuXL0IoJMwJA_KP-v4yG8UBXrKu0cqKznAjbxqtcAXHMkLF7M4cCRVxuMu3xAkhwhWkV9F4A=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3fUr_UCSn9v8GQEooz-It8mY4_cVKJXYpjn5NgBgx6-iS0dcZH5DtdWqZyWL2xaCJY2sLYqbaVIJp2GgkY8XmlKqXtjolVRTsmdI_u34rLR5ZaSiwcT2ji0PvGIGJfGfKCrMV-yWXJn6QBdoukH0g3qRA=w1418-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3eS8X4Qpd1N9inYrdHqch2p2NuyQivYihqmZOGyIoc-BA9qrPqajw-Gg65BmX2-RZRGSURG83o_G5i5C2vfazhBc1mDScmUCeixPBMSqsI5KNH6o76ue634IATqGs5PsSmt6oW7Mx3_a_pcqK6tbrXyuw=w1418-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3f9oiLVJDsGUfgSdAKititqnyZBOlm1ZWjaCxZjr1vXWVa2jVoqviPMODZPjPvzF0JMqyACzO-43Kuggixr2WdGPZmgLjl3fRdSPJcLs9Ay9Vzf6W13n6aNW8jq99L2jNNk-F96LpivuY8m_YqatV_K9w=w1260-h945-no?authuser=0',\n    'https://lh3.googleusercontent.com/pw/ACtC-3emUEbYxNFzY7oEMU0XHxgF3NqgIKgAZNkkMyXPBwpuSV0KUBrPy5qv6LWK4bL6RlW1kdcD6BVaxb04pavEvZTNYpjrXOg5zOmzW23afuHokhVNlpiU_TjzkZz4h9tOxlG3O1aofBmLKojyWO13Y3A7tA=w1418-h945-no?authuser=0'\n  ], document.querySelector('#gallery'))\n})\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: distance, isVisible, debounce, getRandomIntegerFromRange, getRandomFromRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVisible\", function() { return isVisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomIntegerFromRange\", function() { return getRandomIntegerFromRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomFromRange\", function() { return getRandomFromRange; });\nconst distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))\n\nconst getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min) + min)\nconst getRandomFromRange = (min, max) => Math.random() * (max - min) + min\n\nconst isVisible = (element, offset = 0) => {\n  const bounds = element.getBoundingClientRect()\n  return bounds.top > offset && window.innerHeight - offset > bounds.bottom\n}\n\nconst debounce = (fn, time) => {\n  let timeoutId\n  return (...args) => {\n    if (timeoutId) {\n      clearTimeout(timeoutId)\n    }\n    timeoutId = setTimeout(() => {\n      timeoutId = null\n      fn(...args)\n    }, time)\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/js/windowConstants.js":
/*!***********************************!*\
  !*** ./src/js/windowConstants.js ***!
  \***********************************/
/*! exports provided: vh, vw, getLargerUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vh\", function() { return vh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vw\", function() { return vw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLargerUnit\", function() { return getLargerUnit; });\nconst vh = window.innerHeight / 100\nconst vw = window.innerWidth / 100\n\nconst getLargerUnit = () => {\n  if (vh > vw) {\n    return vh\n  } else {\n    return vw\n  }\n}\n\n//# sourceURL=webpack:///./src/js/windowConstants.js?");

/***/ })

/******/ });