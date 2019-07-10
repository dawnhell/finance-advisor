export declare const splits: (symbol: string, period?: "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y") => Promise<Splits[]>;
export interface IEXSplits {
    exDate: string;
    declaredDate: string;
    ratio: number;
    toFactor: number;
    fromFactor: number;
    description: string;
}
export declare class Splits implements IEXSplits {
    exDate: string;
    declaredDate: string;
    ratio: number;
    toFactor: number;
    fromFactor: number;
    description: string;
}
