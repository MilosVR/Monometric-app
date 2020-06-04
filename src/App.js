import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import "./config.scss";
import "./responsive.scss";
import Navbar from "./Navbar/Navbar";
import Contact from "./ContactUs/Contact";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
