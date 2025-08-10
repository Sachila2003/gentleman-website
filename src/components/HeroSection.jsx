import React from 'react';
import './HeroSection.css';
import { motion } from 'framer-motion'; // <-- Framer Motion import 

function HeroSection() {

  // Animation ke settings tika
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.5, 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="hero-section">
      {/* <div> eka motion.div ekak karala, variants thika apply karana */}
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* hama element ekkm motion tag ekkin wrap krnw */}
        <motion.span variants={itemVariants} className="subtitle">
          BEST COLLECTION
        </motion.span>
        
        <motion.h2 variants={itemVariants} className="main-title">
          LUXURY SUIT DESIGNER
        </motion.h2>

        <motion.button variants={itemVariants} className="cta-button">
          EXPLORE COLLECTIONS
        </motion.button>
      </motion.div>
    </section>
  );
}

export default HeroSection;