import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Navbar = (props) => {
  useEffect(() => {});

  const toggleCollapseMenu = () => {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const collapse_menu = document.querySelector(".collapse_menu");
    const logo = document.querySelector(".logo");
    if (!collapse_menu.classList.contains("open_collapse_menu")) {
      collapse_menu.classList.add("open_collapse_menu");
      hamburger_menu.classList.add("open_collapse_menu");
      logo.classList.add("open_collapse_menu");
    } else {
      collapse_menu.classList.remove("open_collapse_menu");
      hamburger_menu.classList.remove("open_collapse_menu");
      logo.classList.remove("open_collapse_menu");
    }
  };

  const closeCollapseMenu = () => {
    const logo = document.querySelector(".logo");
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const collapse_menu = document.querySelector(".collapse_menu");
    collapse_menu.classList.remove("open_collapse_menu");
    hamburger_menu.classList.remove("open_collapse_menu");
    logo.classList.remove("open_collapse_menu");
  };

  return (
    <nav>
      <div className="navbar ">
        <div className="logo">
          <img alt="" src="/assets/main_logo.svg" />
          <img alt="" src="/assets/logo_white.svg" />
        </div>
        <div className="navigation_links">
          <ul>
            <li>
              <Link to="/">How it works</Link>
            </li>
            <li>
              <Link to="/">Solutions</Link>
            </li>
            <li>
              <Link to="/">Testimoials</Link>
            </li>
            <li>
              <Link to="/">MonoBox</Link>
            </li>
            <li>
              <Link to="/">Partners</Link>
            </li>
          </ul>
        </div>

        <Link to="/contact">
          <button className="contact_btn">Contact</button>
        </Link>

        <div className="hamburger_menu" onClick={toggleCollapseMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="collapse_menu">
          <div className="navigation_links_collapse_menu">
            <ul>
              <li onClick={closeCollapseMenu}>
                <Link to="/">How it works</Link>
              </li>
              <li onClick={closeCollapseMenu}>
                <Link to="/">Solutions</Link>
              </li>
              <li onClick={closeCollapseMenu}>
                <Link to="/">Testimoials</Link>
              </li>
              <li onClick={closeCollapseMenu}>
                <Link to="/">MonoBox</Link>
              </li>
              <li onClick={closeCollapseMenu}>
                <Link to="/">Partners</Link>
              </li>
            </ul>
            <Link to="/contact">
              <button
                className="contact_btn_collapse_menu"
                onClick={closeCollapseMenu}
              >
                Contact
              </button>
            </Link>
            <div className="navbar_footer">
              <p>+386 42 442 442</p>
              <p>customercare@monometrics.com</p>
              <span>&copy; Monometrics 2020</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
