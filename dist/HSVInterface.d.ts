import { Color, HSVInterface as HSVInterface_, HSV } from "./ColorInterface";
declare class HSVInterface implements HSVInterface_ {
    private color;
    constructor(color: Color);
    set h(h: number);
    get h(): number;
    set s(s: number);
    get s(): number;
    set v(v: number);
    get v(): number;
    get(): HSV;
    set(hsv: HSV): this;
    toCss(): string;
}
export default HSVInterface;
