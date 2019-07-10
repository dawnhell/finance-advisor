import { IntradayIEXOnly } from "./IntradayForDate.service";
export declare const intradayIEXOnly: (symbol: string, chartLastN?: number, chartInterval?: number, changeFromClose?: boolean, chartReset?: boolean, chartSimplify?: boolean) => Promise<IntradayIEXOnly[]>;
