import { Color, HSLInterface as HSLInterface_, HSL } from "./ColorInterface";
declare class HSLInterface implements HSLInterface_ {
    private color;
    constructor(color: Color);
    set h(h: number);
    get h(): number;
    set s(s: number);
    get s(): number;
    set l(l: number);
    get l(): number;
    get(): HSL;
    set(hsl: HSL): this;
    toCss(): string;
}
export default HSLInterface;
