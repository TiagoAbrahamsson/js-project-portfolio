import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h1>Let's Talk</h1>
        <img  src="public/images/bild.jpeg" 
        alt="Your Name" 
        className="footer-image" />

        <ul className="contact-info">
          <li><a href="#">Tiago Abrahamsson</a></li>
          <li><a href="#">+46(0)733998643</a></li>
          <li><a href="#">tiagoabrahamsson@gmail.com</a></li>
        </ul>
        <ul className="social-links">
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;