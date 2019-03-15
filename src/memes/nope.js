import GiphyPreset from '../GiphyPreset';
import RainPreset from '../RainPreset';

export let Variants = [
	new GiphyPreset('6h4z4b3v6XWxO'),
	new GiphyPreset('3ohs7KViF6rA4aan5u'),
	new RainPreset(function() {
		let nope = document.createElement('span');
		nope.innerText = `NOP` + (Math.random() > 0.5 ? 'E' : 'e');
		return nope;
	})
];
