import { HSVAInterface as HSVAInterface_, HSV, HSVA } from './ColorInterface';
import BaseHSVInterface from './BaseHSVInterface';

class HSVAInterface extends BaseHSVInterface implements HSVAInterface_ {
  set a(alpha) {
    this.color.alpha = alpha;
  }

  get a() {
    return this.color.alpha;
  }

  get() {
    return [this.h, this.s, this.v, this.a] as HSVA;
  }

  set(hsva: HSVA) {
    [this.h, this.s, this.v, this.a] = hsva;
    return this;
  }

  toCss() {
    return this.color.hsla.toCss();
  }
}

export default HSVAInterface;
