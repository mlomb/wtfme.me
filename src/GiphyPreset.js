import Preset from './Preset';

export default class GiphyPreset extends Preset {
	constructor(id) {
		super();
		this.url = `https://media.giphy.com/media/${id}/giphy.gif`;
	}

	init(root) {
		var img = document.createElement('img');
		img.src = this.url;

		root.appendChild(img);
	}
}
