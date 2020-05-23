import { Color, HSLInterface as HSLInterface_, HSL } from './ColorInterface';
import { toPercent } from './utils';
import BaseHSLInterface from './BaseHSLInterface';

class HSLInterface extends BaseHSLInterface implements HSLInterface_ {
  get() {
    return [this.h, this.s, this.l] as HSL;
  }

  set(hsl: HSL) {
    [this.h, this.s, this.l] = hsl;
    return this;
  }

  toCss() {
    const s = toPercent(this.s);
    const l = toPercent(this.l);
    return `hsl(${this.h}, ${s}, ${l})`;
  }
}

export default HSLInterface;
