import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
// Bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
