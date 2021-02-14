class Engine {
	constructor(canvas) {
		if(canvas != null) {
			this.canvas = canvas;
			this.ctx = this.canvas.getContext('2d');
		}
		this.time = Date.now();
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
			if(this.prevx == null) {
				this.prevx = Math.floor(Math.random() * this.canvas.width);
			}
			if(this.prevy == null) {
				this.prevy = Math.floor(Math.random() * this.canvas.height);
			}
			
			let x = Math.floor(Math.random() * this.canvas.width);
			let y = Math.floor(Math.random() * this.canvas.height);
			
			let r = Math.floor(Math.random() * 256);
			let g = Math.floor(Math.random() * 256);
			let b = Math.floor(Math.random() * 256);
			
			this.ctx.strokeStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
			
			this.ctx.lineWidth = 1;
			this.ctx.beginPath();
			this.ctx.moveTo(this.prevx, this.prevy);
			this.ctx.lineTo(x, y);
			this.ctx.stroke();
			
			this.prevx = x;
			this.prevy = y;
		}
	}
}

export { Engine };
