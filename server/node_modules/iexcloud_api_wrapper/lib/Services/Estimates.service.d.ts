export declare const estimates: (symbol: string, lastN?: number) => Promise<Estimates[]>;
export interface IEXEstimates {
    consensusEPS: number;
    numberOfEstimates: number;
    fiscalPeriod: string;
    fiscalEndDate: string;
    reportDate: string;
}
export declare class Estimates {
    consensusEPS: number;
    numberOfEstimates: number;
    fiscalPeriod: string;
    fiscalEndDate: string;
    reportDate: string;
}
