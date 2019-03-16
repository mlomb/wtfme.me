import Preset from './Preset';

export default class AudioPreset extends Preset {
	constructor(url) {
		super();
		this.url = url;
	}

	init(root) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', 500);
        iframe.setAttribute('height', 300);
        iframe.setAttribute('scrolling', 'no');
        iframe.setAttribute('frameborder', "no");
        iframe.setAttribute('allow', "autoplay");
        iframe.classList.add('audio');
        iframe.src = this.url;
        root.appendChild(iframe);
	}
}
