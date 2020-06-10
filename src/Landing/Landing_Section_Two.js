import React from "react";
import Fade from "react-reveal/Fade";

const LandingSectionTwo = () => {
  return (
    <div className="landing_section_2">
      <h2>How it Works</h2>
      <div className="landing_section_2_inner">
        <Fade bottom>
          <div className="landing_section_2_item">
            <img src="/assets/monitoring.svg" alt="" />
            <div className="landing_section_2_item_desc">
              <span>01</span>
              <div>
                <h3>Monitoring</h3>
                <p>
                  We deliver independent 99.9%+ uptime system which works even
                  if internet or electricity fails.
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="landing_section_2_item">
            <img src="/assets/Notifyng.svg" alt="" />
            <div className="landing_section_2_item_desc">
              <span>02</span>
              <div>
                <h3>Notifying</h3>
                <p>
                  The LTE layer allows us to send you notifications in a split
                  of a second since problem is detected.
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom delay={400}>
          <div className="landing_section_2_item">
            <img src="/assets/insight.svg" alt="" />
            <div className="landing_section_2_item_desc">
              <span>03</span>
              <div>
                <h3>Insight</h3>
                <p>
                  Mobile and desktop friendly dashboard you will be able to make
                  informed decisions faster.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingSectionTwo;
