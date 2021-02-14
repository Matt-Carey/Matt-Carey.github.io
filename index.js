import { Engine } from './src/engine.js';

;(function () {
	var canvasElement = document.getElementById('canvas');
	let engine = new Engine(canvasElement);
	engine.setResolution(640, 480);
	
	function main(tFrame) {
		engine.tick();
		engine.draw();
		engine.stop = window.requestAnimationFrame(main);
	}
	main(0);
})();
