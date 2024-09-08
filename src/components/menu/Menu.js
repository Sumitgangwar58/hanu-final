import React, { useEffect, useRef, useState } from "react";
import { MenuIcon } from "../../assets/icon";
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
        <nav className="menu-list">
          <Logo />
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Contact US</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
