import React, { Component } from "react";
import Header from "./header/Header";
import Login from "./login/Login";
import Users from "./users/Users";
import DashBoard from "../containers/dashBoard/DashBoard";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./app.css";
class App extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className='app-container'>
        <div>
          <Header />
        </div>
        <div className='components-div'>
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/login' component={Login} />
            <Route path='/users/:id' component={Users} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps)(App);
