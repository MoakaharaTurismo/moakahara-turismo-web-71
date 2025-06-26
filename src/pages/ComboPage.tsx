
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Plus, Minus, MapPin, Clock, Users } from 'lucide-react';

const ComboPage = () => {
  const [selectedTours, setSelectedTours] = useState<{[key: string]: number}>({});

  const tours = [
    {
      id: 'city-tour',
      name: 'City Tour Foz do Iguaçu',
      description: 'Itaipu, Templo Budista, almoço no Barracão, Catedral Guadalupe, Mesquita e tour pelas principais avenidas',
      price: 350,
      priceFor2: 200,
      icon: '🏛️',
      duration: '8 horas',
      groupSize: 'Até 4 pessoas'
    },
    {
      id: 'cataratas-brasil',
      name: 'Cataratas do Iguaçu – Brasil',
      description: 'Transporte ida e volta para as majestosas Cataratas do lado brasileiro',
      price: 100,
      icon: '🇧🇷',
      duration: '4 horas',
      groupSize: 'Por pessoa'
    },
    {
      id: 'cataratas-argentina',
      name: 'Cataratas do Iguaçu – Argentina',
      description: 'Transporte ida e volta para explorar as trilhas argentinas das Cataratas',
      price: 450,
      icon: '🇦🇷',
      duration: '6 horas',
      groupSize: 'Por pessoa'
    },
    {
      id: 'paraguai',
      name: 'Compras no Paraguai',
      description: 'Transporte ida e volta para Ciudad del Este',
      price: 250,
      icon: '🇵🇾',
      duration: '6 horas',
      groupSize: 'Por pessoa'
    },
    {
      id: 'marco-fronteiras',
      name: 'Marco das Três Fronteiras + Roda Gigante',
      description: 'Transporte ida e volta para o ponto de encontro dos três países',
      price: 80,
      icon: '🎡',
      duration: '3 horas',
      groupSize: 'Por pessoa'
    }
  ];

  const addTour = (tourId: string) => {
    setSelectedTours(prev => ({
      ...prev,
      [tourId]: (prev[tourId] || 0) + 1
    }));
  };

  const removeTour = (tourId: string) => {
    setSelectedTours(prev => {
      const newSelected = { ...prev };
      if (newSelected[tourId] && newSelected[tourId] > 0) {
        newSelected[tourId] -= 1;
        if (newSelected[tourId] === 0) {
          delete newSelected[tourId];
        }
      }
      return newSelected;
    });
  };

  const getTotalDays = () => {
    return Object.values(selectedTours).reduce((sum, count) => sum + count, 0);
  };

  const getDiscount = () => {
    const days = getTotalDays();
    if (days === 0) return 0;
    if (days === 1) return 0;
    if (days === 2) return 10;
    return 30;
  };

  const getTotalPrice = () => {
    return Object.entries(selectedTours).reduce((total, [tourId, count]) => {
      const tour = tours.find(t => t.id === tourId);
      if (!tour) return total;
      return total + (tour.price * count);
    }, 0);
  };

  const getTotalWithDiscount = () => {
    const total = getTotalPrice();
    const discount = getDiscount();
    return total * (1 - discount / 100);
  };

  const handleWhatsAppContact = () => {
    const selectedItems = Object.entries(selectedTours)
      .map(([tourId, count]) => {
        const tour = tours.find(t => t.id === tourId);
        return `${tour?.name} x${count}`;
      })
      .join(', ');
    
    const totalDays = getTotalDays();
    const discount = getDiscount();
    const total = getTotalWithDiscount();
    
    const message = `Olá! Gostaria de montar meu combo de passeios:

${selectedItems}

Total de dias: ${totalDays}
Desconto aplicado: ${discount}%
Valor total: R$ ${total.toFixed(2).replace('.', ',')}

Gostaria de mais informações!`;
    
    const whatsappNumber = "5545999999999";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-verde-floresta to-azul-cataratas">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Monte seu combo e economize até 30%
          </h1>
          <p className="font-lora text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Quanto mais dias de passeio você fechar, maior o desconto! 
            Válido para pacotes de 3 dias ou mais.
          </p>
        </div>
      </section>

      {/* Tours Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tours List */}
            <div className="lg:col-span-2">
              <h2 className="font-montserrat text-3xl font-bold text-verde-floresta mb-8">
                Escolha seus passeios
              </h2>
              
              <div className="space-y-6">
                {tours.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{tour.icon}</span>
                          <h3 className="font-montserrat text-xl font-semibold text-verde-floresta">
                            {tour.name}
                          </h3>
                        </div>
                        
                        <p className="font-lora text-cinza-pedra mb-4">
                          {tour.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-cinza-pedra">
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {tour.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            {tour.groupSize}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-verde-floresta mb-3">
                          R$ {tour.price}
                          {tour.priceFor2 && (
                            <div className="text-sm font-normal text-cinza-pedra">
                              ou R$ {tour.priceFor2} (2 pessoas)
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeTour(tour.id)}
                            disabled={!selectedTours[tour.id]}
                            className="w-8 h-8 rounded-full bg-cinza-pedra/20 hover:bg-cinza-pedra/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          
                          <span className="w-8 text-center font-semibold">
                            {selectedTours[tour.id] || 0}
                          </span>
                          
                          <button
                            onClick={() => addTour(tour.id)}
                            className="w-8 h-8 rounded-full bg-verde-floresta hover:bg-azul-cataratas text-white flex items-center justify-center transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h3 className="font-montserrat text-xl font-bold text-verde-floresta mb-6">
                  Resumo do Combo
                </h3>
                
                {/* Days Counter */}
                <div className="bg-gradient-to-r from-verde-floresta/10 to-azul-cataratas/10 rounded-lg p-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-verde-floresta">
                      {getTotalDays()}
                    </div>
                    <div className="text-sm text-cinza-pedra">
                      {getTotalDays() === 1 ? 'dia selecionado' : 'dias selecionados'}
                    </div>
                  </div>
                </div>

                {/* Discount Info */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-lora">Desconto aplicado:</span>
                    <span className="font-bold text-verde-floresta text-xl">
                      {getDiscount()}%
                    </span>
                  </div>
                  
                  {getTotalDays() > 0 && getTotalDays() < 3 && (
                    <div className="text-sm text-ocre-terra">
                      Adicione {3 - getTotalDays()} {3 - getTotalDays() === 1 ? 'dia' : 'dias'} para 30% de desconto!
                    </div>
                  )}
                </div>

                {/* Price Summary */}
                {getTotalDays() > 0 && (
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal:</span>
                      <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                    </div>
                    {getDiscount() > 0 && (
                      <div className="flex justify-between mb-2 text-verde-floresta">
                        <span>Desconto ({getDiscount()}%):</span>
                        <span>-R$ {(getTotalPrice() - getTotalWithDiscount()).toFixed(2).replace('.', ',')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold text-verde-floresta">
                      <span>Total:</span>
                      <span>R$ {getTotalWithDiscount().toFixed(2).replace('.', ',')}</span>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={handleWhatsAppContact}
                  disabled={getTotalDays() === 0}
                  className="w-full bg-verde-floresta hover:bg-azul-cataratas disabled:bg-cinza-pedra/30 disabled:cursor-not-allowed text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                >
                  {getTotalDays() === 0 ? 'Selecione seus passeios' : 'Montar meu combo'}
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center">
            <div className="bg-ocre-terra/10 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="font-lora text-cinza-pedra">
                ⚠️ <strong>Aviso importante:</strong> Desconto aplicado apenas no valor do transporte. 
                Ingressos vendidos separadamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default ComboPage;
