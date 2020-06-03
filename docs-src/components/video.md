# Video Embed

![Video example](/linear/video.png)

<p style="text-align: center;">
<a href="https://github.com/UAB-IT/linear/blob/master/src/scss/02-base/_media.scss" target="_blank">source</a>
</p>

## Usage

A video embed componenet can substitute a link to a YouTube video in favor of an embedded version. Only videos from official UAB channels should be embedded.

## Markup

```html
<div class="video-container">
  PASTE EMBED CODE HERE
</div>
```

## Embedding video

To embed a YouTube video, right click the video on YouTube and select “copy embed code”. Then paste that embed code in the area indicated in the code sample above.

The division **element** with the `video-container` **class** makes sure the video fills the full width of it’s container, and ensures the video resizes with the proper 16:9 aspect ratio on screen resize.

The resulting HTML should look similar like this:

```html
<div class="video-container">
  <iframe width="960" height="540" src="https://www.youtube.com/embed/Tlt6S8gofuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```
