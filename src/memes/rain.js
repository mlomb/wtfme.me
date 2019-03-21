import TextRainPreset from '@presets/TextRainPreset';
import TextPreset from '@presets/TextPreset';

let parts = window.location.pathname.split('/rain/');

export let Variants = parts.length != 2 ? [
	new TextPreset({
		content: 'rain/<span class="rainbow">&lt;text&gt;</span>',
		center: true,
		html: true
	})
] : [
	new TextRainPreset(decodeURIComponent(parts[1]))
];
