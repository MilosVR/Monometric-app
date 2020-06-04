import React, { useEffect } from "react";
import "./Landing.scss";
import LandingSectionOne from "./Landing_Section_One";
import LandingSectionTwo from "./Landing_Section_Two";
import LandingSectionThree from "./Landing_Section_Three";
import LandingSectionFour from "./Landing_Section_Four";
import LandingSectionFIve from "./Landing_Section_FIve";
import LandingSectionSix from "./Landing_Section_Six";
import Testimonial from "./Testimonial";
import LandingSectionSeven from "./Landing_Section_Seven";
import Footer from "../Footer/Footer";

const Landing = (props) => {
  useEffect(() => {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const contact_btn = document.querySelector(".contact_btn");

    if (props.location.pathname === "/contact") {
      hamburger_menu.classList.add("hamburger_menu_dark");
      hamburger_menu.classList.remove("hamburger_menu_white");
      contact_btn.style.background = "#C4DDD7";
      contact_btn.style.color = "#4D9988";
    } else {
      hamburger_menu.classList.add("hamburger_menu_white");
      hamburger_menu.classList.remove("hamburger_menu_dark");
      contact_btn.style.background = "#fff";
    }
  });

  return (
    <div className="landing container">
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
      <LandingSectionFour />
      <LandingSectionFIve />
      <LandingSectionSix />
      <Testimonial />
      <LandingSectionSeven />
      <Footer />
    </div>
  );
};

export default Landing;
