import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Link to="/login">Login</Link>
      <Link to="/signup">Sing Up</Link>
      <MainPage />
    </>
  );
};

export default LandingPage;
