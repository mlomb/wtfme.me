import Preset from './Preset';

export default class AudioPreset extends Preset {
    constructor(options) {
		super();
		this.options = Object.assign({
            url: undefined,
            autoplay: true,
            loop: false,
            playonclick: true
        }, options);
	}

    init(root) {
        this.audio = document.createElement('audio');
        this.audio.src = this.options.url;
        this.audio.loop = this.options.loop;

        root.appendChild(this.audio);

        if(this.options.playonclick)
            root.addEventListener('pointerup', this.play.bind(this));
		if(this.options.autoplay) {
			let canplay = () => {
				this.play();
				this.audio.removeEventListener('canplaythrough', canplay, false);
			}

			this.audio.addEventListener('canplaythrough', canplay, false);
		}
    }

    play(){
        let play = () => {
            this.audio.play().catch((e) => {
    			console.error("Couldn't play audio:", e.message);

                if(e.name === 'NotAllowedError') {
                    // wait an interaction
                    toggleInterationRequired(true);
                    var firstInteraction = () => {
                        toggleInterationRequired(false);
                        this.audio.play().catch((e) => {
                			console.error("Couldn't play audio, for real:", e.message);
                        });
                        window.removeEventListener('pointerup', firstInteraction, false);
                    };
                    window.addEventListener('pointerup', firstInteraction, false);
                }
    		});
        };
        if(this.audio.duration > 0 && !this.audio.paused) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        play();
    }
}
