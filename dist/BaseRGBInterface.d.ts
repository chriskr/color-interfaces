import { Color } from "./ColorInterface";
declare class BaseRGBInterface {
    protected color: Color;
    constructor(color: Color);
    set r(r: number);
    get r(): number;
    set g(g: number);
    get g(): number;
    set b(b: number);
    get b(): number;
}
export default BaseRGBInterface;
