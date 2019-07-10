export declare const intradayForDate: (symbol: string, date: string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<IntradayIEXOnly[]>;
export interface IEXIntradayIEXOnly {
    date: string;
    minute: string;
    label: string;
    high: number;
    low: number;
    average: number;
    volume: number;
    notional: number;
    numberOfTrades: number;
    open: number;
    close: number;
    changeOverTime: number;
}
export declare class IntradayIEXOnly implements IEXIntradayIEXOnly {
    date: string;
    minute: string;
    label: string;
    high: number;
    low: number;
    average: number;
    volume: number;
    notional: number;
    numberOfTrades: number;
    open: number;
    close: number;
    changeOverTime: number;
}
