import React from "react";
import Menu from "../menu/Menu";
import Logo from "../../assets/Logo";
import "./home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container">
        <header>
          <Menu />
          <button className="enquire-button">Contact Us</button>
        </header>
        <div className="title-container">
          <Logo />
          <h2 className="tagline">YOUR NEXT CELEBRATION PARTNER</h2>
        </div>
      </div>
      <div className="background-video-container">
        <video
          id="myVideo"
          src="https://sumitdesign.s3.ap-south-1.amazonaws.com/kalyani-farm-intro.mp4"
          autoPlay
          muted
          loop
          controls={false}
        />
        <div className="dimming-video"></div>
      </div>
    </div>
  );
};

export default Home;
