import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
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
  );
};

export default Footer;
