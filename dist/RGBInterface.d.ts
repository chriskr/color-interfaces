import { Color, RGBInterface as RGBInterface_, RGB } from "./ColorInterface";
declare class RGBInterface implements RGBInterface_ {
    private color;
    constructor(color: Color);
    set r(r: number);
    get r(): number;
    set g(g: number);
    get g(): number;
    set b(b: number);
    get b(): number;
    get(): RGB;
    set(rgb: RGB): void;
    toCss(): string;
}
export default RGBInterface;
