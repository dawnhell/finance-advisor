export declare const marketSymbols: () => Promise<MarketSymbol[]>;
export interface IEXMarketSymbol {
    symbol: string;
    name: string;
    date: string;
    isEnabled: boolean;
    type: string;
    iexId: string;
}
export declare class MarketSymbol {
    symbol: string;
    name: string;
    date: string;
    isEnabled: boolean;
    type: string;
    iexId: string;
}
