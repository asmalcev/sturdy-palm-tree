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

/***/ "./src/js/LightingParticles.js":
/*!*************************************!*\
  !*** ./src/js/LightingParticles.js ***!
  \*************************************/
/*! exports provided: LightingParticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightingParticles\", function() { return LightingParticles; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _windowConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./windowConstants */ \"./src/js/windowConstants.js\");\n\n\n\nconst maxDistant = Object(_windowConstants__WEBPACK_IMPORTED_MODULE_1__[\"getLargerUnit\"])() * 5\nlet mouse = {\n  x: window.innerWidth / 2,\n  y: window.innerHeight / 2,\n  xReal: undefined,\n  yReal: undefined\n}\n\nclass Point {\n  constructor(canvas, ctx, pointsArray) {\n    this.canvas = canvas\n    this.ctx = ctx\n\n    this.x = Math.random() * (this.canvas.width - 10) + 5\n    this.y = Math.random() * (this.canvas.height - 10) + 5\n\n    this.dx = Math.random() * 0.2 - 0.1\n    this.dy\t= Math.random() * 0.2 - 0.1\n    this.c = 0\n    this.r = 0.5\n    \n    this.pointsArray = pointsArray\n  }\n\n  draw() {\n    this.ctx.beginPath()\n    this.ctx.fillStyle = '#ff7f11'\n    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)\n    this.ctx.fill()\n    this.ctx.closePath()\n  }\n\n  update() {\n    if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx\n    if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy\n\n    if (\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 100\n    ) {\n      for (let j = 0; j < this.pointsArray.length; j++) {\n        if (\n          Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < maxDistant\n          && this.c < 3\n          && this.pointsArray[j].c < 3\n          && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.pointsArray[j].x, this.pointsArray[j].y) < 100\n        ) {\n          this.ctx.beginPath()\n          this.ctx.strokeStyle = '#ff7f11'\n          this.ctx.moveTo(this.x, this.y)\n          this.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y)\n          this.ctx.stroke()\n          this.ctx.closePath()\n          this.c++\n        }\n      }\n      this.c = 0\n    }\n\n    if ( Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"distance\"])(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3 ) {\n      this.r += 0.2\n    } else if (this.r > 0.1) {\n      this.r -= 0.1\n    } else {\n      this.r = 0\n    }\n\n    this.x += this.dx\n    this.y += this.dy\n\n    this.draw()\n  }\n}\n\nclass LightingParticles {\n\n  constructor(queryParticles, queryLighter) {\n    this.canvasParticles = document.querySelector(queryParticles)\n    this.cP = this.canvasParticles.getContext('2d')\n\n    this.lighter = document.querySelector(queryLighter)\n\n    this.canvasParticles.width = document.body.clientWidth\n    this.canvasParticles.height = window.innerHeight\n\n    window.addEventListener('resize', () => {\n      this.canvasParticles.width = document.body.clientWidth\n      this.canvasParticles.height = window.innerHeight\n\n      this.init()\n    })\n\n    this.canvasParticles.addEventListener('mouseenter', e => {\n      mouse.x = e.pageX\n      mouse.y = e.pageY\n      this.lighter.classList.add('active')\n      this.animationId = requestAnimationFrame(this.animate.bind(this))\n    })\n\n    this.canvasParticles.addEventListener('mousemove', e => {\n      mouse.xReal = e.pageX\n      mouse.yReal = e.pageY\n    })\n\n    this.canvasParticles.addEventListener('mouseleave', e => {\n      this.lighter.classList.remove('active')\n      mouse.x = mouse.y = undefined\n      cancelAnimationFrame(this.animationId)\n      this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)\n  })\n\n    this.init()\n  }\n\n  animate() {\n    this.animationId = requestAnimationFrame(this.animate.bind(this))\n\n    mouse.x += (mouse.xReal - mouse.x) * .07\n    mouse.y += (mouse.yReal - mouse.y) * .07\n    \n    this.lighter.style['left'] = mouse.x + 'px'\n    this.lighter.style['top'] = mouse.y + 'px'\n\n    this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height)\n    this.points.forEach(p => { p.update() })\n  }\n\n  init() {\n    this.points = []\n    for (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {\n      this.points.push(\n        new Point(this.canvasParticles, this.cP, this.points)\n      )\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/LightingParticles.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LightingParticles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightingParticles */ \"./src/js/LightingParticles.js\");\n/* harmony import */ var _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollActivator */ \"./src/js/ScrollActivator.js\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/animations.css */ \"./src/css/animations.css\");\n/* harmony import */ var _css_animations_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_animations_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/media.css */ \"./src/css/media.css\");\n/* harmony import */ var _css_media_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_media_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  const cursorStyle = document.createElement('style')\n  cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }'\n  document.head.appendChild(cursorStyle)\n\n  const scene1Canvas = new _LightingParticles__WEBPACK_IMPORTED_MODULE_0__[\"LightingParticles\"]('#particles', '#lighter')\n  const scrllAct = new _ScrollActivator__WEBPACK_IMPORTED_MODULE_1__[\"ScrollActivator\"]('scroll')\n})\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: distance, isVisible, debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance\", function() { return distance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVisible\", function() { return isVisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounce\", function() { return debounce; });\nconst distance = (x1, y1, x2, y2) => {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))\n}\n\nconst isVisible = (element, offset = 0) => {\n  const bounds = element.getBoundingClientRect()\n  return bounds.top > offset && window.innerHeight - offset > bounds.bottom\n}\n\nconst debounce = (fn, time) => {\n  let timeoutId\n  return (...args) => {\n    if (timeoutId) {\n      clearTimeout(timeoutId)\n    }\n    timeoutId = setTimeout(() => {\n      timeoutId = null\n      fn(...args)\n    }, time)\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

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