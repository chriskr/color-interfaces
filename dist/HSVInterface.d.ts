import { HSVInterface as HSVInterface_, HSV } from './ColorInterface';
import BaseHSVInterface from './BaseHSVInterface';
declare class HSVInterface extends BaseHSVInterface implements HSVInterface_ {
    get(): HSV;
    set(hsv: HSV): this;
    toCss(): string;
}
export default HSVInterface;
