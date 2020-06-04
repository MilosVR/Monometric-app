import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial_slider">
        <Slider {...settings}>
          <div className="testimonial_slider_item">
            <img
              src="/assets/testimonial.svg"
              alt=""
              className="testimonial_img"
            />
            <p>
              Piio’s page speed improvements have resulted in a better
              experience for our site visitors and a positive signal to Google’s
              search ranking algorithm. Since we started using Piio, we’ve
              experienced 125% month over month growth in organic traffic.
            </p>
            <div className="testimoial_info">
              <div className="testimonial_info_desc">
                <img alt="" src="/assets/testimonial_img.svg" />
                <div>
                  <p>David Budimir</p>
                  <span>Marketing @ Social Table</span>
                </div>
              </div>
              <div className="testimonial_slider_dots"></div>
            </div>
          </div>
          <div className="testimonial_slider_item">
            <img
              src="/assets/testimonial.svg"
              alt=""
              className="testimonial_img"
            />
            <p>
              Piio’s page speed improvements have resulted in a better
              experience for our site visitors and a positive signal to Google’s
              search ranking algorithm. Since we started using Piio, we’ve
              experienced 125% month over month growth in organic traffic.
            </p>
            <div className="testimoial_info">
              <div className="testimonial_info_desc">
                <img alt="" src="/assets/testimonial_img.svg" />
                <div>
                  <p>Milos Novovic</p>
                  <span>Marketing @ Social Table</span>
                </div>
              </div>
              <div className="testimonial_slider_dots"></div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

let settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};
