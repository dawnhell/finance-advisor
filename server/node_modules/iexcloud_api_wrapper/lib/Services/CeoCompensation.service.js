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
exports.ceoCompensation = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/ceo-compensation`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = Object.assign(new CeoCompensation(), data);
    return result;
});
class CeoCompensation {
    constructor() {
        this.symbol = "";
        this.name = "";
        this.companyName = "";
        this.location = "";
        this.salary = 0;
        this.bonus = 0;
        this.stockAwards = 0;
        this.optionAwards = 0;
        this.nonEquityIncentives = 0;
        this.pensionAndDeferred = 0;
        this.otherComp = 0;
        this.total = 0;
        this.year = "";
    }
}
exports.CeoCompensation = CeoCompensation;
