import Preset from './Preset';

export default class CanvasPreset extends Preset {
	init(root) {
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
        this.mousePosition = {};

		root.appendChild(this.canvas);

		window.addEventListener('resize', this.resize.bind(this));
		window.addEventListener('orientationchange', this.resize.bind(this));
        window.addEventListener('mousemove', this.mousemove.bind(this));
		this.resize();
	}

    mousemove(e) {
        this.mousePosition = { x: e.pageX, y: e.pageY };
    }

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	frame() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
