import {ImgurPreset} from '@presets/ImagePreset';
import BackgroundPreset from '@presets/BackgroundPreset';
import TextPreset from '@presets/TextPreset';
import Preset from '@presets/Preset';

class TimePreset extends TextPreset {
	constructor() {
		super({
			content: `<span id="dogetime" class="rainbow"></span>`,
			bottom: '10%',
			html: true,
			select: false,
			fontSize: '60px'
		})
	}

	init(root) {
		super.init(root);

		this.time = document.getElementById("dogetime");
	}

	frame(deltaTime) {
		super.frame(deltaTime);

		this.time.innerText = new Date().toLocaleTimeString();
	}
}

class DogePet extends Preset {
	init(root) {
		root.style.cursor = 'pointer';
		root.addEventListener('pointerdown', this.pointerdown.bind(this));

		setTimeout(() => {
			this.say("pls press to pet", 2000);
		}, 500);

		this.saying = [];
		this.last = 0;

		this.container = document.createElement('div');
		this.container.classList.add('noselect');

		root.appendChild(this.container);
	}

	say(text, duration = 1000) {
		let say = document.createElement('span');
		say.style.position = 'absolute';
		say.style.top = (Math.random() * 80 + 2) + '%';
		say.style.left = (Math.random() * 80 + 2) + '%';
		say.style.color = 'hsl(' + Math.floor(Math.random() * 360) +', 100%, 50%)';
		say.style.fontSize = (Math.floor(Math.random() * 10) + 25) + 'px';
		//say.style.textShadow = 'black 0px 0px 6px';
		say.style.fontFamily = '"Comic Sans MS", "Marker Felt", sans-serif';
		say.innerText = text;
		say.time = Date.now();
		say.duration = duration;

		this.container.appendChild(say);
		this.saying.push(say);
	}

	pointerdown() {
		let now = Date.now();
		if(now - this.last < 200) return; // 3 per second
		this.last = now;

		let sayings = [
			"wow",
			"such time",
			"wow you late",
			"so early",
			"pls pet more",
			"stop wasting time",
			"such clock",
			"much numbers",
			"nice human",
			"more pat",
			"good boi",
			"fluffy boi",
			"nice doggo",
			"much soft",
			"bedtime?",
			"love u",
			"very late",
			"much sunshine",
			"good nite"
		];
		this.say(sayings[Math.floor(Math.random() * sayings.length)]);
	}

	frame(deltaTime) {
		super.frame(deltaTime);

		var i = this.saying.length;
		while(i--) {
			let say = this.saying[i];

			if(Date.now() - say.time > say.duration) {
				this.saying.splice(i, 1);
				say.remove();
			}
		}
	}
}

export let Variants = [
	[
		new BackgroundPreset({ color: '#ffe698'}),
		new ImgurPreset('BsddzzM'),
		new TimePreset(),
		new DogePet()
	]
];
