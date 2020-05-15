import { Color, RGBInterface as RGBInterface_, RGB } from "./ColorInterface";

class RGBInterface implements RGBInterface_ {
  private color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  set r(r) {
    this.color.setRed(r);
  }

  get r() {
    return this.color.getRed();
  }

  set g(g) {
    this.color.setGreen(g);
  }

  get g() {
    return this.color.getGreen();
  }

  set b(b) {
    this.color.setBlue(b);
  }

  get b() {
    return this.color.getBlue();
  }

  get() {
    return [this.r, this.g, this.b] as RGB;
  }

  set(rgb: RGB) {
    [this.r, this.g, this.b] = rgb;
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export default RGBInterface;
