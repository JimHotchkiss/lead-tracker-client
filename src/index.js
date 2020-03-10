import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
// Bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
