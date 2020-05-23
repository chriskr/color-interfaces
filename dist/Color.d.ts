import { Color as Color_ } from './ColorInterface';
import RGBInterface from './RGBInterface';
import RGBAInterface from './RGBAInterface';
import HSLInterface from './HSLInterface';
import HSVInterface from './HSVInterface';
import HexInterface from './HexInterface';
import { ColorType } from './consts';
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
    private _alpha;
    private red;
    private green;
    private blue;
    private hue;
    private saturation;
    private lightness;
    private saturationV;
    private value;
    private _rgb;
    private _rgba;
    private _hsl;
    private _hsv;
    private _hex;
    constructor(value?: number[] | string, type?: ColorType);
    parseCSSColor(input: string): void;
    get rgb(): RGBInterface;
    get rgba(): RGBAInterface;
    get hsl(): HSLInterface;
    get hsv(): HSVInterface;
    get hex(): HexInterface;
    set alpha(alpha: number);
    get alpha(): number;
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
    copy(): Color;
    mixWithColor(color: Color, percent: number): this;
    private updateHslFromRgb;
    private updateRgbFromHsl;
    private updateHsvFromHsl;
    private updateHslFromHsv;
}
export default Color;
