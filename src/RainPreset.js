import Preset from './Preset';

export default class RainPreset extends Preset {
	constructor(id) {
		super();
	}

	init(root) {
		this.container = document.createElement('div');

		root.appendChild(this.container);
	}
}
