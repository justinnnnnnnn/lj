import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// const store = (preloadedState = {}) => {
//   return (createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)));
// }



export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export const persistor = persistStore(store)

export default { persistor, store };
