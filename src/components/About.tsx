'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background - Better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-purple-50/60 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quem Somos */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-semibold text-blue-700 dark:text-blue-400 mb-4 border border-blue-200/50 dark:border-blue-500/20">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Quem Somos
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                A <strong className="text-slate-900 dark:text-white">Integral Data Insight</strong> é uma 
                empresa especializada em soluções de dados, inteligência artificial e automação empresarial. 
                Combinamos expertise técnica com visão estratégica.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Nossa equipe multidisciplinar possui vasta experiência em análise 
                de dados, ciência de dados, machine learning e desenvolvimento 
                de soluções tecnológicas inovadoras para o mercado africano.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: 'Excelência Técnica' },
                  { icon: Users, label: 'Equipe Especializada' },
                  { icon: Sparkles, label: 'Inovação Constante' },
                  { icon: Target, label: 'Foco em Resultados' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-xl glass-card"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <item.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-3xl glass-card overflow-hidden border border-slate-200/60 dark:border-slate-700/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 relative">
                  Por que escolher-nos?
                </h3>
                <ul className="space-y-4 relative">
                  {[
                    'Soluções personalizadas para cada negócio',
                    'Metodologia ágil e foco em resultados',
                    'Tecnologias de ponta em IA e Data Science',
                    'Suporte contínuo e capacitação',
                    'Conhecimento profundo do mercado africano',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="mr-3 text-blue-600 dark:text-blue-400 text-lg font-bold">✓</span>
                      <span className="text-slate-600 dark:text-slate-400">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative p-8 rounded-3xl glass-card h-full border border-slate-200/60 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mr-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nossa Missão</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Entregar soluções baseadas em dados e inteligência artificial que 
                impulsionem decisões estratégicas e aumentem a produtividade empresarial.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 dark:from-purple-500/10 dark:to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative p-8 rounded-3xl glass-card h-full border border-slate-200/60 dark:border-slate-700/30">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 mr-4">
                  <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nossa Visão</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Ser referência em soluções de Dados, Automação e Inteligência Artificial 
                em África, ajudando empresas a se tornarem data-driven.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
