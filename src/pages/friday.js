import {GiphyPreset} from '@presets/ImagePreset';
import TextPreset from '@presets/TextPreset';

let day = new Date().getDay();
let isFriday = day == 5;

let content = 'NO';
switch(day) {
	case 4: content = `ALMOST`; break;
	case 5: content = `<span class="rainbow">YES</span>`; break;
	case 6: content = `JUST MISSED IT`; break;
}

let question = new TextPreset({content: "Is it friday?", top: '100px'});
let answer = new TextPreset({
	content: content,
	html: true,
	bottom: '100px'
});

let friday = [
    '10hO3rDNqqg2Xe',
    '3oEjHKjVoNVsCeMoDe',
    'sTczweWUTxLqg',
    'b23a67ZhemOe4',
    'bTveRfBYidENtRBJw9',
    'yLPJtMLnRiP6w'
];
let notFriday = [
    'o5oLImoQgGsKY',
    '5gUnOrltPvZzW',
    '3o6Zt62PeJeFUDwBUI',
    '34ZNcoaN5u4hi',
    'l2JhpjWPccQhsAMfu'
];

export let Variants = (isFriday ? friday : notFriday).map((gif) => {
	return [new GiphyPreset(gif), question, answer];
});
