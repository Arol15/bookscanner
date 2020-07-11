import React from "react";
import "../stylesheets/navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Bookscanner</div>
      <div>Hi Reader!</div>
      <NavLink to="/login">Login</NavLink>
      <div>New here? Create a new account!</div>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
