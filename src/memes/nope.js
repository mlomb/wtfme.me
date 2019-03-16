import {GiphyPreset} from '@presets/ImagePreset';
import MovingElementsPreset from '@presets/MovingElementsPreset';
import YoutubePreset from '@presets/YoutubePreset';

export let Variants = [
	new GiphyPreset('6h4z4b3v6XWxO'), // octopus running
	new GiphyPreset('3ohs7KViF6rA4aan5u'), // homer
	new GiphyPreset('wofftnAdDtx4s'), // sponge bob
	new MovingElementsPreset({
		max_speed: 0.5,
		make: () => {
			let nope = document.createElement('span');
			nope.style.opacity = Math.random() * 0.4 + 0.6;
			nope.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
			nope.style.fontSize = (10 + Math.random() * 35) + 'px';
			nope.innerText = `${Math.random() > 0.5 ? 'N' : 'n'}${Math.random() > 0.5 ? 'O' : 'o'}${Math.random() > 0.5 ? 'P' : 'p'}${Math.random() > 0.5 ? 'E' : 'e'}`;
			return nope;
		}
	}),
	new YoutubePreset('gvdf5n-zI14') // nope.avi
];
