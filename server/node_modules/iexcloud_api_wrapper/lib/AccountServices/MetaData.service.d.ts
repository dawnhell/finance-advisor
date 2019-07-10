export declare const accountMetadata: () => Promise<AccountMetaData>;
export interface IEXAccountMetaData {
    payAsYouGoEnabled: boolean;
    effectiveDate: number;
    endDateEffective: number;
    subscriptionTermType: string;
    tierName: string;
    messageLimit: number;
    messagesUsed: number;
}
export declare class AccountMetaData {
    payAsYouGoEnabled: boolean;
    effectiveDate: number;
    endDateEffective: number;
    subscriptionTermType: string;
    tierName: string;
    messageLimit: number;
    messagesUsed: number;
}
