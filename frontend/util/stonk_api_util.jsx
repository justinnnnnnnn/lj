// const APIhash = 'c1raom2ad3iatqdnkia0'
// const apihash = window.finnhubAPIKey;
const apihash = 'c1skd2iad3i9o8uantdg'
console.log(window)
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

// export const fetchStonk = (stockSymbol) =>
//   $.ajax({
//     url: `/api/stocks/${stockSymbol}`,
//   });
export const fetchStonk = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/search?q=${symbol}&token=${apihash}`,
    // url: `'https://finnhub.io/api/v1/stock/${symbol}?exchange=US&token='${APIhash}`
  });

// export const fetchStonks = () => ///no index yet
//   $.ajax({
//     url: "/api/stocks",
//   });

export const fetchAllStocks = () =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNAS&securityType=Common%20Stock&token=${apihash}`,
  });

export const fetchStonkBio = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${apihash}`,
  });

export const fetchStonkNews = (
  symbol,
  fromDate,
  toDate
  
) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${fromDate}&to=${toDate}&token=${apihash}`,
  });

export const fetchStonkCurrentPrice = (symbol) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apihash}`,
  });

export const fetchStonkIntraday = (symbol, from, to) =>
  $.ajax({
    url: `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=5&from=${from}&to=${to}&token=${apihash}`,
  });

// export const fetchMarketNews = () => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://finnhub.io/api/v1/news?category=general&token=${window.finnhubAPIKey}`
//   })
// }