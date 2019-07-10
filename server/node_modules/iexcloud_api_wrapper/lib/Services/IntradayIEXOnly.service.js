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
const IntradayForDate_service_1 = require("./IntradayForDate.service");
exports.intradayIEXOnly = (symbol, chartLastN = 0, chartInterval = 1, changeFromClose = true, chartReset = false, chartSimplify = false) => __awaiter(this, void 0, void 0, function* () {
    let endpoint = `/stock/${symbol}/chart/1d?chartIEXOnly=true`;
    if (chartLastN > 0) {
        endpoint = endpoint + `&chartLast=${chartLastN}`;
    }
    if (chartInterval > 1) {
        endpoint = endpoint + `&chartInterval=${chartInterval}`;
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
        const r = Object.assign(new IntradayForDate_service_1.IntradayIEXOnly(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
