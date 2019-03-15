function CanvasPreset(draw) {
	this.draw = draw;
}

CanvasPreset.prototype.render = function() {
	return `
		<canvas id="canvas"></canvas>
	`;
}

CanvasPreset.prototype.ready = function(){
    this.c = document.getElementById("canvas");
    this.ctx = this.c.getContext("2d");
}

CanvasPreset.prototype.frame = function(){
    this.draw(this.ctx);
}

module.exports = CanvasPreset;
