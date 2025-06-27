
import React, { useState } from 'react';

const ToursSection = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const categorias = [
    { id: 'todos', nome: 'Todos os Passeios' },
    { id: 'cataratas', nome: 'Cataratas' },
    { id: 'fauna', nome: 'Fauna & Flora' },
    { id: 'compras', nome: 'Paraguai' },
    { id: 'argentina', nome: 'Argentina' }
  ];

  const passeios = [
    {
      id: 1,
      categoria: 'cataratas',
      titulo: 'Cataratas Brasileiras',
      descricao: 'Vista panorâmica das quedas do lado brasileiro - Patrimônio da UNESCO',
      imagem: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 205',
      precoOriginal: 'R$ 250',
      desconto: '18% OFF',
      duracao: '4 horas',
      inclui: 'Transporte + Ingresso',
      destaque: true
    },
    {
      id: 2,
      categoria: 'cataratas',
      titulo: 'Cataratas Argentinas',
      descricao: 'Trilhas e proximidade com as quedas - Experiência completa',
      imagem: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 700',
      precoOriginal: 'R$ 850',
      desconto: '18% OFF',
      duracao: '6 horas',
      inclui: 'Transporte + Ingresso + Guia',
      destaque: true
    },
    {
      id: 3,
      categoria: 'fauna',
      titulo: 'Parque das Aves',
      descricao: 'Encontro com araras e 400+ espécies de aves',
      imagem: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 190',
      precoOriginal: 'R$ 220',
      desconto: '14% OFF',
      duracao: '3 horas',
      inclui: 'Transporte + Ingresso'
    },
    {
      id: 4,
      categoria: 'compras',
      titulo: 'Ciudad del Este - Compras',
      descricao: 'Compras no Paraguai com guia especializado',
      imagem: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 250',
      precoOriginal: 'R$ 300',
      desconto: '17% OFF',
      duracao: '6+ horas',
      inclui: 'Transporte + Guia + 6h incluídas'
    },
    {
      id: 5,
      categoria: 'argentina',
      titulo: 'Marco das Três Fronteiras',
      descricao: 'Ponto de encontro entre Brasil, Argentina e Paraguai',
      imagem: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 215',
      precoOriginal: 'R$ 260',
      desconto: '17% OFF',
      duracao: '3 horas',
      inclui: 'Transporte + Ingressos'
    },
    {
      id: 6,
      categoria: 'todos',
      titulo: 'City Tour Completo',
      descricao: 'Itaipu + Templo + Mesquita + Centro histórico',
      imagem: 'https://images.unsplash.com/photo-1539650116574-75c0c6dee9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 350',
      precoOriginal: 'R$ 400',
      desconto: '12% OFF',
      duracao: '5-7 horas',
      inclui: 'Transporte + Guia + Almoço',
      destaque: true
    }
  ];

  const passeiosFiltrados = filtroAtivo === 'todos' 
    ? passeios 
    : passeios.filter(passeio => passeio.categoria === filtroAtivo);

  const handleReservarAgora = (passeio: any) => {
    const message = `🎯 QUERO RESERVAR AGORA!

${passeio.titulo}
💰 ${passeio.preco} (${passeio.desconto})
⏱️ ${passeio.duracao}
✅ ${passeio.inclui}

Preciso de mais detalhes e disponibilidade!`;
    
    const whatsappNumber = "5545999096511";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="passeios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header com foco em vendas */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white inline-block px-6 py-2 rounded-full font-bold text-sm mb-4 animate-pulse">
            🔥 PROMOÇÃO LIMITADA - ATÉ 30% OFF
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-verde-floresta mb-6">
            Passeios com Desconto Especial
          </h2>
          <p className="font-lora text-lg md:text-xl text-cinza-pedra max-w-3xl mx-auto leading-relaxed">
            Reserve agora e economize! Descontos válidos por tempo limitado. 
            <strong> Garantia de melhor preço da região!</strong>
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setFiltroAtivo(categoria.id)}
              className={`px-6 py-3 rounded-full font-montserrat font-semibold transition-all duration-300 ${
                filtroAtivo === categoria.id
                  ? 'bg-verde-floresta text-white shadow-lg'
                  : 'bg-branco-gelo text-cinza-pedra hover:bg-ocre-terra hover:text-white'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Grid de Passeios - Foco em vendas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passeiosFiltrados.map((passeio) => (
            <div
              key={passeio.id}
              className={`bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group relative ${
                passeio.destaque ? 'ring-4 ring-verde-floresta ring-opacity-50' : ''
              }`}
            >
              {/* Badge de destaque */}
              {passeio.destaque && (
                <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full font-montserrat font-bold text-xs animate-bounce">
                  MAIS VENDIDO
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={passeio.imagem}
                  alt={passeio.titulo}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge de desconto */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-montserrat font-bold text-sm">
                  {passeio.desconto}
                </div>
                
                {/* Preço e duração */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs line-through text-gray-300">
                          {passeio.precoOriginal}
                        </div>
                        <div className="text-xl font-bold text-green-400">
                          {passeio.preco}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs">{passeio.duracao}</div>
                        <div className="text-xs text-gray-300">{passeio.inclui}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-semibold text-verde-floresta mb-3">
                  {passeio.titulo}
                </h3>
                <p className="font-lora text-cinza-pedra mb-6 leading-relaxed">
                  {passeio.descricao}
                </p>
                
                {/* CTA duplo para conversão */}
                <div className="space-y-2">
                  <button 
                    onClick={() => handleReservarAgora(passeio)}
                    className="w-full bg-gradient-to-r from-verde-floresta to-azul-cataratas hover:from-azul-cataratas hover:to-verde-floresta text-white py-3 rounded-lg font-montserrat font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    🚀 RESERVAR AGORA
                  </button>
                  <button 
                    onClick={() => handleReservarAgora(passeio)}
                    className="w-full border-2 border-verde-floresta text-verde-floresta hover:bg-verde-floresta hover:text-white py-2 rounded-lg font-montserrat font-semibold transition-all duration-300"
                  >
                    💬 Mais Informações
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section com urgência */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas p-8 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm animate-pulse">
              ⏰ ÚLTIMAS VAGAS!
            </div>
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              🎯 Monte seu combo e economize até 30%!
            </h3>
            <p className="font-lora text-lg mb-6 opacity-90">
              <strong>Desconto progressivo:</strong> 2 passeios = 10% OFF | 3+ passeios = 30% OFF<br/>
              <span className="text-yellow-300">💰 Garantia de menor preço da região!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/combo"
                className="inline-block bg-white text-verde-floresta px-8 py-4 rounded-full font-montserrat font-bold text-lg hover:bg-branco-gelo transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                🔥 MONTE SEU COMBO AGORA
              </a>
              <button
                onClick={() => {
                  const message = "🎯 Quero aproveitar a PROMOÇÃO e montar meu combo com desconto! Me ajudem com as melhores opções!";
                  const whatsappNumber = "5545999096511";
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="bg-yellow-400 hover:bg-yellow-300 text-verde-floresta px-8 py-4 rounded-full font-montserrat font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 FALAR COM ESPECIALISTA
              </button>
            </div>
          </div>
        </div>

        {/* Garantia e benefícios */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">✅</div>
            <h4 className="font-montserrat font-bold text-verde-floresta mb-2">
              Garantia de Melhor Preço
            </h4>
            <p className="text-sm text-cinza-pedra">
              Encontrou mais barato? Igualamos o preço!
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">🚗</div>
            <h4 className="font-montserrat font-bold text-azul-cataratas mb-2">
              Transporte Incluído
            </h4>
            <p className="text-sm text-cinza-pedra">
              Busca e volta no seu hotel, sem stress!
            </p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-3xl mb-2">🏆</div>
            <h4 className="font-montserrat font-bold text-ocre-terra mb-2">
              Guias Especializados
            </h4>
            <p className="text-sm text-cinza-pedra">
              Locais apaixonados que conhecem cada segredo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
