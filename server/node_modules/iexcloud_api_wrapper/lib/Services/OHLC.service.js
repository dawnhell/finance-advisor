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
exports.ohlc = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/ohlc`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = new OHLC();
    result.open = data.open.price;
    result.close = data.close.price;
    result.high = data.high;
    result.low = data.low;
    result.openTime = data.open.time;
    result.closeTime = data.close.time;
    result.symbol = symbol;
    return result;
});
class OHLC {
    constructor() {
        this.symbol = "";
        this.open = 0;
        this.close = 0;
        this.high = 0;
        this.low = 0;
        this.openTime = 0;
        this.closeTime = 0;
    }
}
exports.OHLC = OHLC;
