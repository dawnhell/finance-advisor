export declare const incomeStatement: (symbol: string, period?: string, lastN?: number) => Promise<IncomeStatement[]>;
export interface IEXIncomeStatement {
    symbol: string;
    reportDate: string;
    totalRevenue: number;
    costOfRevenue: number;
    grossProfit: number;
    researchAndDevelopment: number;
    sellingGeneralAndAdmin: number;
    operatingExpense: number;
    operatingIncome: number;
    otherIncomeExpenseNet: number;
    ebit: number;
    interestIncome: number;
    pretaxIncome: number;
    incomeTax: number;
    minorityInterest: number;
    netIncome: number;
    netIncomeBasic: number;
}
export declare class IncomeStatement {
    symbol: string;
    reportDate: string;
    totalRevenue: number;
    costOfRevenue: number;
    grossProfit: number;
    researchAndDevelopment: number;
    sellingGeneralAndAdmin: number;
    operatingExpense: number;
    operatingIncome: number;
    otherIncomeExpenseNet: number;
    ebit: number;
    interestIncome: number;
    pretaxIncome: number;
    incomeTax: number;
    minorityInterest: number;
    netIncome: number;
    netIncomeBasic: number;
}
