import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import SpecialOffers from './components/SpecialOffers';
import Reservations from './components/Reservations';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <SpecialOffers />
      <Reviews />
      <Amenities />
      <Reservations />
      <Contact />
    </div>
  );
}

export default App;