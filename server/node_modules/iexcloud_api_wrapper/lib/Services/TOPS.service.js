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
exports.tops = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/tops?symbols=${symbol}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => Object.assign(new TOPS(), o));
    return result;
});
class TOPS {
    constructor() {
        this.symbol = "";
        this.marketPercent = 0;
        this.bidSize = 0;
        this.bidPrice = 0;
        this.askSize = 0;
        this.askPrice = 0;
        this.volume = 0;
        this.lastSalePrice = 0;
        this.lastSaleSize = 0;
        this.lastSaleTime = 0;
        this.lastUpdated = 0;
        this.sector = "";
        this.securityType = "";
    }
}
exports.TOPS = TOPS;
