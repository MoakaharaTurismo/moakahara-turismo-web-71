
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Cataratas do Iguaçu",
      subtitle: "Uma das 7 Maravilhas da Natureza"
    },
    {
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Fauna Exuberante",
      subtitle: "Encontre onças-pintadas e aves raras"
    },
    {
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Marco das Três Fronteiras",
      subtitle: "Brasil, Argentina e Paraguai se encontram"
    },
    {
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Mata Atlântica",
      subtitle: "Trilhas ecológicas e natureza preservada"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6">
            Moakãhára
            <span className="block text-3xl md:text-4xl font-normal text-ocre-terra">
              TURISMO
            </span>
          </h1>
          
          <p className="font-lora text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Imersão na cidade das cataratas: sua cultura e as belezas escondidas
          </p>
          
          <p className="font-playfair italic text-lg md:text-xl mb-8 text-branco-gelo/90">
            "Moakãhára" - aquele que guia em língua guarani
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#combo"
              className="bg-verde-floresta hover:bg-azul-cataratas text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Monte seu Combo
            </a>
            <a
              href="#passeios"
              className="border-2 border-white hover:bg-white hover:text-verde-floresta text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300"
            >
              Conheça os Passeios
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
