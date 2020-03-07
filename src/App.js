import React, { Component } from "react";
import "./styles.css";
import UserFormContainer from "./containers/UserFormContainer";

class App extends Component {
  render() {
    return (
      <div className="app-div">
        <h3>React Lead Tracker App</h3>
        <UserFormContainer />
      </div>
    );
  }
}

export default App;
