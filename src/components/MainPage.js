import React from "react";
import Signup from "./Signup";
import Search from "./Search";
import "../stylesheets/main-page.css";

function MainPage() {
  return (
    <div className="main-page">
      <header>
        <h2>Your next favorite book can't wait to meet you!</h2>
      </header>
      <main>
        <Search />
        <Signup />
      </main>
    </div>
  );
}

export default MainPage;
