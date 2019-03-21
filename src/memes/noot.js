import {GiphyPreset} from '@presets/ImagePreset';
import AudioPreset from '@presets/AudioPreset';

let gifs = [
    new GiphyPreset('VhXqTSbvMGpoY'),
    new GiphyPreset('Q2qGVhJJvD68w'),
    new GiphyPreset('psv1zrhPZM6WI')
];
let audios = [
    'https://bottons.xyz/audio/NOOT%20NOOT%20MEME.mp3',
    'https://bottons.xyz/audio/AND%20HIS%20NAME%20IS%20NOOT%20CENA.mp3',
    `https://bottons.xyz/audio/Anomaly's%20noot%20noot.mp3`,
    `https://bottons.xyz/audio/I'm%20in%20love%20with%20the%20NOOT%20NOOT`,
    'https://bottons.xyz/audio/NOOT%20NOOT%20NOOT.mp3'
];

let variants = [];
for(let gif of gifs) {
    for(let audio of audios) {
        variants.push([gif, new AudioPreset({
            url: audio,
            playonclick: true
        })]);
    }
}

export let Variants = variants;
