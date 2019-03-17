import iframePreset from './iframePreset';

export default class SoundCloudPreset extends iframePreset {
	constructor(track_id) {
		super({
			url: `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${track_id}&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`,
			display: 'hidden'
		});
	}
}
