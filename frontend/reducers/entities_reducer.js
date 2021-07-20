import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import stonksReducer from './stonks_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stonks: stonksReducer
});

export default entitiesReducer;