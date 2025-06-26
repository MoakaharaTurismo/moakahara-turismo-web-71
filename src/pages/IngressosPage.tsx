
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { MapPin, Clock, Users, Star, AlertTriangle } from 'lucide-react';

const IngressosPage = () => {
  const attractions = [
    {
      id: 'city-tour',
      title: 'City Tour Foz do Iguaçu',
      icon: '🎟️',
      description: 'Um mergulho na história e cultura locais: comece na majestosa Itaipu, respire a serenidade do Templo Budista, saboreie um almoço delicioso no Barracão, explore a Catedral de Guadalupe, visualize a beleza arquitetônica da Mesquita e finalize com um passeio pelas vibrantes avenidas da cidade.',
      highlight: 'Um dia inesquecível pelas raízes e alma de Foz',
      prices: {
        transport: 350,
        transportFor2: 200,
        description: 'R$ 350 (até 4 pessoas) ou R$ 200 (2 pessoas)'
      },
      duration: '8 horas',
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6dee9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cataratas-brasil',
      title: 'Cataratas do Iguaçu – Brasil',
      icon: '🏞️',
      description: 'Sinta a grandiosidade da natureza na Garganta do Diabo e em trilhas envolventes por passarelas molhadas — um espetáculo da UNESCO que emociona todos os sentidos.',
      highlight: 'Vista panorâmica das quedas mais famosas do mundo',
      prices: {
        ticketBrazilian: 105,
        ticketForeigner: 116,
        transport: 100,
        totalBrazilian: 205,
        description: 'Brasileiro: R$ 105 + Transporte R$ 100 = R$ 205 total'
      },
      duration: '4 horas',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cataratas-argentina',
      title: 'Cataratas do Iguaçu – Argentina',
      icon: '🌊',
      description: 'Uma imersão impressionante do lado argentino: passarelas no meio das quedas, vista privilegiada da Garganta do Diabo argentina e o poder da água em toda sua extensão.',
      highlight: 'Proximidade única com as quedas',
      prices: {
        ticket: 250,
        transport: 450,
        total: 700,
        description: 'Ingresso ~R$ 250 + Transporte R$ 450 = R$ 700 total'
      },
      duration: '6 horas',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'marco-fronteiras',
      title: 'Marco das Três Fronteiras + Roda Gigante',
      icon: '🇵🇾',
      description: 'Do mirante das fronteiras, contemple o encontro dos rios e países num pôr do sol inesquecível. Depois, suba na Roda Gigante e veja Foz sob uma nova perspectiva.',
      highlight: 'Encontro histórico dos três países',
      prices: {
        marcoAdult: 55,
        marcoHalf: 29,
        rodaGigante: 80,
        transport: 80,
        total: 135,
        description: 'Marco R$ 55 + Roda Gigante R$ 80 = R$ 135 (sem transporte)'
      },
      duration: '3 horas',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleWhatsAppContact = (attraction: any) => {
    const message = `Olá! Gostaria de mais informações sobre o passeio: ${attraction.title}

${attraction.prices.description}

Pode me ajudar com os detalhes?`;
    
    const whatsappNumber = "5545999999999";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
            Descubra cada passeio com preços transparentes e viva experiências únicas 
            em Foz do Iguaçu que ficarão para sempre na memória.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
                      💰 Preços
                    </h4>
                    <p className="font-lora text-cinza-pedra">
                      {attraction.prices.description}
                    </p>
                    
                    {attraction.id === 'cataratas-brasil' && (
                      <div className="mt-2 text-sm text-cinza-pedra">
                        <p>• Estrangeiro: R$ 116 + Transporte = R$ 216 total</p>
                      </div>
                    )}
                    
                    {attraction.id === 'marco-fronteiras' && (
                      <div className="mt-2 text-sm text-cinza-pedra">
                        <p>• Meia entrada Marco: R$ 29</p>
                        <p>• Transporte separado: R$ 80</p>
                      </div>
                    )}
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

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppContact(attraction)}
                    className="w-full bg-verde-floresta hover:bg-azul-cataratas text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Reservar Agora
                  </button>
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
                <strong> Consulte as condições atualizadas no momento da compra.</strong>
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
                Temos pacotes especiais e descontos para grupos!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const message = "Olá! Gostaria de montar um roteiro personalizado em Foz do Iguaçu. Podem me ajudar?";
                    const whatsappNumber = "5545999999999";
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-white text-verde-floresta px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-branco-gelo transition-all duration-300 transform hover:scale-105"
                >
                  Falar no WhatsApp
                </button>
                <a
                  href="/combo"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-white hover:text-verde-floresta transition-all duration-300 transform hover:scale-105"
                >
                  Monte seu Combo
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
