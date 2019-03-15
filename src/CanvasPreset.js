import Preset from './Preset';

export default class CanvasPreset extends Preset {
	constructor(draw) {
		super();
		this.draw = draw;
	}

	init(root) {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');

		root.appendChild(this.canvas);

		window.addEventListener('resize', this.resize.bind(this));
		window.addEventListener('orientationchange', this.resize.bind(this));
		this.resize();
	}

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	frame() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
