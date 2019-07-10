import { Quote } from "./Quote.service";
export declare type CollectionType = "sector" | "tag" | "list";
export declare const collection: (collectionType: CollectionType, collectionName: string) => Promise<Quote[]>;
