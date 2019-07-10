import { Quote as CryptoQuote } from "./Quote.service";
declare const cryptoQuote: (symbol: string) => Promise<CryptoQuote>;
export { CryptoQuote, cryptoQuote };
