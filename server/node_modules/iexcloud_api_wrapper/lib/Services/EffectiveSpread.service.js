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
exports.effectiveSpread = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/effective-spread`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => {
        const r = Object.assign(new EffectiveSpread(), o);
        r.symbol = symbol;
        return r;
    });
    return result;
});
class EffectiveSpread {
    constructor() {
        this.symbol = "";
        this.volume = 0;
        this.venue = "";
        this.venueName = "";
        this.effectiveSpread = 0;
        this.effectiveQuoted = 0;
        this.priceImprovement = 0;
    }
}
exports.EffectiveSpread = EffectiveSpread;
