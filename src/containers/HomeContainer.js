import React, { Component } from "react";
import NavBar from "../components/Navbar";
import RepDashboardContainer from "./RepDashboardContainer";
import UserFormContainer from "./UserFormContainer";
import LeadsManager from "./LeadsManager";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
class HomeContainer extends Component {
  render() {
    return (
      <div className='home-container'>
        <NavBar />
        <Switch>
          <Route path='/users/:id'>
            <RepDashboardContainer />
          </Route>
          <Route path='/login'>
            <UserFormContainer />
          </Route>
          <Route path='/manage_leads'>
            <LeadsManager />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(HomeContainer);
