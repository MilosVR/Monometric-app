import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

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

  const toggleActiveLinkClass = (e) => {
    const active_link = document.querySelector(".active_link_nav");
    if (!e.target.classList.contains("active_link_nav")) {
      e.target.classList.add("active_link_nav");
      active_link.classList.remove("active_link_nav");
    }
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
              <Link onClick={toggleActiveLinkClass} to="/">
                How it Works
              </Link>
            </li>
            <li>
              <Link onClick={toggleActiveLinkClass} to="/">
                Solutions
              </Link>
            </li>
            <li>
              <Link
                className="active_link_nav"
                onClick={toggleActiveLinkClass}
                to="/"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={toggleActiveLinkClass} to="/">
                MonoBox
              </Link>
            </li>
            <li>
              <Link onClick={toggleActiveLinkClass} to="/">
                Partners
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/contact">
          <button className="contact_btn">Contact Us</button>
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
                <Link to="/">How it Works</Link>
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
                Contact Us
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
