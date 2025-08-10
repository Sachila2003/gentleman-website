import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Collection from './components/Collection';
import './index.css'; // අපි global styles දාන තැන

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Collection />
      {/* අනාගතයේදී අනිත් sections මෙතනට එකතු කරමු (e.g., Collections, About Us) */}
    </div>
  );
}

export default App;