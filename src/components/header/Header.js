import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userLogOut } from "../../redux/actions/userAsyncActions";

import "./header.css";

class Header extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    this.props.userLogOut();
  };
  render() {
    return (
      <div className='nav-bar-div'>
        <div className='logContainer'>
          {this.props.user !== null ? (
            <div
              className='logout-div'
              onClick={this.handleLogOut}
              to='/logout'
              style={{ textDecoration: "none" }}>
              <div id='logout-img' className='loginImgDiv'></div>
              <p>User logout</p>
            </div>
          ) : (
            <NavLink to='/login' style={{ textDecoration: "none" }}>
              <div id='login-img' className='loginImgDiv'></div>
              <p>User login</p>
            </NavLink>
          )}
        </div>
        <div className='dashBoardLink'>
          <NavLink exact to='/' style={{ textDecoration: "none" }}>
            <div className='dashBoardImgDiv'></div>
            <p>Dashboard</p>
          </NavLink>{" "}
        </div>
        <div className='add-lead-div'>
          <NavLink to='/leads/new' style={{ textDecoration: "none" }}>
            <div className='add-lead-img-div'></div>
            <p>Add lead</p>
          </NavLink>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { userLogOut })(Header);
