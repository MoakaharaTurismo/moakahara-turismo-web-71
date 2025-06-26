
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ToursSection from '../components/ToursSection';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ToursSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
