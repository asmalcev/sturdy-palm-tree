export class ScrollActivator {
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