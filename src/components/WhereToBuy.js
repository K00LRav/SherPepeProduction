import React from 'react';
import { motion } from 'framer-motion';
import './WhereToBuy.css';

const WhereToBuy = () => {
  return (
    <div className="where-to-buy">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Where to Grab SherPepe Tokens! 🐸🎟️
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Wanna hop into the SherPepe action? 87% of the supply is out there trading—snag some tokens at these dope spots! Official issuer: r9DDsqsG73ETWeSWZW3P758AaoVeFWiX69.
      </motion.p>
      <motion.div
        className="buy-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a href="https://xmagnetic.org/dex/SherPepe+r9DDsqsG73ETWeSWZW3P758AaoVeFWiX69_XRP+XRP?network=mainnet" target="_blank" rel="noopener noreferrer" className="buy-btn">
          XMagnetic
        </a>
        <a href="https://xpmarket.com/dex/SherPepe-r9DDsqsG73ETWeSWZW3P758AaoVeFWiX69/XRP?trade=market" target="_blank" rel="noopener noreferrer" className="buy-btn">
          XPMarket
        </a>
        <a href="https://firstledger.net/token/r9DDsqsG73ETWeSWZW3P758AaoVeFWiX69/5368657250657065000000000000000000000000" target="_blank" rel="noopener noreferrer" className="buy-btn">
          FirstLedger
        </a>
        <a href="https://www.geckoterminal.com/xrpl/pools/5368657250657065000000000000000000000000.r9DDsqsG73ETWeSWZW3P758AaoVeFWiX69_XRP" target="_blank" rel="noopener noreferrer" className="buy-btn">
          GeckoTerminal
        </a>
      </motion.div>
    </div>
  );
};

export default WhereToBuy;