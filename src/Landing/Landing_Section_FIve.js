import Fade from "react-reveal/Fade";
import React from "react";

const LandingSectionFIve = () => {
  return (
    <div className="landing_section_5">
      <div className="landing_section_5_inner">
        <Fade bottom>
          <div className="landing_section_5_left">
            <img alt="" src="/assets/img_2.svg" />
          </div>
        </Fade>
        <Fade right>
          <div className="landing_section_5_right">
            <h1>Monitoring through Desktop or Mobile.</h1>
            <p>
              We offer more then great technology. We provide comprehensive
              solutions that make your bussines operations more safe and
              resiliant to risk situations.{" "}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingSectionFIve;
