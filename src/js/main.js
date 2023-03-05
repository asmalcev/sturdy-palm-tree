import { LightingParticles } from './LightingParticles';
import { ScrollActivator } from './ScrollActivator';
import { ListOfClosable } from './ListOfClosable';

import '../css/index.css';

window.addEventListener('load', () => {
	const cursorStyle = document.createElement('style');
	cursorStyle.innerHTML = '* { cursor: url(images/cursor.svg) 6 6, pointer; }';
	document.head.appendChild(cursorStyle);

	const scene1Canvas = new LightingParticles('#particles', '#lighter');

	const scrllAct = new ScrollActivator('scroll');

	const closelst = new ListOfClosable(
		document.querySelector('#close-list'),
		[
			{
				label: 'JavaScript',
				p: '<span class="secondary">Skills:</span> React, Webpack, Node.js, AJAX, Canvas, WebSocket'
			},
			{
				label: 'Python',
				p: '<span class="secondary">Skills:</span> Django, Uvicorn, WSGI, ASGI'
			},
			{
				label: 'Other',
				p: '<span class="secondary">Skills:</span> Git, SQL, Algorithms and Structs of data'
			},
			{
				label: 'C++',
				p: '<span class="secondary">Skills:</span> SDL1.2, SDL2'
			},
		]
	);
});