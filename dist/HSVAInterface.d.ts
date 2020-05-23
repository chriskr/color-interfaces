import { HSVAInterface as HSVAInterface_, HSVA } from './ColorInterface';
import BaseHSVInterface from './BaseHSVInterface';
declare class HSVAInterface extends BaseHSVInterface implements HSVAInterface_ {
    set a(alpha: number);
    get a(): number;
    get(): HSVA;
    set(hsva: HSVA): this;
    toCss(): string;
}
export default HSVAInterface;
