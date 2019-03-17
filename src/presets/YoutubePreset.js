import iframePreset from './iframePreset';

export default class YoutubePreset extends iframePreset {
	constructor(video_id) {
		super({
			url: `https://www.youtube.com/embed/${video_id}?controls=0&loop=1&autoplay=1&playlist=${video_id}`,
			display: 'fullscreen'
		});
	}
}
