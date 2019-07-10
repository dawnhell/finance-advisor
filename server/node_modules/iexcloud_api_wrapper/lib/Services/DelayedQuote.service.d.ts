export declare const delayedQuote: (symbol: string) => Promise<DelayedQuote>;
export interface IEXDelayedQuote {
    symbol: string;
    delayedPrice: number;
    delayedSize: number;
    delayedPriceTime: number;
    high: number;
    low: number;
    totalVolume: number;
    processedTime: number;
}
export declare class DelayedQuote implements IEXDelayedQuote {
    symbol: string;
    delayedPrice: number;
    delayedSize: number;
    delayedPriceTime: number;
    high: number;
    low: number;
    totalVolume: number;
    processedTime: number;
}
