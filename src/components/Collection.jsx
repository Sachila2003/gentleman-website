import React from 'react';
import { motion } from 'framer-motion';
import './Collection.css';

import blazerImage from '../assets/bg.jpg';
import suitImage from '../assets/fullkit.jpg';
import kurthaImage from '../assets/kurtha.jpg';
import nationalImage from '../assets/national.jpg';

// --- අපේ Dummy Data මෙතන ---
const collectionsData = [
  {
    id: 1,
    title: 'Luxury Blazers',
    description: 'Perfectly tailored for standout moments.',
    imageUrl: blazerImage
  },
  {
    id: 2,
    title: 'Full Wedding Suits',
    description: 'Complete sets for your big day.',
    imageUrl: suitImage
  },
  {
    id: 3,
    title: 'Elegant Kurthas',
    description: 'Traditional attire with a modern touch.',
    imageUrl:kurthaImage
  },
  {
    id: 4,
    title: 'National Kits',
    description: 'Celebrate culture with premium national dress.',
    imageUrl: nationalImage
  }
];

function Collections() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id='collections' className="collections-section">
      <h2 className="section-title">Our Collections</h2>
      <div className="collection-grid">
        {collectionsData.map((item, index) => (
          <motion.div 
            className="collection-card" 
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible" // Scroll කරාම පේන විදියට animate වෙනවා
            viewport={{ once: true, amount: 0.3 }} // එක පාරක් විතරක් animate වෙන්න
            custom={index} // Delay එකට index එක pass කරනවා (optional)
          >
            <img src={item.imageUrl} alt={item.title} className="collection-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Collections;