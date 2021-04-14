export const fetchStonk = (symbol) => {
  return $.ajax({
    method: 'GET',
    url: `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=c1raom2ad3iatqdnkia0`
  })
}

