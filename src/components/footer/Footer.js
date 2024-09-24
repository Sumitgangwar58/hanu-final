import React from "react";
import "./footer.css";
import Logo from "../../assets/Logo";
import { LocationIcon, MailIcon, PhoneIcon } from "../../assets/icon";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <div className="contact-conatiner">
        <a href="tel:6395379367">
          <PhoneIcon color={"currentColor"} />
          6395379367
        </a>
        <a href="mailto:sumitgangwar58@gmail.com">
          <MailIcon color={"currentColor"} />
          sumitgangwar58@gmail.com
        </a>
        <a href="https://maps.app.goo.gl/MiBCYtLXjzzMHsXY6">
          <LocationIcon color={"currentColor"} />
          A-88, Roorkee Rd, Gangotri Colony, Daurli, Meerut, Uttar Pradesh
          250001
        </a>
      </div>
    </div>
  );
};

export default Footer;
