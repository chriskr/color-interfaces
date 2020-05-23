import { Color as Color_, RGB, HSV, HSL } from './ColorInterface';
import RGBInterface from './RGBInterface';
import RGBAInterface from './RGBAInterface';
import HSLInterface from './HSLInterface';
import HSLAInterface from './HSLAInterface';
import HSVInterface from './HSVInterface';
import HSVAInterface from './HSVAInterface';
import HexInterface from './HexInterface';
import HexAInterface from './HexAInterface';
import { ColorType, BLACK, WHITE, GREY } from './consts';
import {
  clamp,
  mixRgbColors,
  hueToRgb,
  parseInt10,
  getTestSpan,
} from './utils';

/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, HSV and HSL color spaces.
 * See also http://en.wikipedia.org/Color_space
 */

class Color implements Color_ {
  private _alpha: number = 1;
  private red: number = 0;
  private green: number = 0;
  private blue: number = 0;
  private hue: number = 0;
  private saturation: number = 0;
  private lightness: number = 0;
  private saturationV: number = 0;
  private value: number = 0;
  private _rgb: RGBInterface | null = null;
  private _rgba: RGBAInterface | null = null;
  private _hsl: HSLInterface | null = null;
  private _hsla: HSLAInterface | null = null;
  private _hsv: HSVInterface | null = null;
  private _hsva: HSVAInterface | null = null;
  private _hex: HexInterface | null = null;
  private _hexa: HexAInterface | null = null;

  constructor(value?: number[] | string, type?: ColorType) {
    if (typeof value === 'string') {
      this.parseCSSColor(value);
    }
    if (Array.isArray(value)) {
      switch (type) {
        case undefined:
        case ColorType.RGB:
          this.rgb.set(value as RGB);
          break;
        case ColorType.HSL:
          this.hsl.set(value as HSV);
          break;
        case ColorType.HSV:
          this.hsv.set(value as HSL);
          break;
      }
    }
  }

  parseCSSColor(input: string) {
    const span = getTestSpan();
    span.style.setProperty('color', input, 'important');
    const raw = window.getComputedStyle(span).color;
    const rawArray: string[] = raw.split(/rgba?\(|,s*|\)$/).filter(Boolean);
    if (rawArray.length === 4) {
      this.alpha = parseFloat(rawArray.pop()!);
    }
    this.rgb.set(rawArray.map(parseInt10) as RGB);
  }

  get rgb(): RGBInterface {
    if (this._rgb === null) {
      this._rgb = new RGBInterface(this);
    }
    return this._rgb;
  }

  get rgba(): RGBAInterface {
    if (this._rgba === null) {
      this._rgba = new RGBAInterface(this);
    }
    return this._rgba;
  }

  get hsl(): HSLInterface {
    if (!this._hsl) {
      this._hsl = new HSLInterface(this);
    }
    return this._hsl;
  }

  get hsla(): HSLAInterface {
    if (!this._hsla) {
      this._hsla = new HSLAInterface(this);
    }
    return this._hsla;
  }

  get hsv(): HSVInterface {
    if (!this._hsv) {
      this._hsv = new HSVInterface(this);
    }
    return this._hsv;
  }

  get hsva(): HSVAInterface {
    if (!this._hsva) {
      this._hsva = new HSVAInterface(this);
    }
    return this._hsva;
  }

  get hex(): HexInterface {
    if (!this._hex) {
      this._hex = new HexInterface(this);
    }
    return this._hex;
  }

  get hexa(): HexAInterface {
    if (!this._hexa) {
      this._hexa = new HexAInterface(this);
    }
    return this._hexa;
  }

  set alpha(alpha) {
    this._alpha = alpha;
  }

  get alpha() {
    return clamp(this._alpha, 0, 1);
  }

  setRed(red: number) {
    this.red = clamp(red, 0, 255);
    this.updateHslFromRgb();
    this.updateHsvFromHsl();
  }

  getRed() {
    return Math.round(clamp(this.red, 0, 255));
  }

  setGreen(green: number) {
    this.green = clamp(green, 0, 255);
    this.updateHslFromRgb();
    this.updateHsvFromHsl();
  }

  getGreen() {
    return Math.round(clamp(this.green, 0, 255));
  }

