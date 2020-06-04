import React from "react";
import Fade from "react-reveal/Fade";

const LandingSectionFour = () => {
  return (
    <div className="landing_section_4">
      <div className="landing_section_4_inner">
        <Fade left>
          <div className="landing_section_4_left">
            <span>INDUSTRIES</span>
            <h1>Healthcare </h1>
            <p>
              Medical fridges monitoring of temperature. We provide 0.01C
              accurate real time inisight.
            </p>
            <h2>Office</h2>
            <h2>Security</h2>
            <h2>Production</h2>
            <h2>Transportation</h2>
            <h2>Infrastructure</h2>
            <h2>IT</h2>
          </div>
        </Fade>
        <div className="landing_section_4_right">
          <img alt="" src="/assets/img_1.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingSectionFour;
