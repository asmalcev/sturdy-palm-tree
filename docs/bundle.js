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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GooglePhotoGallery\", function() { return GooglePhotoGallery; });\nclass GooglePhotoGallery {\n\tconstructor(imgUrlsArr, root) {\n\t\tthis.url  = imgUrlsArr;\n\t\tthis.root = root;\n\n\t\tthis.index = 0;\n\n\t\tthis.slider = document.createElement('div');\n\t\tthis.slider.classList.add('slider');\n\n\t\timgUrlsArr.forEach(url => {\n\t\t\tconst img = document.createElement('div');\n\t\t\timg.classList.add('img');\n\n\t\t\tlet width  = this.root.clientWidth;\n\t\t\tlet height = this.root.clientHeight;\n\n\t\t\tif (width < 512)  width  = 512;\n\t\t\tif (width > 1000) width  = 1000;\n\t\t\tif (height < 512) height = 512;\n\t\t\tif (height > 670) height = 670;\n\n\t\t\timg.style.backgroundImage = `url(${this._replaceUrlsMetrics(url, width, height)})`;\n\t\t\timg.setAttribute('loading', 'lazy');\n\t\t\tthis.slider.appendChild(img);\n\t\t})\n\n\t\tconst rightBtn     = document.createElement('button');\n\t\trightBtn.innerHTML = '&#10095;';\n\t\trightBtn.classList.add('right-btn');\n\t\trightBtn.addEventListener('click', this.iterateSlide.bind(this, 1));\n\n\t\tconst leftBtn     = document.createElement('button');\n\t\tleftBtn.innerHTML = '&#10094;';\n\t\tleftBtn.classList.add('left-btn');\n\t\tleftBtn.addEventListener('click', this.iterateSlide.bind(this, -1));\n\n\t\tthis.pickers = document.createElement('div');\n\t\tthis.pickers.classList.add('pickers');\n\t\tconst widthOfPicker = (\n\t\t\tMath.floor((this.root.clientWidth - 12 * (imgUrlsArr.length + 1)) / imgUrlsArr.length)\n\t\t);\n\n\t\timgUrlsArr.forEach((url, index) => {\n\t\t\tconst img = document.createElement('img');\n\n\t\t\timg.src = this._replaceUrlsMetrics(url, widthOfPicker, 200);\n\t\t\timg.setAttribute('loading', 'lazy');\n\t\t\timg.addEventListener('click', this.changeSlide.bind(this, index));\n\n\t\t\tthis.pickers.appendChild(img);\n\t\t})\n\n\t\tthis.root.appendChild(this.slider);\n\t\tthis.root.appendChild(rightBtn);\n\t\tthis.root.appendChild(leftBtn);\n\t\tthis.root.appendChild(this.pickers);\n\t}\n\n\tchangeSlide(index) {\n\t\tthis.index = index;\n\n\t\tthis.slider.style.transform = `translateY(calc(${-index * 100}% - ${index * 64}px))`;\n\t}\n\n\titerateSlide(diff) {\n\t\tlet newSlideIndex = this.index + diff;\n\n\t\tif (newSlideIndex < 0) {\n\t\t\tnewSlideIndex = this.url.length - 1;\n\t\t} else if (newSlideIndex >= this.url.length) {\n\t\t\tnewSlideIndex = 0;\n\t\t}\n\n\t\tthis.changeSlide(newSlideIndex);\n\t}\n\n\t_replaceUrlsMetrics(str, width, height) {\n\t\treturn str.replace(/(w[\\d]*)-(h[\\d]*)/, `w${width}-h${height}`);\n\t}\n}\n\n//# sourceURL=webpack:///./src/js/GooglePhotoGallery.js?");

/***/ }),

/***/ "./src/js/LightingParticles.js":
/*!*************************************!*\
  !*** ./src/js/LightingParticles.js ***!
  \*************************************/
