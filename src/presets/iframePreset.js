import Preset from './Preset';

export default class iframePreset extends Preset {
	constructor(options) {
		super();

		this.options = Object.assign({
			url: null,
			display: 'hidden' // also fullscreen
		}, options);
	}

	init(root) {
        var iframe = document.createElement('iframe');

		if(this.options.display == 'fullscreen') {
        	iframe.style.width = '100%';
        	iframe.style.height = '100vh';
		} else {
        	iframe.style.opacity = '0';
        	iframe.style.position = 'absolute';
        	iframe.style.top = '-5000';
		}

        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', 'no');
        iframe.setAttribute('allow', 'autoplay');

		iframe.src = this.options.url;
        root.appendChild(iframe);
	}
}
