import React from "react";
import Fade from "react-reveal/Fade";

const LandingSectionThree = () => {
  return (
    <div className="landing_section_3">
      <div className="landing_section_3_inner">
        <Fade bottom>
          <div className="landing_section_3_inner_left">
            <img src="/assets/logo_icon.svg" alt="" />
            <div>
              <h1>Problems happen fast. Make better decisions, faster.</h1>
              <p>
                We offer more then great technology. We provide comprehensive
                solutions that make your bussines operations more safe and
                resiliant to risk situations. <br /> <br /> We’ve collaborated
                with different industries, helped them identify weak points in
                ther operational process, asses potential risks, and provided
                improved capacity to cope with most extreme situations.{" "}
              </p>
            </div>
          </div>
        </Fade>
        <Fade right delay={300}>
          <div className="landing_section_3_inner_right">
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_1.svg" alt="" />
              <p style={{ fontWeight: "normal" }}>
                Early warning and multi layer monitoring tools.
              </p>
            </div>
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_2.svg" alt="" />
              <p>Risk assesment and mitigation.</p>
            </div>
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_3.svg" alt="" />
              <p>Customizable and out of the box solutions.</p>
            </div>
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_4.svg" alt="" />
              <p>Industry grade 8h grid independent solution.</p>
            </div>
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_5.svg" alt="" />
              <p>Small, medium business and enterprise level solutions.</p>
            </div>
            <div className="landing_section_3_inner_right_item">
              <img src="assets/icon_6.svg" alt="" />
              <p>Notification management with Email and SMS layers.</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingSectionThree;
