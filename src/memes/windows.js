import CanvasPreset from '../CanvasPreset';

class WindowsError extends CanvasPreset {
    constructor(url){
        super();
        this.url = url;
    }

    init(root){
		var bg = document.createElement('div');
		bg.classList.add("fullscreen-bg");
		bg.style.backgroundImage = 'url(http://i.imgur.com/lojmr.jpg)';

        super.init(bg);
		root.prepend(bg);

        this.img = new Image();
        this.img.src = this.url;
    }

	frame() {
        super.frame();
		const ctx = this.ctx;
		ctx.drawImage(this.img, this.mousePosition.x - this.img.width / 2, this.mousePosition.y - this.img.height / 2);
	}
}

export let Variants = [
    new WindowsError('https://i.imgur.com/jccR2lH.jpg')
];
