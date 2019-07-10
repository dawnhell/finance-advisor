export declare const volumeByVenue: (symbol: string) => Promise<VolumeByVenue[]>;
export interface IEXVolumeByVenue {
    symbol: string;
    volume: number;
    venue: string;
    venueName: string;
    date: string;
    marketPercent: number;
    avgMarketPercent: number;
}
export declare class VolumeByVenue {
    symbol: string;
    volume: number;
    venue: string;
    venueName: string;
    date: string;
    marketPercent: number;
    avgMarketPercent: number;
}
