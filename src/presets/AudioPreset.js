import Preset from './Preset';

export default class AudioPreset extends Preset {
    constructor(options) {
		super();
		this.options = Object.assign({
            url: undefined,
            autoplay: true,
            loop: false,
            playonclick: false
        }, options);
	}

    init(root) {
        this.audio = document.createElement('audio');
        this.audio.src = this.options.url;
        this.audio.loop = this.options.loop;
        this.audio.autoplay = this.options.autoplay;

        root.appendChild(this.audio);

        if(this.options.playonclick)
            window.addEventListener('pointerdown', this.pointerdown.bind(this));
    }

    pointerdown(){
        this.audio.play();
    }
}
