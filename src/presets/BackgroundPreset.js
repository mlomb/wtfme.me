import Preset from './Preset';

export default class BackgroundPreset extends Preset {
    constructor(options) {
		super();
		this.options = Object.assign({
            color: undefined,
            url: undefined
        }, options);
	}

	init(root) {
		this.background = document.createElement('div');
		this.background.classList.add("fullscreen-contain");
        if(this.options.url) {
            this.background.style.backgroundImage = `url(${this.options.url})`;
        }
        if(this.options.color) {
            this.background.style.backgroundColor = this.options.color;
        }
		root.appendChild(this.background);
	}
}
