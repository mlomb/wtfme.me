import Preset from './Preset';

export default class TextPreset extends Preset {
	constructor(options) {
		super();

		this.options = Object.assign({
			content: '<no content>',
			top: undefined,
			bottom: undefined,
			center: false
		}, options);
	}

	init(root) {
		var p = document.createElement('p');
		p.innerText = this.options.content;
		if(this.options.center) {
			p.style.top = '50%';
			p.style.transform = 'translateY(-50%)';
		} else {
			p.style.top =  this.options.top;
			p.style.bottom =  this.options.bottom;
		}
        p.classList.add("text");
		root.appendChild(p);
	}
}
