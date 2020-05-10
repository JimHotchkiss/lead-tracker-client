import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
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

export default Header;
