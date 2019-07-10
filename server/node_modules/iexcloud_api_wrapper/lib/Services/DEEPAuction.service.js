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
exports.auction = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/deep/auction?symbols=${symbol}`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    // console.log(data);
    const result = Object.assign(new Auction(), data);
    return result;
});
class Auction {
    constructor() {
        this.auctionType = "";
        this.pairedShares = 0;
        this.imbalanceShares = 0;
        this.referencePrice = 0;
        this.indicativePrice = 0;
        this.auctionBookPrice = 0;
        this.collarReferencePrice = 0;
        this.lowerCollarPrice = 0;
        this.upperCollarPrice = 0;
        this.extensionNumber = 0;
        this.startTime = "";
        this.lastUpdate = 0;
    }
}
exports.Auction = Auction;
