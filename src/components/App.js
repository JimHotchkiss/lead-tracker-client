import React, { Component } from "react";
import Header from "./common/header/Header";
import Login from "./login/Login";
import DashBoard from "../containers/dashBoard/DashBoard";
import LeadForm from "../containers/leads/LeadForm";
import ShowLead from "../containers/leads/ShowLead";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./app.css";
class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <div>
          <Header />
        </div>
        <div className='components-div'>
          <Switch>
            <Route exact path='/' component={DashBoard} />
            <Route path='/login' component={Login} />
            <Route path='/leads/new' component={LeadForm} />
            <Route path='/leads/:id/show' component={ShowLead} />
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
