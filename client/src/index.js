import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
