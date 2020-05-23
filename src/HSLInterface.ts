import { Color, HSLInterface as HSLInterface_, HSL } from "./ColorInterface";
import { toPercent } from "./utils";

class HSLInterface implements HSLInterface_ {
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

  get() {
    return [this.h, this.s, this.l] as HSL;
  }

  set(hsl: HSL) {
    [this.h, this.s, this.l] = hsl;
    return this;
  }

  toCss() {
    const s = toPercent(this.s);
    const l = toPercent(this.l);
    return `hsl(${this.h}, ${s}, ${l})`;
  }
}

export default HSLInterface;
