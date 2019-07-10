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
const Quote_service_1 = require("./Quote.service");
const iexcloud_service_1 = require("./iexcloud.service");
exports.book = (symbol) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/stock/${symbol}/book`;
    const data = yield iexcloud_service_1.iexApiRequest(endpoint);
    const result = Object.assign(new Book(), data);
    return result;
});
class Book {
    constructor() {
        this.quote = new Quote_service_1.Quote();
        this.bids = [];
        this.asks = [];
        this.trades = [];
        this.systemEvent = { systemEvent: "", timestamp: 0 };
    }
}
exports.Book = Book;
