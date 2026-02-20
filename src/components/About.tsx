'use client';

import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quem Somos */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Quem Somos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A <strong>Integral Data Insight</strong> é uma empresa especializada em 
                soluções de dados, inteligência artificial e automação empresarial. 
                Combinamos expertise técnica com visão estratégica para ajudar 
                empresas a transformarem dados brutos em decisões inteligentes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nossa equipe multidisciplinar possui vasta experiência em análise 
                de dados, ciência de dados, machine learning e desenvolvimento 
                de soluções tecnológicas inovadoras.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Excelência Técnica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Equipe Especializada</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Por que escolher-nos?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 text-blue-200">✓</span>
                  <span>Soluções personalizadas para cada negócio</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-200">✓</span>
                  <span>Metodologia ágil e foco em resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-200">✓</span>
                  <span>Tecnologias de ponta em IA e Data Science</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-blue-200">✓</span>
                  <span>Suporte contínuo e capacitação</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Missão */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-600 rounded-lg mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nossa Missão</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Entregar soluções baseadas em dados e inteligência artificial que 
              impulsionem decisões estratégicas e aumentem a produtividade empresarial, 
              tornando as empresas mais competitivas e eficientes no mercado.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-purple-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-600 rounded-lg mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nossa Visão</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ser referência em soluções de Dados, Automação e Inteligência Artificial 
              em África, ajudando empresas a se tornarem data-driven e alcançarem 
              seu máximo potencial através da tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;