"use strict";
/**
 * @jest-environment node
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const iex = require("./index");
test("advancedStats", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.advancedStats("AAPL")).toBeInstanceOf(iex.AdvancedStats);
}));
test("balanceSheet", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.balanceSheet("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.BalanceSheet)]));
}));
test("cashFlowStatement", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.cashFlowStatement("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.CashFlowStatement)]));
}));
test("incomeStatement", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.incomeStatement("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.IncomeStatement)]));
}));
test("auction", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.auction("AAPL")).toBeInstanceOf(iex.Auction);
}));
test("book", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.book("AAPL")).toBeInstanceOf(iex.Book);
}));
test("ceoCompensation", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.ceoCompensation("AAPL")).toBeInstanceOf(iex.CeoCompensation);
}));
test("company", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.company("AAPL")).toBeInstanceOf(iex.Company);
}));
// test("cryptoQuote", async () => {
//   expect(await iex.cryptoQuote("BTC")).toBeInstanceOf(iex.CryptoQuote);
// });
test("officialPrice", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.officialPrice("AAPL")).toBeInstanceOf(iex.DEEPOfficialPrice);
}));
// test("deepTrades", async () => {
//   expect(await iex.deepTrades("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.DEEPTrade)])
//   );
// });
test("delayedQuote", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.delayedQuote("AAPL")).toBeInstanceOf(iex.DelayedQuote);
}));
// test("dividends", async () => {
//   expect(await iex.dividends("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.Dividends)])
//   );
// });
test("earnings", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.earnings("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.Earnings)]));
}));
// test("earningsToday", async () => {
//   expect(await iex.earningsToday("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.EarningsToday)])
//   );
// });
// test("effectiveSpread", async () => {
//   expect(await iex.effectiveSpread("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.EffectiveSpread)])
//   );
// });
test("endOfDay", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.endOfDay("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.EndOfDay)]));
}));
test("endOfDayCloseOnly", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.endOfDayCloseOnly("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.EndOfDayCloseOnly)]));
}));
test("estimates", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.estimates("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.Estimates)]));
}));
test("financials", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.financials("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.Financials)]));
}));
test("history EndOfDay", () => __awaiter(this, void 0, void 0, function* () {
    const eod = yield iex.history("AAPL");
    // console.log(eod.slice(0,2))  
    expect(eod).toEqual(expect.arrayContaining([expect.any(iex.EndOfDay)]));
}));
test("history Intraday", () => __awaiter(this, void 0, void 0, function* () {
    const intraday = yield iex.history("AAPL", { period: "1d" });
    // console.log(intraday.slice(0,2))
    expect(intraday).toEqual(expect.arrayContaining([expect.any(iex.Intraday)]));
}));
test("history Intraday for date ", () => __awaiter(this, void 0, void 0, function* () {
    const intraday = yield iex.history("AAPL", { date: "2019-05-17" });
    // console.log(intraday.slice(0,2))
    expect(intraday).toEqual(expect.arrayContaining([expect.any(iex.Intraday)]));
}));
test("history EndOfDay for date ", () => __awaiter(this, void 0, void 0, function* () {
    const intraday = yield iex.history("AAPL", { chartByDay: true, date: "2019-05-17" });
    // console.log(intraday.slice(0,2))
    expect(intraday).toEqual(expect.arrayContaining([expect.any(iex.EndOfDay)]));
}));
test("iexSymbols", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.iexSymbols()).toEqual(expect.arrayContaining([expect.any(iex.IEXSymbol)]));
}));
test("incomeStatement", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.incomeStatement("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.IncomeStatement)]));
}));
test("intraday", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.intraday("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.Intraday)]));
}));
test("intradayIEXOnly", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.intradayIEXOnly("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.IntradayIEXOnly)]));
}));
test("intradayForDate", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.intradayForDate("AAPL", "20190517")).toEqual(expect.arrayContaining([expect.any(iex.IntradayIEXOnly)]));
}));
test("keyStats", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.keyStats("AAPL")).toBeInstanceOf(iex.KeyStats);
}));
// test("list", async () => {
//   expect(await iex.list("gainers")).toEqual(
//     expect.arrayContaining([expect.any(iex.Quote)])
//   );
// });
test("logo", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.logoURL("AAPL")).toBeInstanceOf(iex.Logo);
}));
test("marketSymbols", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.marketSymbols()).toEqual(expect.arrayContaining([expect.any(iex.MarketSymbol)]));
}));
test("marketVolume", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.marketVolume()).toEqual(expect.arrayContaining([expect.any(iex.MarketVolume)]));
}));
test("news", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.news("AAPL", 2)).toEqual(expect.arrayContaining([expect.any(iex.NewsItem)]));
}));
test("ohlc", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.ohlc("AAPL")).toEqual(expect.any(iex.OHLC));
}));
// test("peers", async () => {
//   expect(await iex.peers("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(String)])
//   );
// });
test("previousDay", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.previousDay("AAPL")).toBeInstanceOf(iex.PreviousDay);
}));
test("price", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.price("AAPL")).toEqual(expect.any(Number));
}));
test("priceTarget", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.priceTarget("AAPL")).toBeInstanceOf(iex.PriceTarget);
}));
test("quote", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.quote("AAPL")).toBeInstanceOf(iex.Quote);
}));
test("sectorPerformance", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.sectorPerformance()).toEqual(expect.arrayContaining([expect.any(iex.SectorPerformance)]));
}));
test("socialSentiment daily", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.socialSentiment("AAPL", "daily", "20190213")).toBeInstanceOf(iex.SocialSentiment);
}));
test("socialSentiment minute", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.socialSentiment("AAPL", "daily", "20190213")).toBeInstanceOf(iex.SocialSentiment);
}));
// test("splits", async () => {
//   expect(await iex.splits("CNC")).toEqual(
//     expect.arrayContaining([expect.any(iex.Splits)])
//   );
// });
// test("tops", async () => {
//   expect(await iex.tops("AAPL")).toEqual(
//     expect.arrayContaining([expect.any(iex.TOPS)])
//   );
// });
test("topsLast", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.topsLast("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.TOPSLast)]));
}));
test("volumeByVenue", () => __awaiter(this, void 0, void 0, function* () {
    expect(yield iex.volumeByVenue("AAPL")).toEqual(expect.arrayContaining([expect.any(iex.VolumeByVenue)]));
}));
