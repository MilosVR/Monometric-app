import React, { useState, useEffect } from "react";
import "./Contact.scss";
import Fade from "react-reveal/Fade";
import Footer from "../Footer/Footer";

const Contact = (props) => {
  useEffect(() => {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const contact_btn = document.querySelector(".contact_btn");

    if (
      props.location.pathname === "/contact" ||
      props.location.pathname === "/contact-success"
    ) {
      hamburger_menu.classList.add("hamburger_menu_dark");
      hamburger_menu.classList.remove("hamburger_menu_white");
      contact_btn.style.background = "#C4DDD7";
      contact_btn.style.color = "#4D9988";
    } else {
      hamburger_menu.classList.add("hamburger_menu_white");
      hamburger_menu.classList.remove("hamburger_menu_dark");
      contact_btn.style.background = "#fff";
    }
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    industryType: "",
    isAcceptAgreementChecked: false,
  });

  const [contactFormError, setContactFormError] = useState({
    firstNameErr: "",
    lastName: "",
    email: "",
    company: "",
    allFieldsErr: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactFormSubmit = (e) => {
    e.preventDefault();
    const accept_agreement_checkbox = document.querySelector(
      ".agreement_checkbox"
    );
    if (!formData.firstName) {
      setContactFormError({
        firstNameErr: "First Name is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
      window.scrollTo(0, 0);
    } else if (!formData.lastName) {
      setContactFormError({
        lastNameErr: "Last Name is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
      window.scrollTo(0, 0);
    } else if (!formData.email) {
      setContactFormError({
        emailErr: "Email is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
      window.scrollTo(0, 0);
    } else if (!formData.company) {
      setContactFormError({
        companyErr: "Company is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
      window.scrollTo(0, 0);
    } else if (!formData.isAcceptAgreementChecked) {
      accept_agreement_checkbox.classList.add("checkbox_error");
    } else {
      setContactFormError({
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        companyErr: "",
      });
      accept_agreement_checkbox.classList.remove("checkbox_error");
      props.history.push("/contact-success");
    }
  };

  const industryTypeSelect = (e) => {
    const industry_type_select_active = document.querySelector(
      ".industry_type_select_active"
    );
    if (!e.target.classList.contains("industry_type_select_active")) {
      e.target.classList.add("industry_type_select_active");
      industry_type_select_active.classList.remove(
        "industry_type_select_active"
      );
      setFormData({
        ...formData,
        industryType: e.target.innerHTML,
      });
    }
  };

  const acceptAgreementChecked = (e) => {
    setFormData({
      ...formData,
      isAcceptAgreementChecked: e.target.checked,
    });
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="logo">
          <img alt="" src="/assets/logo_icon.svg" />
        </div>
        <div className="contact_inner">
          <div className="contact_header">
            <div className="contact_header_headline">
              <h1>Contact Us</h1>
              <p>
                Need help? One of our dedicated sales or support team will be
                able to help you <br />
                Enter your details below and we'll get back to you witthin 2
                business days.
              </p>
            </div>
          </div>

          <div className="contact_from_wraper">
            <div className="contact_from_wraper_desc">
              <h3>Your information</h3>
              {contactFormError.allFieldsErr && (
                <p className="text_error global_form_error">
                  {contactFormError.allFieldsErr}
                </p>
              )}
            </div>
            <form onSubmit={contactFormSubmit}>
              <div className="contact_form_info">
                <div className="contact_form_info_field">
                  <p
                    className={
                      contactFormError.firstNameErr ? "text_error" : null
                    }
                  >
                    First Name*
                  </p>
                  <input
                    placeholder="Name"
                    name="firstName"
                    onChange={onChange}
                    value={formData.firstName}
                    className={
                      contactFormError.firstNameErr ? "input_error" : null
                    }
                  />
                  <Fade bottom>
                    {contactFormError.firstNameErr && (
                      <p className="text_error">
                        {contactFormError.firstNameErr}
                      </p>
                    )}
                  </Fade>
                </div>
                <div className="contact_form_info_field">
                  <p
                    className={
                      contactFormError.lastNameErr ? "text_error" : null
                    }
                  >
                    Last Name*
                  </p>
                  <input
                    placeholder="Surname"
                    name="lastName"
                    onChange={onChange}
                    value={formData.lastName}
                    className={
                      contactFormError.lastNameErr ? "input_error" : null
                    }
                  />
                  <Fade bottom>
                    {contactFormError.lastNameErr && (
                      <p className="text_error">
                        {contactFormError.lastNameErr}
                      </p>
                    )}
                  </Fade>
                </div>
                <div className="contact_form_info_field">
                  <p
                    className={contactFormError.emailErr ? "text_error" : null}
                  >
                    Contact Email*
                  </p>
                  <input
                    placeholder="Email Address"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    className={contactFormError.emailErr ? "input_error" : null}
                  />
                  <Fade bottom>
                    {contactFormError.emailErr && (
                      <p className="text_error">{contactFormError.emailErr}</p>
                    )}
                  </Fade>
                </div>
                <div className="contact_form_info_field">
                  <p
                    className={
                      contactFormError.companyErr ? "text_error" : null
                    }
                  >
                    Company Name*
                  </p>
                  <input
                    placeholder="Name"
                    name="company"
                    onChange={onChange}
                    value={formData.company}
                    className={
                      contactFormError.companyErr ? "input_error" : null
                    }
                  />
                  <Fade bottom>
                    {contactFormError.companyErr && (
                      <p className="text_error">
                        {contactFormError.companyErr}
                      </p>
                    )}
                  </Fade>
                </div>
              </div>
              <div className="contact_form_industry_type">
                <p>Industry Type</p>
                <div className="industry_type_select">
                  <div
                    className="industry_type_select_active"
                    onClick={industryTypeSelect}
                  >
                    <p>Healthcare</p>
                  </div>
                  <div onClick={industryTypeSelect}>
                    <p>Office</p>
                  </div>
                  <div onClick={industryTypeSelect}>
                    <p>Production</p>
                  </div>
                  <div onClick={industryTypeSelect}>
                    <p>Transportation</p>
                  </div>
                  <div onClick={industryTypeSelect}>
                    <p>Infrastructure</p>
                  </div>
                  <div onClick={industryTypeSelect}>
                    <p>IT</p>
                  </div>
                </div>
              </div>
              <div className="contact_form_metric_units">
                <p>Number of Metric units needed</p>
                <input placeholder="ex. 5" type="number" min="1" />
              </div>
              <div className="contact_form_checkboxes">
                <label className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <p>Mobile Notification Module</p>
                </label>
                <label className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <p>Multisite/Single site</p>
                </label>
                <label className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <p>Number of people accessing platform</p>
                </label>
                <label className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <p>Reporting Form</p>
                </label>
              </div>
              <div className="contact_form_additional_details">
                <p>Additional Details</p>
                <textarea
                  rows="7"
                  cols="10"
                  placeholder="Enter additional details here..."
                ></textarea>
                <label className="contact_form_checkbox_field agreement_checkbox">
                  <input
                    type="checkbox"
                    className="accept_agreement_checkbox"
                    onChange={acceptAgreementChecked}
                    checked={formData.isAcceptAgreementChecked}
                  />
                  <span className="checkmark"></span>
                  <p>
                    Z uporabo tega obrazca se strinjam s hrambo in upravljanjem
                    podatkov na tej spletni strani.
                  </p>
                </label>
              </div>
              <input type="submit" value="Submit Form" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
