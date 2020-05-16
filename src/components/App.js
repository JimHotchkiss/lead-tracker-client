import React, { Component } from "react";
import Header from "./header/Header";
import Login from "./login/Login";
import Users from "./users/Users";
import DashBoard from "./dashBoard/DashBoard";
import { Switch, Route } from "react-router-dom";
import "../styles.css";

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/login' component={Login} />
          <Route path='/users/:id' component={Users} />
          <Route path='/logout' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
