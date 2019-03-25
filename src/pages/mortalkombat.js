import AudioPreset from '@presets/AudioPreset';
import {GiphyPreset} from '@presets/ImagePreset';


let fatality = new AudioPreset({
    url:'https://bottons.xyz/audio/Mortal%20Kombat%20-%20Fatality.mp3',
    playonclick: true
})
let toasty = new AudioPreset({
    url:'https://bottons.xyz/audio/Toasty%20mortal%20kombat.mp3',
    playonclick: true
})

export let Variants = [
    [new GiphyPreset('rJwm9D3r9Xeda'), fatality],
    [new GiphyPreset('CPjyNsq2DDaXm'), fatality],
    [new GiphyPreset('cC0BgqxFPCpPy'), fatality],
    [new GiphyPreset('5qpYb3R5JRES4'), fatality],
    [new GiphyPreset('CHSCYIZ7sEcZG'), toasty],
    [new GiphyPreset('7gNSMHJ5BcCGI'), toasty],
    [new GiphyPreset('rLJJkk3cymTeg'), toasty],
    [new GiphyPreset('3lD8BVwbzXamc'), toasty],
    [new GiphyPreset('Ulk8kTg0udVcY'), new AudioPreset({
        url:'https://bottons.xyz/audio/mortal%20kombat.mp3',
        playonclick: true
    })]
];
