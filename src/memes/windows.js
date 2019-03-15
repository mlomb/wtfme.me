var CanvasPreset = require('../CanvasPreset');

module.exports = {
    title: "Windows error",
    variants: [
        new CanvasPreset(function(ctx){
			ctx.fillStyle = 'red';
			ctx.fillRect(0, 0, 150, 150);
		})
    ]
};
