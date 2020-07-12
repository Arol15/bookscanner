import React from "react";
import "../stylesheets/navbarsecond.css";
import { NavLink } from "react-router-dom";

const NavbarSecond = () => {
  return (
    <nav className="navbar-second">
      <div className="logo">Bookscanner</div>
      <div className="navbar-right">
        <div className="login">
          <div>Hi Demo!</div>
          <div className="logout-button">
            <NavLink to="/logout">Logout</NavLink>
          </div>
        </div>
        {/* <div className="signup">
          <div>New here? Create a new account!</div>
          <Link to="/signup">Sign Up</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default NavbarSecond;
