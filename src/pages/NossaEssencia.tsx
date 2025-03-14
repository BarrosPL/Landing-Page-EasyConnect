import React from 'react';
import { Target, Eye, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

function NossaEssencia() {
  const mvv = [
    {
      icon: <Target />,
      title: "Missão",
      description: "Transformar o mundo através da tecnologia, oferecendo soluções inovadoras que impulsionam o sucesso dos nossos clientes e contribuem para um futuro digital mais eficiente e sustentável."
    },
    {
      icon: <Eye />,
      title: "Visão",
      description: "Ser reconhecida como referência global em soluções tecnológicas, liderando a transformação digital e inspirando mudanças positivas no mundo dos negócios."
    },
    {
      icon: <Heart />,
      title: "Valores",
      description: "Inovação, Excelência, Integridade, Colaboração, Compromisso com o cliente, Sustentabilidade e Desenvolvimento contínuo."
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
              <Link to="/cases" className="hover:text-blue-200">Cases</Link>
              <Link to="/planos" className="hover:text-blue-200">Planos</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">Nossa Essência</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {mvv.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 w-16 h-16 mb-6">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
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

export default NossaEssencia;