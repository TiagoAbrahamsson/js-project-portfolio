import React from "react";
import bild from '../assets/bild.jpeg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h1>Let's Talk</h1>
        <img  
        src={bild}  
        alt="Your Name" 
        className="footer-image" />

        <ul className="contact-info">
          <li><a href="#">Tiago Abrahamsson</a></li>
          <li><a href="#">+46(0)733998643</a></li>
          <li><a href="#">tiagoabrahamsson@gmail.com</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/tiago-a-6a361b124/">LinkedIn</a></li>
          <li><a href="https://github.com/TiagoAbrahamsson">GitHub</a></li>
        </ul>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;