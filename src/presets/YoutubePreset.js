import Preset from './Preset';

export default class YoutubePreset extends Preset {
	constructor(video_id) {
		super();
		this.video_id = video_id;
	}

	init(root) {
		root.innerHTML = `
			<iframe style="width:100%;height:100vh" src="https://www.youtube.com/embed/${this.video_id}?controls=0&loop=1&autoplay=1&playlist=${this.video_id}" frameborder="0" allowfullscreen></iframe>
		`;
	}
}
