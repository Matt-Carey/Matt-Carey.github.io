import { Engine } from 'https://mattcarey.com/SnailEngine/engine/src/engine.js';
import { Config } from 'https://mattcarey.com/SnailEngine/engine/src/config.js';

;(function() {
	Engine.init().then(engine => {
		const cfg = Config.get();
		engine.world.load(cfg['world']['startup']);
	});
})();
