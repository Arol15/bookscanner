import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="ui container">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Footer />
    </div>
  );
}

export default App;
