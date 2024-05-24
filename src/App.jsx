import React, { useState, useEffect } from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Footer from './pages/Footer';
import Mode from './pages/Mode';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-500`}>
      <Header />
      <Mode isDarkMode={isDarkMode} handleToggle={handleToggle} />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
