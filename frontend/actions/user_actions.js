import * as UserAPI from '../util/user_api_util';
import { receiveCurrentUser } from './session'

export const RECEIVE_BUYING_POWER = "RECEIVE_BUYING_POWER"

export const RECEIVE_BUYING_POWER = () => ({
  type: RECEIVE_BUYING_POWER,
  buying_power
});

export const receiveBuyingPower = (id) => dispatch => (
  UserAPI.receiveBuyingPower(id).then((user) => dispatch(receiveCurrentUser(user)))
  )

// export const updateBuyingPower = (buyingPower, id) => dispatch => (
//   UserAPI.updateBuyingPower(buyingPower, id).then((user) => dispatch(receiveCurrentUser(user)))
// )