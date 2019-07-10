declare type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";
export declare const dividends: (symbol: string, range?: timePeriod) => Promise<Dividends[]>;
export interface IEXDividends {
    symbol: string;
    exDate: string;
    paymentDate: string;
    recordDate: string;
    declaredDate: string;
    amount: number;
    flag: string;
    currency: string;
    description: string;
    frequency: string;
}
export declare class Dividends implements IEXDividends {
    symbol: string;
    exDate: string;
    paymentDate: string;
    recordDate: string;
    declaredDate: string;
    amount: number;
    flag: string;
    currency: string;
    description: string;
    frequency: string;
}
export {};
