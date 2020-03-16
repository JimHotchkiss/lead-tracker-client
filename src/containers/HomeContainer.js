import React, { Component } from "react";
import RepDashboardContainer from "./RepDashboardContainer";
import UserFormContainer from "./UserFormContainer";
// Import BrowswerRouter
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        {/* NavBar */}
        <Router>
          <Switch>
            <Route
              exact={true}
              path="/users/new"
              render={routerProps => <UserFormContainer {...routerProps} />}
            />
            <Route
              exact={true}
              path="/users/:id"
              render={routerProps => <RepDashboardContainer {...routerProps} />}
            />
            <Route
              exact={true}
              path="/login"
              render={routerProps => <UserFormContainer {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default HomeContainer;
