import { Color as Color_ } from "./ColorInterface";
import RGBInterface from "./RGBInterface";
import { ColorType } from "./consts";
/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, HSV and HSL color spaces.
 * See also http://en.wikipedia.org/Color_space
 */
declare class Color implements Color_ {
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    lightness: number;
    saturationV: number;
    value: number;
    alpha: number;
    _rgb: RGBInterface | null;
    _hsl: any;
    _hsv: any;
    _hex: any;
    constructor(value?: number[] | string, type?: ColorType);
    parseCSSColor(input: string): void;
    get rgb(): RGBInterface;
    get hsl(): any;
    get hsv(): any;
    get hex(): any;
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
    private updateHslFromRgb;
    private updateRgbFromHsl;
    private updateHsvFromHsl;
    private updateHslFromHsv;
}
export default Color;
