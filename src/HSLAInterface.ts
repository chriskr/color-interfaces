import { HSLAInterface as HSLAInterface_, HSLA } from './ColorInterface';
import { toPercent } from './utils';
import BaseHSLInterface from './BaseHSLInterface';

class HSLAInterface extends BaseHSLInterface implements HSLAInterface_ {
  set a(alpha: number) {
    this.color.alpha = alpha;
  }

  get a() {
    return this.color.alpha;
  }

  get() {
    return [this.h, this.s, this.l, this.a] as HSLA;
  }

  set(hsla: HSLA) {
    [this.h, this.s, this.l, this.a] = hsla;
    return this;
  }

  toCss() {
    const s = toPercent(this.s);
    const l = toPercent(this.l);
    return `hsla(${this.h}, ${s}, ${l}, ${this.color.alpha.toFixed(2)})`;
  }
}

export default HSLAInterface;
