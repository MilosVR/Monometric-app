import React, { useState, useEffect } from "react";
import "./Contact.scss";
import Fade from "react-reveal/Fade";
import Footer from "../Footer/Footer";

const Contact = (props) => {
  useEffect(() => {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const contact_btn = document.querySelector(".contact_btn");

    if (props.location.pathname === "/contact") {
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
    if (!formData.firstName) {
      setContactFormError({
        firstNameErr: "First Name is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
    } else if (!formData.lastName) {
      setContactFormError({
        lastNameErr: "Last Name is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
    } else if (!formData.email) {
      setContactFormError({
        emailErr: "Email is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
    } else if (!formData.company) {
      setContactFormError({
        companyErr: "Company is required",
        allFieldsErr:
          "There was a problem with your submission. Please fix the errors and try again",
      });
    } else {
      setContactFormError({
        firstNameErr: "",
        lastNameErr: "",
        emailErr: "",
        companyErr: "",
      });
      console.log(formData);
    }
  };

  const industryTypeSelect = (e) => {
    const industry_type_select_active = document.querySelector(
      ".industry_type_select_active"
    );
    console.log(e.target.innerHTML);

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
                <p className="text_error">{contactFormError.allFieldsErr}</p>
              )}
            </div>
            <form onSubmit={contactFormSubmit}>
              <div className="contact_form_info">
                <div className="contact_form_info_field">
                  <p>First Name*</p>
                  <input
                    placeholder="Name"
                    name="firstName"
                    onChange={onChange}
                    value={formData.firstName}
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
                  <p>Last Name*</p>
                  <input
                    placeholder="Surname"
                    name="lastName"
                    onChange={onChange}
                    value={formData.lastName}
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
                  <p>Contact Email*</p>
                  <input
                    placeholder="Email Address"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                  />
                  <Fade bottom>
                    {contactFormError.emailErr && (
                      <p className="text_error">{contactFormError.emailErr}</p>
                    )}
                  </Fade>
                </div>
                <div className="contact_form_info_field">
                  <p>Enter a company name*</p>
                  <input
                    placeholder="Name"
                    name="company"
                    onChange={onChange}
                    value={formData.company}
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
                    Healthcare
                  </div>
                  <div onClick={industryTypeSelect}>Office</div>
                  <div onClick={industryTypeSelect}>Production</div>
                  <div onClick={industryTypeSelect}>Transportation</div>
                  <div onClick={industryTypeSelect}>Infrastructure</div>
                  <div onClick={industryTypeSelect}>IT</div>
                </div>
              </div>
              <div className="contact_form_metric_units">
                <p>Number of Metric units needed</p>
                <input placeholder="ex. 5" type="number" min="1" />
              </div>
              <div className="contact_form_checkboxes">
                <div className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span>Mobile Notification Module</span>
                </div>
                <div className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span>Multisite/Single site</span>
                </div>
                <div className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span>Number of people accessing platform</span>
                </div>
                <div className="contact_form_checkbox_field">
                  <input type="checkbox" />
                  <span>Reporting Form</span>
                </div>
              </div>
              <div className="contact_form_additional_details">
                <p>Additional Details</p>
                <textarea
                  rows="7"
                  cols="10"
                  placeholder="Enter additional details here"
                ></textarea>
                <input type="checkbox" />
                <span>
                  Z upograbo tega obrazca se strinjam s hrambo in upravljanjem
                  podatkov na tej spletni strani.
                </span>
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
