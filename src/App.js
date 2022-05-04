import React from "react";
import "tw-elements";
import "flowbite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
