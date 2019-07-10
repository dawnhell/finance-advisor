"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iexcloud_service_1 = require("./iexcloud.service");
exports.financials = (symbol, lastn = 1) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/financials/${lastn}/`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const tmp = data.financials;
    const result = tmp.map((o) => {
        const r = Object.assign(new Financials(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
class Financials {
    constructor() {
        this.symbol = "";
        this.reportDate = "";
        this.grossProfit = 0;
        this.costOfRevenue = 0;
        this.operatingRevenue = 0;
        this.totalRevenue = 0;
        this.operatingIncome = 0;
        this.netIncome = 0;
        this.researchAndDevelopment = 0;
        this.operatingExpense = 0;
        this.currentAssets = 0;
        this.totalAssets = 0;
        this.totalLiabilities = 0;
        this.currentCash = 0;
        this.currentDebt = 0;
        this.totalCash = 0;
        this.totalDebt = 0;
        this.shareholderEquity = 0;
        this.cashChange = 0;
        this.cashFlow = 0;
        this.operatingGainsLosses = 0;
    }
}
exports.Financials = Financials;
