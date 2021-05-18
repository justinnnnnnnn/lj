import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import { store, persistor } from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={store}  persistor={persistor}/>, root);
});