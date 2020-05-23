import { Color, HexAInterface as HexAInterface_, HEXA } from './ColorInterface';
import { RE_HEX_4, RE_HEX_8 } from './consts';
import { toTwoHex } from './utils';

class HexAInterface implements HexAInterface_ {
  private color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  set a(alpha: number) {
    this.color.alpha = alpha;
  }

  get a() {
    return this.color.alpha;
  }

  set(hexa: HEXA) {
    if (!(RE_HEX_4.test(hexa) || RE_HEX_8.test(hexa))) {
      throw Error('Not valid hexa color');
    }
    if (RE_HEX_4.test(hexa)) {
      hexa = Array.from(hexa)
        .flatMap((h) => [h, h])
        .join('');
    }
    const [r, g, b, a] = hexa.match(/../g)!.map((h) => Number.parseInt(h, 16));
    this.color.rgb.set([r, g, b]);
    this.a = a === 0 ? 0 : a / 255;
    return this;
  }

  get() {
    return this.color.rgba
      .get()
      .map((n, index) => toTwoHex(index === 3 ? Math.round(n * 255) : n))
      .join('');
  }

  toCss() {
    let hexa = this.get();
    if (
      hexa[0] === hexa[1] &&
      hexa[2] === hexa[3] &&
      hexa[4] === hexa[5] &&
      hexa[6] === hexa[7]
    ) {
      hexa = `${hexa[0]}${hexa[2]}${hexa[4]}${hexa[6]}`;
    }
    return `#${hexa}`;
  }
}

export default HexAInterface;
