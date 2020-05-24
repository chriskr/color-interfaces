import Color from '../src/Color';

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
    ['#aaa', 'hex', '#aaa'],
    ['#aaaaaa', 'hex', '#aaa'],
    ['#a8ef45', 'hex', '#a8ef45'],
    ['#aaaa', 'hexa', '#aaaa'],
    ['#aaaa', 'hex', '#aaa'],
    ['#aaaaaaaa', 'hexa', '#aaaa'],
    ['#aaaaaaaa', 'hex', '#aaa'],
    ['rgba(89, 56, 55, .34)', 'rgba', 'rgba(89, 56, 55, 0.34)'],
    ['hsla(89, 56%, 55%, .34)', 'hsla', 'hsla(89, 56%, 55%, 0.34)'],
    ['lime', 'hex', '#0f0'],
  ].forEach(([cssColor, coloSpace, expected]) =>
    expect(Color.parseCSSColor(cssColor)[coloSpace].toCss()).toBe(expected)
  );
});

test('new color', () => {
  [
    [[45, 56, 78], Color.ColorType.RGB, 'rgb', [45, 56, 78]],
    ['red', Color.ColorType.RGB, 'rgb', [255, 0, 0]],
    [[60, 1, 1], Color.ColorType.HSV, 'hsv', [60, 1, 1]],
    [[60, 1, 1, 0.5], Color.ColorType.HSV, 'hsva', [60, 1, 1, 1]],
  ].forEach(([initArgs, type, coloSpace, expected]) =>
    expect(new Color(initArgs, type)[coloSpace].get()).toStrictEqual(expected)
  );
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
  ].forEach(([initArgs, type, coloSpace, expected]) =>
    expect(new Color(initArgs, type)[coloSpace].get()).toStrictEqual(expected)
  );
});
