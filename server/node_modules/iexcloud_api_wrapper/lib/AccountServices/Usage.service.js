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
const iexaccount_service_1 = require("./iexaccount.service");
exports.accountUsage = (type) => __awaiter(this, void 0, void 0, function* () {
    const endpoint = `/account/metadata/${type}`;
    const data = yield iexaccount_service_1.iexApiRequest(endpoint);
    return data;
});
