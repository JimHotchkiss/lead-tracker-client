import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
// Bootstrap stylesheet
import "bootstrap/dist/css/bootstrap.min.css";
// Import BrowswerRouter
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
