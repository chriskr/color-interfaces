export enum ColorType {
  KEYWORD = 1,
  HEX,
  RGB,
  RGBA,
  HSL,
  HSLA,
  HSV,
}

export const DEFAULT_COLOR = "black";
export const BLACK = [0, 0, 0];
export const WHITE = [255, 255, 255];
export const GREY = [127.5, 127.5, 127.5];
export const RE_HEX_6 = new RegExp("^[0-9a-fA-F]{6}$");
export const RE_HEX_3 = new RegExp("^[0-9a-fA-F]{3}$");
