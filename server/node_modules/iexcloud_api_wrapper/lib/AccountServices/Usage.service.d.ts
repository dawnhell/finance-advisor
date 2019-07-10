declare type UsageType = "messages" | "rules" | "rule-records" | "alerts" | "alert-records";
export declare const accountUsage: (type: UsageType) => Promise<any>;
export {};
