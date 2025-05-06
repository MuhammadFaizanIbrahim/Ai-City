
import React from "react";
import "./About.css";
import AboutAnimation from "../../components/AboutAnimation/AboutAnimation.jsx";

const About = () => {
  return (
    <div className="aboutSection" id="about">
      <div className="aboutWrapper">
        <div className="aboutContent">
          <h2>About AI City Lahore</h2>
          <p>
            Lahore AI City is a visionary concept of a hyper-connected, AI-driven
            urban ecosystem designed to redefine the future of smart living.
            Blending cutting-edge technologies such as artificial intelligence,
            robotics, and IoT with sustainable architecture and intelligent
            infrastructure, this city serves as a model for innovation and
            efficiency. From autonomous transportation and predictive healthcare
            systems to intelligent energy grids and immersive digital experiences,
            Lahore AI City represents the next chapter in urban evolution — where
            technology not only supports life, but enhances it.
          </p>
        </div>
        <AboutAnimation />
      </div>
    </div>
  );
};

export default About;