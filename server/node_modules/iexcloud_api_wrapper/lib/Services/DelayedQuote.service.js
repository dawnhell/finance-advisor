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
exports.delayedQuote = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/delayed-quote`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = Object.assign(new DelayedQuote(), data);
    return result;
});
class DelayedQuote {
    constructor() {
        this.symbol = "";
        this.delayedPrice = 0;
        this.delayedSize = 0;
        this.delayedPriceTime = 0;
        this.high = 0;
        this.low = 0;
        this.totalVolume = 0;
        this.processedTime = 0;
    }
}
exports.DelayedQuote = DelayedQuote;
