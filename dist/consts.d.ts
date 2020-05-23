import { RGB } from './ColorInterface';
export declare enum ColorType {
    KEYWORD = 1,
    HEX = 2,
    RGB = 3,
    RGBA = 4,
    HSL = 5,
    HSLA = 6,
    HSV = 7
}
export declare const DEFAULT_COLOR = "black";
export declare const BLACK: number[];
export declare const WHITE: number[];
export declare const GREY: number[];
export declare const RE_HEX_6: RegExp;
export declare const RE_HEX_3: RegExp;
export declare const RE_HEX_8: RegExp;
export declare const RE_HEX_4: RegExp;
export declare const RE_RGB: RegExp;
export declare const RE_RGBA: RegExp;
export declare const RE_HSL: RegExp;
export declare const RE_HSLA: RegExp;
export declare const colorKeywords: Map<string, RGB>;
