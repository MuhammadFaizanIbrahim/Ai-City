import React from "react";
import "./Hero.css";
import SplineAnimationHero from "../../components/HeroModel/SplineAnimationHero";

const Hero = () => {

  const handleScrollToPower = () => {
    const section = document.getElementById("power");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="heroFull">
      <div className="splineHero">
        <SplineAnimationHero />
      </div>
      <div className="heroText">
        <h1>AI City Lahore</h1>
        <p>A Smart Future Engineered with Intelligence.</p>
        <button className="exploreBtn" onClick={handleScrollToPower}>Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;
