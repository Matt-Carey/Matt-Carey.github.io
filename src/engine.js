class Engine {
	constructor(canvas) {
		if(canvas != null) {
			this.canvas = canvas;
			this.ctx = this.canvas.getContext('2d');
		}
		this.time = Date.now();
		
		this.background = new Image();
		this.background.src = './content/background.png';
	}
	
	tick() {
		let timeNow = Date.now();
		let dt = timeNow - this.time;
		this.time = timeNow;
		//console.log('Delta Time:' + dt + ', Time Now:' + this.time);
	}
	
	setResolution(width, height) {
		if(this.canvas) {
			this.canvas.width = width;
			this.canvas.height = height;
		}
	}
	
	draw() {
		if(this.ctx) {
			const width = this.canvas.width;
			const height = this.canvas.height;
			if(this.background != null && this.background.complete) {
				const xOffset = (this.time / width) % width;
				this.ctx.drawImage(this.background, xOffset, 0, width, height);
				this.ctx.drawImage(this.background, xOffset - width, 0, width, height);
			}
		}
	}
}

export { Engine };
