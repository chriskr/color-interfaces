import { HexInterface as HexInterface_, HEX } from './ColorInterface';
import { RE_HEX_3, RE_HEX_6 } from './consts';
import { toTwoHex, cssParsers } from './utils';
import Color from './Color';

const getRe = (input: string) =>
  [RE_HEX_6, RE_HEX_3].find((re) => re.test(input));

class HexInterface implements HexInterface_ {
  private color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  set(hex: HEX) {
    const re = getRe(hex);
    if (!re) {
      throw new Error('Not valid hex color');
    }
    cssParsers.get(re)!(hex.match(re)!, this.color);
    return this;
  }

  get() {
    return this.color.rgb.get().map(toTwoHex).join('');
  }

  toCss() {
    const hex = this.get();
    if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
      return `#${hex[0]}${hex[2]}${hex[4]}`;
    }
    return `#${hex}`;
  }
}

export default HexInterface;
