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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nlet mouse = {\n  x: undefined,\n  y: undefined\n}\n\nclass Point {\n\n  constructor(canvas, ctx, pointsArray) {\n    this.canvas = canvas\n    this.ctx = ctx\n\n    this.x = Math.random() * (this.canvas.width - 10) + 5\n    this.y = Math.random() * (this.canvas.height - 10) + 5\n\n    this.dx = Math.random() * 0.2 - 0.1\n    this.dy\t= Math.random() * 0.2 - 0.1\n    this.c = 0\n    this.r = 0.5\n    \n    this.pointsArray = pointsArray\n  }\n\n  draw() {\n    this.ctx.beginPath()\n    this.ctx.fillStyle = '#ff7f11'\n    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)\n    this.ctx.fill()\n    this.ctx.closePath()\n  }\n\n  update() {\n    if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx\n    if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mouse.x, mouse.y, this.x, this.y) < 100) {\n      for (let j = 0; j < this.pointsArray.length; j++) {\n        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.x, this.y, this.pointsArray[j].x, this.pointsArray[j].y) < 70 && this.c < 2\n        && this.pointsArray[j].c < 2 && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mouse.x, mouse.y, this.pointsArray[j].x, this.pointsArray[j].y) < 100) {\n          this.ctx.beginPath()\n          this.ctx.strokeStyle = '#ff7f11'\n          this.ctx.moveTo(this.x, this.y)\n          this.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y)\n          this.ctx.stroke()\n          this.ctx.closePath()\n          this.c++\n        }\n      }\n      this.c = 0\n    }\n\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3) {\n      this.r += 0.2\n    } else if (this.r > 0.1) {\n      this.r -= 0.1\n    } else {\n      this.r = 0\n    }\n\n    this.x += this.dx\n    this.y += this.dy\n\n    this.draw()\n  }\n}\n\nclass Canvas {\n\n  constructor(query) {\n    this.canvas = document.querySelector(query)\n    this.c = this.canvas.getContext('2d')\n\n    this.canvas.width = document.body.clientWidth\n    this.canvas.height = window.innerHeight\n\n    this.points = []\n\n    window.addEventListener('resize', () => {\n      this.canvas.width = document.body.clientWidth\n      this.canvas.height = window.innerHeight\n    })\n\n    this.canvas.addEventListener('mousemove', e => {\n      mouse.x = e.x\n      mouse.y = e.y\n    })\n\n    this.init()\n  }\n\n  animate() {\n    requestAnimationFrame(this.animate.bind(this), this.canvas)\n    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)\n    this.points.forEach(p => { p.update() })\n  }\n\n  init() {\n    for (let i = 0; i < Math.floor((window.innerWidth + window.innerHeight) / 8); i++)\n      this.points.push(new Point(this.canvas, this.c, this.points))\n    \n    this.animate()\n  }\n}\n\n//# sourceURL=webpack:///./src/Canvas.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return Scene; });\nclass Scene {\n\n  constructor(rootElement) {\n    this.root = rootElement\n  }\n\n}\n\n//# sourceURL=webpack:///./src/Scene.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n\n\n\nwindow.addEventListener('load', () => {\n  const canvasParticles = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"]('#particles')\n  let scene\n\n  document.querySelector('#init-btn').addEventListener('click', e => {\n    const sceneRoot = document.createElement('div')\n    sceneRoot.id = 'root'\n    \n    e.target.replaceWith(sceneRoot)\n    scene = new _Scene__WEBPACK_IMPORTED_MODULE_1__[\"Scene\"](sceneRoot)\n  })\n})\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst distance = (x1, y1, x2, y2) => {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (distance);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });