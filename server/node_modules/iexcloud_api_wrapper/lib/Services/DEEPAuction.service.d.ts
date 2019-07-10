export declare const auction: (symbol: string) => Promise<Auction>;
export interface IEXAuction {
    auctionType: string;
    pairedShares: number;
    imbalanceShares: number;
    referencePrice: number;
    indicativePrice: number;
    auctionBookPrice: number;
    collarReferencePrice: number;
    lowerCollarPrice: number;
    upperCollarPrice: number;
    extensionNumber: number;
    startTime: string;
    lastUpdate: number;
}
export declare class Auction implements IEXAuction {
    auctionType: string;
    pairedShares: number;
    imbalanceShares: number;
    referencePrice: number;
    indicativePrice: number;
    auctionBookPrice: number;
    collarReferencePrice: number;
    lowerCollarPrice: number;
    upperCollarPrice: number;
    extensionNumber: number;
    startTime: string;
    lastUpdate: number;
}
