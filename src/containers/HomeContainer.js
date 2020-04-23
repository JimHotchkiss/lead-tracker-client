import React, { Component } from "react";
import NavBar from "../components/Navbar";
import RepDashboardContainer from "./RepDashboardContainer";
import UserFormContainer from "./UserFormContainer";
// Import BrowswerRouter
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
class HomeContainer extends Component {
  render() {
    return (
      <div className='home-container'>
        {/* NavBar */}
        <NavBar />
        <Router>
          <Switch>
            {/* <Route
              exact={true}
              path="/users/new"
              render={routerProps => <UserFormContainer {...routerProps} />}
            /> */}
            <Route
              exact={true}
              path='/users/:id'
              render={(routerProps) => (
                <RepDashboardContainer {...routerProps} />
              )}
            />
            <Route
              exact={true}
              path='/login'
              render={(routerProps) => <UserFormContainer {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null)(HomeContainer);
