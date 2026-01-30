'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLaptopCode, FaRobot, FaBrain } from 'react-icons/fa';

const services = [
  {
    Icon: FaLaptopCode,
    title: 'Développement Web & SaaS',
    description: 'Sites vitrines et E-commerce (Next.js, Laravel), Applications de gestion (SaaS)',
    color: 'neon-blue',
  },
  {
    Icon: FaRobot,
    title: 'Automatisation & Chatbots',
    description: 'Création de Bots WhatsApp (Répondeurs automatiques, Service client), Automatisation des processus via Make (Integromat)',
    color: 'neon-purple',
  },
  {
    Icon: FaBrain,
    title: 'Solutions IA & Contenu',
    description: 'Intégration d\'IA générative (Texte, Image, Vidéo), Création de visuels publicitaires',
    color: 'neon-blue',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-[var(--color-darker-gray)]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="p-8 bg-[var(--color-dark-gray)] rounded-lg border border-[var(--color-neon-blue)]/30 hover:border-[var(--color-neon-blue)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-neon-blue)]/50"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="text-5xl mb-4 text-center"
                >
                  <service.Icon className="text-[var(--color-neon-blue)] mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-center text-[var(--color-foreground)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-foreground)]/80 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

