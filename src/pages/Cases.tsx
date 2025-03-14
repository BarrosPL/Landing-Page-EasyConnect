import React from 'react';
import { Globe, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cases() {
  const successCases = [
    {
      title: "Transformação Digital Varejo",
      client: "MegaStore Brasil",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      description: "Implementação de sistema omnichannel que aumentou as vendas em 150% e reduziu custos operacionais em 30%.",
      results: [
        "Aumento de 150% nas vendas",
        "Redução de 30% nos custos",
        "Satisfação do cliente de 98%"
      ]
    },
    {
      title: "IA no Atendimento",
      client: "TechService Solutions",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      description: "Desenvolvimento de chatbot com IA que automatizou 80% do atendimento ao cliente, reduzindo tempo de resposta em 90%.",
      results: [
        "80% de automação no atendimento",
        "Redução de 90% no tempo de resposta",
        "Economia de R$ 500mil/ano"
      ]
    },
    {
      title: "Análise de Dados Financeiros",
      client: "FinanceBank",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Implementação de sistema de análise preditiva que identificou padrões de fraude e reduziu perdas em 75%.",
      results: [
        "Redução de 75% em fraudes",
        "ROI de 300% no primeiro ano",
        "100% de precisão em detecções"
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
              <Link to="/planos" className="hover:text-blue-200">Planos</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Cases de Sucesso</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successCases.map((caseItem, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{caseItem.title}</h2>
                  <p className="text-blue-600 font-semibold mb-4">{caseItem.client}</p>
                  <p className="text-gray-600 mb-6">{caseItem.description}</p>
                  <div className="space-y-3">
                    {caseItem.results.map((result, idx) => (
                      <div key={idx} className="flex items-center">
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
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

export default Cases;