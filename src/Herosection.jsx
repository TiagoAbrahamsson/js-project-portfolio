import React from 'react';
import 'HeroSection';

function HeroSection() {
  return (
    <header className="hero">
      <img 
        src="/path-to-your-image.jpg" 
        alt="Your Name" 
        className="hero-image" 
      />
      <div className="hero-text">
        <h1>Hi, I'm Tiago Abrahamsson</h1>
        <p>A frontend developer passionate about design and code.</p>
      </div>
    </header>
  );
}

export default HeroSection;
