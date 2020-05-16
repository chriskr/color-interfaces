import { Color, HexInterface as HexInterface_, HEX } from './ColorInterface';
declare class HexInterface implements HexInterface_ {
    private color;
    constructor(color: Color);
    set(hex: HEX): void;
    get(): string;
    toCss(): string;
}
export default HexInterface;
