import {GiphyPreset} from '../ImagePreset';
import RainPreset from '../RainPreset';
import YoutubePreset from '../YoutubePreset';

export let Variants = [
	new GiphyPreset('6h4z4b3v6XWxO'),
	new GiphyPreset('3ohs7KViF6rA4aan5u'),
	new RainPreset(function() {
		let nope = document.createElement('span');
		nope.style.opacity = Math.random() * 0.4 + 0.6;
		nope.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
		nope.style.fontSize = (10 + Math.random() * 25) + 'px';
		nope.innerText = `${Math.random() > 0.5 ? 'N' : 'n'}${Math.random() > 0.5 ? 'O' : 'o'}${Math.random() > 0.5 ? 'P' : 'p'}${Math.random() > 0.5 ? 'E' : 'e'}`;
		return nope;
	}),
	new YoutubePreset('gvdf5n-zI14')
];
