import * as UserAPI from '../util/user_api_util';
import { receiveCurrentUser } from './session_actions'

// export const RECEIVE_BUYING_POWER = "RECEIVE_BUYING_POWER"

// export const receiveBuyingPower = () => ({
//   type: RECEIVE_BUYING_POWER,
//   buying_power
// });

// export const fetchBuyingPower = (id) => dispatch => (
//   UserAPI.fetchBuyingPower(id).then((user) => dispatch(receiveCurrentUser(user)))
// )

export const updateBuyingPower = (buyingPower, id) => dispatch => (
  UserAPI.updateBuyingPower(buyingPower, id).then((user) => dispatch(receiveCurrentUser(user)))
)