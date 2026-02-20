'use client';

import React from 'react';
import { ArrowRight, Database, Brain, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="flex h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
            Soluções de Dados & IA para Empresas
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforme o Seu Negócio com{' '}
            <span className="text-blue-600">Dados Estratégicos</span> e{' '}
            <span className="text-blue-600">Inteligência Artificial</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Oferecemos soluções modernas em Data Analytics, Automação e IA para 
            impulsionar a competitividade da sua empresa através de decisões 
            baseadas em dados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/30"
            >
              Explorar Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-blue-100 rounded-lg mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-600 text-sm">Análise profunda de dados para insights estratégicos</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-purple-100 rounded-lg mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inteligência Artificial</h3>
              <p className="text-gray-600 text-sm">Soluções de IA e automação inteligente</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-3 bg-green-100 rounded-lg mb-4">
                <LineChart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Intelligence</h3>
              <p className="text-gray-600 text-sm">Dashboards e visualizações interativas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;