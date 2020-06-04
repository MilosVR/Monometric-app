import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function LandingSectionOne() {
  return (
    <div className="landing_section_1">
      <div className="landing_section_1_image"></div>
      <div className="landing_section_1_inner">
        <Fade top>
          <div>
            <h1>Industry grade process monitoring.</h1>
            <p>
              We deliver high end, industry grade, completely grid independant
              monitoring infrastructure.
            </p>
            <Link to="/contact">
              <button className="contact_us_btn">Contact Us</button>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default LandingSectionOne;
