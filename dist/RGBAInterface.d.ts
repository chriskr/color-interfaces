import { RGBAInterface as RGBAInterface_, RGBA } from './ColorInterface';
import BaseRGBInterface from './BaseRGBInterface';
declare class RGBAInterface extends BaseRGBInterface implements RGBAInterface_ {
    get a(): number;
    set a(alpha: number);
    get(): RGBA;
    set(rgba: RGBA): this;
    toCss(): string;
}
export default RGBAInterface;
