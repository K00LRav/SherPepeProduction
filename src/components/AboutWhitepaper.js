// src/components/AboutWhitepaper.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AboutWhitepaper.css';

const AboutWhitepaper = () => {
  return (
    <div className="about-whitepaper">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Meet SherPepe, the Frog Detective 🐸
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        SherPepe is an enigmatic, blue-hued detective frog with sharp instincts and killer sleuthing skills.
        Rocking a classic coat and magnifying glass, he cracks mysteries that leave others stumped.
        His comic series is live now—check it out above, with more cases dropping soon!
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        SherPepe’s world is expanding from comics to a game where you’ll solve mysteries and earn tokens.
        The total supply is 625,283.89452 tokens—81.77% (511,283.98) is trading in the market, while 18.23% (114,000)
        is held at the official address: rPePECdLyRc7ZBzWUDCXJ8won31257FihB for game development, giveaways,
        and more. Dive into the details below!
      </motion.p>
      <motion.div
        className="download-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="/SherPepeWhitePaper.pdf" download className="download-btn">
          Snag the Whitepaper 📜
        </a>
      </motion.div>
    </div>
  );
};

export default AboutWhitepaper;