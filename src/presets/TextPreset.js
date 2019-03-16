import Preset from './Preset';

export default class TextPreset extends Preset {
	constructor(content, top) {
		super();
		this.content = content;
        this.top = top;
	}

	init(root) {
		var p = document.createElement('p');
		p.innerHTML = this.content;
		p.style.top =  this.top + '%';
        p.classList.add("text");
		root.appendChild(p);
	}
}
