import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from '../../../public/Logo/logo.png';

const Footer = () => {
  return (
    <div className="footer" id='contact'>
      <div className="footer-content">
        {/* Left: Logo and Contact Info */}
        <div className="footer-left">
          <img src={Logo} className="logo" />
          <p>
            📍 Block 17-B, Sector AI-5, Tech Avenue, <br/> New Smart Zone, Lahore, Pakistan
          </p>
          <p>📞 +92 42 3890 1234</p>
          <p>✉️ contact@aicitylahore.pk</p>
        </div>

        {/* Right: Contact Form */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button className= "btnSubmit" type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Bottom: Social Media Links */}
      <div className="footer-bottom">
        <p>Follow us:</p>
        <div className="social-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
