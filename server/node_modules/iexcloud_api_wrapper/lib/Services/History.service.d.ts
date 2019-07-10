import { Intraday } from "./Intraday.service";
import { EndOfDay } from "./EndOfDay.service";
export declare const history: (symbol: string, { changeFromClose, closeOnly, chartByDay, date, iexOnly, lastN, interval, period, reset, simplify }?: {
    changeFromClose?: boolean | undefined;
    closeOnly?: boolean | undefined;
    chartByDay?: boolean | undefined;
    date?: string | undefined;
    iexOnly?: boolean | undefined;
    interval?: number | undefined;
    lastN?: number | undefined;
    period?: string | undefined;
    reset?: boolean | undefined;
    simplify?: boolean | undefined;
}) => Promise<(EndOfDay | Intraday)[]>;
