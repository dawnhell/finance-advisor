export declare const earnings: (symbol: string, lastn?: number) => Promise<Earnings[]>;
export interface IEXEarnings {
    symbol: string;
    actualEPS: number;
    consensusEPS: number;
    announceTime: string;
    numberOfEstimates: number;
    EPSSurpriseDollar: number;
    EPSReportDate: string;
    fiscalPeriod: string;
    fiscalEndDate: string;
    yearAgo: number;
    yearAgoChangePercent: number;
}
export declare class Earnings implements IEXEarnings {
    symbol: string;
    actualEPS: number;
    consensusEPS: number;
    announceTime: string;
    numberOfEstimates: number;
    EPSSurpriseDollar: number;
    EPSReportDate: string;
    fiscalPeriod: string;
    fiscalEndDate: string;
    yearAgo: number;
    yearAgoChangePercent: number;
}