  setBlue(blue: number) {
    this.blue = clamp(blue, 0, 255);
    this.updateHslFromRgb();
    this.updateHsvFromHsl();
  }

  getBlue() {
    return Math.round(clamp(this.blue, 0, 255));
  }

  setHue(hue: number) {
    this.hue = clamp(hue, 0, 360);
    this.updateRgbFromHsl();
  }

  getHue() {
    return Math.round(clamp(this.hue, 0, 360));
  }

  setSaturation(saturation: number) {
    this.saturation = clamp(saturation, 0, 1);
    this.updateRgbFromHsl();
    this.updateHsvFromHsl();
  }

  getSaturation() {
    return clamp(this.saturation, 0, 1);
  }

  setSaturationV(saturationV: number) {
    this.saturationV = clamp(saturationV, 0, 1);
    this.updateHslFromHsv();
    this.updateRgbFromHsl();
  }

  getSaturationV() {
    return clamp(this.saturationV, 0, 1);
  }

  setLightness(lightness: number) {
    this.lightness = clamp(lightness, 0, 1);
    this.updateRgbFromHsl();
    this.updateHsvFromHsl();
  }

  getLightness() {
    return clamp(this.lightness, 0, 1);
  }

  setValue(value: number) {
    this.value = clamp(value, 0, 1);
    this.updateHslFromHsv();
    this.updateRgbFromHsl();
  }

  getValue() {
    return clamp(this.value, 0, 1);
  }

  getGreyValue() {
    return 0.2126 * this.red + 0.7152 * this.green + 0.0722 * this.blue;
  }

  invert() {
    this.setHue((this.hue + 180) % 360);
    return this;
  }

  // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  getLuminance() {
    const RGB = this.rgb.get().map(function (c: number) {
      const cs = c / 255;
      return cs <= 0.03928 ? cs / 12.92 : Math.pow((cs + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * RGB[0] + 0.7152 * RGB[1] + 0.0722 * RGB[2];
  }

  // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  getContrastRatio(color2: Color) {
    const l1 = this.getLuminance();
    const l2 = color2.getLuminance();
    return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
  }

  copy() {
    const color = new Color();
    color.setRed(this.red);
    color.setGreen(this.green);
    color.setBlue(this.blue);
    color.alpha = this.alpha;
    return color;
  }

  mixWithColor(color: Color, percent: number) {
    this.rgb.set(mixRgbColors(this.rgb.get(), color.rgb.get(), percent));
    return this;
  }

  private updateHslFromRgb() {
    const red = this.red / 255;
    const green = this.green / 255;
    const blue = this.blue / 255;
    const maxColor = Math.max(red, green, blue);
    const minColor = Math.min(red, green, blue);
    const sum = maxColor + minColor;
    const delta = maxColor - minColor;
    this.hue = 0;
    this.saturation = 0;
    this.lightness = sum / 2;
    if (delta !== 0) {
      this.saturation = delta / (1 - Math.abs(sum - 1));
      const d = 60 / delta;
      switch (maxColor) {
        case red:
          this.hue = (360 + (green - blue) * d) % 360;
          break;
        case green:
          this.hue = 120 + (blue - red) * d;
          break;
        case blue:
          this.hue = 240 + (red - green) * d;
          break;
      }
    }
  }

  private updateRgbFromHsl() {
    const rgb1 = hueToRgb(this.hue);
    const rgb2 = mixRgbColors(rgb1 as RGB, GREY as RGB, 1 - this.saturation);
    const rgb3 = this.lightness <= 0.5 ? BLACK : WHITE;
    const mix = 1 - Math.abs(2 * this.lightness - 1);
    [this.red, this.green, this.blue] = mixRgbColors(
      rgb3 as RGB,
      rgb2 as RGB,
      mix
    );
  }

  // http://codeitdown.com/hsl-hsb-hsv-color/
  private updateHsvFromHsl() {
    const l = this.lightness;
    const v = (2 * l + this.saturation * (1 - Math.abs(2 * l - 1))) / 2;
    this.saturationV = (2 * (v - l)) / v || 0;
    this.value = v;
  }

  private updateHslFromHsv() {
    const v = this.value;
    const sv = this.saturationV;
    const l = 0.5 * v * (2 - sv);
    this.saturation = (sv * v) / (1 - Math.abs(2 * l - 1)) || 0;
    this.lightness = l;
  }
}

export default Color;
