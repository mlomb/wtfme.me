import Preset from './Preset';

export default class ImagePreset extends Preset {
	constructor(url) {
		super();
		this.url = `https://cdn.staticaly.com/img/${url}`;
	}

	init(root) {
		var img = document.createElement('div');
		img.classList.add("fullscreen-contain");
		img.style.backgroundImage = 'url(' + this.url + ')';
		root.appendChild(img);
	}
}

export class GiphyPreset extends ImagePreset {
	constructor(id) {
		super(`media.giphy.com/media/${id}/giphy.gif`);
	}
}

export class ImgurPreset extends ImagePreset {
	constructor(id) {
		super(`i.imgur.com/${id}.jpg`);
	}
}
