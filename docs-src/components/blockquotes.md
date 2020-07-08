# Blockquotes

![Blockquote example](/linear/blockquote.png)

<p style="text-align: center;">
<a href="https://github.com/UAB-IT/linear/blob/master/src/scss/02-base/_pullquotes.scss" target="_blank">source</a>
</p>

## Usage

A blockquote should be used to highlight a quote from an individual. Because of the visual weight of the component, not all quotes should be inside a blockquote. It is advised to have no more than 2 blockquotes on a single page and that they should be separated by other blocks of content such as several paragraphs of text.

## Markup

The blockquote styles are applied directly to the `blockquote` html element and no additional class names are required. Please read more about [blockquotes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote) from the developer documentation.

```html
<blockquote>
  <p>Quote text</p>
  <p>Quote source</p>
</blockquote>
```

If the `<blockquote>` element is not semantically correct, a `<div>` element may be used instead with the **class** `pullquote`.

```html
<div class="pullquote">
  <p>Quote text</p>
  <p>Quote source</p>
</div>
```
