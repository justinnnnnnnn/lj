import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import stonks from "./stonk_page_reducer"

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['entities', 'session']
}

const rootReducer = combineReducers({
  entities,
  session,
  errors
})

export default persistReducer(persistConfig, rootReducer);