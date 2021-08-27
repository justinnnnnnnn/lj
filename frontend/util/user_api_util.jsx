
export const updateBuyingPower = (buyingPower, id) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: { buyingPower }
    })
  }
export const getBuyingPower = (id) => {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${id}`,
    })
}

export const stockBuy = (ticker, shares, id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${id}/stock_buys`,
    data: {ticker, shares}
  })
}

export const updateStockBuy = (ticker, shares, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${id}/stock_buys/${ticker}`,
    data: { shares }
  })
}

export const getStockBuy = (ticker, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/stock_buys/${ticker}`,
    data: { shares }
  })
}