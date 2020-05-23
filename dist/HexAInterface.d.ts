import { Color, HexAInterface as HexAInterface_, HEXA } from './ColorInterface';
declare class HexAInterface implements HexAInterface_ {
    private color;
    constructor(color: Color);
    set a(alpha: number);
    get a(): number;
    set(hexa: HEXA): this;
    get(): string;
    toCss(): string;
}
export default HexAInterface;
