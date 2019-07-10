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
exports.intraday = (symbol, chartLastN = 0, chartInterval = 1, changeFromClose = true, chartReset = false, chartSimplify = false) => __awaiter(this, void 0, void 0, function* () {
    let endpoint = `/stock/${symbol}/chart/1d?chartInterval=${chartInterval}`;
    if (chartLastN > 0) {
        endpoint = endpoint + `&chartLast=${chartLastN}`;
    }
    if (changeFromClose) {
        endpoint = endpoint + `&changeFromClose=true`;
    }
    if (chartReset) {
        endpoint = endpoint + `&chartReset=true`;
    }
    if (chartSimplify) {
        endpoint = endpoint + `&chartSimplify=true`;
    }
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => {
        const r = Object.assign(new Intraday(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
class Intraday {
    constructor() {
        this.date = "";
        this.minute = "";
        this.label = "";
        this.high = 0;
        this.low = 0;
        this.average = 0;
        this.volume = 0;
        this.notional = 0;
        this.numberOfTrades = 0;
        this.marketHigh = 0;
        this.marketLow = 0;
        this.marketAverage = 0;
        this.marketVolume = 0;
        this.marketNotional = 0;
        this.marketNumberOfTrades = 0;
        this.open = 0;
        this.close = 0;
        this.marketOpen = 0;
        this.marketClose = 0;
        this.changeOverTime = 0;
        this.marketChangeOverTime = 0;
    }
}
exports.Intraday = Intraday;
