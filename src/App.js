// src/App.jsx
import React from 'react';
import HeroSection from './components/HeroSection';
import ComicsGallery from './components/ComicsGallery';
import WhereToBuy from './components/WhereToBuy'; // Ensure this path matches your file
import AboutWhitepaper from './components/AboutWhitepaper';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <ComicsGallery />
      <WhereToBuy />
      <AboutWhitepaper />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;