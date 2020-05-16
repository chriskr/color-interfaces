export interface Color {
  rgb: RGBInterface;
  hsl: HSLInterface;
  hsv: HSVInterface;
  hex: HexInterface;
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
}

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

export type RGB = [number, number, number];
export type RGBA = [number, number, number, number];
export type HSL = [number, number, number];
export type HSLA = [number, number, number, number];
export type HSV = [number, number, number];
export type HSVA = [number, number, number, number];
export type HEX = string;
