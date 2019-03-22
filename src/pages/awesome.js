import {GiphyPreset} from '@presets/ImagePreset';
import TextPreset from '@presets/TextPreset';


let question = new TextPreset({content: "Am I awesome?", top: '100px'});

let answers = ['NO', 'NOPE', 'ARE YOU?', 'OF COURSE NOT', 'YES', 'DAMN YES','ALWAYS', 'HELLS YEAH!'];


export let Variants = [
    [question, new TextPreset({
        content:answers[Math.floor(Math.random() * answers.length)],
        bottom: '100px'
    })]
];
