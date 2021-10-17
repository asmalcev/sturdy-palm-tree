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

export { 
	distance,
	isVisible,
	debounce,
	getRandomIntegerFromRange,
	getRandomFromRange
};