import { RGB } from './ColorInterface';
import { DEFAULT_COLOR } from './consts';

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

export const getTestSpan = () => {
  let span = testSpan;
  if (!span || !span.parentNode) {
    span = testSpan = document.createElement('span');
    span.style.display = 'none';
    document.body.appendChild(span);
  }
  span.style.setProperty('color', DEFAULT_COLOR, 'important');
  return span;
};

let testSpan: HTMLSpanElement | null = null;
