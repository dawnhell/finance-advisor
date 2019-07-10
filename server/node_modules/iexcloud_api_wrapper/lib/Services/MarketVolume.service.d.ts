export declare const marketVolume: () => Promise<MarketVolume[]>;
export interface IEXMarketVolume {
    mic: string;
    tapeId: string;
    venueName: string;
    volume: number;
    tapeA: number;
    tapeB: number;
    tapeC: number;
    marketPercent: number;
    lastUpdated: number;
}
export declare class MarketVolume {
    mic: string;
    tapeId: string;
    venueName: string;
    volume: number;
    tapeA: number;
    tapeB: number;
    tapeC: number;
    marketPercent: number;
    lastUpdated: number;
}
