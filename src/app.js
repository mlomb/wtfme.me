const MobileDetect = require('mobile-detect');

window.mobile_detect = new MobileDetect(window.navigator.userAgent);

const context = require.context('./memes', true, /\.(js)$/);

const module = context(`./${window.meme_module}`);
const root = document.getElementById('root');

console.log('%c Want to add a meme? https://github.com/mlomb/wtfme.me', 'background: #222; color: #bada55');

if(module.Variants && module.Variants.length > 0) {
	// round-robin variants
	var all = Array.apply(null, {length: module.Variants.length}).map(Number.call, Number); // fill array [1...N]
	var viewed_str = sessionStorage.getItem(window.meme_module) || "";
	var viewed = viewed_str.length > 0 ? viewed_str.split(",") : [];
	var not_viewed = all.filter(n => !viewed.includes(`${n}`));

	if(not_viewed.length == 0) {
		not_viewed = all;
		viewed = [];
	}

	// pick random remaining
	var index = not_viewed[Math.floor(Math.random() * not_viewed.length)];

	var variant = module.Variants[index];
	if(!Array.isArray(variant))
		variant = [variant];

	viewed.push(index);
	sessionStorage.setItem(window.meme_module, viewed.join(","));

	for(var v of variant) {
		v.init(root);
	}

	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function frame() {
		for(var v of variant) {
			v.frame();
		}
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
} else {
	console.log("No variants found for this meme.");
}
