import React from "react";
import "./Power.css";
import PowerAnimation from "../../components/PowerAnimation/PowerAnimation.jsx";


const Power = () => {
  return (
    <div className="powerSection" id="power">
      <div className="powerWrapper">
        <div className="powerContent">
          <h2>"Empowering the Future with Smart Energy."</h2>
          <p>
            The power system in AI City Lahore is intelligently managed through
            AI and modern technology, delivering seamless, efficient, and
            eco-friendly energy solutions.
          </p>
        </div>
        <PowerAnimation />
      </div>
    </div>
  );
};

export default Power;
