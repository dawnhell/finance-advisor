import { Quote } from "./Quote.service";
export declare type ListType = "mostactive" | "gainers" | "losers" | "iexvolume" | "iexpercent" | "infocus";
export declare const list: (listType?: ListType) => Promise<Quote[]>;
