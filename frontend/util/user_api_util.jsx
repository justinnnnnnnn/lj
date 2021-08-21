
export const updateBuyingPower = (buyingPower, id) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: { buyingPower }
    })
  }
  
  export const updatePortfolio = (stonk, shares, id) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: { stonk }
    })
  }