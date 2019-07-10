export declare const ceoCompensation: (symbol: string) => Promise<CeoCompensation>;
export interface IEXCeoCompensation {
    symbol: string;
    name: string;
    companyName: string;
    location: string;
    salary: number;
    bonus: number;
    stockAwards: number;
    optionAwards: number;
    nonEquityIncentives: number;
    pensionAndDeferred: number;
    otherComp: number;
    total: number;
    year: string;
}
export declare class CeoCompensation implements IEXCeoCompensation {
    symbol: string;
    name: string;
    companyName: string;
    location: string;
    salary: number;
    bonus: number;
    stockAwards: number;
    optionAwards: number;
    nonEquityIncentives: number;
    pensionAndDeferred: number;
    otherComp: number;
    total: number;
    year: string;
}
