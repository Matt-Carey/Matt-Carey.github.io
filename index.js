import { Engine } from './src/engine.js';

;(function () {
	let canvasElement = document.getElementById('canvas');
	let engine = new Engine(canvasElement);
	
	function main(tFrame) {
		engine.tick();
		engine.draw();
		engine.stop = window.requestAnimationFrame(main);
	}
	main(0);
})();
