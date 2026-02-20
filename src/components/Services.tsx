'use client';

import React from 'react';
import { 
  Database, 
  LineChart, 
  Bot, 
  GraduationCap,
  Search,
  FileText,
  BarChart2,
  PieChart,
  Cog,
  MessageSquare,
  BookOpen,
  Code
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Database,
      title: 'Data & Research',
      color: 'blue',
      items: [
        { icon: Search, text: 'Recolha de dados estruturados e não estruturados' },
        { icon: FileText, text: 'Estudos de mercado' },
        { icon: BarChart2, text: 'Pesquisas quantitativas e qualitativas' },
        { icon: FileText, text: 'Relatórios executivos e técnicos' },
      ],
    },
    {
      icon: LineChart,
      title: 'Business Intelligence',
      color: 'green',
      items: [
        { icon: PieChart, text: 'Dashboards simples (Power BI / Metabase)' },
        { icon: BarChart2, text: 'Dashboards customizados (React + APIs)' },
        { icon: LineChart, text: 'Definição de KPIs e métricas estratégicas' },
      ],
    },
    {
      icon: Bot,
      title: 'Automação & IA',
      color: 'purple',
      items: [
        { icon: Cog, text: 'Automação de processos empresariais' },
        { icon: Cog, text: 'Automação de tarefas administrativas' },
        { icon: MessageSquare, text: 'Desenvolvimento de chatbots inteligentes' },
        { icon: BookOpen, text: 'Implementação de sistemas RAG (IA baseada em documentos)' },
        { icon: Database, text: 'Implementação de IA privada e segura' },
      ],
    },
  ];

  const trainingPrograms = [
    { icon: FileText, title: 'Excel Profissional para Negócios' },
    { icon: BarChart2, title: 'Desenvolvimento de Dashboards' },
    { icon: LineChart, title: 'Análise de Dados Aplicada' },
    { icon: PieChart, title: 'Estatística para Tomada de Decisão' },
    { icon: Code, title: 'Programação para Análise de Dados (Python / SQL)' },
    { icon: Database, title: 'Bases de Dados' },
    { icon: Brain, title: 'Ciência de Dados' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wide">O Que Oferecemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em dados, inteligência artificial e automação para 
            impulsionar o crescimento do seu negócio.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className={`p-4 bg-${service.color}-100 rounded-xl w-fit mb-6`}>
                <service.icon className={`h-8 w-8 text-${service.color}-600`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <item.icon className={`h-5 w-5 text-${service.color}-600 mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Training Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-orange-100 rounded-xl mr-4">
              <GraduationCap className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Formação & Capacitação Profissional</h3>
              <p className="text-gray-600 mt-2">
                Programas de formação prática e aplicada para desenvolver competências em dados e tecnologia
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200"
              >
                <program.icon className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{program.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Additional icon component
const Brain = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
    />
  </svg>
);

export default Services;