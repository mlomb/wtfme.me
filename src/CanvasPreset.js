function CanvasPreset(draw) {
	this.draw = draw;
}

CanvasPreset.prototype.render = function(root) {
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');

	root.appendChild(this.canvas);
}

CanvasPreset.prototype.frame = function(){
    this.draw(this.ctx);
}

module.exports = CanvasPreset;
