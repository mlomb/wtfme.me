const context = require.context('./memes', true, /\.(js)$/);

const module = context(`./${window.meme_module}`);
const root = document.getElementById('root');

if(module.Variants && module.Variants.length > 0) {
	var variants = module.Variants[Math.floor(Math.random() * module.Variants.length)];

	if(!Array.isArray(variants)) {
		variants = [variants];
	}

	for(var v of variants) {
		v.init(root);
	}

	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function frame() {
		for(var v of variants) {
			v.frame();
		}
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
} else {
	console.log("No variants found for this meme.");
}
