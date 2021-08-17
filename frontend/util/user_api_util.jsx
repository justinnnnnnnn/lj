
export const getBuyingPower = (id) => {
    return $.ajax({
      method: 'GET',
      url: `/api/users/${id}`,
      data: { user }
    })
  }

export const updateBuyingPower = (buyingPower, id) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: { user }
    })
  }
  
  export const updatePortfolio = (stonk, shares, id) => {
    return $.ajax({
      method: 'PATCH',
      url: `/api/users/${id}`,
      data: { stonk }
    })
  }