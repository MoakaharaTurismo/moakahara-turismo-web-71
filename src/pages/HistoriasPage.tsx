
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Clock, Users, Feather, Mountain, Pickaxe, Zap } from 'lucide-react';

const HistoriasPage = () => {
  const historias = [
    {
      id: 'lendas-indigenas',
      titulo: 'Lendas e Mitos dos Povos Indígenas',
      icon: <Feather className="text-ocre-terra" size={32} />,
      periodo: 'Tempos Ancestrais',
      texto: 'Segundo a tradição guarani, as cataratas nasceram do amor impossível entre Naipi, uma jovem indígena, e Tarobá, um guerreiro corajoso. M\'Boi, a serpente gigante do rio, enfurecida pelo amor dos dois, rasgou a terra criando as quedas d\'água. Os Guarani chamavam este lugar sagrado de "Y Guasu" - as águas grandes, onde os espíritos dos antepassados dançavam na névoa das quedas.',
      visual: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'exploracao-colonizacao',
      titulo: 'Exploração e Colonização da Região',
      icon: <Pickaxe className="text-ocre-terra" size={32} />,
      periodo: 'Séculos XVI-XIX',
      texto: 'Em 1541, Álvar Núñez Cabeza de Vaca foi o primeiro europeu a contemplar as cataratas, batizando-as de "Saltos de Santa Maria". Jesuítas espanhóis estabeleceram missões entre os Guarani, criando um período único de fusão cultural. Bandeirantes paulistas, exploradores paraguaios e colonos argentinos disputaram estas terras ricas, cada um deixando sua marca na formação da identidade tricultural que define Foz até hoje.',
      visual: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'construcao-itaipu',
      titulo: 'A Construção da Usina de Itaipu e seu Impacto',
      icon: <Zap className="text-ocre-terra" size={32} />,
      periodo: '1970-1984',
      texto: 'O maior projeto de engenharia do século XX transformou completamente Foz do Iguaçu. Quarenta mil trabalhadores de todo o Brasil e Paraguai se uniram para erguer a usina hidrelétrica. Famílias inteiras migraram, culturas se misturaram, e a pequena vila de 20 mil habitantes se tornou uma metrópole de 300 mil pessoas. Itaipu não foi apenas uma obra de concreto e aço - foi o renascimento completo de uma região, criando a Foz cosmopolita que conhecemos hoje.',
      visual: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'diversidade-cultural',
      titulo: 'A Babel Brasileira Moderna',
      icon: <Users className="text-ocre-terra" size={32} />,
      periodo: '1980-Presente',
      texto: 'Com a construção de Itaipu, Foz do Iguaçu se tornou o maior caldeirão cultural do Brasil. Mais de 80 nacionalidades diferentes se estabeleceram na cidade, criando bairros únicos: libaneses na Vila A, chineses no centro, paraguaios na Vila C. Mesquitas, templos budistas, igrejas cristãs e terreiros convivem em harmonia. É possível almoçar comida árabe, jantar sushi e tomar chimarrão no mesmo quarteirão - uma diversidade que faz de Foz um Brasil em miniatura.',
      visual: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-branco-gelo to-white">
      <Navigation />
      
      {/* Hero Section with Indigenous Pattern */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-ocre-terra to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Histórias da Cidade
          </h1>
          <p className="font-lora text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mergulhe nas lendas ancestrais e na rica história que moldou Foz do Iguaçu, 
            desde os tempos dos povos originários até os dias atuais.
          </p>
        </div>
      </section>

      {/* Histórias Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {historias.map((historia, index) => (
              <div 
                key={historia.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Imagem */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={historia.visual}
                      alt={historia.titulo}
                      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 bg-ocre-terra/80 px-3 py-1 rounded-full">
                        <Clock size={16} />
                        <span className="font-montserrat text-sm">{historia.periodo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    {historia.icon}
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-verde-floresta">
                      {historia.titulo}
                    </h2>
                  </div>
                  <div className="bg-gradient-to-r from-ocre-terra/10 to-transparent p-4 rounded-lg border-l-4 border-ocre-terra">
                    <p className="font-lora text-lg text-cinza-pedra leading-relaxed">
                      {historia.texto}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Citação Final */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-verde-floresta/10 to-azul-cataratas/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <blockquote className="font-playfair text-2xl md:text-3xl italic text-verde-floresta mb-6">
                "Cada pedra dessas cataratas guarda uma memória, cada gota d'água carrega uma história. 
                Foz do Iguaçu não é apenas um destino - é um encontro com a alma do Brasil."
              </blockquote>
              <p className="font-montserrat text-ocre-terra font-semibold">
                — Tradição oral dos povos Guarani
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

export default HistoriasPage;
