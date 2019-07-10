export declare const ohlc: (symbol: string) => Promise<OHLC>;
export interface IEXOHLC {
    symbol: string;
    open: number;
    close: number;
    high: number;
    low: number;
    openTime: number;
    closeTime: number;
}
export declare class OHLC {
    symbol: string;
    open: number;
    close: number;
    high: number;
    low: number;
    openTime: number;
    closeTime: number;
}
