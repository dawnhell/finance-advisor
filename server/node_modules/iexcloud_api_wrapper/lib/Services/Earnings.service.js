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
exports.earnings = (symbol, lastn = 1) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/earnings/${lastn}/`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const tmp = data.earnings;
    const result = tmp.map((o) => {
        const r = Object.assign(new Earnings(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
class Earnings {
    constructor() {
        this.symbol = "";
        this.actualEPS = 0;
        this.consensusEPS = 0;
        this.announceTime = "";
        this.numberOfEstimates = 0;
        this.EPSSurpriseDollar = 0;
        this.EPSReportDate = "";
        this.fiscalPeriod = "";
        this.fiscalEndDate = "";
        this.yearAgo = 0;
        this.yearAgoChangePercent = 0;
    }
}
exports.Earnings = Earnings;
