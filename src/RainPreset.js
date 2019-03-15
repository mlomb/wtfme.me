import Preset from './Preset';

export default class RainPreset extends Preset {
	constructor(make) {
		super();

		this.drops = [];
		this.make = make; // make should return a DOM element
	}

	createDrop() {
		let raindrop = this.make();

		raindrop.style.position = 'absolute';

		raindrop.x = Math.random() * 1.2 - 0.1;
		raindrop.y = Math.random() * 0.5 - 0.5;
		raindrop.y_acc = 0.002 + Math.random() * 0.01;

		this.container.appendChild(raindrop);
		this.drops.push(raindrop);
	}

	init(root) {
		this.container = document.createElement('div');

		root.appendChild(this.container);
	}

	frame() {
		var i = this.drops.length;
		while(i--) {
			let t = this.drops[i];
			t.y += t.y_acc;
			if(t.y >= 1) {
				this.drops.splice(i, 1);
				t.remove();
			}
		}
		while(this.drops.length < 200)
			this.createDrop();
		for(let t of this.drops) {
			t.style.left = (t.x * 100).toFixed(2) + '%';
			t.style.top = (t.y * 100).toFixed(2) + '%';
		}
	}
}
