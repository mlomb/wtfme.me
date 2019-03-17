import AudioPreset from '@presets/AudioPreset';
import CanvasPreset from '@presets/CanvasPreset.js';
import {GiphyPreset} from '@presets/ImagePreset';

var audios = ['591518472', '199105914'];

export let Variants = [
	[new AudioPreset(audios[Math.floor(Math.random() * audios.length)]), new GiphyPreset('Tte95WnDGq5Gg')]
];
