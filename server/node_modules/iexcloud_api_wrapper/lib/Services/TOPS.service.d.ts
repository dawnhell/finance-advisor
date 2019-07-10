export declare const tops: (symbol: string) => Promise<TOPS[]>;
export interface IEXTOPS {
    symbol: string;
    marketPercent: number;
    bidSize: number;
    bidPrice: number;
    askSize: number;
    askPrice: number;
    volume: number;
    lastSalePrice: number;
    lastSaleSize: number;
    lastSaleTime: number;
    lastUpdated: number;
    sector: string;
    securityType: string;
}
export declare class TOPS {
    symbol: string;
    marketPercent: number;
    bidSize: number;
    bidPrice: number;
    askSize: number;
    askPrice: number;
    volume: number;
    lastSalePrice: number;
    lastSaleSize: number;
    lastSaleTime: number;
    lastUpdated: number;
    sector: string;
    securityType: string;
}
