import { Color } from './ColorInterface';

class BaseHSLInterface {
  protected color: Color;
  constructor(color: Color) {
    this.color = color;
  }

  set h(h) {
    this.color.setHue(h);
  }

  get h() {
    return this.color.getHue();
  }

  set s(s) {
    this.color.setSaturation(s);
  }

  get s() {
    return this.color.getSaturation();
  }

  set l(l) {
    this.color.setLightness(l);
  }

  get l() {
    return this.color.getLightness();
  }
}

export default BaseHSLInterface;
