import BackgroundPreset from './BackgroundPreset';

export default class ImagePreset extends BackgroundPreset {
	constructor(url) {
		super({
			url: `//${url}`
		});
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
