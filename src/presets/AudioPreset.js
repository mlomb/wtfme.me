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

        root.appendChild(this.audio);

        if(this.options.playonclick)
            window.addEventListener('pointerdown', this.play.bind(this));
		if(this.options.autoplay) {
			let canplay = () => {
				this.play();
				this.audio.removeEventListener('canplaythrough', canplay, false);
			}

			this.audio.addEventListener('canplaythrough', canplay, false);
		}
    }

    play(){
        this.audio.play().catch((e) => {
			console.error("Couldn't play audio:", e.message);
		});
    }
}
