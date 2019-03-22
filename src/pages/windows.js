import CanvasPreset from '@presets/CanvasPreset.js';

class WindowsError extends CanvasPreset {
    constructor(url){
        super();
        this.url = `https://cdn.staticaly.com/img/${url}`;
        this.backgrounds = ['wjbADbb', 'lojmr', 'FyCO6pw'];
    }

    init(root){
		var bg = document.createElement('div');
		bg.classList.add("fullscreen-cover");
		bg.style.backgroundImage = 'url(https://cdn.staticaly.com/img/i.imgur.com/' + this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)] + '.jpg)';

        super.init(bg);
		root.prepend(bg);

        this.img = new Image();
        this.img.src = this.url;
    }

	frame() {
		const ctx = this.ctx;
		ctx.drawImage(this.img, this.pointerPosition.x - this.img.width / 2, this.pointerPosition.y - this.img.height / 2);
	}
}

export let Variants = [
    new WindowsError('i.imgur.com/jccR2lH.jpg'), // delete Windows
    new WindowsError('i.imgur.com/GUfDHmu.jpg'), // error recording error code
    new WindowsError('i.imgur.com/UyIeVFW.png'), // linux
    new WindowsError('i.imgur.com/kwVhVDZ.png'), // windows error recording has stopped working
    new WindowsError('i.imgur.com/UIDJqA2.png'), // something happened
    new WindowsError('i.imgur.com/xh7hbWB.jpg'), // AAAAAAAAAAAAAA
];
