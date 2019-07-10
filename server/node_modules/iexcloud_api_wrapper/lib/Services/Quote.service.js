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
exports.quote = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/quote`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = Object.assign(new Quote(), data);
    return result;
});
class Quote {
    constructor() {
        this.symbol = "";
        this.companyName = "";
        this.calculationPrice = "";
        this.open = 0;
        this.openTime = 0;
        this.close = 0;
        this.closeTime = 0;
        this.high = 0;
        this.low = 0;
        this.latestPrice = 0;
        this.latestSource = "";
        this.latestTime = "";
        this.latestUpdate = 0;
        this.latestVolume = 0;
        this.iexRealtimePrice = 0;
        this.iexRealtimeSize = 0;
        this.iexLastUpdated = 0;
        this.delayedPrice = 0;
        this.delayedPriceTime = 0;
        this.extendedPrice = 0;
        this.extendedChange = 0;
        this.extendedChangePercent = 0;
        this.extendedPriceTime = 0;
        this.previousClose = 0;
        this.change = 0;
        this.changePercent = 0;
        this.iexMarketPercent = 0;
        this.iexVolume = 0;
        this.avgTotalVolume = 0;
        this.iexBidPrice = 0;
        this.iexBidSize = 0;
        this.iexAskPrice = 0;
        this.iexAskSize = 0;
        this.marketCap = 0;
        this.week52High = 0;
        this.week52Low = 0;
        this.ytdChange = 0;
    }
}
exports.Quote = Quote;
