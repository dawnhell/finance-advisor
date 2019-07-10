export declare const topsLast: (symbol: string) => Promise<TOPSLast[]>;
export interface IEXTOPSLast {
    symbol: string;
    price: number;
    size: number;
    time: number;
}
export declare class TOPSLast {
    symbol: string;
    price: number;
    size: number;
    time: number;
}
