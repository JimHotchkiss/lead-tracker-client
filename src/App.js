import React, { Component } from "react";
import "./styles.css";
import HomeContainer from "./containers/HomeContainer";
class App extends Component {
  render() {
    return (
      <div className="app-div">
        <HomeContainer />
      </div>
    );
  }
}
export default App;
