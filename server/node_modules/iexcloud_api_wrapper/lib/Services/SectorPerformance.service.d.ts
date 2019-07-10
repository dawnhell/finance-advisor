export declare const sectorPerformance: () => Promise<SectorPerformance[]>;
export interface IEXSectorPerformance {
    type: string;
    name: string;
    performance: number;
    lastUpdated: number;
}
export declare class SectorPerformance {
    type: string;
    name: string;
    performance: number;
    lastUpdated: number;
}
