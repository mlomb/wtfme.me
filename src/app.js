const MobileDetect = require('mobile-detect');

window.console.log('%c Want to add a meme? https://github.com/mlomb/wtfme.me', 'background: #222; color: #bada55');

window.mobile_detect = new MobileDetect(window.navigator.userAgent);
if(window.mobile_detect.is('AndroidOS')) {
	document.body.classList.add('android');
}

window.toggleInterationRequired = function(show) {
	let el = document.getElementsByClassName('interaction-required')[0];
	if(show)
		el.classList.add('show');
	else
		el.classList.remove('show');
}

const context = require.context('./pages', true, /\.(js)$/);
const module = context(`./${window.page_module}`);
const root = document.getElementById('root');

if(module.Variants && module.Variants.length > 0) {
	// round-robin variants
	var all = Array.apply(null, {length: module.Variants.length}).map(Number.call, Number); // fill array [1...N]
	var viewed_str = sessionStorage.getItem(window.page_module) || "";
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
	sessionStorage.setItem(window.page_module, viewed.join(","));

	for(var v of variant) {
		v.init(root);
	}

	const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	let last = 0;

	function frame(now) {
		let delta = (now - last) / 1000;
		last = now;

		for(var v of variant) {
			v.frame(delta);
		}
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
} else {
	console.log("No variants found for this meme.");
}
