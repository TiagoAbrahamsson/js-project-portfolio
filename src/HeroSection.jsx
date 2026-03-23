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
        <p>I'm a motivated and curious frontend developer with an easy-going nature. I spend most of my free time learning new things or watching movies and TV shows. I build user-friendly applications and enjoy solving complex problems. I care about doing things well, and I bring that same drive to every project I work on.</p>
      </div>
    </section>
  )
}

export default HeroSection;
