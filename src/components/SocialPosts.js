// src/components/SocialPosts.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Optional, install with npm install framer-motion
import './SocialPosts.css';

const SocialPosts = () => {
  return (
    <div className="social-posts">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Vibe with SherPepe Online! 🌐
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Stay locked in with SherPepe’s wild adventures! 🐸
      </motion.p>
      <motion.div
        className="social-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="https://twitter.com/sherpepe85" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fab fa-twitter"></i> X
        </a>
        <a href="https://www.instagram.com/sherpepe85/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fab fa-instagram"></i> Insta
        </a>
        <a href="https://www.tiktok.com/@sherpepe" target="_blank" rel="noopener noreferrer" className="social-btn">
          <i className="fab fa-tiktok"></i> TikTok
        </a>
      </motion.div>
    </div>
  );
};

export default SocialPosts;