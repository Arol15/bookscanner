import React from "react";
import "../stylesheets/navbar.css";
//import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Bookscanner</div>
      <div className="navbar-right">
        <div className="login">
          <div>Hi Reader!</div>
          {/* <div className="login-button">
            <NavLink to="/login">Login</NavLink>
          </div> */}
        </div>
        {/* <div className="signup">
          <div>New here? Create a new account!</div>
          <Link to="/signup">Sign Up</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
