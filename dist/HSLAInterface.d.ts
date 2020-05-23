import { HSLAInterface as HSLAInterface_, HSLA } from './ColorInterface';
import BaseHSLInterface from './BaseHSLInterface';
declare class HSLAInterface extends BaseHSLInterface implements HSLAInterface_ {
    set a(alpha: number);
    get a(): number;
    get(): HSLA;
    set(hsla: HSLA): this;
    toCss(): string;
}
export default HSLAInterface;
