declare type PriceType = "Open" | "Close";
export declare const officialPrice: (symbol: string) => Promise<DEEPOfficialPrice>;
export interface DEEPOfficalPrice {
    symbol: string;
    priceType: PriceType;
    price: number;
    timestamp: number;
}
export declare class DEEPOfficialPrice {
    symbol: string;
    priceType: PriceType;
    price: number;
    timestamp: number;
}
export {};
