import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="john doe" />
        </label>
        <label>
          Phone Number
          <input type="text" placeholder="6395******" />
        </label>
        <label>
          Email
          <input type="text" placeholder="abc@gmail.com" />
        </label>
        <label>
          Message
          <textarea
            type="text"
            placeholder="I want to know about the pricing"
            cols={4}
          />
        </label>
      </form>
    </div>
  );
};

export default ContactUs;
