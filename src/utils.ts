import {
  colorKeywords,
  ColorType,
  RE_HEX_3,
  RE_HEX_4,
  RE_HEX_6,
  RE_HEX_8,
  RE_HSL,
  RE_HSLA,
  RE_RGB,
  RE_RGBA,
} from './consts';
import { Color as Color_, RGB } from './ColorInterface';
import Color from './Color';

type ParseFromMatch = (match: RegExpMatchArray, color?: Color) => Color;

const hex6ToColor: ParseFromMatch = (match, color = new Color()) => {
  const rgb = match.slice(1).map((hex) => Number.parseInt(hex, 16)) as RGB;
  color.rgb.set(rgb);
  return color;
};

const hex3ToColor: ParseFromMatch = (match, color = new Color()) => {
  const rgb = match
    .slice(1)
    .map((hex) => Number.parseInt(hex.repeat(2), 16)) as RGB;
  color.rgb.set(rgb);
  return color;
};

const hex8ToColor: ParseFromMatch = (match, color = new Color()) => {
  const alpha = Number.parseInt(match.pop()!, 16);
  hex6ToColor(match, color);
  color.alpha = alpha === 0 ? alpha : alpha / 255;
  return color;
};

const hex4ToColor: ParseFromMatch = (match, color = new Color()) => {
  const alpha = Number.parseInt(match.pop()!.repeat(2), 16);
  hex3ToColor(match, color);
  color.alpha = alpha === 0 ? alpha : alpha / 255;
  return color;
};

const rgbToColor: ParseFromMatch = (match) => {
  const rgb = match.slice(1).map((digit) => Number.parseInt(digit, 10));
  return new Color(rgb, ColorType.RGB);
};

const rgbaToColor: ParseFromMatch = (match) => {
  const alpha = Number.parseFloat(match.pop()!);
  const color = rgbToColor(match);
  color.alpha = alpha;
  return color;
};

const hslToColor: ParseFromMatch = (match) => {
  const [h, s, l] = match.slice(1).map((digit) => Number.parseInt(digit, 10));
  return new Color([h % 360, s / 100, l / 100], ColorType.HSL);
};

const hslaToColor: ParseFromMatch = (match) => {
  const alpha = Number.parseFloat(match.pop()!);
  const color = hslToColor(match);
  color.alpha = alpha;
  return color;
};

const cssParserTuples: [RegExp, ParseFromMatch][] = [
  [RE_HEX_6, hex6ToColor],
  [RE_HEX_3, hex3ToColor],
  [RE_HEX_8, hex8ToColor],
  [RE_HEX_4, hex4ToColor],
  [RE_RGB, rgbToColor],
  [RE_RGBA, rgbaToColor],
  [RE_HSL, hslToColor],
  [RE_HSLA, hslaToColor],
];

export const cssParsers = new Map(cssParserTuples);

export const parseCSSColor = (input: string) => {
  let tuple = cssParserTuples.find(([re]) => re.test(input));
  if (tuple) {
    const [re, parser] = tuple;
    return parser(input.match(re)!);
  }
  if (colorKeywords.has(input.trim())) {
    return new Color(colorKeywords.get(input.trim()), ColorType.RGB);
  }
  return new Color([0, 0, 0]);
};

export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

export const mixRgbColors = (rgb1: RGB, rgb2: RGB, m: number) =>
  [
    rgb1[0] + m * (rgb2[0] - rgb1[0]),
    rgb1[1] + m * (rgb2[1] - rgb1[1]),
    rgb1[2] + m * (rgb2[2] - rgb1[2]),
  ] as RGB;

export const toPercent = (value: number) => {
  return `${Math.round(value * 100)}%`;
};

export const hueToRgb = (hue: number) => {
  hue %= 360;
  let delta = hue % 60;
  hue -= delta;
  delta = Math.round((255 / 60) * delta);
  switch (hue) {
    case 0:
      return [255, delta, 0];
    case 60:
      return [255 - delta, 255, 0];
    case 120:
      return [0, 255, delta];
    case 180:
      return [0, 255 - delta, 255];
    case 240:
      return [delta, 0, 255];
    case 300:
      return [255, 0, 255 - delta];
  }
  return [0, 0, 0];
};

export const parseInt10 = (i: string) => {
  return Number.parseInt(i, 10);
};

export const toTwoHex = (n: number) => {
  const hex = n.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};
