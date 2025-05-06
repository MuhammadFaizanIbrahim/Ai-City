import React, { useState } from "react";
import "./GetQuoteSection.css";

const priceData = {
  Commercial: {
    "2 Marla": "PKR 12,00,000",
    "5 Marla": "PKR 25,00,000"
  },
  Residential: {
    "3 Marla": "PKR 15,00,000",
    "5 Marla": "PKR 22,00,000",
    "10 Marla": "PKR 40,00,000",
    "1 Kanal": "PKR 75,00,000"
  }
};

const GetQuoteSection = () => {
  const [propertyType, setPropertyType] = useState("Commercial");
  const [size, setSize] = useState("");

  const handleTypeChange = (type) => {
    setPropertyType(type);
    setSize("");
  };

  const handleGetQuote = () => {
    if (!size) {
      alert("Please select a size option.");
      return;
    }
    alert(`Quote for ${size} ${propertyType} Property: ${priceData[propertyType][size]}`);
  };

  return (
    <section className="quote-section">
      <h2>Get a Quote</h2>

      <div className="property-type-buttons">
        <button
          className={propertyType === "Commercial" ? "active" : ""}
          onClick={() => handleTypeChange("Commercial")}
        >
          Commercial
        </button>
        <button
          className={propertyType === "Residential" ? "active" : ""}
          onClick={() => handleTypeChange("Residential")}
        >
          Residential
        </button>
      </div>

      <div className="size-options">
        {Object.keys(priceData[propertyType]).map((option) => (
          <label key={option} className="size-label">
            <input
              type="radio"
              name="size"
              value={option}
              checked={size === option}
              onChange={() => setSize(option)}
            />
            {option}
          </label>
        ))}
      </div>

      {size && (
        <div className="price-display">
          <strong>Price:</strong> {priceData[propertyType][size]}
        </div>
      )}

      <button className="get-quote-btn" onClick={handleGetQuote}>
        Get Quote
      </button>
    </section>
  );
};

export default GetQuoteSection;
