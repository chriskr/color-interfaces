export interface Color {
    alpha: number;
    parseCSSColor(input: string): void;
    rgb: RGBInterface;
    hsl: HSLInterface;
    hsv: HSVInterface;
    hex: HexInterface;
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
export declare type RGB = [number, number, number];
export declare type RGBA = [number, number, number, number];
export declare type HSL = [number, number, number];
export declare type HSLA = [number, number, number, number];
export declare type HSV = [number, number, number];
export declare type HSVA = [number, number, number, number];
export declare type HEX = string;
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
