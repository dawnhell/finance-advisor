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
 * Pulls cash flow data. Available quarterly (4 quarters) and annually (4 years)
 *
 * - Data Weighting: 1000 message units per symbol per period
 * - Data Schedule: Updates at 8am, 9am UTC daily
 *
 * @param symbol stock symbol
 * @param period (quarter) "annual" | "quarter"
 * @param lastN (1) number of periods to report
 * @return a dataframe
 * @export
 * @examples
 * cashflowStatement("AAPL",period = "quarter", lastN =4)
 */
exports.cashFlowStatement = (symbol, period = "quarter", lastN = 1) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/cash-flow/${lastN}?period=${period}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = data.cashflow;
    return result.map((o) => {
        const r = Object.assign(new CashFlowStatement(), o);
        r.symbol = symbol;
        return r;
    });
});
class CashFlowStatement {
    constructor() {
        this.symbol = "";
        this.reportDate = "";
        this.netIncome = 0;
        this.depreciation = 0;
        this.changesInReceivables = 0;
        this.changesInInventories = 0;
        this.cashChange = 0;
        this.cashFlow = 0;
        this.capitalExpenditures = 0;
        this.investments = 0;
        this.investingActivityOther = 0;
        this.totalInvestingCashFlows = 0;
        this.dividendsPaid = 0;
        this.netBorrowings = 0;
        this.otherFinancingCashFlows = 0;
        this.cashFlowFinancing = 0;
        this.exchangeRateEffect = 0;
    }
}
exports.CashFlowStatement = CashFlowStatement;
