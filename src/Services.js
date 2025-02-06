import React from "react";
import myImage from '../src/assets/digital.png'
export default function Services() {
  return (
    <div className="services-section">
      <div className="service-box">
        <img src= {myImage} alt="Digital Marketing" />
        <a href="#"><p>Digital Marketing</p></a>
      </div>
      <div className="service-box">
        <img src= {myImage}alt="SEO Implementation" />
        <a href="#"><p>SEO Implementation</p></a>
      </div>
      <div className="service-box">
        <img src={myImage} alt="Content Creation" />
        <a href="#"><p>Content Creation</p></a>
      </div>
    </div>
  );
}
