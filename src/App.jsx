import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;