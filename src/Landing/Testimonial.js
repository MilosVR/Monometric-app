import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial_slider">
        <div className="testimonial_slider_item">
          <img
            src="/assets/testimonial.svg"
            alt=""
            className="testimonial_img"
          />
          <p>
            Piio’s page speed improvements have resulted in a better experience
            for our site visitors and a positive signal to Google’s search
            ranking algorithm. Since we started using Piio, we’ve experienced
            125% month over month growth in organic traffic.
          </p>
          <div className="testimoial_info">
            <div className="testimonial_info_desc">
              <img alt="" src="/assets/testimonial_img.svg" />
              <div>
                <p>David Budimir</p>
                <span>Marketing @ Social Table</span>
              </div>
            </div>
            <div className="testimonial_slider_dots">Dots</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
