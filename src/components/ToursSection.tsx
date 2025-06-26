
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
      descricao: 'Vista panorâmica das quedas do lado brasileiro',
      imagem: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 120',
      duracao: '4 horas'
    },
    {
      id: 2,
      categoria: 'cataratas',
      titulo: 'Cataratas Argentinas',
      descricao: 'Trilhas e proximidade com as quedas',
      imagem: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 150',
      duracao: '6 horas'
    },
    {
      id: 3,
      categoria: 'fauna',
      titulo: 'Parque das Aves',
      descricao: 'Encontro com araras e aves da região',
      imagem: 'https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 90',
      duracao: '3 horas'
    },
    {
      id: 4,
      categoria: 'fauna',
      titulo: 'Safari Ecológico',
      descricao: 'Avistamento de onças-pintadas e outros felinos',
      imagem: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 200',
      duracao: '5 horas'
    },
    {
      id: 5,
      categoria: 'compras',
      titulo: 'Ciudad del Este',
      descricao: 'Compras no Paraguai com guia especializado',
      imagem: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 80',
      duracao: '6 horas'
    },
    {
      id: 6,
      categoria: 'argentina',
      titulo: 'Marco das Três Fronteiras',
      descricao: 'Ponto de encontro entre Brasil, Argentina e Paraguai',
      imagem: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      preco: 'R$ 70',
      duracao: '2 horas'
    }
  ];

  const passeiosFiltrados = filtroAtivo === 'todos' 
    ? passeios 
    : passeios.filter(passeio => passeio.categoria === filtroAtivo);

  return (
    <section id="passeios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-verde-floresta mb-6">
            Passeios & Experiências
          </h2>
          <p className="font-lora text-lg md:text-xl text-cinza-pedra max-w-3xl mx-auto leading-relaxed">
            Descubra as maravilhas de Foz do Iguaçu através de experiências únicas 
            e autênticas, guiadas por especialistas locais.
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
                  ? 'bg-verde-floresta text-white'
                  : 'bg-branco-gelo text-cinza-pedra hover:bg-ocre-terra hover:text-white'
              }`}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        {/* Grid de Passeios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passeiosFiltrados.map((passeio) => (
            <div
              key={passeio.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={passeio.imagem}
                  alt={passeio.titulo}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-verde-floresta text-white px-3 py-1 rounded-full font-montserrat font-semibold text-sm">
                  {passeio.preco}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full font-montserrat text-sm">
                  {passeio.duracao}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-semibold text-verde-floresta mb-3">
                  {passeio.titulo}
                </h3>
                <p className="font-lora text-cinza-pedra mb-4 leading-relaxed">
                  {passeio.descricao}
                </p>
                <button className="w-full bg-azul-cataratas hover:bg-verde-floresta text-white py-3 rounded-lg font-montserrat font-semibold transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas p-8 rounded-2xl text-white">
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              Pronto para sua aventura?
            </h3>
            <p className="font-lora text-lg mb-6 opacity-90">
              Monte seu combo personalizado e descubra Foz do Iguaçu de forma única
            </p>
            <a
              href="#combo"
              className="inline-block bg-white text-verde-floresta px-8 py-4 rounded-full font-montserrat font-semibold text-lg hover:bg-branco-gelo transition-all duration-300 transform hover:scale-105"
            >
              Monte seu Combo Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
