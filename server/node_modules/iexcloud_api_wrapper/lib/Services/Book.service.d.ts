import { Quote } from "./Quote.service";
export declare const book: (symbol: string) => Promise<Book>;
export interface BidOrAsk {
    price: number;
    size: number;
    timestamp: number;
}
export interface Trade {
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
export interface SystemEvent {
    systemEvent: string;
    timestamp: number;
}
export declare class Book {
    quote: Quote;
    bids: BidOrAsk[];
    asks: BidOrAsk[];
    trades: Trade[];
    systemEvent: SystemEvent;
}
