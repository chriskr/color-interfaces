export interface Color {
  red: number;
  green: number;
  blue: number;
  hue: number;
  saturation: number;
  lightness: number;
  saturationV: number;
  value: number;
  alpha: number;
  parseCSSColor(input: string): void;
  rgb: RGBInterface;
  hsl: any;
  hsv: any;
  hex: any;
  setRed(red: number): void;
  getRed(): number;
  setGreen(green: number): void;
  getGreen(): number;
  setBlue(blue: number): void;
  getBlue(): number;
  setHue(hue: number): void;
  getHue(): number;
  setSaturation(saturation: number): void;
  getSaturation(): number;
  setSaturationV(saturationV: number): void;
  getSaturationV(): number;
  setLightness(lightness: number): void;
  getLightness(): number;
  setValue(value: number): void;
  getValue(): number;
  getGreyValue(): number;
  invert(): this;
  getLuminance(): number;
  getContrastRatio(color2: Color): number;
}

export type RGB = [number, number, number];

export interface RGBInterface {
  r: number;
  g: number;
  b: number;
  get: () => RGB;
  set: (rgb: RGB) => void;
  toCss: () => string;
}
