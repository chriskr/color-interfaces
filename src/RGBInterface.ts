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
    this.r = rgb[0];
    this.g = rgb[1];
    this.b = rgb[2];
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export default RGBInterface;
