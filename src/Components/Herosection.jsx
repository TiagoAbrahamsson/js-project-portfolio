import React from 'react';
function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Tiago Abrahamsson</h1>

        <img 
        src="public/images/bild.jpeg" 
        alt="Your Name" 
        className="hero-image" 
      />
        <h3 className="hero-second-title">Creative Frontend Developer, Movie Buff and Crossfit Enthusiast</h3>
          <p className="hero-subtitle">Tiago is a motivated and curious fronted developer. He is easy-going by nature and spend most of his free time either learning new things or watching movies and TV shows.  He creates user friendly applications and solves complex issues. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.</p>
      </div>

    </header>
  );
}

export default HeroSection;
