export declare const news: (symbol: string, lastN?: number) => Promise<NewsItem[]>;
export interface IEXNewsItem {
    datetime: number;
    headline: string;
    source: string;
    url: string;
    summary: string;
    related: string;
    image: string;
    lang: string;
    hasPaywall: boolean;
}
export declare class NewsItem implements IEXNewsItem {
    datetime: number;
    headline: string;
    source: string;
    url: string;
    summary: string;
    related: string;
    image: string;
    lang: string;
    hasPaywall: boolean;
}
