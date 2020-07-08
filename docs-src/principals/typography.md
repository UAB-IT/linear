# Typography

![type swatch](/linear/type-swatch.png)

The UAB IT Website uses a typography scale on a 1.25 ratio, with a base font size of 16px. The standard line height is 1.6 (25.6px). Headlines 1-4 are set in Kulturista, all other text is set in Proxima Nova.

## Specs

| Step |    Relative   |  Absolute | Element |   Class   |
|------|---------------|-----------|---------|-----------|
|  -1  |     0.8rem    |   12.8px  |`<small>`|`.uk-small`|
|  0   |     1rem      |    16px   |  `<p>`  |  `.uk-p`  |
|  1   |   1.25rem     |    20px   |  `<h4>` | `.uk-h4`  |
|  2   |   1.5625rem   |    25px   |  `<h3>` | `.uk-h3`  |
|  3   |  1.953125rem  |  31.25px  |  `<h2>` | `.uk-h2`  |
|  4   | 2.44140625rem | 39.0625px |  `<h1>` | `.uk-h1`  |

Additional steps can be calculated using the following algorithm: `x = y * z^x` where x is the step in the scale, y is the base font size, and z is the scale's ratio. To calculate negative steps, use the same algorithm with division instead of multiplication. Do not use negative numbers in the equation.
