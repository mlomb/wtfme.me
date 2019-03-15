
function GiphyPreset(id) {
	this.url = `https://media.giphy.com/media/${id}/giphy.gif`;
}

GiphyPreset.prototype.render = function() {
	return `
		<img src="${this.url}">
	`;
}

module.exports = GiphyPreset;