/*! exports provided: LightingParticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightingParticles\", function() { return LightingParticles; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _windowConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowConstants */ \"./src/js/windowConstants.js\");\n\n\n\nconst maxDistant = Object(_windowConstants__WEBPACK_IMPORTED_MODULE_1__[\"getLargerUnit\"])() * 5;\nlet mouse = {\n\tx: window.innerWidth / 2,\n\ty: window.innerHeight / 2,\n\txReal: undefined,\n\tyReal: undefined\n};\n\nclass Point {\n\tconstructor(canvas, ctx, pointsArray) {\n\t\tthis.canvas = canvas;\n\t\tthis.ctx    = ctx;\n\n\t\tthis.x = Math.random() * (this.canvas.width - 10) + 5;\n\t\tthis.y = Math.random() * (this.canvas.height - 10) + 5;\n\n\t\tthis.dx = Math.random() * 0.2 - 0.1;\n\t\tthis.dy\t= Math.random() * 0.2 - 0.1;\n\t\tthis.c  = 0;\n\t\tthis.r  = 0.5;\n\t\t\n\t\tthis.pointsArray = pointsArray;\n\t}\n\n\tdraw() {\n\t\tthis.ctx.beginPath();\n\t\tthis.ctx.fillStyle = '#ff7f11';\n\t\tthis.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);\n\t\tthis.ctx.fill();\n\t\tthis.ctx.closePath();\n\t}\n\n\tupdate() {\n\t\tif (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx;\n\t\tif (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy;\n\n\t\tif (\n\t\t\tObject(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 100\n\t\t) {\n\t\t\tfor (let j = 0; j < this.pointsArray.length; j++) {\n\t\t\t\tif (\n\t\t\t\t\tObject(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < maxDistant\n\t\t\t\t\t&& this.c < 3\n\t\t\t\t\t&& this.pointsArray[j].c < 3\n\t\t\t\t\t&& Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.pointsArray[j].x, this.pointsArray[j].y) < 100\n\t\t\t\t) {\n\t\t\t\t\tthis.ctx.beginPath();\n\t\t\t\t\tthis.ctx.strokeStyle = '#ff7f11';\n\t\t\t\t\tthis.ctx.moveTo(this.x, this.y);\n\t\t\t\t\tthis.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y);\n\t\t\t\t\tthis.ctx.stroke();\n\t\t\t\t\tthis.ctx.closePath();\n\t\t\t\t\tthis.c++;\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis.c = 0;\n\t\t}\n\n\t\tif ( Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3 ) {\n\t\t\tthis.r += 0.2;\n\t\t} else if (this.r > 0.1) {\n\t\t\tthis.r -= 0.1;\n\t\t} else {\n\t\t\tthis.r = 0;\n\t\t}\n\n\t\tthis.x += this.dx;\n\t\tthis.y += this.dy;\n\n\t\tthis.draw();\n\t}\n}\n\nclass LightingParticles {\n\n\tconstructor(queryParticles, queryLighter) {\n\t\tthis.canvasParticles = document.querySelector(queryParticles);\n\t\tthis.cP = this.canvasParticles.getContext('2d');\n\n\t\tthis.lighter = document.querySelector(queryLighter);\n\n\t\tthis.canvasParticles.width  = document.body.clientWidth;\n\t\tthis.canvasParticles.height = window.innerHeight;\n\n\t\twindow.addEventListener('resize', () => {\n\t\t\tthis.canvasParticles.width  = document.body.clientWidth;\n\t\t\tthis.canvasParticles.height = window.innerHeight;\n\n\t\t\tthis.init();\n\t\t})\n\n\t\tthis.canvasParticles.addEventListener('mouseenter', e => {\n\t\t\tmouse.x = e.pageX;\n\t\t\tmouse.y = e.pageY;\n\t\t\tthis.lighter.classList.add('active');\n\t\t\tthis.animationId = requestAnimationFrame(this.animate.bind(this));\n\t\t})\n\n\t\tthis.canvasParticles.addEventListener('mousemove', e => {\n\t\t\tmouse.xReal = e.pageX;\n\t\t\tmouse.yReal = e.pageY;\n\t\t})\n\n\t\tthis.canvasParticles.addEventListener('mouseleave', e => {\n\t\t\tthis.lighter.classList.remove('active');\n\t\t\tmouse.x = mouse.y = undefined;\n\t\t\tcancelAnimationFrame(this.animationId);\n\t\t\tthis.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height);\n\t})\n\n\t\tthis.init();\n\t}\n\n\tanimate() {\n\t\tthis.animationId = requestAnimationFrame(this.animate.bind(this));\n\n\t\tmouse.x += (mouse.xReal - mouse.x) * .07;\n\t\tmouse.y += (mouse.yReal - mouse.y) * .07;\n\t\t\n\t\tthis.lighter.style['left'] = mouse.x + 'px';\n\t\tthis.lighter.style['top']  = mouse.y + 'px';\n\n\t\tthis.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height);\n\t\tthis.points.forEach(p => { p.update() });\n\t}\n\n\tinit() {\n\t\tthis.points = [];\n\t\tfor (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {\n\t\t\tthis.points.push( new Point(this.canvasParticles, this.cP, this.points) );\n\t\t}\n\t}\n};\n\n//# sourceURL=webpack:///./src/js/LightingParticles.js?");

/***/ }),

/***/ "./src/js/ListOfClosable.js":
/*!**********************************!*\
  !*** ./src/js/ListOfClosable.js ***!
  \**********************************/
