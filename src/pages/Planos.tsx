import React from 'react';
import { Globe, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Planos() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const plans = [
    {
      title: "Starter",
      price: "R$ 497",
      features: [
        "Consultoria Básica",
        "Suporte 8x5",
        "1 usuário",
        "Backup Semanal",
        "Relatórios Mensais"
      ]
    },
    {
      title: "Básico",
      price: "R$ 997",
      features: [
        "Consultoria Inicial",
        "Suporte 8x5",
        "Até 3 usuários",
        "Backup Diário",
        "Relatórios Quinzenais"
      ]
    },
    {
      title: "Profissional",
      price: "R$ 1.997",
      highlighted: true,
      features: [
        "Consultoria Avançada",
        "Suporte 12x7",
        "Até 10 usuários",
        "Backup em Tempo Real",
        "Monitoramento 24/7",
        "Relatórios Mensais"
      ]
    },
    {
      title: "Enterprise",
      price: "Sob Consulta",
      features: [
        "Consultoria Personalizada",
        "Suporte 24x7",
        "Usuários Ilimitados",
        "Backup em Tempo Real",
        "Monitoramento 24/7",
        "Relatórios Semanais",
        "Gerente de Conta Dedicado"
      ]
    },
    {
      title: "Premium",
      price: "R$ 4.997",
      features: [
        "Consultoria VIP",
        "Suporte 24x7 Prioritário",
        "Até 50 usuários",
        "Backup em Tempo Real",
        "Monitoramento 24/7",
        "Relatórios Diários",
        "Gerente Técnico Dedicado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">EasyConnect</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-200">Home</Link>
              <Link to="/nossa-essencia" className="hover:text-blue-200">Nossa Essência</Link>
              <Link to="/cases" className="hover:text-blue-200">Cases</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossos Planos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`
                  relative p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow
                  ${plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''}
                `}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div className="flex flex-col h-full">
                  <h2 className={`text-2xl font-bold text-center ${plan.highlighted ? 'text-blue-600' : 'text-gray-800'}`}>
                    {plan.title}
                  </h2>
                  <p className="text-center mt-4">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-blue-600' : 'text-gray-800'}`}>
                      {plan.price}
                    </span>
                    {plan.price !== "Sob Consulta" && <span className="text-sm text-gray-600">/mês</span>}
                  </p>
                  <ul className="mt-8 space-y-4 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className={`w-5 h-5 ${plan.highlighted ? 'text-blue-600' : 'text-blue-500'} mr-2`} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={handleWhatsAppClick}
                    className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Contratar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 EasyConnect Solucoes Tecnológicas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Planos;