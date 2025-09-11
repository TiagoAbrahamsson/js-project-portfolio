import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="/images/bild.jpeg" 
        alt="Tiago Abrahamsson"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Hi, I'm Tiago Abrahamsson</h1>
        <h3>Creative Frontend Developer, Movie Buff and Crossfit Enthusiast</h3>
        <p>Tiago is a motivated and curious fronted developer. He is easy-going by nature and spend most of his free time either learning new things or watching movies and TV shows. He creates user friendly applications and solves complex issues. His drive for excellence makes him a valuable asset to any project and a standout in the technology field.</p>
      </div>
    </section>
  )
}

export default HeroSection;
