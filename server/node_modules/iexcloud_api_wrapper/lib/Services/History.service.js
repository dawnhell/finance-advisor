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
const Intraday_service_1 = require("./Intraday.service");
const EndOfDay_service_1 = require("./EndOfDay.service");
exports.history = (symbol, { changeFromClose = true, closeOnly = false, chartByDay = false, date = "", iexOnly = false, lastN = 0, interval = 1, period = "1m", reset = false, simplify = false } = {}) => __awaiter(this, void 0, void 0, function* () {
    let intraday = false;
    let endpoint;
    if (date.length > 0) {
        date = date.replace(/-/g, "");
        if (chartByDay) {
            period = `date/${date}?chartByDay=true`;
        }
        else {
            period = `date/${date}?chartByDay=false`;
            intraday = true;
        }
    }
    if (period === '1d') {
        intraday = true;
    }
    if (date.length > 0) {
        endpoint = `/stock/${symbol}/chart/${period}&chartCloseOnly=${closeOnly}`;
    }
    else {
        endpoint = `/stock/${symbol}/chart/${period}?chartCloseOnly=${closeOnly}`;
    }
    if (iexOnly) {
        endpoint = endpoint + "&chartIEXOnly=true";
    }
    if (lastN > 0) {
        endpoint = endpoint + `&chartLast=${lastN}`;
    }
    if (interval > 1) {
        endpoint = endpoint + `&chartInterval=${interval}`;
    }
    if (changeFromClose) {
        endpoint = endpoint + '&changeFromClose=true';
    }
    if (reset) {
        endpoint = endpoint + '&chartReset=true';
    }
    if (simplify) {
        endpoint = endpoint + '&chartSimplify=true';
    }
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => {
        let r;
        if (!intraday) {
            r = Object.assign(new EndOfDay_service_1.EndOfDay(), o);
        }
        else {
            r = Object.assign(new Intraday_service_1.Intraday(), o);
        }
        r.symbol = symbol;
        return r;
    });
    return result;
});
