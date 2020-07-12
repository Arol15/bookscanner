import React from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Footer from "./Footer";
import BooksMain from "./BooksMain";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <MainPage className="ui container" />
      <BooksMain />
      <Footer />
    </>
  );
};

export default LandingPage;
