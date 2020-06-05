import { Color } from './ColorInterface';

class BaseRGBInterface {
  protected color: Color;

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
}

export default BaseRGBInterface;
