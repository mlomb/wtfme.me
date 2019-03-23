import AudioPreset from '@presets/AudioPreset';
import {GiphyPreset} from '@presets/ImagePreset';

export let Variants = [
	[
        new GiphyPreset('ljSSxlYrMA7ss'), new AudioPreset({
            url: `https://bottons.xyz/audio/I'm%20Blue.mp3`,
            loop: true,
            playonclick: false
        })
    ]
];
