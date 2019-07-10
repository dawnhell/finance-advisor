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
exports.incomeStatement = (symbol, period = "quarter", lastN = 1) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/income/${lastN}?period=${period}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = data.income;
    return result.map((o) => {
        const r = Object.assign(new IncomeStatement(), o);
        r.symbol = symbol;
        return r;
    });
});
class IncomeStatement {
    constructor() {
        this.symbol = "";
        this.reportDate = "";
        this.totalRevenue = 0;
        this.costOfRevenue = 0;
        this.grossProfit = 0;
        this.researchAndDevelopment = 0;
        this.sellingGeneralAndAdmin = 0;
        this.operatingExpense = 0;
        this.operatingIncome = 0;
        this.otherIncomeExpenseNet = 0;
        this.ebit = 0;
        this.interestIncome = 0;
        this.pretaxIncome = 0;
        this.incomeTax = 0;
        this.minorityInterest = 0;
        this.netIncome = 0;
        this.netIncomeBasic = 0;
    }
}
exports.IncomeStatement = IncomeStatement;
