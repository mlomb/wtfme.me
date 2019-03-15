import CanvasPreset from '../CanvasPreset';

class WindowsError extends CanvasPreset {

	frame() {
		const ctx = this.ctx;

		ctx.fillStyle = 'red';
		ctx.fillRect(0, 0, 150, 150);
	}
}

export let Variants = [
    new WindowsError(/* an image, for example */)
];
