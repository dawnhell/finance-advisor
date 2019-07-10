export declare const deepTrades: (symbol: string) => Promise<DEEPTrade[]>;
export interface IEXDEEPTrade {
    symbol: string;
    price: number;
    size: number;
    tradeId: number;
    isISO: boolean;
    isOddLot: boolean;
    isOutsideRegularHours: boolean;
    isSinglePriceCross: boolean;
    isTradeThroughExempt: boolean;
    timestamp: number;
}
export declare class DEEPTrade implements IEXDEEPTrade {
    symbol: string;
    price: number;
    size: number;
    tradeId: number;
    isISO: boolean;
    isOddLot: boolean;
    isOutsideRegularHours: boolean;
    isSinglePriceCross: boolean;
    isTradeThroughExempt: boolean;
    timestamp: number;
}
