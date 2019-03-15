var context = require.context('./memes', true, /\.(js)$/);

var module = context(window.meme_module);
var variant = module.variants[Math.floor(Math.random() * module.variants.length)];

// init
// render
// ready
// frame (each animation frame)

if(typeof variant.init === 'function') {
	variant.init();
}
if(typeof variant.render === 'function') {
	variant.render(document.getElementById('root'));
}
if(typeof variant.frame === 'function') {
	var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function frame() {
		variant.frame();
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}
