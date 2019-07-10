export declare const intraday: (symbol: string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<Intraday[]>;
export interface IEXIntraday {
    date: string;
    minute: string;
    label: string;
    high: number;
    low: number;
    average: number;
    volume: number;
    notional: number;
    numberOfTrades: number;
    marketHigh: number;
    marketLow: number;
    marketAverage: number;
    marketVolume: number;
    marketNotional: number;
    marketNumberOfTrades: number;
    open: number;
    close: number;
    marketOpen: number;
    marketClose: number;
    changeOverTime: number;
    marketChangeOverTime: number;
}
export declare class Intraday {
    date: string;
    minute: string;
    label: string;
    high: number;
    low: number;
    average: number;
    volume: number;
    notional: number;
    numberOfTrades: number;
    marketHigh: number;
    marketLow: number;
    marketAverage: number;
    marketVolume: number;
    marketNotional: number;
    marketNumberOfTrades: number;
    open: number;
    close: number;
    marketOpen: number;
    marketClose: number;
    changeOverTime: number;
    marketChangeOverTime: number;
}
