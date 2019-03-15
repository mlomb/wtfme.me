var context = require.context('./memes', true, /\.(js)$/);

var module = context(window.meme_module);
var variant = module.variants[Math.floor(Math.random() * module.variants.length)];

document.getElementById('root').innerHTML = variant.render();