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
        iframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+this.url+'&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
        root.appendChild(iframe);
	}
}
