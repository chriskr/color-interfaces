import { Color, RGBInterface as RGBInterface_, RGB } from './ColorInterface';
import BaseRGBInterface from './BaseRGBInterface';

class RGBInterface extends BaseRGBInterface implements RGBInterface_ {
  get() {
    return [this.r, this.g, this.b] as RGB;
  }

  set(rgb: RGB) {
    [this.r, this.g, this.b] = rgb;
    return this;
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export default RGBInterface;
