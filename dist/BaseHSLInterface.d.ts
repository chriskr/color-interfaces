import { Color } from './ColorInterface';
declare class BaseHSLInterface {
    protected color: Color;
    constructor(color: Color);
    set h(h: number);
    get h(): number;
    set s(s: number);
    get s(): number;
    set l(l: number);
    get l(): number;
}
export default BaseHSLInterface;
