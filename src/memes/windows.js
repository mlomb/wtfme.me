import CanvasPreset from '../CanvasPreset';

class WindowsError extends CanvasPreset {
    constructor(url){
        super();
        this.url = url;
    }

    init(root){
		var bg = document.createElement('div');
		bg.classList.add("fullscreen-cover");
		bg.style.backgroundImage = 'url(http://i.imgur.com/lojmr.jpg)';

        super.init(bg);
		root.prepend(bg);

        this.img = new Image();
        this.img.src = this.url;
    }

	frame() {
		const ctx = this.ctx;
		ctx.drawImage(this.img, this.mousePosition.x - this.img.width / 2, this.mousePosition.y - this.img.height / 2);
	}
}

export let Variants = [
    new WindowsError('https://i.imgur.com/jccR2lH.jpg'), // delete Windows
    new WindowsError('https://i.imgur.com/GUfDHmu.jpg'), // error recording error code
    new WindowsError('https://i.imgur.com/UyIeVFW.png'), // linux
    new WindowsError('https://i.imgur.com/kwVhVDZ.png'), // windows error recording has stopped working
    new WindowsError('https://i.imgur.com/UIDJqA2.png'), // something happened
    new WindowsError('https://i.imgur.com/xh7hbWB.jpg'), // AAAAAAAAAAAAAA
];
