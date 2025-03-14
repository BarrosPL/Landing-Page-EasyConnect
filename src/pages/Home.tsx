import React from 'react';
import { Monitor, Shield, Globe, Code, Users, Zap, ChevronRight, Mail, Phone, MapPin, MessageCircle, Check, BrainCircuit, BarChart3, Bot, Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import ParticlesBackground from '../components/ParticlesBackground';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const services = [
    {
      icon: <Code />,
      title: "Desenvolvimento de Software",
      description: "Criamos soluções personalizadas para atender às necessidades específicas do seu negócio."
    },
    {
      icon: <Monitor />,
      title: "Consultoria em TI",
      description: "Oferecemos orientação estratégica para otimizar seus processos tecnológicos."
    },
    {
      icon: <Shield />,
      title: "Segurança Digital",
      description: "Protegemos seus dados e sistemas com as mais avançadas soluções de segurança."
    },
    {
      icon: <Bot />,
      title: "Criação de Chatbots",
      description: "Desenvolvemos assistentes virtuais inteligentes para automatizar e melhorar o atendimento ao cliente."
    },
    {
      icon: <BrainCircuit />,
      title: "Consultoria em IA",
      description: "Implementamos soluções de Inteligência Artificial para otimizar seus processos de negócio."
    },
    {
      icon: <BarChart3 />,
      title: "Análise de Dados",
      description: "Transformamos dados em insights valiosos para tomada de decisões estratégicas."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      content: "A EasyConnect transformou completamente nossa infraestrutura de TI. O suporte é excepcional e os resultados superaram nossas expectativas."
    },
    {
      name: "Maria Santos",
      role: "Diretora de Operações, InnovaTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
      content: "Implementamos o chatbot desenvolvido pela EasyConnect e nosso atendimento ao cliente melhorou significativamente. Excelente trabalho!"
    },
    {
      name: "Pedro Oliveira",
      role: "CTO, DataFlow",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      content: "A consultoria em IA nos ajudou a otimizar processos críticos. A equipe é altamente qualificada e comprometida com resultados."
    },
    {
      name: "Ana Costa",
      role: "Gerente de Projetos, SoftSolutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80",
      content: "O suporte 24/7 e a dedicação da equipe são diferenciais importantes. Recomendo fortemente os serviços da EasyConnect."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-800/50" />
        
        <nav className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white">EasyConnect</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/nossa-essencia" className="text-white hover:text-blue-200">Nossa Essência</Link>
              <Link to="/cases" className="text-white hover:text-blue-200">Cases</Link>
              <Link to="/planos" className="text-white hover:text-blue-200">Planos</Link>
              <a href="#services" className="text-white hover:text-blue-200">Serviços</a>
              <a href="#about" className="text-white hover:text-blue-200">Sobre</a>
              <a href="#contact" className="text-white hover:text-blue-200">Contato</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Soluções Tecnológicas para o Futuro
              </h1>
              <p className="mt-6 text-xl text-blue-100">
                Transformando ideias em soluções digitais inovadoras para impulsionar seu negócio.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Fale Conosco
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                  <MessageCircle className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" 
                alt="Tech Team"
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Nossos Serviços</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">O Que Nossos Clientes Dizem</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote className="w-8 h-8 text-blue-600 mb-4 opacity-50" />
                    <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
                  </div>
                  <div className="flex text-yellow-400 mt-6">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Nossa Equipe"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800">Sobre a EasyConnect</h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Somos uma empresa líder em soluções tecnológicas, dedicada a transformar desafios em oportunidades através da inovação digital. Nossa equipe de especialistas trabalha incansavelmente para entregar resultados excepcionais e impulsionar o sucesso dos nossos clientes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <Stat icon={<Users />} value="200+" label="Clientes Satisfeitos" />
                <Stat icon={<Zap />} value="500+" label="Projetos Entregues" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <ContactInfo icon={<Mail />} text="contato@easyconnect.com.br" />
                <ContactInfo icon={<Phone />} text="+55 (11) 9999-9999" />
                <ContactInfo icon={<MapPin />} text="São Paulo, SP - Brasil" />
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="mt-8 inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Fale Conosco no WhatsApp
                <MessageCircle className="ml-2 h-5 w-5" />
              </button>
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Globe className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">EasyConnect</span>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-gray-400">
                © 2024 EasyConnect Solucoes Tecnológicas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="text-blue-600 w-12 h-12 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-blue-600 w-8 h-8">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-blue-600 w-6 h-6">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default Home;