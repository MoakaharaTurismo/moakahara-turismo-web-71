
import React from 'react';

const AboutSection = () => {
  const valores = [
    {
      title: "Autenticidade",
      description: "Experiências genuínas conectadas à cultura guarani e à natureza local",
      icon: "🌿"
    },
    {
      title: "Espiritualidade",
      description: "Conexão profunda com a energia das cachoeiras e da Mata Atlântica",
      icon: "✨"
    },
    {
      title: "Respeito Ambiental",
      description: "Turismo sustentável que preserva nossa biodiversidade única",
      icon: "🌱"
    }
  ];

  const depoimentos = [
    {
      texto: "Uma experiência transformadora! Os guias da Moakãhára nos levaram além do turismo convencional.",
      autor: "Maria Silva",
      cidade: "São Paulo, SP",
      estrelas: 5
    },
    {
      texto: "Conhecer as Cataratas com essa perspectiva cultural foi inesquecível. Recomendo demais!",
      autor: "João Santos",
      cidade: "Rio de Janeiro, RJ",
      estrelas: 5
    },
    {
      texto: "Profissionais incríveis que realmente amam o que fazem. Voltaremos com certeza!",
      autor: "Ana Costa",
      cidade: "Curitiba, PR",
      estrelas: 5
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-branco-gelo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-verde-floresta mb-6">
            Sobre a Moakãhára
          </h2>
          <p className="font-lora text-lg md:text-xl text-cinza-pedra max-w-3xl mx-auto leading-relaxed">
            Em língua guarani, <span className="font-playfair italic text-ocre-terra">"Moakãhára"</span> significa 
            "aquele que guia". Somos mais que uma agência de turismo - somos guardiões das histórias, 
            tradições e belezas naturais de Foz do Iguaçu.
          </p>
        </div>

        {/* História e Missão */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-semibold text-verde-floresta">
              Nossa História
            </h3>
            <p className="font-lora text-cinza-pedra leading-relaxed">
              Fundada por guias locais apaixonados pela região, a Moakãhára nasceu do desejo de 
              compartilhar as maravilhas escondidas de Foz do Iguaçu de forma autêntica e sustentável.
            </p>
            <p className="font-lora text-cinza-pedra leading-relaxed">
              Nossa equipe possui profundo conhecimento da fauna, flora e cultura local, 
              proporcionando experiências que conectam nossos visitantes com a essência 
              espiritual das Cataratas do Iguaçu.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-semibold text-verde-floresta">
              Nossa Missão
            </h3>
            <p className="font-lora text-cinza-pedra leading-relaxed">
              Promover o turismo consciente e transformador, revelando as belezas naturais 
              e culturais da tríplice fronteira com respeito aos povos originários e ao meio ambiente.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-ocre-terra">
              <p className="font-playfair italic text-lg text-verde-floresta">
                "Cada passeio é uma jornada de descoberta, onde a natureza ensina e a cultura enriquece."
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <h3 className="font-montserrat text-3xl font-semibold text-verde-floresta text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h4 className="font-montserrat text-xl font-semibold text-verde-floresta mb-4">
                  {valor.title}
                </h4>
                <p className="font-lora text-cinza-pedra leading-relaxed">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div>
          <h3 className="font-montserrat text-3xl font-semibold text-verde-floresta text-center mb-12">
            O que nossos visitantes dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(depoimento.estrelas)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="font-playfair italic text-lg text-cinza-pedra mb-4 leading-relaxed">
                  "{depoimento.texto}"
                </p>
                <div>
                  <p className="font-montserrat font-semibold text-verde-floresta">
                    {depoimento.autor}
                  </p>
                  <p className="font-lora text-sm text-cinza-pedra">
                    {depoimento.cidade}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
