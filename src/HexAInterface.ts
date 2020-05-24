import { HexAInterface as HexAInterface_, HEXA } from './ColorInterface';
import { RE_HEX_4, RE_HEX_8 } from './consts';
import { toTwoHex, cssParsers } from './utils';
import Color from './Color';

const getRe = (input: string) =>
  [RE_HEX_8, RE_HEX_4].find((re) => re.test(input));

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
    const re = getRe(hexa);
    if (!re) {
      throw new Error('Not valid hex color');
    }
    cssParsers.get(re)!(hexa.match(re)!, this.color);
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
