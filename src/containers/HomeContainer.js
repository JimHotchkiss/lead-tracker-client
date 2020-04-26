import React, { Component } from "react";
import NavBar from "../components/Navbar";
import RepDashboardContainer from "./RepDashboardContainer";
import UserFormContainer from "./UserFormContainer";
import LeadDetails from "./LeadDetails";
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
          <Route path='/leads/:id'>
            <LeadDetails />
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
