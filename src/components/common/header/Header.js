import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { userLogOut } from "../../../redux/actions/userAsyncActions"
import { getCurrentUser } from "../../../redux/actions/userAsyncActions"

import "./header.css"

class Header extends Component {
  componentDidMount() {
    console.log(this.props.history)
    alert("3.) Header.js")
    this.props.getCurrentUser(this.props).catch((error) => {
      // We don't even hit this because it is taken care in the action
      alert("You'll need to login:", error)
      this.props.history.push("/login")
    })
  }

  handleLogOut = (e) => {
    this.props.userLogOut()
  }
  render() {
    const { currentUser } = this.props
    return (
      <div className='nav-bar-div'>
        <div className='dashBoardLink'>
          <NavLink exact to='/' style={{ textDecoration: "none" }}>
            <div className='dashBoardImgDiv'></div>
            <p>Dashboard</p>
          </NavLink>{" "}
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

        <div className='header-blog-div'>
          <NavLink to='/blog' style={{ textDecoration: "none" }}>
            <div
              style={
                currentUser ? { marginTop: "360px" } : { marginTop: "530px" }
              }
              id='blog-img'
              className='blog-img'></div>
            <p>Blog</p>
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps, { userLogOut, getCurrentUser })(Header)
