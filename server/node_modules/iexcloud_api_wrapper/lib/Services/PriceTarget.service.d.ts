export declare const priceTarget: (symbol: string) => Promise<PriceTarget>;
export interface IEXPriceTarget {
    symbol: string;
    updatedDate: string;
    priceTargetAverage: number;
    priceTargetHigh: number;
    priceTargetLow: number;
    numberOfAnalysts: number;
}
export declare class PriceTarget implements IEXPriceTarget {
    symbol: string;
    updatedDate: string;
    priceTargetAverage: number;
    priceTargetHigh: number;
    priceTargetLow: number;
    numberOfAnalysts: number;
}
