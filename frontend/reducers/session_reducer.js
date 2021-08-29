import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const noUser = {id: null}

const sessionReducer = (state = noUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, {id: action.currentUser.id})
    case LOGOUT_CURRENT_USER:
      return noUser
    default:
      return state
  }
}

export default sessionReducer;