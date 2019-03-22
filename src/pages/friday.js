import {GiphyPreset} from '@presets/ImagePreset';
import TextPreset from '@presets/TextPreset';


let question = new TextPreset({content: "Is it friday?", top: '100px'});
let yes = new TextPreset({content: "YES", bottom: '100px'});
let no = new TextPreset({content: "NO", bottom: '100px'});

let friday = [
    [new GiphyPreset('10hO3rDNqqg2Xe'), yes, question],
    [new GiphyPreset('3oEjHKjVoNVsCeMoDe'), yes, question],
    [new GiphyPreset('sTczweWUTxLqg'), yes, question],
    [new GiphyPreset('b23a67ZhemOe4'), yes, question],
    [new GiphyPreset('yLPJtMLnRiP6w'), yes, question]
];
let notFriday = [
    [new GiphyPreset('o5oLImoQgGsKY'), no, question],
    [new GiphyPreset('5gUnOrltPvZzW'), no, question],
    [new GiphyPreset('3o6Zt62PeJeFUDwBUI'), no, question],
    [new GiphyPreset('34ZNcoaN5u4hi'), no, question],
    [new GiphyPreset('l2JhpjWPccQhsAMfu'), no, question]
]

let variants = [];
if(new Date().getDay() == 5) {
    variants = friday;
} else {

}

export let Variants = variants;
