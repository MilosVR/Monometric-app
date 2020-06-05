import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

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
      <Footer />
    </div>
  );
};

export default ContactSuccess;

// /contact-success
