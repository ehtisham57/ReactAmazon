import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="/about" className="footer__link">About Us</a>
        <a href="/contact" className="footer__link">Contact Us</a>
        <a href="/careers" className="footer__link">Careers</a>
        <a href="/privacy" className="footer__link">Privacy Policy</a>
      </div>
      <div className="footer__social">
        <a href="https://www.facebook.com" className="footer__socialLink">Facebook</a>
        <a href="https://www.twitter.com" className="footer__socialLink">Twitter</a>
        <a href="https://www.instagram.com" className="footer__socialLink">Instagram</a>
      </div>
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
