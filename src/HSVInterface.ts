import { Color, HSVInterface as HSVInterface_, HSV } from "./ColorInterface";

class HSVInterface implements HSVInterface_ {
  private color: Color;
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
