import React from "react";
import Fade from "react-reveal/Fade";

const LandingSectionSix = () => {
  return (
    <div className="landing_section_6">
      <div className="landing_section_6_image"></div>
      <div className="landing_section_6_inner">
        <img src="/assets/logo_icon.svg" alt="" className="logo_img" />
        <Fade right>
          <div className="landing_section_6_inner_item_wraper">
            <h1>What’s in the box?</h1>
            <p className="landing_section_text">
              State of the art, robust industry grade hardware that will never
              let you down. All components are scalable for your needs.
            </p>
            <div className="landing_section_6_inner_item">
              <img alt="" src="/assets/icon_2_1.svg" />
              <p style={{ fontWeight: "normal" }}>
                Up to 8 hours of battery independency.
              </p>
            </div>
            <div className="landing_section_6_inner_item">
              <img alt="" src="/assets/icon_2_2.svg" />
              <p>
                LTE Modul for SMS <br />
                notifications.
              </p>
            </div>
            <div className="landing_section_6_inner_item">
              <img alt="" src="/assets/icon_2_3.svg" />
              <p>
                One box with up to
                <br />4 sensors.
              </p>
            </div>
            <div className="landing_section_6_inner_item">
              <img alt="" src="/assets/icon_2_4.svg" />
              <p>
                10 seconds default
                <br />
                monitoring interval.
              </p>
            </div>
            <div className="landing_section_6_inner_item_box"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingSectionSix;
