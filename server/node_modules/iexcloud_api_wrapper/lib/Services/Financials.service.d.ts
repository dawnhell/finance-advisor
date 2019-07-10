export declare const financials: (symbol: string, lastn?: number) => Promise<Financials[]>;
export interface IEXFinancials {
    symbol: string;
    reportDate: string;
    grossProfit: number;
    costOfRevenue: number;
    operatingRevenue: number;
    totalRevenue: number;
    operatingIncome: number;
    netIncome: number;
    researchAndDevelopment: number;
    operatingExpense: number;
    currentAssets: number;
    totalAssets: number;
    totalLiabilities: number;
    currentCash: number;
    currentDebt: number;
    totalCash: number;
    totalDebt: number;
    shareholderEquity: number;
    cashChange: number;
    cashFlow: number;
    operatingGainsLosses: number | null;
}
export declare class Financials implements IEXFinancials {
    symbol: string;
    reportDate: string;
    grossProfit: number;
    costOfRevenue: number;
    operatingRevenue: number;
    totalRevenue: number;
    operatingIncome: number;
    netIncome: number;
    researchAndDevelopment: number;
    operatingExpense: number;
    currentAssets: number;
    totalAssets: number;
    totalLiabilities: number;
    currentCash: number;
    currentDebt: number;
    totalCash: number;
    totalDebt: number;
    shareholderEquity: number;
    cashChange: number;
    cashFlow: number;
    operatingGainsLosses: number | null;
}
