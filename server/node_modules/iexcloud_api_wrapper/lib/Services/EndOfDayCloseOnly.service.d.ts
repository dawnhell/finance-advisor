export declare const endOfDayCloseOnly: (symbol: string, period?: "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y", chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<EndOfDayCloseOnly[]>;
export interface IEXEndOfDayCloseOnly {
    symbol: string;
    date: string;
    close: number;
    volume: number;
}
export declare class EndOfDayCloseOnly implements IEXEndOfDayCloseOnly {
    symbol: string;
    date: string;
    close: number;
    volume: number;
}
