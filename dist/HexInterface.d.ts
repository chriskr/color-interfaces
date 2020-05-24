import { HexInterface as HexInterface_, HEX } from './ColorInterface';
import Color from './Color';
declare class HexInterface implements HexInterface_ {
    private color;
    constructor(color: Color);
    set(hex: HEX): this;
    get(): string;
    toCss(): string;
}
export default HexInterface;
