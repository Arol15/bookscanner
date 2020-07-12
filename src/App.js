import React from "react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, BrowserRouter, Switch } from "react-router-dom";
//import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Books from "./components/Books";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={LandingPage} />
          <Route exact path="/books" component={Books} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
