import { LightingParticles } from './LightingParticles';
import { ScrollActivator } from './ScrollActivator';

import '../css/index.css';
import '../css/media.css';

window.addEventListener('load', () => {
	const cursorStyle = document.createElement('style');
	cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }';
	document.head.appendChild(cursorStyle);

	const scene1Canvas = new LightingParticles('#particles', '#lighter');

	const scrllAct = new ScrollActivator('scroll');
});