interface KVP {
    [k: string]: any;
}
export declare const earningsToday: (symbol: string) => Promise<EarningsToday[]>;
export interface IEXEarningsToday {
    symbol: string;
    consensusEPS: number;
    announceTime: number;
    numberOfEstimates: number;
    fiscalPeriod: string;
    fiscalEndDate: string;
    quote: KVP;
}
export declare class EarningsToday implements IEXEarningsToday {
    symbol: string;
    consensusEPS: number;
    announceTime: number;
    numberOfEstimates: number;
    fiscalPeriod: string;
    fiscalEndDate: string;
    quote: KVP;
}
export {};
