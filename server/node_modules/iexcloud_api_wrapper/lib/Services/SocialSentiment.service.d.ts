export declare type SentimentType = "daily" | "minute";
export declare const socialSentiment: (symbol: string, type?: SentimentType, date?: string) => Promise<SocialSentiment | SocialSentiment[] | null>;
export interface IEXSocialSentiment {
    symbol: string;
    date: string;
    minute: string | null;
    sentiment: number;
    totalScores: number;
    positive: number;
    negative: number;
}
export declare class SocialSentiment implements IEXSocialSentiment {
    symbol: string;
    date: string;
    minute: string | null;
    sentiment: number;
    totalScores: number;
    positive: number;
    negative: number;
}
