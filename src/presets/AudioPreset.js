import Preset from './Preset';

export default class AudioPreset extends Preset {
    constructor(url) {
		super();
		this.url = url;
	}

    init(root) {
		var audio = document.createElement('audio');
        audio.src = this.url;

		root.appendChild(audio);
	}
}
