import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { motion } from 'framer-motion'; 
import { FaUserCog } from 'react-icons/fa';

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
            <li><Link to="/" className="active">HOME</Link></li>
            <li><Link to="/collections">COLLECTIONS</Link></li>
            <li><Link to="#">SPECIAL OFFERS</Link></li>
            <li><Link to="#">HOW IT WORKS</Link></li>
            <li><Link to="#">ABOUT</Link></li>
            <li><Link to="#">CONTACT</Link></li>
            <li className="admin-icon-link">
              <Link to="/admin">
                <FaUserCog />
              </Link>
            </li>
        </ul>
      </nav>
      <div className="search-container">
        {/* Search bar */}
      </div>
    </motion.header>
  );
}

export default Header;