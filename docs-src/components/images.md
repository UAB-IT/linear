# Images

![Caption example](/linear/figure.png)

<p style="text-align: center;">
<a href="https://github.com/UAB-IT/linear/blob/master/src/scss/02-base/_media.scss" target="_blank">source</a>
</p>

## Usage

An image **element** may be used to embed an image on a web page. One should be careful to use images intentionally to avoid overwhelming the user with visual information. They should be surrounded and supported by text. For more detailed information about images on the web, please see the [Mozilla web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). Please also review [UAB's guidelines on web images](https://www.uab.edu/toolkit/web/web-images).

## Markup

```html
<img src="LINK TO RAW IMAGE FILE" alt="DESCRIPTION OR PURPOSE OF IMAGE">
```

If the image is used for decorative purposes only, leave the `alt` **attribute** empty but **do not remove the `alt` attribute altogether** as it is required for accessibility purposes.

## Captions

An image caption, or more accurately a figure caption, is a set of standard HTML **elements** used to semantically group a visual piece of information with a caption. Please see the [Mozilla web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) for more information on the `figure` **elements**.

```html
<figure>
  <img src="Image-URL" alt="Title of image">
  <figcaption>Image caption</figcaption>
</figure>
```

## Sizes

All images should be cropped and compressed, following these image size guidelines:

- Banner: 1600 x 300
- Illustrations: 266 x 720
- News: 640 x 360
- Large (full width) images: 1280 x 720
- Medium (half width) images: 640 x auto
- Small (thumbnail) images: 320 x auto

Generally, images should be 9:12 ratio, but judge this on case by case. Images should be around 300kb, but no larger than 500kb.
