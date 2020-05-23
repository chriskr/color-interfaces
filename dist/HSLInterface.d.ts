import { HSLInterface as HSLInterface_, HSL } from './ColorInterface';
import BaseHSLInterface from './BaseHSLInterface';
declare class HSLInterface extends BaseHSLInterface implements HSLInterface_ {
    get(): HSL;
    set(hsl: HSL): this;
    toCss(): string;
}
export default HSLInterface;
