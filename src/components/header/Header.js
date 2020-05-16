import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ user }) => {
  const activeStyle = { color: "#E43F5A" };
  return (
    <nav>
      <NavLink exact to='/' activeStyle={activeStyle}>
        {" "}
        DashBoard
      </NavLink>{" "}
      {" | "}
      <NavLink to='/login' activeStyle={activeStyle}>
        {" "}
        Login{" "}
      </NavLink>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Header);
