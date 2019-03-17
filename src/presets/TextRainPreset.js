import MovingElementsPreset from './MovingElementsPreset';

export default class RainPreset extends MovingElementsPreset {
	constructor(input) {
		super({
			max_speed: 0.5,
			make: () => {
				let nope = document.createElement('span');
				nope.style.opacity = Math.random() * 0.4 + 0.6;
				nope.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
				nope.style.fontSize = (10 + Math.random() * 35) + 'px';
				nope.innerText = typeof input === 'function' ? input() : input;
				return nope;
			}
		});
	}
}
