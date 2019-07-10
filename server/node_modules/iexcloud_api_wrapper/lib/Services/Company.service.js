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
exports.company = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/company`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = Object.assign(new Company(), data);
    return result;
});
class Company {
    constructor() {
        this.symbol = "";
        this.companyName = "";
        this.CEO = "";
        this.exchange = "";
        this.industry = "";
        this.website = "";
        this.description = "";
        this.issueType = "";
        this.sector = "";
        this.securityName = "";
        this.tags = [];
        this.employees = 0;
    }
}
exports.Company = Company;
