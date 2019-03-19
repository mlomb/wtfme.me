<p align="center">
	<a href="https://wtfme.me"><img alt="wtfme.me logo" src="https://raw.githubusercontent.com/mlomb/wtfme.me/master/public/logo-black.png"></a><br>
	An open source collection of random meme pages<br>
	[![Netlify Status](https://api.netlify.com/api/v1/badges/267515db-4262-42d2-ab48-2d0b785379d5/deploy-status)](https://app.netlify.com/sites/wtfmeme/deploys)
</p>

## Contributing
wtfme.me is a community project. We invite you to add your random meme ideas. Even if you don't know how to code, you can throw ideas in the issues page.

### Memes
Each meme must be defined in `src/memes.js` including all the relevant metadata like so:
```js
module.exports = [
	...
	{
		title: 'Meme',
		description: 'A wonderful meme',
		keywords: ['keyword1', 'keyword2'],
		path: 'meme',
		module: 'meme.js',
		cover: 'https://i.imgur.com/XXXXXXX.png'
	},
	...
]
```
Memes are located under `src/memes`. The name of the file must match the `module` variable in `src/memes.js`.
The module must export an array called `Variants`. Each item must be a `Preset` object or an array of `Preset` objects.  
For example:
```js
import { ImgurPreset, GiphyPreset } from '@presets/ImagePreset';
import TextRainPreset from '@presets/TextRainPreset';

export let Variants = [
	new GiphyPreset('XXXXXXXXXXXXX'),
	[new ImgurPreset('XXXXXXX'), new TextRainPreset('Example meme')]
];
```

### Variants
A single meme page may have multiple versions to show. For example, meme [`windows`](https://wtfme.me/windows) changes the error dialog every time someone refreshes the page.  
Extracted from [`src/memes/windows.js`](src/memes/windows.js):
```js
...

class WindowsError extends CanvasPreset {
    constructor(url){
		...
	}
}

export let Variants = [
    new WindowsError('https://i.imgur.com/jccR2lH.jpg'), // delete Windows
    new WindowsError('https://i.imgur.com/GUfDHmu.jpg'), // error recording error code
    new WindowsError('https://i.imgur.com/UyIeVFW.png'), // linux
    new WindowsError('https://i.imgur.com/kwVhVDZ.png'), // windows error recording has stopped working
	...
];
```
Variants are randomly selected excluding the just seen to increase the chance of seeing them all while refreshing fast.

### Presets
A preset or combination of them form a variant, they reside in [`src/presets`](src/presets) and can be included using the alias `@presets`. All presets must inherit from `Preset`.  
Every preset should be **generic**, **reusable** and **single purpose**.

Template for a Preset:
```js
import Preset from './Preset';

export default class MyPreset extends Preset {
	constructor(text) {
		super();
		this.text = text;
	}

	init(root) {
		var p = document.createElement('p');
		p.innerText = `Hello meme, ${this.text}!`;
		root.appendChild(p);
	}

	frame(deltaTime) {
		// This function will be called each requestAnimationFrame
	}
}
```
For example, this is [`ImagePreset`](/src/presets/ImagePreset.js) which allows show a fullscreen image just with an URL:
```js
import Preset from './Preset';

export default class ImagePreset extends Preset {
	constructor(url) {
		super();
		this.url = url;
	}

	init(root) {
		var img = document.createElement('div');
		img.classList.add("fullscreen-contain");
		img.style.backgroundImage = 'url(' + this.url + ')';
		root.appendChild(img);
	}
}
```
#### Stacking presets
See [the first meme example](#Memes). A variant may be an array of simple presets.

For example, if you want to show a fullscreen GIF with a sound you could combine a `ImagePreset` with a `SoundCloudPreset`.

#### More advanced / Specific presets
You can always define or inherit a preset inside the meme module to create custom behavior. You can find an example of this in [`src/memes/windows.js`](src/memes/windows.js) where it defines the WindowsError preset that inherits the CanvasPreset.

#### Presets API
You can find the API documentation in [API.md](API.md).

### Customizable memes
Some pages can be dynamic, for example [`rain`](https://wtfme.me/rain/Hello World) allows to change the raining text. You can see the implementation in [`src/memes/rain.js`](src/memes/rain.js).  
It should be an explanation on how to customize the meme in the base path (/rain in this case).  
Make sure to update [`netlify.toml`](netlify.toml) with the corresponding redirect.  

Be careful with XSS attacks.

### Styling guidelines
The code must use tabs. Documentation must use 2-spaces.

## Building
To build for deployment run
```sh
npm run build
```
Once building, the script will pick up all the memes defined in [`src/memes.js`](src/memes.js) and generate all the static HTML files in the `dist` directory.

### Development
To start a development server run
```sh
npm run dev
```
You will be able to access the site in `localhost:8080`. Note that you should access the pages using `.html`, for example `localhost:8080/nope.html`. The dev server should have hot reloading enabled.

*Note: if you modify memes.js you have to restart the dev server to pick up the changes*

## License

MIT License, see [LICENSE](LICENSE).
