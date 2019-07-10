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
exports.previousDay = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/previous`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = Object.assign(new PreviousDay(), data);
    return result;
});
class PreviousDay {
    constructor() {
        this.symbol = "";
        this.date = "";
        this.open = 0;
        this.high = 0;
        this.low = 0;
        this.close = 0;
        this.volume = 0;
        this.unadjustedVolume = 0;
        this.change = 0;
        this.changePercent = 0;
    }
}
exports.PreviousDay = PreviousDay;
