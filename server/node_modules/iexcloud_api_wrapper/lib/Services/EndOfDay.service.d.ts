declare type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";
export declare const endOfDay: (symbol: string, period?: timePeriod, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<EndOfDay[]>;
export interface IEXEndOfDay {
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    uOpen: number;
    uHigh: number;
    uLow: number;
    uClose: number;
    uVolume: number;
    change: number;
    changePercent: number;
    label: string;
    changeOverTime: number;
}
export declare class EndOfDay implements IEXEndOfDay {
    symbol: string;
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    uOpen: number;
    uHigh: number;
    uLow: number;
    uClose: number;
    uVolume: number;
    change: number;
    changePercent: number;
    label: string;
    changeOverTime: number;
}
export {};
