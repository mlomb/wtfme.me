import AudioPreset from '@presets/AudioPreset';
import {GiphyPreset} from '@presets/ImagePreset';

let gifs = ['Tte95WnDGq5Gg', '3eukDb5E6ZNkI'];
let audios = ['Teemo%20attack', 'Captain%20Teemo', 'Teemo%20-%20Laugh%203', 'Teemo%20-%20Yes%2C%20sir', 'Teemo%20-%20Laugh%201', 'Teemo%20-%20Laugh%202',
'Never%20understimate', `Teemo%20-%20Size%20doesn´t%20mean%20everything`]

let variants = [];

for(let gif of gifs){
	for(let audio of audios){
		variants.push([new AudioPreset({
			url:'https://bottons.xyz/audio/' + audio + '.mp3',
			playonclick: true
		}), new GiphyPreset(gif)])
	}
}

export let Variants = variants;
