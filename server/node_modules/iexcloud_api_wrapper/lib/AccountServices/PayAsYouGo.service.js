"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const axios_1 = require("axios");
const baseURL = "https://cloud.iexapis.com/";
dotenv.config();
const sk = process.env.IEXCLOUD_SECRET_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;
const token = `?token=${sk}`;
exports.enablePayAsYouGo = () => {
    const restURL = baseURL + apiversion + "/account/payasyougo" + token;
    // console.log( restURL );
    const result = axios_1.default
        .post(restURL, { token: sk, allow: true })
        .then(res => res.data);
    return result;
};
exports.disablePayAsYouGo = () => {
    const restURL = baseURL + apiversion + "/account/payasyougo" + token;
    // console.log( restURL );
    const result = axios_1.default
        .post(restURL, { token: sk, allow: false })
        .then(res => res.data);
    return result;
};
