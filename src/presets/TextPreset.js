import Preset from './Preset';

export default class TextPreset extends Preset {
	constructor(options) {
		super();

		this.options = Object.assign({
			content: '<no content>',
			top: undefined,
			bottom: undefined,
			center: false,
			html: false,
			select: true,
			fontSize: undefined
		}, options);
	}

	init(root) {
		this.element = document.createElement('p');
		this.updateText();
		if(this.options.center) {
			this.element.style.top = '50%';
			this.element.style.transform = 'translateY(-50%)';
		} else {
			this.element.style.top =  this.options.top;
			this.element.style.bottom =  this.options.bottom;
		}
        this.element.classList.add("text");
		if(!this.options.select) {
        	this.element.classList.add("noselect");
		}
		if(this.options.fontSize) {
			this.element.style.fontSize = this.options.fontSize;
		}
		root.appendChild(this.element);
	}

	updateText() {
		if(this.options.html)
			this.element.innerHTML = this.options.content;
		else
			this.element.innerText = this.options.content;
	}
}
