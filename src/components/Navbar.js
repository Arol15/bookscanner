import React from "react";
import logo from "../images/logo.png";
import Login from "./Login";
import "../stylesheets/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>Book Icon</span>
      <div>Bookscanner</div>
      <div>Hi Reader!</div>
      <div className="right-side-navbar">
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
