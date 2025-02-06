import React from "react";
import "./App.css"; // Import CSS
import myImage from '../src/assets/img2.png';

export default function MainSection() {
  return (
    <div className="main-section">
      {/* Left Content */}
      <div className="main-content">
        <h2 className="digi-header">
          Top digital <br /> marketing Agency in <br /> Noida
        </h2>
        <h3 className="quote-line">
          Professional Digital Marketing <br /> Services That Drive Result
        </h3>
        <button className="request-quote-btn">Request Quote</button>
      </div>

      {/* Right Image */}
      <div className="main-image">
        <img src={myImage} alt="Marketing" />
      </div>
    </div>
  );
}
