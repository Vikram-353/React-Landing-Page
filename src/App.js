import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="workflow">
          <Workflow />
        </div>
        <div id="price">
          <Price />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
