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
/**
 * Pulls balance sheet data. Available quarterly (4 quarters) and annually (4 years)
 *
 * - Data Weigthing: 3000 message units per symbol per period
 *
 * @param symbol - a market symbol
 * @param period - "annual" | "quarter"
 * @returns array of records
 *
 */
exports.balanceSheet = (symbol, period = "quarter", lastN = 1) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/balance-sheet/${lastN}?period=${period}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = data.balancesheet;
    return result.map((o) => {
        const r = Object.assign(new BalanceSheet(), o);
        r.symbol = symbol;
        return r;
    });
});
class BalanceSheet {
    constructor() {
        this.symbol = "";
        this.reportDate = "";
        this.currentCash = 0;
        this.shortTermInvestments = 0;
        this.receivables = 0;
        this.inventory = 0;
        this.otherCurrentAssets = 0;
        this.currentAssets = 0;
        this.longTermInvestments = 0;
        this.propertyPlantEquipment = 0;
        this.goodwill = 0;
        this.intangibleAssets = 0;
        this.otherAssets = 0;
        this.totalAssets = 0;
        this.accountsPayable = 0;
        this.currentLongTermDebt = 0;
        this.otherCurrentLiabilities = 0;
        this.totalCurrentLiabilities = 0;
        this.longTermDebt = 0;
        this.otherLiabilities = 0;
        this.minorityInterest = 0;
        this.totalLiabilities = 0;
        this.commonStock = 0;
        this.retainedEarnings = 0;
        this.treasuryStock = 0;
        this.capitalSurplus = 0;
        this.shareholderEquity = 0;
        this.netTangibleAssets = 0;
    }
}
exports.BalanceSheet = BalanceSheet;
