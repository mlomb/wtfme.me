import Preset from './Preset';

export default class RainPreset extends Preset {
	constructor(make) {
		super();

		this.drops = [];
		this.make = make; // make() should return a DOM element
		this.max_drops = window.mobile_detect.mobile() ? 40 : 120;
	}

	createDrop() {
		let raindrop = this.make();

		raindrop.style.position = 'absolute';

		raindrop.rot = Math.random() * 50 - 25;
		raindrop.x = Math.random() * 1.2 - 0.1;
		raindrop.y = Math.random() * 0.5 - 0.5;
		raindrop.y_acc = 0.002 + Math.random() * 0.01;

		this.container.appendChild(raindrop);
		this.drops.push(raindrop);
	}

	init(root) {
		this.container = document.createElement('div');
		this.container.classList.add('noselect');

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
		while(this.drops.length < this.max_drops)
			this.createDrop();
		for(let t of this.drops) {
			t.style.transform = `translate(${(t.x * window.innerWidth) + 'px'}, ${(t.y * window.innerHeight) + 'px'}) rotate(${t.rot}deg)`;
		}
	}
}
