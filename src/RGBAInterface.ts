import { RGBAInterface as RGBAInterface_, RGBA } from './ColorInterface';
import BaseRGBInterface from './BaseRGBInterface';

class RGBAInterface extends BaseRGBInterface implements RGBAInterface_ {
  get a() {
    return this.color.alpha;
  }

  set a(alpha) {
    this.color.alpha = alpha;
  }

  get() {
    return [this.r, this.g, this.b, this.a] as RGBA;
  }

  set(rgba: RGBA) {
    [this.r, this.g, this.b, this.a] = rgba;
    return this;
  }

  toCss() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a.toFixed(2)})`;
  }
}

export default RGBAInterface;
