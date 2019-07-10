export declare const effectiveSpread: (symbol: string) => Promise<EffectiveSpread[]>;
export interface IEXEffectiveSpread {
    symbol: string;
    volume: number;
    venue: string;
    venueName: string;
    effectiveSpread: number;
    effectiveQuoted: number;
    priceImprovement: number;
}
export declare class EffectiveSpread implements IEXEffectiveSpread {
    symbol: string;
    volume: number;
    venue: string;
    venueName: string;
    effectiveSpread: number;
    effectiveQuoted: number;
    priceImprovement: number;
}
