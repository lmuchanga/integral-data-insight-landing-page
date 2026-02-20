'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  Code,
  ChevronRight
} from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

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
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
            O Que Oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas em dados, inteligência artificial e automação
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 rounded-3xl glass-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-${service.color}-500/20 to-${service.color}-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
              
              <div className="relative">
                <motion.div 
                  className={`inline-flex p-4 rounded-2xl bg-${service.color}-100/50 dark:bg-${service.color}-900/20 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className={`h-7 w-7 text-${service.color}-500 dark:text-${service.color}-400`} />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {service.title}
                </h3>
                
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      className="flex items-start group/item"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`p-1.5 rounded-lg bg-${service.color}-100/30 dark:bg-${service.color}-900/20 mr-3 mt-0.5 group-hover/item:bg-${service.color}-100 dark:group-hover/item:bg-${service.color}-900/30 transition-colors`}>
                        <item.icon className={`h-4 w-4 text-${service.color}-500 dark:text-${service.color}-400`} />
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200 transition-colors">
                        {item.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#contact" 
                    className={`inline-flex items-center text-sm font-medium text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-700 dark:hover:text-${service.color}-300 transition-colors group/link`}
                  >
                    Saber mais
                    <ChevronRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-3xl glass-card overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/20 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center mb-8">
            <motion.div 
              className="inline-flex p-4 rounded-2xl bg-orange-100/50 dark:bg-orange-900/20 mb-4 md:mb-0 md:mr-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <GraduationCap className="h-8 w-8 text-orange-500 dark:text-orange-400" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Formação & Capacitação Profissional
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Programas práticos para desenvolver competências em dados e tecnologia
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: 'rgba(251, 146, 60, 0.15)',
                  transition: { duration: 0.2 }
                }}
                className="flex items-center p-4 rounded-xl bg-orange-50/30 dark:bg-orange-900/10 border border-orange-100/50 dark:border-orange-800/20 transition-all cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-orange-100/50 dark:bg-orange-900/20 mr-3 group-hover:bg-orange-200/50 dark:group-hover:bg-orange-800/30 transition-colors">
                  <program.icon className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {program.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
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