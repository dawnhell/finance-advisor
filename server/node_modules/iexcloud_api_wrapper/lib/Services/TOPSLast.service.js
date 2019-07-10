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
exports.topsLast = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/tops/last?symbols=${symbol}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = data.map((o) => Object.assign(new TOPSLast(), o));
    return result;
});
class TOPSLast {
    constructor() {
        this.symbol = "";
        this.price = 0;
        this.size = 0;
        this.time = 0;
    }
}
exports.TOPSLast = TOPSLast;
