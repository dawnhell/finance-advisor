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
exports.earningsToday = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/today-earnings/`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data)
    const bto = data.bto;
    const amc = data.amc;
    const other = data.other;
    const result = bto.map((o) => {
        const r = Object.assign(new EarningsToday(), o);
        return r;
    });
    return result;
});
class EarningsToday {
    constructor() {
        this.symbol = "";
        this.consensusEPS = 0;
        this.announceTime = 0;
        this.numberOfEstimates = 0;
        this.fiscalPeriod = "";
        this.fiscalEndDate = "";
        this.quote = {};
    }
}
exports.EarningsToday = EarningsToday;
