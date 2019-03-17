import Preset from './Preset';

/*
	TODO: Fix on Firefox
		  Optimize
*/

export default class MovingElementsPreset extends Preset {
	constructor(options) {
		super();

		this.options = Object.assign({
			make: () => { throw new Error("Not implemented"); }, // should return a DOM element
			direction: 'vertical',
			max_elements: window.mobile_detect.mobile() ? 40 : 120,
			max_rotation: 50,
			max_speed: 0.4
		}, options);

		this.elements = [];
	}

	create() {
		let element = this.options.make();

		element.style.position = 'absolute';

		element.rot = Math.random() * this.options.max_rotation - (this.options.max_rotation / 2);

		let fixed = Math.random() * 1.1 - 0.05;
		let variable = (this.options.max_speed < 0 ? 1.7 : 0) + Math.random() * 0.5 - 0.7;

		if(this.options.direction == 'vertical') {
			element.x_pos = fixed;
			element.y_pos = variable;
		} else {
			element.x_pos = variable;
			element.y_pos = fixed;
		}

		var speed = 0.2 * this.options.max_speed + this.options.max_speed * 0.8 * Math.random();

		element.x_speed = this.options.direction == 'horizontal' ? speed : 0;
		element.y_speed = this.options.direction == 'vertical' ? speed : 0;

		this.container.appendChild(element);
		this.elements.push(element);
	}

	init(root) {
		this.container = document.createElement('div');
		this.container.classList.add('noselect');

		root.appendChild(this.container);
	}

	frame(delta) {
		var i = this.elements.length;
		while(i--) {
			let t = this.elements[i];
			t.x_pos += t.x_speed * delta;
			t.y_pos += t.y_speed * delta;

			let speed = this.options.direction == 'horizontal' ? t.x_speed : t.y_speed;
			let pos = this.options.direction == 'horizontal' ? t.x_pos : t.y_pos;

			if((speed > 0 && pos >=  1) ||
			   (speed < 0 && pos < -0.1)) {
				this.elements.splice(i, 1);
				t.remove();
			}
		}
		while(this.elements.length < this.options.max_elements)
			this.create();
		for(let t of this.elements) {
			t.style.transform = `translate(calc(${(t.x_pos * window.innerWidth) + 'px'} - 50%), calc(${(t.y_pos * window.innerHeight) + 'px'} - 50%)) rotate(${t.rot}deg)`;
		}
	}
}
