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
exports.dividends = (symbol, range = "1m") => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/dividends/${range}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = data.map((o) => {
        const r = Object.assign(new Dividends(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
class Dividends {
    constructor() {
        this.symbol = "";
        this.exDate = "";
        this.paymentDate = "";
        this.recordDate = "";
        this.declaredDate = "";
        this.amount = 0;
        this.flag = "";
        this.currency = "";
        this.description = "";
        this.frequency = "";
    }
}
exports.Dividends = Dividends;
