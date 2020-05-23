import { Color as Color_ } from './ColorInterface';
import RGBInterface from './RGBInterface';
import RGBAInterface from './RGBAInterface';
import HSLInterface from './HSLInterface';
import HSLAInterface from './HSLAInterface';
import HSVInterface from './HSVInterface';
import HSVAInterface from './HSVAInterface';
import HexInterface from './HexInterface';
import HexAInterface from './HexAInterface';
import { ColorType } from './consts';
/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, RGBA, HSV, HSVA, HSL and HSLA color spaces.
 * See also http://en.wikipedia.org/Color_space
 */
declare class Color implements Color_ {
    static parseCSSColor: (input: string) => Color;
    static get ColorType(): typeof ColorType;
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
    private _hsla;
    private _hsv;
    private _hsva;
    private _hex;
    private _hexa;
    constructor(value?: number[] | string, type?: ColorType);
    parseCSSColor(input: string): void;
    get rgb(): RGBInterface;
    get rgba(): RGBAInterface;
    get hsl(): HSLInterface;
    get hsla(): HSLAInterface;
    get hsv(): HSVInterface;
    get hsva(): HSVAInterface;
    get hex(): HexInterface;
    get hexa(): HexAInterface;
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
