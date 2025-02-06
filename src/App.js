import React from "react";
import "./App.css"; 
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Services from "./Services";
import Mission from "./Mission";
import Footer from "./Footer";


export default function App() {
  return (
    <>
        <Navbar />
      <MainSection />
      <Services />
      <Mission />
      <Footer /> 
      </>
    
  
  );
}
