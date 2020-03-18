import React, { Component } from "react";
import "./styles.css";
import HomeContainer from "./containers/HomeContainer";
import { getCurrentUser } from "./actions/newUserSubmit";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div className="app-div">
        <HomeContainer />
      </div>
    );
  }
}
export default connect(null, { getCurrentUser })(App);
