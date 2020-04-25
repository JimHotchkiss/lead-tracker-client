import React, { Component } from "react";
import NavBar from "../components/Navbar";
import RepDashboardContainer from "./RepDashboardContainer";
import UserFormContainer from "./UserFormContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
class HomeContainer extends Component {
  render() {
    return (
      <div className='home-container'>
        {/* <NavBar /> */}
        <Router>
          <NavBar />
          <Switch>
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(HomeContainer);
