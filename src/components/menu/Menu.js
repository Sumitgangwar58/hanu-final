import React, { useEffect, useRef, useState } from "react";
import { CloseIcon, MailIcon, MenuIcon, PhoneIcon } from "../../assets/icon";
import "./menu.css";
import getClassNames from "../getclassnames";
import Logo from "../../assets/Logo";

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const containerRef = useRef(null);
  const handelClickOutside = (e) => {
    if (!containerRef.current?.contains(e.target)) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    if (!isMenuActive) return;
    window.addEventListener("click", handelClickOutside);
    return () => {
      window.removeEventListener("click", handelClickOutside);
    };
  }, [isMenuActive]);

  return (
    <div className="menu-container" ref={containerRef}>
      <button
        className="menu-toggle-button"
        onClick={() => setIsMenuActive((prev) => !prev)}
      >
        <MenuIcon color="currentColor" />
      </button>
      <div
        className={getClassNames({
          "menu-sheet": true,
          active: isMenuActive,
        })}
      >
        <button
          className="menu-toggle-button"
          onClick={() => setIsMenuActive((prev) => !prev)}
        >
          <CloseIcon color="currentColor" />
        </button>
        <nav className="menu-list">
          <Logo />
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              {" "}
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              {" "}
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="contact-conatiner">
          <a href="tel:6395379367">
            <PhoneIcon color="currentColor" />
            6395379367
          </a>
          <a href="mailto:sumitgangwar58@gmail.com">
            <MailIcon color="currentColor" />
            sumitgangwar58@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
