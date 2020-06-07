import Color, { ColorType, createColor } from '../src/index';

test('parse css colors', () => {
  [
    ['rgb(0, 0, 0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(0,0,0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb( 0, 0, 0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(0,   0, 0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(0, 0,0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb( 0, 0,    0)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(255, 255, 255)', 'rgb', 'rgb(255, 255, 255)'],
    ['rgb(256, 255, 255)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(255, 256, 255)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(255, 255, 256)', 'rgb', 'rgb(0, 0, 0)'],
    ['rgb(255, 0, 0)', 'hex', '#f00'],
    ['rgb(93, 44, 56)', 'rgb', 'rgb(93, 44, 56)'],
    ['hsl(93, 44%, 56%)', 'hsl', 'hsl(93, 44%, 56%)'],
    ['hsl(93, 44%, 56%)', 'hsv', 'hsl(93, 44%, 56%)'],
    ['#aaa', 'hex', '#aaa'],
    ['#aaaaaa', 'hex', '#aaa'],
    ['#a8ef45', 'hex', '#a8ef45'],
    ['#aaaa', 'hexa', '#aaaa'],
    ['#aaaa', 'hex', '#aaa'],
    ['#aaaaaaaa', 'hexa', '#aaaa'],
    ['#af45cdef', 'hexa', '#af45cdef'],
    ['#aaaaaaaa', 'hex', '#aaa'],
    ['rgba(89, 56, 55, .34)', 'rgba', 'rgba(89, 56, 55, 0.34)'],
    ['hsla(89, 56%, 55%, .34)', 'hsla', 'hsla(89, 56%, 55%, 0.34)'],
    ['hsla(89, 56%, 55%, .34)', 'hsva', 'hsla(89, 56%, 55%, 0.34)'],
    ['lime', 'hex', '#0f0'],
  ].forEach(([cssColor, colorSpace, expected]) => {
    expect(Color.parseCSSColor(cssColor)[colorSpace].toCss()).toBe(expected);
    expect(createColor(cssColor)[colorSpace].toCss()).toBe(expected);
  });
});

test('new color', () => {
  [
    [[45, 56, 78], Color.ColorType.RGB, 'rgb', [45, 56, 78]],
    ['red', Color.ColorType.RGB, 'rgb', [255, 0, 0]],
    [[60, 1, 1], Color.ColorType.HSV, 'hsv', [60, 1, 1]],
    [[60, 1, 1, 0.5], Color.ColorType.HSVA, 'hsva', [60, 1, 1, 0.5]],
    [[60, 1, 0.5, 0.5], Color.ColorType.HSLA, 'hsla', [60, 1, 0.5, 0.5]],
  ].forEach(([initArgs, type, colorSpace, expected]) =>
    expect(new Color(initArgs, type)[colorSpace].get()).toStrictEqual(expected),
  );
});

test('copy color', () => {
  const color = new Color([23, 187, 205], Color.ColorType.RGB);
  expect(color.copy().rgb.get()).toStrictEqual([23, 187, 205]);
});

test('interfaces', () => {
  [
    ['ff0000', 'hex', 'rgb', [255, 0, 0]],
    ['ff0000ff', 'hexa', 'rgba', [255, 0, 0, 1]],
  ].forEach(([setArgs, colorSpace, expectedColorspace, expected]) => {
    const color = new Color();
    color[colorSpace].set(setArgs);
    expect(color[expectedColorspace].get()).toStrictEqual(expected);
  });
});

test('hex interface to throw with invalid input', () => {
  [
    ['g56', 'hex'],
    ['ft65', 'hexa'],
  ].forEach(([invalidHex, colorSpace]) => {
    const color = new Color();
    expect(() => color[colorSpace].set(invalidHex)).toThrow();
  });
});

