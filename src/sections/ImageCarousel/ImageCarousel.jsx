import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./ImageCarousel.css";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image7.png"
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      controls.start({ x: -newIndex * 740 });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      controls.start({ x: -newIndex * 740 });
    }
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-heading">Immersive Visual Experience</h2>

      <div className="carousel-nav">
        <button onClick={handlePrev} disabled={currentIndex === 0}>◀</button>
        <button onClick={handleNext} disabled={currentIndex === images.length - 1}>▶</button>
      </div>

      <div className="carousel-container">
        <motion.div
          className="carousel-track"
          animate={controls}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {images.map((src, index) => (
            <div className="carousel-item" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="carousel-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;
