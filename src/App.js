import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/books" component={Books} />
      <Footer />
    </div>
  );
}

export default App;
