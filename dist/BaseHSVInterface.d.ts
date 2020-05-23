import { Color } from './ColorInterface';
declare class HSVAInterface {
    protected color: Color;
    constructor(color: Color);
    set h(h: number);
    get h(): number;
    set s(s: number);
    get s(): number;
    set v(v: number);
    get v(): number;
}
export default HSVAInterface;
