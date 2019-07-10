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
exports.keyStats = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/stats`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = Object.assign(new KeyStats(), data);
    return result;
});
class KeyStats {
    constructor() {
        this.companyName = "";
        this.marketcap = 0;
        this.week52high = 0;
        this.week52low = 0;
        this.week52change = 0;
        this.sharesOutstanding = 0;
        this.float = 0;
        this.symbol = "";
        this.avg10Volume = 0;
        this.avg30Volume = 0;
        this.day200MovingAvg = 0;
        this.day50MovingAvg = 0;
        this.employees = 0;
        this.ttmEPS = 0;
        this.ttmDividendRate = 0;
        this.dividendYield = 0;
        this.nextDividendDate = "";
        this.exDividendDate = "";
        this.nextEarningsDate = "";
        this.peRatio = 0;
        this.beta = 0;
        this.maxChangePercent = 0;
        this.year5ChangePercent = 0;
        this.year2ChangePercent = 0;
        this.year1ChangePercent = 0;
        this.ytdChangePercent = 0;
        this.month6ChangePercent = 0;
        this.month3ChangePercent = 0;
        this.month1ChangePercent = 0;
        this.day30ChangePercent = 0;
        this.day5ChangePercent = 0;
    }
}
exports.KeyStats = KeyStats;
