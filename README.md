# color-interfaces

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

### Interfaces

```TypeScript
export type RGB = [number, number, number];
export type RGBA = [number, number, number, number];
export type HSL = [number, number, number];
export type HSLA = [number, number, number, number];
export type HSV = [number, number, number];
export type HSVA = [number, number, number, number];
export type HEX = string;

export interface RGBInterface {
  r: number;
  g: number;
  b: number;
  get: () => RGB;
  set: (rgb: RGB) => void;
  toCss: () => string;
}

export interface HSLInterface {
  h: number;
  s: number;
  l: number;
  get: () => HSL;
  set: (hsv: HSL) => void;
  toCss: () => string;
}

export interface HSVInterface {
  h: number;
  s: number;
  v: number;
  get: () => HSV;
  set: (hsv: HSV) => void;
  toCss: () => string;
}

export interface HexInterface {
  get: () => HEX;
  set: (hex: HEX) => void;
  toCss: () => string;
}

```
