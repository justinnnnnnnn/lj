import {
  RECEIVE_STONK,
  RECEIVE_STONK_DATA,
  RECEIVE_STONK_NEWS,
  RECEIVE_STONK_BIO
} from "../actions/stonk_actions";

const stonksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STONK:
      return Object.assign({}, state, { [action.symbol]: action.stonk });
    case RECEIVE_STONK_DATA:
      nextState[action.symbol].data = action.data;
      return nextState;
    case RECEIVE_STONK_NEWS:
      nextState[action.symbol].news = action.news;
      return nextState;
    case RECEIVE_STONK_BIO:
      nextState[action.symbol].bio = action.bio;
      return nextState;
    default:
      return state;
  }
};

export default stonksReducer;
