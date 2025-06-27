
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Clock, MapPin, Plus, Minus, AlertTriangle, CheckCircle, Calendar } from 'lucide-react';

const RoteirosPage = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [roteiro, setRoteiro] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  });

  const passeios = [
    {
      id: 'cataratas-parque-aves',
      nome: 'Cataratas + Parque das Aves',
      duracao: 5,
      descricao: 'Parque das Aves (2h30) + Cataratas Brasil (2h30)',
      horario: '8h00 - 13h00',
      categoria: 'natureza',
      sugestao: 'Dia 1'
    },
    {
      id: 'macuco-safari',
      nome: 'Macuco Safari',
      duracao: 2.5,
      descricao: 'Aventura até a base das Cataratas',
      horario: '9h00 - 16h00 (flexível)',
      categoria: 'aventura',
      sugestao: 'Dia 1'
    },
    {
      id: 'helicoptero',
      nome: 'Helicóptero nas Cataratas',
      duracao: 1.5,
      descricao: 'Voo panorâmico sobre as Cataratas',
      horario: '9h00 - 17h00 (flexível)',
      categoria: 'aventura',
      sugestao: 'Dia 2'
    },
    {
      id: 'wonder-park',
      nome: 'Wonder Park (Noturno)',
      duracao: 2.5,
      descricao: 'Parque temático - aberto até 22h',
      horario: '19h30 - 22h00',
      categoria: 'entretenimento',
      sugestao: 'Dia 2'
    },
    {
      id: 'feirinha-argentina',
      nome: 'Feirinha Argentina',
      duracao: 4,
      descricao: 'Compras e gastronomia argentina',
      horario: '17h30 - 21h30',
      categoria: 'compras',
      sugestao: 'Dia 2'
    },
    {
      id: 'roda-gigante',
      nome: 'Roda Gigante',
      duracao: 1.5,
      descricao: 'Vista panorâmica da cidade',
      horario: '14h00 - 22h00',
      categoria: 'entretenimento',
      sugestao: 'Dia 3'
    },
    {
      id: 'marco-show',
      nome: 'Show do Marco das 3 Fronteiras',
      duracao: 2.2,
      descricao: 'Show no Marco das Três Fronteiras',
      horario: '18h20 - 20h30',
      categoria: 'cultura',
      sugestao: 'Dia 3'
    },
    {
      id: 'city-tour',
      nome: 'City Tour',
      duracao: 6,
      descricao: 'Itaipu, Templo Budista, Mesquita, Catedral',
      horario: '8h00 - 15h00',
      categoria: 'cultura',
      sugestao: 'Dia 4'
    },
    {
      id: 'paraguai',
      nome: 'Paraguai (Compras)',
      duracao: 6,
      descricao: 'Ciudad del Este - 6h incluídas, +R$50/h extra',
      horario: '8h00 - 17h00',
      categoria: 'compras',
      sugestao: 'Dia 5'
    },
    {
      id: 'cataratas-argentina',
      nome: 'Cataratas Argentina',
      duracao: 8,
      descricao: 'Lado argentino das Cataratas',
      horario: '7h00 - 18h00',
      categoria: 'natureza',
      sugestao: 'Adicional'
    }
  ];

  const adicionarPasseio = (passeio) => {
    const novoRoteiro = { ...roteiro };
    novoRoteiro[selectedDay] = [...novoRoteiro[selectedDay], passeio];
    setRoteiro(novoRoteiro);
  };

  const removerPasseio = (passeioId) => {
    const novoRoteiro = { ...roteiro };
    novoRoteiro[selectedDay] = novoRoteiro[selectedDay].filter(p => p.id !== passeioId);
    setRoteiro(novoRoteiro);
  };

  const calcularDuracaoTotal = (dia) => {
    return roteiro[dia].reduce((total, passeio) => total + passeio.duracao, 0);
  };

  const verificarConflitos = (dia) => {
    const passeiosDoDia = roteiro[dia];
    const conflitos = [];
    
    // Verificar sobreposições de horário
    for (let i = 0; i < passeiosDoDia.length; i++) {
      for (let j = i + 1; j < passeiosDoDia.length; j++) {
        const passeio1 = passeiosDoDia[i];
        const passeio2 = passeiosDoDia[j];
        
        // Verificações específicas de conflito
        if (passeio1.id === 'wonder-park' && passeio2.id === 'marco-show') {
          conflitos.push('Wonder Park e Marco Show têm horários conflitantes');
        }
        if (passeio1.id === 'feirinha-argentina' && passeio2.id === 'marco-show') {
          conflitos.push('Feirinha Argentina e Marco Show têm horários conflitantes');
        }
        if (passeio1.id === 'city-tour' && passeio2.duracao > 3) {
          conflitos.push('City Tour é muito longo para combinar com outras atividades extensas');
        }
      }
    }
    
    // Verificar duração total
    if (calcularDuracaoTotal(dia) > 12) {
      conflitos.push('Muitas atividades para um dia (máx. 12h recomendadas)');
    }
    
    return conflitos;
  };

  const gerarWhatsApp = () => {
    let mensagem = "Olá! Gostaria de montar este roteiro:\n\n";
    
    Object.keys(roteiro).forEach(dia => {
      if (roteiro[dia].length > 0) {
        mensagem += `*Dia ${dia}:*\n`;
        roteiro[dia].forEach(passeio => {
          mensagem += `• ${passeio.nome} (${passeio.duracao}h)\n`;
        });
        mensagem += `Total: ${calcularDuracaoTotal(dia)}h\n\n`;
      }
    });
    
    mensagem += "Podem me ajudar com os detalhes e preços?";
    
    const whatsappNumber = "5545999096511";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };

  const roteirosPreDefinidos = [
    {
      nome: "Roteiro Clássico 5 dias",
      dias: {
        1: [passeios[0], passeios[1]], // Cataratas + Parque + Macuco
        2: [passeios[2], passeios[3]], // Helicóptero + Wonder Park
        3: [passeios[5], passeios[6]], // Roda Gigante + Marco Show
        4: [passeios[7]], // City Tour
        5: [passeios[8]]  // Paraguai
      }
    }
  ];

  const aplicarRoteiroPreDefinido = (roteiroPre) => {
    setRoteiro(roteiroPre.dias);
  };

  return (
    <div className="min-h-screen bg-branco-gelo">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-verde-floresta to-azul-cataratas relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-white mb-6">
            Organizador de Roteiros
          </h1>
          <p className="font-lora text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Monte seu roteiro perfeito dia a dia. Nosso sistema detecta conflitos de horário 
            e sugere a melhor organização para suas atividades.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* Roteiros Pré-definidos */}
          <div className="mb-12">
            <h3 className="font-montserrat text-2xl font-bold text-verde-floresta mb-6">
              Roteiros Sugeridos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {roteirosPreDefinidos.map((roteiroPreDefinido, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-montserrat text-xl font-bold text-verde-floresta mb-4">
                    {roteiroPreDefinido.nome}
                  </h4>
                  <div className="space-y-2 mb-4">
                    {Object.keys(roteiroPreDefinido.dias).map(dia => (
                      <div key={dia} className="text-sm">
                        <strong>Dia {dia}:</strong> {roteiroPreDefinido.dias[dia].map(p => p.nome).join(', ')}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => aplicarRoteiroPreDefinido(roteiroPreDefinido)}
                    className="bg-verde-floresta text-white px-4 py-2 rounded font-montserrat hover:bg-azul-cataratas transition-all"
                  >
                    Aplicar Roteiro
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Seletor de Dias */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h3 className="font-montserrat text-2xl font-bold text-verde-floresta mb-6 flex items-center gap-2">
                  <Calendar size={24} />
                  Selecione o Dia
                </h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map(dia => (
                    <button
                      key={dia}
                      onClick={() => setSelectedDay(dia)}
                      className={`w-full p-4 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                        selectedDay === dia
                          ? 'bg-verde-floresta text-white'
                          : 'bg-branco-gelo text-cinza-pedra hover:bg-verde-floresta/10'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>Dia {dia}</span>
                        <div className="text-sm">
                          <div>{roteiro[dia].length} atividades</div>
                          <div>{calcularDuracaoTotal(dia).toFixed(1)}h</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Resumo do Dia Selecionado */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-montserrat font-bold text-verde-floresta mb-3">
                    Dia {selectedDay} - Resumo
                  </h4>
                  {roteiro[selectedDay].length === 0 ? (
                    <p className="text-cinza-pedra font-lora">Nenhuma atividade adicionada</p>
                  ) : (
                    <div className="space-y-2">
                      {roteiro[selectedDay].map((passeio, index) => (
                        <div key={index} className="flex justify-between items-center bg-branco-gelo p-2 rounded">
                          <div>
                            <span className="text-sm font-lora font-semibold">{passeio.nome}</span>
                            <div className="text-xs text-cinza-pedra">{passeio.horario}</div>
                          </div>
                          <button
                            onClick={() => removerPasseio(passeio.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Minus size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Alertas de Conflito */}
                  {verificarConflitos(selectedDay).length > 0 && (
                    <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="text-red-500" size={16} />
                        <span className="font-montserrat font-semibold text-red-700">Atenção!</span>
                      </div>
                      {verificarConflitos(selectedDay).map((conflito, index) => (
                        <p key={index} className="text-sm text-red-600 font-lora">{conflito}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lista de Passeios */}
            <div className="lg:col-span-2">
              <h3 className="font-montserrat text-2xl font-bold text-verde-floresta mb-6">
                Passeios Disponíveis
              </h3>
              
              {/* Filtro por sugestão */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Adicional'].map(sugestao => (
                    <span 
                      key={sugestao} 
                      className="bg-verde-floresta/10 text-verde-floresta px-3 py-1 rounded-full text-sm font-montserrat"
                    >
                      {sugestao}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {passeios.map(passeio => {
                  const jaAdicionado = roteiro[selectedDay].some(p => p.id === passeio.id);
                  
                  return (
                    <div key={passeio.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-montserrat text-xl font-bold text-verde-floresta">
                              {passeio.nome}
                            </h4>
                            <span className="bg-ocre-terra/20 text-ocre-terra px-2 py-1 rounded text-xs font-montserrat">
                              {passeio.sugestao}
                            </span>
                          </div>
                          <p className="font-lora text-cinza-pedra mb-2">{passeio.descricao}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Clock size={16} className="text-azul-cataratas" />
                              <span className="font-montserrat">{passeio.duracao}h</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} className="text-verde-floresta" />
                              <span className="font-montserrat">{passeio.horario}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => adicionarPasseio(passeio)}
                          disabled={jaAdicionado}
                          className={`ml-4 p-2 rounded-full transition-all duration-300 ${
                            jaAdicionado
                              ? 'bg-green-100 text-green-600 cursor-not-allowed'
                              : 'bg-verde-floresta text-white hover:bg-azul-cataratas'
                          }`}
                        >
                          {jaAdicionado ? <CheckCircle size={20} /> : <Plus size={20} />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Botão Finalizar */}
          <div className="mt-12 text-center">
            <button
              onClick={gerarWhatsApp}
              className="bg-verde-floresta hover:bg-azul-cataratas text-white px-8 py-4 rounded-full font-montserrat font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Finalizar Roteiro no WhatsApp
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default RoteirosPage;
