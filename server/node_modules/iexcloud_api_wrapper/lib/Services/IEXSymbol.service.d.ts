export declare const iexSymbols: () => Promise<IEXSymbol[]>;
export interface IEXSymbolI {
    symbol: string;
    date: string;
    isEnabled: boolean;
}
export declare class IEXSymbol {
    symbol: string;
    date: string;
    isEnabled: boolean;
}
