# color-interfaces

[![Coverage Status](https://coveralls.io/repos/github/chriskr/color-interfaces/badge.svg?branch=master)](https://coveralls.io/github/chriskr/color-interfaces)
[![Install Size](https://packagephobia.now.sh/badge?p=color-interfaces)](https://packagephobia.now.sh/result?p=color-interfaces)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chriskr/color-interfaces/blob/master/LICENSE)

### Basic Usage

```js
> const color = new Color();
> color.rgb.r = 200;
< 200
> color.hsl.toCss()
< "hsl(0, 100%, 39%)"
> color.rgb.toCss()
< "rgb(200, 0, 0)"
> color.hex.toCss()
< "#c80000"
```

### Example

[color tool](https://chriskr.github.io/color-tool/build/)

### Interfaces

```TypeScriptexport
export interface Color {
  rgb: RGBInterface;
  rgba: RGBAInterface;
  hsl: HSLInterface;
  hsla: HSLAInterface;
  hsv: HSVInterface;
  hsva: HSVAInterface;
  hex: HexInterface;
  hexa: HexAInterface;
  alpha: number;
  getRed(): number;
  setRed(red: number): void;
  getGreen(): number;
  setGreen(green: number): void;
  getBlue(): number;
  setBlue(blue: number): void;
  getHue(): number;
  setHue(hue: number): void;
  getSaturation(): number;
  setSaturation(saturation: number): void;
  getLightness(): number;
  setLightness(lightness: number): void;
  getSaturationV(): number;
  setSaturationV(saturationV: number): void;
  getValue(): number;
  setValue(value: number): void;
  getContrastRatio(color2: Color): number;
  getGreyValue(): number;
  getLuminance(): number;
  invert(): this;
  parseCSSColor(input: string): void;
  copy: () => Color;
  mixWithColor(color: Color, percent: number): Color;
}

export interface RGBInterface {
  r: number;
  g: number;
  b: number;
  get: () => RGB;
  set: (rgb: RGB) => RGBInterface;
  toCss: () => string;
}

export interface RGBAInterface {
  r: number;
  g: number;
  b: number;
  a: number;
  get: () => RGBA;
  set: (rgba: RGBA) => RGBAInterface;
  toCss: () => string;
}

export interface HSLInterface {
  h: number;
  s: number;
  l: number;
  get: () => HSL;
  set: (hsv: HSL) => HSLInterface;
  toCss: () => string;
}

export interface HSLAInterface {
  h: number;
  s: number;
  l: number;
  a: number;
  get: () => HSLA;
  set: (hsva: HSLA) => HSLAInterface;
  toCss: () => string;
}

export interface HSVInterface {
  h: number;
  s: number;
  v: number;
  get: () => HSV;
  set: (hsv: HSV) => HSVInterface;
  toCss: () => string;
}

export interface HSVAInterface {
  h: number;
  s: number;
  v: number;
  a: number;
  get: () => HSVA;
  set: (hsv: HSVA) => HSVAInterface;
  toCss: () => string;
}

export interface HexInterface {
  get: () => HEX;
  set: (hex: HEX) => HexInterface;
  toCss: () => string;
}

export interface HexAInterface {
  a: number;
  get: () => HEXA;
  set: (hexa: HEXA) => HexAInterface;
  toCss: () => string;
}

export type RGB = [number, number, number];
export type RGBA = [number, number, number, number];
export type HSL = [number, number, number];
export type HSLA = [number, number, number, number];
export type HSV = [number, number, number];
export type HSVA = [number, number, number, number];
export type HEX = string;
export type HEXA = string;


```
