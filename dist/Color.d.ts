/**
 * @fileoverview
 * Color class
 */
/**
 * @constructor
 *
 *
 * @class
 * Represent a color. Allows for setting and getting color components based
 * on RGB, HSV and HSL color spaces.
 * See also http://en.wikipedia.org/Color_space
 */
declare class Color {
    static DEFAULT_COLOR: string;
    static KEYWORD: number;
    static HEX: number;
    static RGB: number;
    static RGBA: number;
    static HSL: number;
    static HSLA: number;
    static HSV: number;
    static BLACK: number[];
    static WHITE: number[];
    static GREY: number[];
    static RE_HEX_6: RegExp;
    static RE_HEX_3: RegExp;
    static testSpan: HTMLSpanElement | null;
    red: number;
    green: number;
    blue: number;
    hue: number;
    saturation: number;
    lightness: number;
    saturationV: number;
    value: number;
    alpha: number;
    rgb_: any;
    hsl_: any;
    hsv_: any;
    hex_: any;
    constructor(value?: any, type?: any);
    parseCSSColor(input: string): void;
    get rgb(): any;
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
    updateHslFromRgb(): void;
    updateRgbFromHsl(): void;
    updateHsvFromHsl(): void;
    updateHslFromHsv(): void;
    static clamp(val: number, min: number, max: number): number;
    static mixRgbColors(c1Rgb: number[], c2Rgb: number[], m: number): number[];
    static toPercent(value: number): string;
    static hueToRgb(hue: number): number[];
    static parseInt10(i: string): number;
    static getTestSpan(): HTMLSpanElement;
}
export default Color;