/*! exports provided: ListOfClosable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfClosable\", function() { return ListOfClosable; });\nclass ListOfClosable {\n  constructor(element, content) {\n    this.listRoot = element;\n    this.content = [];\n    content.forEach((c, i) => {\n      this.content.push({\n        li: document.createElement('li'),\n        closed: true\n      });\n      const label = document.createElement('label');\n      label.innerHTML = c.label + '<span></span>';\n\n      const p = document.createElement('p');\n      p.innerHTML = c.p;\n      \n      this.content[i].li.appendChild(label);\n      this.content[i].li.appendChild(p);\n      this.content[i].li.addEventListener('click', this.changeVisibility.bind(this, i));\n      this.listRoot.appendChild(this.content[i].li);\n    })\n  }\n\n  changeVisibility(index) {\n    const listElement = this.content[index];\n    if (listElement.closed) {\n      listElement.li.classList.add('active');\n    } else {\n      listElement.li.classList.remove('active');\n    }\n    listElement.closed = ! listElement.closed;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/ListOfClosable.js?");

/***/ }),

/***/ "./src/js/ScrollActivator.js":
/*!***********************************!*\
  !*** ./src/js/ScrollActivator.js ***!
  \***********************************/
/*! exports provided: ScrollActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ScrollActivator\", function() { return ScrollActivator; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\nclass ScrollActivator {\n\tconstructor(attribute) {\n\t\tthis.attribute = attribute;\n\n\t\tthis.check();\n\t\twindow.addEventListener('scroll', Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"debounce\"])(this.check.bind(this), 50));\n\t}\n\n\tcheck() {\n\t\tdocument.querySelectorAll(`*[data-${this.attribute}]`).forEach(element => {\n\t\t\tif (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isVisible\"])(element)) {\n\t\t\t\telement.classList.add(element.dataset[this.attribute]);\n\t\t\t\telement.removeAttribute(`data-${this.attribute}`);\n\t\t\t}\n\t\t})\n\t}\n};\n\n//# sourceURL=webpack:///./src/js/ScrollActivator.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LightingParticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightingParticles */ \"./src/js/LightingParticles.js\");\n/* harmony import */ var _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollActivator */ \"./src/js/ScrollActivator.js\");\n/* harmony import */ var _ListOfClosable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListOfClosable */ \"./src/js/ListOfClosable.js\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/animations.css */ \"./src/css/animations.css\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_animations_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/media.css */ \"./src/css/media.css\");\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_media_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _GooglePhotoGallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GooglePhotoGallery */ \"./src/js/GooglePhotoGallery.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n\tconst cursorStyle     = document.createElement('style');\n\tcursorStyle.innerHTML = '* { cursor: url(images/cursor.png) 6 6, pointer; }';\n\tdocument.head.appendChild(cursorStyle);\n\n\tconst scene1Canvas = new _LightingParticles__WEBPACK_IMPORTED_MODULE_0__[\"LightingParticles\"]('#particles', '#lighter');\n\tconst scrllAct     = new _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__[\"ScrollActivator\"]('scroll');\n\n\tconst closelst = new _ListOfClosable__WEBPACK_IMPORTED_MODULE_2__[\"ListOfClosable\"](\n\t\tdocument.querySelector('#close-list'),\n\t\t[\n\t\t\t{\n\t\t\t\tlabel: 'JavaScript',\n\t\t\t\tp: '<span class=\"secondary\">Skills:</span> React, Webpack, Node.js, AJAX, Canvas, WebSocket'\n\t\t\t},\n\t\t\t{\n\t\t\t\tlabel: 'Python',\n\t\t\t\tp: '<span class=\"secondary\">Skills:</span> Django, Uvicorn, WSGI, ASGI'\n\t\t\t},\n\t\t\t{\n\t\t\t\tlabel: 'Other',\n\t\t\t\tp: '<span class=\"secondary\">Skills:</span> Git, SQL, Algorithms and Structs of data'\n\t\t\t},\n\t\t\t{\n\t\t\t\tlabel: 'C++',\n\t\t\t\tp: '<span class=\"secondary\">Skills:</span> SDL1.2, SDL2'\n\t\t\t},\n\t\t]\n\t);\n\n\t// const gpg = new GooglePhotoGallery([\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3dqJrFjvDNctoj0JMBKnZSEZ5MEHkY2wclwHeF6defUod_qFpPUIG7efsfaKy0KLn1XtNK3rrFnx33yZ1cvTqZH_-FnMfd5GjTo9KOTn_PY-weN2Xrk1MODlnp-ouS_91KHA5RT8_Y83p9TCo9y_boQLg=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3cceCtmtEEmveWhr791Qe1QxDledMIJ4PPtO13gLw27u4VHnE4zwdpX6Ap9V21b4kKI-70Qd7oHNHW-PHp-iV0HEfvZu98RRBzymxq_JTZNHQRMD8Pgt1DrWHR5eEqt8DzAblU34P0MNYfAD0yTxOukvA=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3eX4ShFiSu7lku-FbyDG_BCRXuEzcFu9yu_N8kC5EeAPqzPN9foNkbF-8HzKYtkkJ_Kva1JDTtm5PNCYH8H-hSlDZJk92l_40exd5skpqezbVEqPNN4l-QWYnCax0hNXpBNXaraOG5yukg63FODqkfw6g=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3fYzy70Up_VSrRTCjxk_Dz1IHvdUs_lpgbpocv0XFLOZNvWmj9NGFDpZTjIIzbugGEdlSW-3kGL_FPXmFipeXKJU9v3lfzAj4vsyIjUxrMRftm6kFx4mmipG_BIvGBuHj1x9hnY8-tU-djkETeFGI2kYA=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3egLVinw4SJS6bCF0ttlHGC35D7bf4XPLs_y3UtSYcWlx5dJnCbZb_vQ1GAp2sCSvZvXgW93V4hRcNT-QFuXL0IoJMwJA_KP-v4yG8UBXrKu0cqKznAjbxqtcAXHMkLF7M4cCRVxuMu3xAkhwhWkV9F4A=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3fUr_UCSn9v8GQEooz-It8mY4_cVKJXYpjn5NgBgx6-iS0dcZH5DtdWqZyWL2xaCJY2sLYqbaVIJp2GgkY8XmlKqXtjolVRTsmdI_u34rLR5ZaSiwcT2ji0PvGIGJfGfKCrMV-yWXJn6QBdoukH0g3qRA=w1418-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3eS8X4Qpd1N9inYrdHqch2p2NuyQivYihqmZOGyIoc-BA9qrPqajw-Gg65BmX2-RZRGSURG83o_G5i5C2vfazhBc1mDScmUCeixPBMSqsI5KNH6o76ue634IATqGs5PsSmt6oW7Mx3_a_pcqK6tbrXyuw=w1418-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3f9oiLVJDsGUfgSdAKititqnyZBOlm1ZWjaCxZjr1vXWVa2jVoqviPMODZPjPvzF0JMqyACzO-43Kuggixr2WdGPZmgLjl3fRdSPJcLs9Ay9Vzf6W13n6aNW8jq99L2jNNk-F96LpivuY8m_YqatV_K9w=w1260-h945-no?authuser=0',\n\t//   'https://lh3.googleusercontent.com/pw/ACtC-3emUEbYxNFzY7oEMU0XHxgF3NqgIKgAZNkkMyXPBwpuSV0KUBrPy5qv6LWK4bL6RlW1kdcD6BVaxb04pavEvZTNYpjrXOg5zOmzW23afuHokhVNlpiU_TjzkZz4h9tOxlG3O1aofBmLKojyWO13Y3A7tA=w1418-h945-no?authuser=0'\n\t// ], document.querySelector('#gallery'));\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: distance, isVisible, debounce, getRandomIntegerFromRange, getRandomFromRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVisible\", function() { return isVisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomIntegerFromRange\", function() { return getRandomIntegerFromRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomFromRange\", function() { return getRandomFromRange; });\nconst distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n\nconst getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min) + min);\nconst getRandomFromRange = (min, max) => Math.random() * (max - min) + min;\n\n// checks if DOM element is in the window\nconst isVisible = (element, offset = 0) => {\n\tconst bounds = element.getBoundingClientRect();\n\treturn bounds.top > offset && window.innerHeight - offset > bounds.bottom;\n}\n\nconst debounce = (fn, time) => {\n\tlet timeoutId;\n\treturn (...args) => {\n\t\tif (timeoutId) {\n\t\t\tclearTimeout(timeoutId);\n\t\t}\n\n\t\ttimeoutId = setTimeout(() => {\n\t\t\ttimeoutId = null;\n\t\t\tfn(...args);\n\t\t}, time);\n\t}\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/js/windowConstants.js":
/*!***********************************!*\
  !*** ./src/js/windowConstants.js ***!
  \***********************************/
/*! exports provided: vh, vw, getLargerUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vh\", function() { return vh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vw\", function() { return vw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLargerUnit\", function() { return getLargerUnit; });\nconst vh = window.innerHeight / 100;\nconst vw = window.innerWidth / 100;\n\nconst getLargerUnit = () => {\n\tif (vh > vw) {\n\t\treturn vh;\n\t} else {\n\t\treturn vw;\n\t}\n};\n\n//# sourceURL=webpack:///./src/js/windowConstants.js?");

/***/ })

/******/ });