import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import { store, persistor } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react'



document.addEventListener('DOMContentLoaded', () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     session: { id: window.currentUser.id },
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  // const root = document.getElementById('root');
  // ReactDOM.render(<Root store={store} />, root);
  ReactDOM.render(<Root store={store}  persistor={persistor}/>, root);
  
  
  
  
  
  // document.addEventListener("DOMContentLoaded", () => {
  //   const store = configureStore();
  
  //   window.getState = store.getState;
  //   window.dispatch = store.dispatch;
  
  //   const root = document.getElementById("root");
  //   ReactDOM.render(<Root store={store} />, root);
  // });
});