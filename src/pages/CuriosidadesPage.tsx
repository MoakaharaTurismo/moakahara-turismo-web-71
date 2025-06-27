
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Gift, Bird, Building, ShoppingBag, Clock, Users, Sparkles, MapPin } from 'lucide-react';

const CuriosidadesPage = () => {
  const curiosidades = [
    {
      id: 'templo-budista',
      titulo: 'Templo Budista Gratuito aos Domingos',
      icon: <Gift className="text-verde-floresta" size={32} />,
      descricao: 'Aos domingos, o Templo Budista Chen Tien abre suas portas gratuitamente para visitantes. É uma oportunidade única de meditar em jardins zen e conhecer a cultura oriental no coração do Brasil.',
      curiosidade: 'O templo possui mais de 120 estátuas de Buda e foi construído sem usar um único prego!',
      cor: 'bg-verde-floresta/10 border-verde-floresta'
    },
    {
      id: 'parque-aves',
      titulo: 'Parque das Aves - Mais de 400 Espécies',
      icon: <Bird className="text-azul-cataratas" size={32} />,
      descricao: 'O Parque das Aves abriga mais de 400 espécies de aves, sendo 50% delas resgatadas de tráfico ilegal. Você pode entrar em viveiros gigantes e ter araras pousando em seus ombros!',
      curiosidade: 'Algumas araras do parque vivem mais de 80 anos e reconhecem visitantes frequentes!',
      cor: 'bg-azul-cataratas/10 border-azul-cataratas'
    },
    {
      id: 'mesquita-arabe',
      titulo: 'Mesquita Árabe - Uma das Maiores da América Latina',
      icon: <Building className="text-ocre-terra" size={32} />,
      descricao: 'A Mesquita Omar Ibn Al-Khattab é uma das maiores da América Latina, com capacidade para 1.500 fiéis. Sua arquitetura impressionante inclui minaretes de 35 metros e jardins inspirados no Oriente Médio.',
      curiosidade: 'Foi construída seguindo técnicas ancestrais árabes, sem usar pregos na estrutura principal!',
      cor: 'bg-ocre-terra/10 border-ocre-terra'
    },
    {
      id: 'feirinha-argentina',
      titulo: 'Feirinha Argentina - Das 17h30 às 00h',
      icon: <ShoppingBag className="text-purple-600" size={32} />,
      descricao: 'A famosa feirinha argentina funciona das 17h30 às 00h, todos os dias! É o lugar perfeito para comprar artesanatos, vinhos e doce de leite autênticos da Argentina.',
      curiosidade: 'São mais de 500 lojas em um só lugar, e você pode negociar preços em português, espanhol ou guarani!',
      cor: 'bg-purple-100 border-purple-600'
    },
    {
      id: 'itaipu-recordes',
      titulo: 'Itaipu dos Recordes',
      icon: <Sparkles className="text-yellow-600" size={32} />,
      descricao: 'Itaipu foi a maior usina hidrelétrica do mundo por 14 anos. Para construí-la, foi usado ferro e aço suficiente para construir 380 Torres Eiffel!',
      curiosidade: 'Gera energia limpa para 15% do Brasil e 95% do Paraguai - é uma das 7 Maravilhas do Mundo Moderno!',
      cor: 'bg-yellow-100 border-yellow-600'
    },
    {
      id: 'marco-fronteiras',
      titulo: 'Encontro de Três Nações',
      icon: <MapPin className="text-red-600" size={32} />,
      descricao: 'No Marco das Três Fronteiras, você pode literalmente pisar em três países diferentes! É o único lugar do mundo onde Brasil, Argentina e Paraguai se encontram.',
      curiosidade: 'Os rios Iguaçu e Paraná se encontram exatamente neste ponto, criando um espetáculo natural único!',
      cor: 'bg-red-100 border-red-600'
    },
    {
      id: 'cataratas-unesco',
      titulo: 'Patrimônio da Humanidade',
      icon: <Users className="text-green-600" size={32} />,
      descricao: 'As Cataratas do Iguaçu são Patrimônio Mundial da UNESCO desde 1986. Com 275 quedas d\'água, são 4 vezes mais largas que as Cataratas do Niágara!',
      curiosidade: 'Eleanor Roosevelt disse ao ver as cataratas: "Pobres Cataratas do Niágara!" tamanha era a diferença!',
      cor: 'bg-green-100 border-green-600'
    },
    {
      id: 'diversidade-cultural',
      titulo: 'Babel Brasileira - 80+ Nacionalidades',
      icon: <Clock className="text-indigo-600" size={32} />,
      descricao: 'Foz do Iguaçu tem a maior diversidade étnica do Brasil! São mais de 80 nacionalidades diferentes vivendo em harmonia, criando uma rica mistura cultural única no mundo.',
      curiosidade: 'Você pode almoçar sushi, jantar árabe, tomar chimarrão e comprar produtos chineses no mesmo quarteirão!',
      cor: 'bg-indigo-100 border-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-verde-floresta to-azul-cataratas relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Curiosidades de Foz
          </h1>
          <p className="font-lora text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Descubra fatos incríveis e histórias surpreendentes sobre a cidade das cataratas. 
            Cada canto de Foz reserva uma surpresa especial!
          </p>
        </div>
      </section>

      {/* Curiosidades Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curiosidades.map((item, index) => (
              <div 
                key={item.id}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${item.cor}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="font-montserrat text-xl font-bold text-verde-floresta">
                    {item.titulo}
                  </h3>
                </div>
                
                <p className="font-lora text-cinza-pedra mb-4 leading-relaxed">
                  {item.descricao}
                </p>
                
                <div className="bg-gradient-to-r from-ocre-terra/20 to-transparent p-3 rounded-lg border-l-4 border-ocre-terra">
                  <p className="font-montserrat text-sm font-semibold text-ocre-terra">
                    💡 Você sabia? {item.curiosidade}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas p-8 rounded-2xl text-white max-w-4xl mx-auto">
              <h3 className="font-montserrat text-3xl font-bold mb-4">
                Quer descobrir mais curiosidades?
              </h3>
              <p className="font-lora text-lg mb-6 opacity-90">
                Nossos guias locais conhecem centenas de histórias fascinantes sobre Foz do Iguaçu. 
                Venha conosco e descubra os segredos da cidade!
              </p>
              <button
                onClick={() => {
                  const message = "Olá! Quero conhecer mais curiosidades sobre Foz do Iguaçu nos passeios!";
                  const whatsappNumber = "5545999096511";
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="bg-white text-verde-floresta px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-branco-gelo transition-all duration-300 transform hover:scale-105"
              >
                Falar com Nossos Guias
              </button>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default CuriosidadesPage;