test('convert color spaces', () => {
  [
    [[255, 255, 0], Color.ColorType.RGB, 'hsl', [60, 1, 0.5]],
    [[0, 1, 0.5], Color.ColorType.HSL, 'rgb', [255, 0, 0]],
    [[60, 1, 0.5], Color.ColorType.HSL, 'rgb', [255, 255, 0]],
    [[120, 1, 0.5], Color.ColorType.HSL, 'rgb', [0, 255, 0]],
    [[180, 1, 0.5], Color.ColorType.HSL, 'rgb', [0, 255, 255]],
    [[240, 1, 0.5], Color.ColorType.HSL, 'rgb', [0, 0, 255]],
    [[300, 1, 0.5], Color.ColorType.HSL, 'rgb', [255, 0, 255]],
  ].forEach(([initArgs, type, colorSpace, expected]) =>
    expect(new Color(initArgs, type)[colorSpace].get()).toStrictEqual(expected),
  );
});

const TOLERANCE = 3;
const sum = (list) => list.reduce((sum, i) => sum + i);

test('convert from rgb to hsv to hsl back to rgb', () => {
  for (let r = 0; r < 256; r += 10) {
    for (let g = 0; g < 256; g += 10) {
      for (let b = 0; b < 256; b += 10) {
        const rgb = [r, g, b];
        const c = new Color(rgb, Color.ColorType.RGB);
        const hsv = c.hsv.get();
        c.hsv.set(hsv);
        const hsl = c.hsl.get();
        c.hsl.set(hsl);
        const result = c.rgb.get();
        const sumRgb = sum(rgb);
        const sumResult = sum(result);
        expect(sumResult).toBeGreaterThanOrEqual(sumRgb - TOLERANCE);
        expect(sumResult).toBeLessThanOrEqual(sumRgb + TOLERANCE);
        for (let i = 0; i < result.length; i++) {
          expect(result[i]).toBeGreaterThanOrEqual(rgb[i] - TOLERANCE);
          expect(result[i]).toBeLessThanOrEqual(rgb[i] + TOLERANCE);
        }
      }
    }
  }
});

test('color ratio', () => {
  [
    [0, 0, 0],
    [1, 1, 1],
    [10, 11, 12],
    [236, 178, 125],
    [255, 255, 255],
  ].forEach((rgb) => {
    const color = new Color(rgb);
    const ratio = color.getContrastRatio(new Color(rgb));
    expect(ratio).toBe(1);
  });

  [
    [
      [0, 0, 0],
      [1, 1, 1],
    ],
    [
      [10, 11, 12],
      [10, 11, 13],
    ],
    [
      [236, 178, 125],
      [246, 198, 225],
    ],
    [
      [255, 254, 255],
      [255, 255, 255],
    ],
  ].forEach(([rgb1, rgb2]) => {
    const color = new Color(rgb1);
    const ratio = color.getContrastRatio(new Color(rgb2));
    expect(ratio).toBeGreaterThan(1);
  });

  [
    [
      [0, 0, 0],
      [1, 1, 1],
    ],
    [
      [10, 11, 12],
      [10, 11, 13],
    ],
    [
      [236, 178, 125],
      [246, 198, 225],
    ],
    [
      [255, 254, 255],
      [255, 255, 255],
    ],
  ].forEach(([rgb1, rgb2]) => {
    const color = new Color(rgb2);
    const ratio = color.getContrastRatio(new Color(rgb1));
    expect(ratio).toBeGreaterThan(1);
  });
});

test('invert color', () => {
  [[[120, 1, 0.5], 300]].forEach(([initArgs, expected]) =>
    expect(new Color(initArgs, ColorType.HSL).invert().hsl.h).toBe(expected),
  );
});

test('mix color', () => {
  [
    [[0, 0, 0], [254, 254, 254], 0.5, [127, 127, 127]],
  ].forEach(([rgb1, rgb2, p, expected]) =>
    expect(
      new Color(rgb1, ColorType.RGB)
        .mixWithColor(new Color(rgb2, ColorType.RGB), p)
        .rgb.get(),
    ).toStrictEqual(expected),
  );
});
