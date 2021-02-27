import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { userLogOut } from "../../../redux/actions/userAsyncActions"

import "./header.css"

class Header extends Component {
  handleLogOut = (e) => {
    this.props.userLogOut()
  }
  render() {
    const { currentUser } = this.props
    // const { userLogin } = this.props
    return (
      <div className='nav-bar-div'>
        <div className='dashBoardLink'>
          <NavLink exact to='/' style={{ textDecoration: "none" }}>
            <div className='dashBoardImgDiv'></div>
            <p>Dashboard</p>
          </NavLink>{" "}
        </div>

        <div className='user-profile-div'>
          {currentUser !== null ? (
            <NavLink to='/leads/:id' style={{ textDecoration: "none" }}>
              <div className='user-profile-img-div'></div>
              <p>User Profile</p>
            </NavLink>
          ) : null}
        </div>

        <div className='add-lead-div'>
          {currentUser !== null ? (
            <NavLink to='/leads/new' style={{ textDecoration: "none" }}>
              <div className='add-lead-img-div'></div>
              <p>Add lead</p>
            </NavLink>
          ) : null}
        </div>

        {currentUser !== null ? (
          <div className='logContainer'>
            <NavLink to='/login' style={{ textDecoration: "none" }}>
              <div
                onClick={this.handleLogOut}
                id='login-img'
                className='loginImgDiv'></div>
              <p>User logout</p>
            </NavLink>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    // Going to use userLogin instead of currentUser, for the time being
    // user: state.userLogin,
  }
}

export default connect(mapStateToProps, { userLogOut })(Header)
