import {GiphyPreset} from '@presets/ImagePreset';
import TextPreset from '@presets/TextPreset';
import Preset from '@presets/Preset';

class VibrateRandomly extends Preset {
	init(root) {
		this.timeout = null;
	}

	vibrate() {
		let duration = Math.random() * 200 + 50;
		let wait = Math.random() * 100 + 50;

		navigator.vibrate(duration);

		this.timeout = setTimeout(this.vibrate.bind(this), duration + wait);
	}

	frame(deltaTime) {
		if(!this.timeout && 'vibrate' in navigator) {
			// this will be executed only once

			if(navigator.vibrate(0)) { // allowed?
				toggleInterationRequired(false);
				this.vibrate();
			} else {
				toggleInterationRequired(true);
			}
		}
	}
}

let triggereds = [
	'ZEVc9uplCUJFu',
	'YUHmEjIf3ETYMPQxbK',
	'jA0J9vtUqDIpq',
	'cscdnFmNr1GW9Xil1j'
];

export let Variants = triggereds.map((gif) => {
	let presets = [
		new GiphyPreset(gif)
	];

	if(!('vibrate' in navigator)) {
		console.log("navigator.vibrate not supported :(");
		presets.push(new TextPreset({
			content: `Your browser doesn't support vibrate 😥`,
			bottom: '15px',
			fontSize: '20px'
		}));
	} else if(mobile_detect.mobile()) {
		presets.push(new VibrateRandomly());
	} else {
		presets.push(new TextPreset({
			content: `📳 Better experience in mobile 📳`,
			bottom: '15px',
			fontSize: '30px'
		}));
	}
	return presets;
});
