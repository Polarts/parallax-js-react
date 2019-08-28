This is a sample project, containing the ParallaxScene element's code and use case.

## Purpose

This project wraps the original [parallax.js](https://matthew.wagerfield.com/parallax/) package with a React component for easy usage.

## Usage

Please refer to the [parallax.js GitHub page](https://github.com/wagerfield/parallax) to see the basic usage. This package works more-or-less the same.

## So what's different?

1. Use ParallaxScene component to wrap the elements you want in your parallax scene.
2. [Configuration options](https://github.com/wagerfield/parallax#22-configuration-options) should be passed as props to the ParallaxScene component, rather than 'data-' attributes.
3. Child configurations should still be passed as 'data-' attributes! They remain unchanged.

## Example

```
<ParallaxScene hoverOnly>
  <img src="..." data-depth="0.5"/>
  <img src="..." data-depth="0.7"/>
</ParallaxScene>
```
