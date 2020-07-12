import React from "react";
import Search from "./Search";
import "../stylesheets/main-page.css";
import Books from "./Books";
import BooksMain from "./BooksMain";

function MainPage() {
  return (
    <div className="main-page">
      <div className="mainpage-header">
        <h2>Your next favorite book can't wait to meet you!</h2>
      </div>
      <main className="mainpage-search">{<Search />}</main>
    </div>
  );
}

export default MainPage;
