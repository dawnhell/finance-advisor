"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const axios_1 = require("axios");
const baseURL = "https://cloud.iexapis.com/";
dotenv.config();
const sk = process.env.IEXCLOUD_SECRET_KEY;
const apiversion = process.env.IEXCLOUD_API_VERSION;
const aToken = `&token=${sk}`;
const qToken = `?token=${sk}`;
const chooseToken = (str) => {
    if (str.includes("?")) {
        return aToken;
    }
    else {
        return qToken;
    }
};
exports.iexApiRequest = (endpoint) => {
    const iexRestURL = baseURL + apiversion + endpoint + chooseToken(endpoint);
    // console.log( iexRestURL );
    const result = axios_1.default
        .get(iexRestURL)
        .then(res => res.data);
    return result;
};
