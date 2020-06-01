import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userLogOut } from "../../redux/actions/userAsyncActions";

import "./header.css";

class Header extends Component {
  handleLogOut = (e) => {
    this.props.userLogOut();
  };
  render() {
    const { currentUser } = this.props;
    return (
      <div className='nav-bar-div'>
        <div className='logContainer'>
          <NavLink to='/login' style={{ textDecoration: "none" }}>
            <div
              onClick={this.handleLogOut}
              id='login-img'
              className='loginImgDiv'></div>
            <p>User logout</p>
          </NavLink>
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
  return { currentUser: state.currentUser };
};

export default connect(mapStateToProps, { userLogOut })(Header);
