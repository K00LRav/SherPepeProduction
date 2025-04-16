// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 SherPepe. All rights reserved, fam! 🐸</p>
        <div className="social-links">
          <a href="https://twitter.com/sherpepe85" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow on X">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://t.me/officialSherPepe85" target="_blank" rel="noopener noreferrer" className="social-icon" title="Join on Telegram">
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://tiktok.com/@sherpepe" target="_blank" rel="noopener noreferrer" className="social-icon" title="Vibe on TikTok">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;