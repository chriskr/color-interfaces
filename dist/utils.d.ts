import { RGB } from './ColorInterface';
export declare const clamp: (val: number, min: number, max: number) => number;
export declare const mixRgbColors: (rgb1: RGB, rgb2: RGB, m: number) => RGB;
export declare const toPercent: (value: number) => string;
export declare const hueToRgb: (hue: number) => number[];
export declare const parseInt10: (i: string) => number;
export declare const getTestSpan: () => HTMLSpanElement;
export declare const toTwoHex: (n: number) => string;
