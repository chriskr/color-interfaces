import { HSVInterface as HSVInterface_, HSV } from './ColorInterface';
import BaseHSVInterface from './BaseHSVInterface';

class HSVInterface extends BaseHSVInterface implements HSVInterface_ {
  get() {
    return [this.h, this.s, this.v] as HSV;
  }

  set(hsv: HSV) {
    [this.h, this.s, this.v] = hsv;
    return this;
  }

  toCss() {
    return this.color.hsl.toCss();
  }
}

export default HSVInterface;
