'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Brain, LineChart } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 -z-10" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-800/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-800/20 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium text-blue-600 dark:text-blue-400">
              <motion.span
                className="flex h-2 w-2 bg-blue-500 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Soluções de Dados & IA para Empresas
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-gray-900 dark:text-white">Transforme o Seu Negócio com </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                Dados Estratégicos
              </span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <motion.path
                  d="M2 10C50 4 100 4 150 6C200 8 250 4 298 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-blue-400/50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.svg>
            </span>
            <span className="text-gray-900 dark:text-white"> e </span>
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Oferecemos soluções modernas em Data Analytics, Automação e IA para
            impulsionar a competitividade da sua empresa.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              Explorar Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 glass-card text-gray-900 dark:text-gray-300 font-semibold rounded-full hover:bg-white transition-all shadow-lg"
            >
              Solicitar Orçamento
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Database,
                title: 'Data Analytics',
                desc: 'Análise profunda de dados para insights estratégicos',
                color: 'blue',
                delay: 0
              },
              {
                icon: Brain,
                title: 'Inteligência Artificial',
                desc: 'Soluções de IA e automação inteligente',
                color: 'purple',
                delay: 0.1
              },
              {
                icon: LineChart,
                title: 'Business Intelligence',
                desc: 'Dashboards e visualizações interativas',
                color: 'green',
                delay: 0.2
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 rounded-2xl glass-card hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-${feature.color}-100/50 dark:bg-${feature.color}-900/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-500 dark:text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;