
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ToursSection from '../components/ToursSection';
import PricingTable from '../components/PricingTable';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ToursSection />
      
      {/* Seção da Tabela de Preços */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-verde-floresta mb-6">
              💰 Compare Preços e Economize
            </h2>
            <p className="font-lora text-lg md:text-xl text-cinza-pedra max-w-3xl mx-auto">
              Veja como nossos pacotes oferecem o melhor custo-benefício. 
              <strong> Economize comprando ingresso + transporte juntos!</strong>
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
