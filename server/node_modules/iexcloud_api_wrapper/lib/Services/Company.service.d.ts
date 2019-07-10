export declare const company: (symbol: string) => Promise<Company>;
export interface IEXCompany {
    symbol: string;
    companyName: string;
    CEO: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    issueType: string;
    sector: string;
    securityName: string | null;
    tags: string[];
    employees: number | null;
}
export declare class Company {
    symbol: string;
    companyName: string;
    CEO: string;
    exchange: string;
    industry: string;
    website: string;
    description: string;
    issueType: string;
    sector: string;
    securityName: string;
    tags: string[];
    employees: number;
}
