/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/utils.js
const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

const getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandomFromRange = (min, max) => Math.random() * (max - min) + min;

// checks if DOM element is in the window
const isVisible = (element, offset = 0) => {
	const bounds = element.getBoundingClientRect();
	return bounds.top > offset && window.innerHeight - offset > bounds.bottom;
}

const debounce = (fn, time) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			timeoutId = null;
			fn(...args);
		}, time);
	}
}


;// CONCATENATED MODULE: ./src/js/windowConstants.js
const vh = window.innerHeight / 100;
const vw = window.innerWidth / 100;

const getLargerUnit = () => {
	if (vh > vw) {
		return vh;
	} else {
		return vw;
	}
};
;// CONCATENATED MODULE: ./src/js/LightingParticles.js



const maxDistant = getLargerUnit() * 5;
let mouse = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
	xReal: undefined,
	yReal: undefined
};

class Point {
	constructor(canvas, ctx, pointsArray) {
		this.canvas = canvas;
		this.ctx    = ctx;

		this.x = Math.random() * (this.canvas.width - 10) + 5;
		this.y = Math.random() * (this.canvas.height - 10) + 5;

		this.dx = Math.random() * 0.2 - 0.1;
		this.dy	= Math.random() * 0.2 - 0.1;
		this.c  = 0;
		this.r  = 0.5;
		
		this.pointsArray = pointsArray;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.fillStyle = '#ff7f11';
		this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.closePath();
	}

	update() {
		if (this.x > this.canvas.width || this.x < 0) this.dx = -this.dx;
		if (this.y > this.canvas.height || this.y < 0) this.dy = -this.dy;

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
					this.ctx.beginPath();
					this.ctx.strokeStyle = '#ff7f11';
					this.ctx.moveTo(this.x, this.y);
					this.ctx.lineTo(this.pointsArray[j].x, this.pointsArray[j].y);
					this.ctx.stroke();
					this.ctx.closePath();
					this.c++;
				}
			}
			this.c = 0;
		}

		if ( distance(mouse.x, mouse.y, this.x, this.y) < 150 && this.r < 3 ) {
			this.r += 0.2;
		} else if (this.r > 0.1) {
			this.r -= 0.1;
		} else {
			this.r = 0;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

class LightingParticles {

	constructor(queryParticles, queryLighter) {
		this.canvasParticles = document.querySelector(queryParticles);
		this.cP = this.canvasParticles.getContext('2d');

		this.lighter = document.querySelector(queryLighter);

		this.canvasParticles.width  = document.body.clientWidth;
		this.canvasParticles.height = window.innerHeight;

		window.addEventListener('resize', () => {
			this.canvasParticles.width  = document.body.clientWidth;
			this.canvasParticles.height = window.innerHeight;

			this.init();
		})

		this.canvasParticles.addEventListener('mouseenter', e => {
			mouse.x = e.pageX;
			mouse.y = e.pageY;
			this.lighter.classList.add('active');
			this.animationId = requestAnimationFrame(this.animate.bind(this));
		})

		this.canvasParticles.addEventListener('mousemove', e => {
			mouse.xReal = e.pageX;
			mouse.yReal = e.pageY;
		})

		this.canvasParticles.addEventListener('mouseleave', e => {
			this.lighter.classList.remove('active');
			mouse.x = mouse.y = undefined;
			cancelAnimationFrame(this.animationId);
			this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height);
	})

		this.init();
	}

	animate() {
		this.animationId = requestAnimationFrame(this.animate.bind(this));

		mouse.x += (mouse.xReal - mouse.x) * .07;
		mouse.y += (mouse.yReal - mouse.y) * .07;
		
		this.lighter.style['left'] = mouse.x + 'px';
		this.lighter.style['top']  = mouse.y + 'px';

		this.cP.clearRect(0, 0, this.canvasParticles.width, this.canvasParticles.height);
		this.points.forEach(p => { p.update() });
	}

	init() {
		this.points = [];
		for (let i = 0; i < Math.floor(window.innerWidth / 5); i++) {
			this.points.push( new Point(this.canvasParticles, this.cP, this.points) );
		}
	}
};
;// CONCATENATED MODULE: ./src/js/ScrollActivator.js
class ScrollActivator {
	constructor(attribute) {
		this.attribute = attribute;

		this.observer = new IntersectionObserver(scrollWaiters => {
			scrollWaiters.forEach( observable => {
				if (observable.intersectionRatio > 0) {
					observable.target.classList.add('scroll-active');
				} else {
					observable.target.classList.remove('scroll-active');
				}
			});
		}, {
			threshold: 0
		});

		this.observables = document.querySelectorAll(`*[data-${this.attribute}]`);
		this.observables.forEach(element => this.observer.observe( element ) );
	}
};
;// CONCATENATED MODULE: ./src/js/main.js






window.addEventListener('load', () => {
	const cursorStyle = document.createElement('style');
	cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }';
	document.head.appendChild(cursorStyle);

	const scene1Canvas = new LightingParticles('#particles', '#lighter');

	const scrllAct = new ScrollActivator('scroll');
});
/******/ })()
;