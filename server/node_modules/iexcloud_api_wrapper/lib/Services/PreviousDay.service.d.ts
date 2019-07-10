export declare const previousDay: (symbol: string) => Promise<PreviousDay>;
export interface IEXPreviousDay {
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    unadjustedVolume: number;
    change: number;
    changePercent: number;
}
export declare class PreviousDay {
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    unadjustedVolume: number;
    change: number;
    changePercent: number;
}
