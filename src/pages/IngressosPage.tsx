
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PricingTable from '../components/PricingTable';
import { MapPin, Clock, Users, Star, AlertTriangle, Ticket, Heart, ExternalLink } from 'lucide-react';

const IngressosPage = () => {
  const attractions = [
    {
      id: 'city-tour',
      title: 'City Tour Foz do Iguaçu Completo',
      icon: '🏛️',
      description: 'Roteiro completo pela história e cultura de Foz: Usina de Itaipu (vista externa), Templo Budista, Restaurante Barracão, Catedral de Nossa Senhora de Guadalupe, Mesquita Árabe, Avenida Pedro Basso, avenidas centrais, quartel militar, Avenida Brasil (centro histórico). Integração com Roda-Gigante e Marco das Três Fronteiras.',
      highlight: 'Um mergulho completo na alma de Foz do Iguaçu',
      prices: {
        description: 'R$ 350 (até 4 pessoas) ou R$ 200 (2 pessoas)'
      },
      duration: '5-7 horas',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6dee9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cataratas-brasil',
      title: 'Cataratas do Iguaçu – Brasil',
      icon: '🏞️',
      description: 'Parque Nacional do Iguaçu com suas trilhas, pontes e mirantes. Vista panorâmica impressionante da Garganta do Diabo e passarelas que proporcionam experiência única com as quedas d\'água. Patrimônio Mundial da UNESCO.',
      highlight: 'Vista panorâmica das quedas mais famosas do mundo',
      prices: {
        description: 'Ingresso: R$ 105 (Brasileiro) ou R$ 117 (Estrangeiro) + Transporte: R$ 100'
      },
      duration: '4 horas',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      linkOficial: 'https://cataratasdoiguacu.com.br/'
    },
    {
      id: 'cataratas-argentina',
      title: 'Cataratas do Iguaçu – Argentina',
      icon: '🌊',
      description: 'Lado argentino com proximidade única às quedas. Trilhas do Circuito Superior e Inferior, Garganta do Diabo argentina, e a experiência de estar no meio das cataratas. Inclui feirinha argentina para compras e gastronomia.',
      highlight: 'Proximidade única e inesquecível com as quedas',
      prices: {
        description: 'Pacote completo: R$ 700 (inclui feirinha argentina)'
      },
      duration: '6-8 horas',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'parque-aves',
      title: 'Parque das Aves',
      icon: '🦜',
      description: 'Encontro mágico com mais de 400 espécies: araras coloridas, tucanos exuberantes, e até mesmo a majestosa onça-pintada. Viveiros imensos onde você caminha entre as aves em seu habitat natural. Experiência única de interação com a fauna.',
      highlight: 'Experiência única com aves e fauna resgatadas',
      prices: {
        description: 'Ingresso: R$ 90 + Transporte: R$ 100 = R$ 190'
      },
      duration: '2-3 horas',
      image: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      linkOficial: 'https://www.parquedasaves.com.br/'
    },
    {
      id: 'itaipu-tours',
      title: 'Usina de Itaipu - Tours Especializados',
      icon: '⚡',
      description: 'Explore a maior usina hidrelétrica do Brasil com tours especializados: Panorâmico, Ecomuseu, Refúgio Biológico. Conheça o reservatório, a tecnologia impressionante e a importância ambiental desta maravilha da engenharia.',
      highlight: 'Maravilha da engenharia moderna brasileira',
      prices: {
        description: 'Tours variados + Transporte: R$ 100 (desconto se comprar ingresso lá)'
      },
      duration: '2-4 horas',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      linkOficial: 'https://www.turismoitaipu.com.br/'
    },
    {
      id: 'marco-fronteiras',
      title: 'Marco das Três Fronteiras + Roda-Gigante',
      icon: '🎡',
      description: 'Ponto histórico onde Brasil, Argentina e Paraguai se encontram. Vista espetacular do encontro dos rios e países. A Roda-Gigante do Vale das Cataratas oferece perspectiva única da região com vista panorâmica de 360°.',
      highlight: 'Encontro histórico dos três países',
      prices: {
        description: 'Marco + Roda-Gigante: R$ 215 (transporte incluído)'
      },
      duration: '3 horas',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'kattamaram',
      title: 'Kattamaram II - Rio Paraná',
      icon: '⛵',
      description: 'Navegação exclusiva no Rio Paraná a bordo do Kattamaram II. Vista única da região a partir das águas, com perspectiva diferenciada das fronteiras e da natureza exuberante da região.',
      highlight: 'Navegação única no Rio Paraná',
      prices: {
        description: 'R$ 220-280 + Transporte R$ 85 = R$ 305-365'
      },
      duration: '3-4 horas',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'paraguai-compras',
      title: 'Ciudad del Este - Compras & Cultura',
      icon: '🛍️',
      description: 'Duas opções: Compras com acompanhante (R$ 250) ou City Tour cultural com guia explicativo (R$ 350). Explore feirinhas gastronômicas locais, cultura paraguaia autêntica e as melhores oportunidades de compras da América do Sul.',
      highlight: 'Paraíso das compras e cultura paraguaia',
      prices: {
        description: 'Compras: R$ 250 | City Tour: R$ 350 (6h incluídas)'
      },
      duration: '6+ horas',
      image: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleWhatsAppContact = (attraction: any) => {
    const message = `Olá! Gostaria de mais informações sobre: ${attraction.title}

${attraction.prices.description}

Pode me ajudar com os detalhes e disponibilidade?`;
    
    const whatsappNumber = "5545999096511";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleComprarOficial = (attraction: any) => {
    if (attraction.linkOficial) {
      window.open(attraction.linkOficial, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-verde-floresta to-azul-cataratas relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Ingressos & Experiências
          </h1>
          <p className="font-lora text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descubra cada passeio com preços transparentes, links oficiais e viva experiências únicas 
            em Foz do Iguaçu que ficarão para sempre na memória.
          </p>
        </div>
      </section>

      {/* Nossa História - Vinicius */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="text-red-500" size={32} />
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-verde-floresta">
                Nossa História
              </h2>
            </div>
            <div className="bg-gradient-to-r from-verde-floresta/5 to-azul-cataratas/5 rounded-2xl p-8">
              <p className="font-lora text-lg text-cinza-pedra leading-relaxed mb-6">
                A <strong>Moakãhára Turismo</strong> é o sonho realizado de <strong>Vinicius Gavioli</strong>, 
                um profundo conhecedor e apaixonado pela região de Foz do Iguaçu, Puerto Iguazú e Ciudad del Este.
              </p>
              <p className="font-lora text-lg text-cinza-pedra leading-relaxed">
                Embora não tenha sido fundada por guias, hoje a agência conta com uma 
                <strong> rede de amigos-guia</strong> que oferecem informações genuínas, 
                revelando segredos e experiências que dão verdadeiro significado à sua viagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-verde-floresta mb-6">
              💰 Tabela Completa de Preços
            </h2>
            <p className="font-lora text-lg text-cinza-pedra max-w-3xl mx-auto">
              Compare preços e veja como economizar com nossos pacotes. 
              <strong> Links oficiais incluídos e melhor preço garantido!</strong>
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-verde-floresta mb-12 text-center">
            🎯 Experiências com Fotos Reais de Alta Qualidade
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={attraction.id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-verde-floresta text-white px-3 py-1 rounded-full font-montserrat font-semibold text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {attraction.duration}
                  </div>
                  <div className="absolute top-4 right-4 text-4xl">
                    {attraction.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserrat text-2xl font-bold text-verde-floresta mb-3">
                    {attraction.title}
                  </h3>
                  
                  <div className="bg-ocre-terra/10 rounded-lg p-3 mb-4">
                    <p className="font-playfair italic text-ocre-terra font-medium">
                      "{attraction.highlight}"
                    </p>
                  </div>
                  
                  <p className="font-lora text-cinza-pedra mb-6 leading-relaxed">
                    {attraction.description}
                  </p>

                  {/* Pricing */}
                  <div className="bg-gradient-to-r from-verde-floresta/5 to-azul-cataratas/5 rounded-lg p-4 mb-6">
                    <h4 className="font-montserrat font-semibold text-verde-floresta mb-2 flex items-center gap-2">
                      <Ticket size={20} />
                      Preços
                    </h4>
                    <p className="font-lora text-cinza-pedra text-sm leading-relaxed">
                      {attraction.prices.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-verde-floresta/10 text-verde-floresta px-3 py-1 rounded-full text-sm font-montserrat">
                      <MapPin size={12} className="inline mr-1" />
                      Transporte incluso
                    </span>
                    <span className="bg-azul-cataratas/10 text-azul-cataratas px-3 py-1 rounded-full text-sm font-montserrat">
                      <Users size={12} className="inline mr-1" />
                      Guia especializado
                    </span>
                    <span className="bg-ocre-terra/10 text-ocre-terra px-3 py-1 rounded-full text-sm font-montserrat">
                      <Star size={12} className="inline mr-1" />
                      Experiência única
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    {attraction.linkOficial && (
                      <button
                        onClick={() => handleComprarOficial(attraction)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Comprar Ingresso Oficial
                      </button>
                    )}
                    <button
                      onClick={() => handleWhatsAppContact(attraction)}
                      className="w-full bg-verde-floresta hover:bg-azul-cataratas text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      🚀 Reservar Transporte + Ingresso
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-ocre-terra/10 to-ocre-terra/5 rounded-lg p-8 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="text-ocre-terra" size={24} />
                <h3 className="font-montserrat text-xl font-bold text-ocre-terra">
                  Aviso Importante
                </h3>
              </div>
              <p className="font-lora text-cinza-pedra leading-relaxed">
                ⚠️ Os preços são atualizados regularmente, mas podem variar conforme alta temporada, 
                mudanças nas taxas dos parques ou impostos governamentais. 
                <strong> Links oficiais incluídos para garantir autenticidade.</strong>
              </p>
              <div className="mt-4 text-sm text-cinza-pedra">
                <p>💡 <strong>Dica:</strong> Reserve com antecedência para garantir disponibilidade e melhores preços!</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas p-8 rounded-2xl text-white">
              <h3 className="font-montserrat text-3xl font-bold mb-4">
                Pronto para sua aventura em Foz?
              </h3>
              <p className="font-lora text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Entre em contato conosco e monte seu roteiro personalizado. 
                Temos pacotes especiais, links oficiais e descontos para grupos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const message = "Olá! Gostaria de montar um roteiro personalizado em Foz do Iguaçu com base nas experiências do site. Podem me ajudar?";
                    const whatsappNumber = "5545999096511";
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-white text-verde-floresta px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-branco-gelo transition-all duration-300 transform hover:scale-105"
                >
                  💬 Falar no WhatsApp
                </button>
                <a
                  href="/combo"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-white hover:text-verde-floresta transition-all duration-300 transform hover:scale-105"
                >
                  🔥 Monte seu Combo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default IngressosPage;
