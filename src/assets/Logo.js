import React from "react";
import images from "./images";

const Logo = () => {
  return (
    <div className="logo">
      <img src={images[images.length - 1]} alt="logo" />
    </div>
  );
};

export default Logo;
