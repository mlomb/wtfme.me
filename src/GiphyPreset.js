
function GiphyPreset(id) {
	this.url = `https://media.giphy.com/media/${id}/giphy.gif`;
}

GiphyPreset.prototype.render = function(root) {
	var img = document.createElement('img');
	img.src = this.url;

	root.appendChild(img);
}

module.exports = GiphyPreset;
