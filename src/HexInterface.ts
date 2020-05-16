import { Color, HexInterface as HexInterface_, HEX } from './ColorInterface';
import { RE_HEX_3, RE_HEX_6 } from './consts';

class HexInterface implements HexInterface_ {
  private color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  set(hex: HEX) {
    if (!(RE_HEX_3.test(hex) || RE_HEX_6.test(hex))) {
      throw Error('Not valid hex color');
    }
    if (RE_HEX_3.test(hex)) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const temp = Number.parseInt(hex, 16);
    this.color.rgb.set([temp >> 16, (temp >> 8) & 0xff, temp & 0xff]);
  }

  get() {
    const rgb = this.color.rgb;
    const hex = ((rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16);
    return `${'0'.repeat(6 - hex.length)}${hex}`;
  }

  toCss() {
    let hex = this.get();
    if (hex[0] === hex[1] && hex[2] === hex[3] && hex[4] === hex[5]) {
      hex = `${hex[0]}${hex[2]}${hex[4]}`;
    }
    return `#${hex}`;
  }
}

export default HexInterface;
