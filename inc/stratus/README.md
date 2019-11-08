# stratus
Minimal, Modular, Modest. Stratus offers several powerful SCSS tools to get started with a web project. It does this by tackling a few problem areas and encouraging more consistent styles.

## Typography
Stratus is largely built around the idea of a scalable type system and includes several powerful options to get web typography and vertical rhythm set up quickly for a new project. Because all of the typographical styles is controlled from this module, it is easy to ensure all type styles remain consistent across the project.

### Configure
Set the type scale with the ``$ratio`` variable.
```
$ratio: 1.25 !default; // Number 1.25 = major third
```
Set the size of your body copy with the ``$init-txt-size`` variable.
```
$init-txt-size: 16 !default; // Integer(px)
```
Then assign each element to a step of the scale with the ``$font-sizes`` map.
```
$font-sizes: (
  large: 6,
  h1: 5,
  h2: 4,
  h3: 3,
  h4: 2,
  h5: 1,
  h6: 0,
  p: 0,
  sm: -1
) !default;
```
This will ensure each type level share a harmonious relationship.

### Use
In your SCSS, simply call the ``type-setting`` mixin and pass it a key from ``$font-sizes`` or an integer. The mixin will calculate the correct font size and line height.
```
p {
  @include type-setting(p);
}
```

## Structure
Another goal of Stratus is to help eliminate magic numbers. The structure component can help with this as well as encouraging consistency. When combined with the typography module it can help ensure vertical rhythm is carried through the layout and spacing of elements.

Stratus achieves this with a custom unit of measurement that can be called with the ``s()`` function.

### Configure
Set the value of one unit of space by setting the ``$space-unit`` variable. This defaults to the document line height in rems.

### Use
Then simply call the function to get a multiple of that value
```
h2 {
  margin-top: s(2);
}
```
This will output Xrem where X is 2 * Y and Y = 1 space unit as set by the ``$space-unit`` variable.

## Color
Smart color functions and variables make handling and manipulating color in Stratus much easier. It comes with tint and shade functions as well as a function to mix color on a scale (beta).

### Configure
To set the color scale, change the ``$color-scale`` map. Here's what it looks like by default:
```
$color-scale: (
  050: 90%,
  100: 80%,
  200: 60%,
  300: 40%,
  400: 20%,
  500: 0%,
  600: 20%,
  700: 40%,
  800: 60%,
  900: 80%
) !default;
```

500 should always equal 0%, this will return the color without any adjustments. Keys less than 500 will tint the color with white while keys greater than 500 will shade the color with black.

### Use
To tint or shade a color according to the color scale, use the ``c(X, Y)`` function. Where X is the color to be manipulated and Y is a key on the ``$color-scale`` map.
```
a {
  color: c(blue, 800);
}
```
This will darken the color blue by 60%, see the ``$color-scale`` map above.

## Basic styles & beyond
Along with the toolbox of SCSS functions and mixins, Stratus also packs a very basic style sheet that helps lay down styles for elements using the Stratus toolset. It also includes basic accessibility tools and a minimal grid system.

## Only what you need
Something here you don't want? Toss it out. Some systems are tied loosely together and may need a nudge to get untangled, but I've tried to make Stratus as modular as possible. **This is meant to be a starting point, not a CSS library. Take it and transform it into your own unique project.**

# Contribute!
See something that could be better? Found a bug? Have an idea for a new feature?

Come help build, submit an issue, or contact me!
