import { GET_STONK } from '../actions/chart_actions';

const chartsReducer = (state = {}, action) => {
  switch(action.type) {
    case "WHO_KNOWS":
      return {};
    default:
      return state;
  }
}

export default chartsReducer;