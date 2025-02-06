import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Digital Notebook</h1>
      <ul className="nav-links">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>Company</li></a>
        <a href="#"><li>Blog</li></a>
        <a href="#"><li>Career</li></a>
        <a href="#"><li>Contact us</li></a> 

      </ul>
      <button className="pay-now-btn">Pay Now</button>
    </nav>
  );
}
