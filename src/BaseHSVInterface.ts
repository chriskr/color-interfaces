import { Color } from './ColorInterface';

class HSVAInterface {
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
    this.color.setSaturationV(s);
  }

  get s() {
    return this.color.getSaturationV();
  }

  set v(v) {
    this.color.setValue(v);
  }

  get v() {
    return this.color.getValue();
  }
}

export default HSVAInterface;
