import { isVisible, debounce } from './utils';
export class ScrollActivator {
	constructor(attribute) {
		this.attribute = attribute;

		this.check();
		window.addEventListener('scroll', debounce(this.check.bind(this), 50));
	}

	check() {
		document.querySelectorAll(`*[data-${this.attribute}]`).forEach(element => {
			if (isVisible(element)) {
				element.classList.add(element.dataset[this.attribute]);
				element.removeAttribute(`data-${this.attribute}`);
			}
		})
	}
};