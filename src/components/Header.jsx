import React from 'react';
import './Header.css';
import { motion } from 'framer-motion'; 

function Header() {
  return (
    <motion.header
      className="site-header"
      // Animation properties 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}     
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      <div className="logo-container">
        <h1 className="logo-name">GENTLEMAN</h1>
        <span className="tagline">Your Signature Look for the Big Day</span>
      </div>
      <nav className="main-navigation">
        <ul>
            <li><a href="#" className="active">HOME</a></li>
            <li><a href="#collections">COLLECTIONS</a></li>
            <li><a href="#">SPECIAL OFFERS</a></li>
            <li><a href="#">HOW IT WORKS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div className="search-container">
        {/* Search bar */}
      </div>
    </motion.header>
  );
}

export default Header;