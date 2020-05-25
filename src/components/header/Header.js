import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./header.css";

const Header = ({ user }) => {
  return (
    <div className='navbar'>
      <div className='logContainer'>
        {user !== null ? (
          <NavLink to='/logout' style={{ textDecoration: "none" }}>
            <div id='logout-img' className='loginImgDiv'></div>
            <p>User logout</p>
          </NavLink>
        ) : (
          <NavLink to='/login' style={{ textDecoration: "none" }}>
            <div className='loginImgDiv'></div>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);
