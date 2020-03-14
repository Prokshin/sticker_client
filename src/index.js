import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import stickers from "./reducers";
import { Provider } from "react-redux";

const initionalStore = [];

const store = createStore(stickers, initionalStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
