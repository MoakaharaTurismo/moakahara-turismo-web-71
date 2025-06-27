
import React from 'react';
import { Check, Star, ArrowRight, ExternalLink } from 'lucide-react';

const PricingTable = () => {
  const passeios = [
    {
      nome: 'Cataratas — lado Brasil',
      ingresso: 'R$ 105',
      transporte: 'R$ 100',
      pacote: 'R$ 205',
      economia: 'R$ 45',
      observacao: '"Compro ingresso lá" → transporte R$ 95',
      popular: true,
      linkOficial: 'https://cataratasdoiguacu.com.br/'
    },
    {
      nome: 'Cataratas — estrangeiro',
      ingresso: 'R$ 117',
      transporte: 'R$ 100', 
      pacote: 'R$ 217',
      economia: 'R$ 33',
      observacao: 'Desconto especial para grupos',
      linkOficial: 'https://cataratasdoiguacu.com.br/'
    },
    {
      nome: 'Pedal nas Cataratas (bike)',
      ingresso: '—',
      transporte: '—',
      pacote: 'R$ 30',
      economia: 'R$ 20',
      observacao: 'Confirmar valor com operadora local'
    },
    {
      nome: 'Bike Poço Preto (9 km)',
      ingresso: '—',
      transporte: '—',
      pacote: 'R$ 160',
      economia: 'R$ 40',
      observacao: 'Trilha dentro do Parque Nacional'
    },
    {
      nome: 'Pôr do sol nas Cataratas',
      ingresso: 'R$ 195',
      transporte: 'R$ 250',
      pacote: 'R$ 445',
      economia: 'R$ 55',
      observacao: 'Experiência única e inesquecível',
      premium: true
    },
    {
      nome: 'Amanhecer nas Cataratas',
      ingresso: 'R$ 230',
      transporte: 'R$ 250',
      pacote: 'R$ 480',
      economia: 'R$ 70',
      observacao: 'Para os mais aventureiros',
      premium: true
    },
    {
      nome: 'Cataratas — lado Argentina + feirinha',
      ingresso: 'Consultar',
      transporte: 'R$ 450',
      pacote: 'R$ 700',
      economia: 'R$ 150',
      observacao: 'Inclui feirinha argentina',
      premium: true
    },
    {
      nome: 'Parque das Aves',
      ingresso: 'R$ 90',
      transporte: 'R$ 100',
      pacote: 'R$ 190',
      economia: 'R$ 30',
      observacao: 'Transporte só: R$ 95',
      linkOficial: 'https://www.parquedasaves.com.br/'
    },
    {
      nome: 'Tour Itaipu (Panorâmico)',
      ingresso: 'Consultar',
      transporte: 'R$ 100',
      pacote: 'Consultar',
      economia: 'R$ 25',
      observacao: 'Desconto no transporte se comprar lá',
      linkOficial: 'https://www.turismoitaipu.com.br/'
    },
    {
      nome: 'City Tour Completo',
      ingresso: '—',
      transporte: '—',
      pacote: 'R$ 350',
      economia: 'R$ 50',
      observacao: 'Até 4 pessoas | 2 pessoas: R$ 200',
      destaque: true
    },
    {
      nome: 'Compras Ciudad del Este',
      ingresso: '—',
      transporte: 'R$ 250',
      pacote: 'R$ 250',
      economia: 'R$ 50',
      observacao: '6h incluídas | +R$ 50/h extra'
    },
    {
      nome: 'City Tour Ciudad del Este',
      ingresso: '—',
      transporte: 'R$ 350',
      pacote: 'R$ 350',
      economia: 'R$ 75',
      observacao: 'Guia explicativo + roteiro cultural'
    },
    {
      nome: 'Kattamaram II',
      ingresso: 'R$ 220-280',
      transporte: 'R$ 85',
      pacote: 'R$ 305-365',
      economia: 'R$ 45',
      observacao: 'Navegação no Rio Paraná'
    },
    {
      nome: 'Jantar na Argentina',
      ingresso: '—',
      transporte: 'R$ 300',
      pacote: 'R$ 300',
      economia: 'R$ 50',
      observacao: 'Ida e volta incluída'
    }
  ];

  const handleReservar = (passeio: any) => {
    const message = `🛒 QUERO RESERVAR: ${passeio.nome}

💰 Pacote: ${passeio.pacote}
📝 ${passeio.observacao}

Preciso de disponibilidade e mais detalhes!`;
    
    const whatsappNumber = "5545999096511";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleComprarOficial = (passeio: any) => {
    if (passeio.linkOficial) {
      window.open(passeio.linkOficial, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header da tabela */}
      <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas text-white p-6 text-center">
        <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-2">
          💰 Tabela Completa de Preços
        </h3>
        <p className="font-lora opacity-90">
          Compare preços e economize com nossos pacotes!
        </p>
      </div>

      {/* Tabela responsiva */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-montserrat font-semibold text-verde-floresta">
                Passeio / Serviço
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-verde-floresta">
                Ingresso
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-verde-floresta">
                Transporte
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-verde-floresta">
                Pacote Total
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-green-600">
                Economia
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-verde-floresta">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {passeios.map((passeio, index) => (
              <tr 
                key={index} 
                className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  passeio.popular ? 'bg-green-50' : passeio.premium ? 'bg-blue-50' : passeio.destaque ? 'bg-yellow-50' : ''
                }`}
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {passeio.popular && <Star className="text-green-500" size={16} fill="currentColor" />}
                    {passeio.premium && <Star className="text-blue-500" size={16} fill="currentColor" />}
                    {passeio.destaque && <Star className="text-yellow-500" size={16} fill="currentColor" />}
                    <div>
                      <div className="font-montserrat font-semibold text-verde-floresta">
                        {passeio.nome}
                      </div>
                      <div className="text-xs text-cinza-pedra font-lora">
                        {passeio.observacao}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-center font-montserrat">
                  {passeio.ingresso}
                </td>
                <td className="px-4 py-4 text-center font-montserrat">
                  {passeio.transporte}
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="font-montserrat font-bold text-lg text-verde-floresta">
                    {passeio.pacote}
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="font-montserrat font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
                    {passeio.economia}
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className="flex flex-col gap-1">
                    {passeio.linkOficial && (
                      <button
                        onClick={() => handleComprarOficial(passeio)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-montserrat font-semibold transition-all duration-300 flex items-center gap-1 mx-auto"
                      >
                        <ExternalLink size={12} />
                        Oficial
                      </button>
                    )}
                    <button
                      onClick={() => handleReservar(passeio)}
                      className="bg-verde-floresta hover:bg-azul-cataratas text-white px-3 py-1 rounded text-xs font-montserrat font-semibold transition-all duration-300 flex items-center gap-1 mx-auto"
                    >
                      <ArrowRight size={12} />
                      Reservar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer com CTA */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6">
        <div className="text-center mb-4">
          <h4 className="font-montserrat text-xl font-bold text-verde-floresta mb-2">
            🎯 Roteiro Sugerido de 3 Dias
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg">
              <strong>Dia 1:</strong> Parque das Aves + Cataratas (R$ 205)<br/>
              <span className="text-cinza-pedra">→ Jantar no Rafain Churrascaria Show</span>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <strong>Dia 2:</strong> Paraguai + Argentina (R$ 550)<br/>
              <span className="text-cinza-pedra">→ Compras + Jantar argentino</span>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <strong>Dia 3:</strong> City Tour + Marco (R$ 350)<br/>
              <span className="text-cinza-pedra">→ Roda-Gigante + Três Fronteiras</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => {
              const message = "🎯 Quero criar um site personalizado com base no roteiro de 3 dias! Me ajudem com os detalhes.";
              const whatsappNumber = "5545999096511";
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="bg-gradient-to-r from-verde-floresta to-azul-cataratas text-white px-8 py-3 rounded-full font-montserrat font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            🚀 Criar Site com Base Neste Roteiro
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 text-verde-floresta">
            <Check className="text-green-500" size={20} />
            <span className="font-montserrat font-semibold">
              Garantia de melhor preço
            </span>
          </div>
          <div className="flex items-center gap-2 text-verde-floresta">
            <Check className="text-green-500" size={20} />
            <span className="font-montserrat font-semibold">
              Links oficiais incluídos
            </span>
          </div>
          <div className="flex items-center gap-2 text-verde-floresta">
            <Check className="text-green-500" size={20} />
            <span className="font-montserrat font-semibold">
              Guias especializados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
