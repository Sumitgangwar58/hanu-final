import React from "react";
import "./gallery.css";
import images from "../../assets/images";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <div className="gallery-container" id="gallery">
      <h2>Gallery</h2>
      <Carousel>
        {images.map((item) => {
          return (
            <img
              className="gallery-image"
              src={item}
              key={item}
              alt="gallery-img"
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
