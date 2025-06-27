
import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingTable = () => {
  const passeios = [
    {
      nome: 'Cataratas — lado Brasil',
      ingresso: 'R$ 105',
      transporte: 'R$ 100',
      pacote: 'R$ 205',
      economia: 'R$ 45',
      observacao: '"Compro ingresso lá" → transporte R$ 95',
      popular: true
    },
    {
      nome: 'Cataratas — estrangeiro',
      ingresso: 'R$ 117',
      transporte: 'R$ 100', 
      pacote: 'R$ 217',
      economia: 'R$ 33',
      observacao: 'Desconto especial para grupos'
    },
    {
      nome: 'Cataratas — lado Argentina',
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
      observacao: 'Transporte só: R$ 95'
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
    }
  ];

  const handleReservar = (passeio: any) => {
    const message = `🛒 QUERO RESERVAR: ${passeio.nome}

💰 Pacote: ${passeio.pacote}
💵 Economia: ${passeio.economia}
📝 ${passeio.observacao}

Preciso de disponibilidade e mais detalhes!`;
    
    const whatsappNumber = "5545999096511";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header da tabela */}
      <div className="bg-gradient-to-r from-verde-floresta to-azul-cataratas text-white p-6 text-center">
        <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-2">
          💰 Tabela de Preços Especiais
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
                Você Economiza
              </th>
              <th className="px-4 py-3 text-center font-montserrat font-semibold text-verde-floresta">
                Ação
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
                  <button
                    onClick={() => handleReservar(passeio)}
                    className="bg-verde-floresta hover:bg-azul-cataratas text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-1 mx-auto"
                  >
                    Reservar
                    <ArrowRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer com CTA */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-verde-floresta">
            <Check className="text-green-500" size={20} />
            <span className="font-montserrat font-semibold">
              Garantia de melhor preço
            </span>
          </div>
          <div className="flex items-center gap-2 text-verde-floresta">
            <Check className="text-green-500" size={20} />
            <span className="font-montserrat font-semibold">
              Transporte incluído
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
