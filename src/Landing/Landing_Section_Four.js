import React from "react";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div className="landing_section_4_left_mobile">
            <Slider {...settings}>
              <div>
                <h2>Healthcare</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
              <div>
                <h2>Security</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
              <div>
                <h2>Production</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
              <div>
                <h2>Transportation</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
              <div>
                <h2>Infrastructure</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
              <div>
                <h2>IT</h2>
                <p>
                  Medical fridges monitoring of temperature. We provide 0.01C
                  accurate real time inisight.
                </p>
              </div>
            </Slider>
          </div>
        </Fade>
        <div className="landing_section_4_right">
          <span>INDUSTRIES</span>
          <img alt="" src="/assets/img_1.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingSectionFour;

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};
