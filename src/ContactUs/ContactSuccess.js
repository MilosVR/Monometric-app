import React from "react";
import { Link } from "react-router-dom";

const ContactSuccess = (props) => {
  return (
    <div className="contact_success_wraper">
      <div className="contact_success_desc">
        <img src="/assets/logo_icon.svg" alt="" />
        <h1>Thank you for contacting us!</h1>
        <p>
          Your form was submitted successfully and our <br /> team will be in
          touch with you shortly.
        </p>
        <Link to="/">Back to Homepage</Link>
      </div>
      <div className="footer">
        <div className="footer_inner">
          <div className="footer_right">
            <p>+386 42 442 442</p>
            <p>customercare@monometrics.com</p>
            <span>&copy; Monometrics 2020</span>
          </div>
          <div className="footer_left">
            <img alt="" src="/assets/logo_icon.svg" />
          </div>
          <div className="footer_mobile">
            <p>+386 42 442 442</p>
            <p>customercare@monometrics.com</p>
            <img alt="" src="/assets/logo_icon.svg" />
            <span>&copy; Monometrics 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSuccess;
