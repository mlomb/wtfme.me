# API Reference

## Contents
* [Presets](#presets)
  * [AudioPreset](#audiopreset)
  * [BackgroundPreset](#BackgroundPreset)
  * [CanvasPreset](#canvaspreset)
  * [iframePreset](#iframepreset)
  * [ImagePreset](#imagepreset)
  * [GiphyPreset & ImgurPreset](#giphypreset--imgurpreset)
  * [MovingElementsPreset](#movingelementspreset)
  * [SoundCloudPreset](#soundcloudpreset)
  * [TextPreset](#textpreset)
  * [TextRainPreset](#textrainpreset)
  * [YoutubePreset](#youtubepreset)

## Presets
All the presets remain in [`src/presets`](src/presets) which has the alias `@presets`.

If a preset requires more than one parameter then a single object **options** is used.

Presets should work well in mobile phones and desktops.

### AudioPreset
Play an audio from an URL.

| name | default | description | values |
|-|-|:-|:-|
| `url` | `undefined` | Source of the audio | |
| `autoplay` | `true` | Start playing the audio when page load |`true`<br>`false`|
| `loop` | `false` | Loops the audio|`true`<br>`false` |
| `playonclick` | `false` | If `true` when you click on the page, the audio will be played. | `true`<br>`false`|
#### Example
```js
import AudioPreset from '@presets/AudioPreset';

...

new AudioPreset({
    url: 'https://foo.bar/audio.mp3',
    loop: true
});
```
### BackgroundPreset
Show a fullscreen color or image.

| name | default | description |
|-|-|:-|
| `color` | `undefined` | Set the color of the background|
| `url` | `undefined` | Set the image of the background
#### Example
```js
import BackgroundPreset from '@presets/BackgroundPreset';

...

new BackgroundPreset({
    url: 'https://foo.bar/image.jpg',
    color: '#123456'
});
```

### CanvasPreset
The CanvasPreset creates a fullscreen canvas where you can draw to. You are supposed to inherit this class and override the method `frame`. You may call `super.frame` if you want to clear the canvas each frame.  
The context is available from `this.ctx`.

#### Example
```js
import CanvasPreset from '@presets/CanvasPreset';

class Example extends CanvasPreset {
  frame(deltaTime) {
    super.frame(deltaTime); // clear the canvas

    const ctx = this.ctx;

    ctx.fillStyle = 'red';
    ctx.fillRect(this.pointerPosition.x, this.pointerPosition.y, 100, 100);
  }
}
```

### iframePreset
Inserts an iframe from a given URL.

| name | default | description | values |
|-|-|:-|:-|
| `url` | `null` | URL to load in the iframe | |
| `display` | `hidden` | Visibility of the iframe | `hidden`: the iframe will not be visible<br>`fullscreen`: the iframe will take all the screen available
#### Example
```js
import iframePreset from '@presets/iframePreset';

...

new iframePreset({
  url: 'https://something/embed',
  display: 'fullscreen'
})
```

### ImagePreset
Displays a fullscreen image from a given URL.

| name| description |
|-|:-|
| `url` | Source of the image |
#### Example
```js
import ImagePreset from '@presets/ImagePreset';

...

new ImagePreset('https://foo.bar/image.png')
```

### GiphyPreset & ImgurPreset
Displays a fullscreen image from the known services [Giphy](https://giphy.com) and [Imgur](https://imgur.com/).

| name| description |
|-|:-|
| `id` | Image ID from the corresponding service |
#### Example
```js
import { GiphyPreset, ImgurPreset } from '@presets/ImagePreset';

...

new GiphyPreset('yEtv1wWZpmG2s'); // Alf
new ImgurPreset('5EqgRtW'); // Also Alf
```
### MovingElementsPreset
Allows to create moving elements in a particular direction. The elements will span along the opposite axis of `axis` and move along `axis`. New elements will reappear if they go outside the window.

| name | default | description | values |
|-|-|:-|:-|
| `make` | Not implemented | A function to generate an element. Should return a new DOM element
| `axis` | `vertical` | The axis that the elements will move | `vertical`<br>`horizontal` |
| `max_elements` | Desktop: `120`<br>Mobile: `40` | The axis that the elements will move |  |
| `max_rotation` | `50` | Maximum angle to randomly rotate the element | `0`-`360` |
| `max_speed` | `0.4` | Maximum speed of a single element.<br>It will choose a random speed between `0.2 * max_speed` and `max_speed` | `> 0` |
#### Example
```js
import MovingElementsPreset from '@presets/MovingElementsPreset';

...

new MovingElementsPreset({
  make: () => {
    let span = document.createElement('span');
    span.innerText = 'memes 4 life';
    return span;
  },
  direction: 'horizontal',
  max_speed: 0.55
});
```
### SoundCloudPreset
Plays a track from [SoundCloud](soundcloud.com). Currently it doesn't automatically loop.

| name | description |
|-|:-|
| `track_id` | The track identifier from SoundCloud |
#### Example
```js
import SoundCloudPreset from '@presets/SoundCloudPreset';

...

new SoundCloudPreset('XXXXXXXXX');
```

### TextPreset
Displays a horizontally centered text.

| name | default | description | values |
|-|-|:-|:-|
| `content` | `<no content>` | The text to display | |
| `html` | `false` | Allows the content to render HTML | `true`<br>`false`|
| `top` | `undefined` | If not `undefined`, the text's style proprerty top | |
| `bottom` | `undefined` | If not `undefined`, the text's style proprerty bottom | |
| `center` | `false` | If `true` the text will be in the true center of the page.<br>`top` and `bottom` will be ignored if `true`. | `true`<br>`false`|
#### Example
```js
import TextPreset from '@presets/TextPreset';

...

new TextPreset({
  content: "Hello boie",
  bottom: '50px'
});
```

### TextRainPreset
Uses MovingElementsPreset to create a rain of multicolored text spans. This preset is essentially the [rain page](https://wtfme.me/rain/Test).

| name | description |
|-|:-|
| `input` | The text to make rain |
#### Example
```js
import TextRainPreset from '@presets/TextRainPreset';

...

new TextRainPreset("Make it rain");
```

### YoutubePreset
Shows a fullscreen [YouTube](https://youtube.com) video. Autoplay and Loop is enabled.

| name | description |
|-|:-|
| `video_id` | YouTube's video id |
#### Example
```js
import YoutubePreset from '@presets/YoutubePreset';

...

new YoutubePreset('dQw4w9WgXcQ');
```
