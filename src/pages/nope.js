import {GiphyPreset} from '@presets/ImagePreset';
import TextRainPreset from '@presets/TextRainPreset';
import YoutubePreset from '@presets/YoutubePreset';

export let Variants = [
	new GiphyPreset('6h4z4b3v6XWxO'), // octopus running
	new GiphyPreset('3ohs7KViF6rA4aan5u'), // homer
	new GiphyPreset('wofftnAdDtx4s'), // sponge bob
	new TextRainPreset(() => {
		return `${Math.random() > 0.5 ? 'N' : 'n'}${Math.random() > 0.5 ? 'O' : 'o'}${Math.random() > 0.5 ? 'P' : 'p'}${Math.random() > 0.5 ? 'E' : 'e'}`;
	}),
	new YoutubePreset('gvdf5n-zI14') // nope.avi
];
