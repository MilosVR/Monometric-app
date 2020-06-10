import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import "./config.scss";
import Navbar from "./Navbar/Navbar";
import Contact from "./ContactUs/Contact";
import ContactSuccess from "./ContactUs/ContactSuccess";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/contact" component={Contact} />
        <Route path="/contact-success" component={ContactSuccess} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
