import { RGBInterface as RGBInterface_, RGB } from './ColorInterface';
import BaseRGBInterface from './BaseRGBInterface';
declare class RGBInterface extends BaseRGBInterface implements RGBInterface_ {
    get(): RGB;
    set(rgb: RGB): this;
    toCss(): string;
}
export default RGBInterface;
