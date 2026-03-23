import React from 'react';
import bild from '../assets/bild.jpeg';
function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Tiago Abrahamsson</h1>

        <img 
        src= {bild} 
        alt="Your Name" 
        className="hero-image" 
      />

        <h3 className="hero-second-title">Creative Frontend Developer, Movie Buff and Crossfit Enthusiast</h3>
          <p className="hero-subtitle"> I'm a motivated and curious frontend developer with an easy-going nature. I spend most of my free time learning new things or watching movies and TV shows. I build user-friendly applications and enjoy solving complex problems. I care about doing things well, and I bring that same drive to every project I work on.</p>
      </div>

    </header>
  );
}

export default HeroSection;
