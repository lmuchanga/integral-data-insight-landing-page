'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { name: 'Quem Somos', href: '#about' },
      { name: 'Missão', href: '#about' },
      { name: 'Visão', href: '#about' },
    ],
    servicos: [
      { name: 'Data & Research', href: '#services' },
      { name: 'Business Intelligence', href: '#services' },
      { name: 'Automação & IA', href: '#services' },
      { name: 'Formação', href: '#services' },
    ],
    suporte: [
      { name: 'Fale conosco', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Política de Privacidade', href: '#' },
    ],
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-gray-900 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-400/80 to-blue-600/80 rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                Integral Data Insight
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed font-medium">
              Soluções especializadas em dados, inteligência artificial e
              automação empresarial para impulsionar o crescimento do seu negócio.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-700 dark:text-gray-400 text-sm font-medium">
              © {currentYear} Integral Data Insight. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors font-medium">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors font-medium">
                Política de Privacidade
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;