// const APIhash = 'c1raom2ad3iatqdnkia0'

// export const fetchStonk = (symbol) => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${APIhash}`
//   })
// }

// export const fetchStonks = () =>
//   $.ajax({
//     url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&securityType=Common%5Stock&token=${APIhash}`
//   });

export const fetchStonk = (stockSymbol) =>
  $.ajax({
    url: `/api/stocks/${stockSymbol}`,
  });

// export const fetchStonks = () => ///no index yet
//   $.ajax({
//     url: "/api/stocks",
//   });

export const fetchAllStocks = (APIhash) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&securityType=Common%20Stock&token=${APIhash}`,
  });

export const fetchStonkCompanyProfile = (symbol, APIhash) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${APIhash}`,
  });

export const fetchStonkNews = (
  symbol,
  fromDate,
  toDate,
  APIhash
) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${APIhash}`,
  });

export const fetchStonkCurrentPrice = (symbol, APIhash) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${APIhash}`,
  });

export const fetchStonkIntraday = (symbol, from, to, APIhash) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=5&from=${from}&to=${to}&token=${APIhash}`,
  });

// export const fetchMarketNews = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://finnhub.io/api/v1/news?category=general&token=${window.finnhubAPIKey}`
//   })
// }