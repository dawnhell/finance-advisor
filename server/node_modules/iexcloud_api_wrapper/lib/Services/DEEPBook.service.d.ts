import { BidOrAsk } from "./Book.service";
export interface KVP {
    [k: string]: any;
}
export declare const deepBook: (symbol: string) => Promise<any>;
export declare class DEEPBook {
    symbol: string;
    bids: BidOrAsk[];
    asks: BidOrAsk[];
}
