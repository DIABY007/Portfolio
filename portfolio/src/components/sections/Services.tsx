'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaRobot, FaBrain, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    Icon: FaLaptopCode,
    title: 'Développement Web, SaaS & Mobile',
    description: 'Tu as un processus métier à digitaliser ou un produit à lancer. Je conçois et déploie l\'outil — de la base de données à l\'interface web et mobile — sans que tu aies à gérer 3 prestataires différents.',
    whatsappMessage: 'Bonjour Diaby, je souhaite un devis pour la conception d\'une application Web, SaaS ou Mobile.',
    cta: 'Lancer un projet Web / SaaS',
  },
  {
    Icon: FaRobot,
    title: 'Automatisation & Bots WhatsApp',
    description: 'Tes équipes perdent du temps sur des messages répétitifs. Je connecte tes outils et automatise les flux — réponses 24h/24, support client, alertes de commandes et diffusion ciblée — sans intervention humaine.',
    whatsappMessage: 'Bonjour Diaby, je souhaite mettre en place un Bot WhatsApp ou une automatisation pour mon activité.',
    cta: 'Automatiser mon WhatsApp',
  },
  {
    Icon: FaBrain,
    title: 'Intégration IA & Outils Métier',
    description: 'Tu veux que l\'IA travaille concrètement pour ton business — génération de contenu, réponses augmentées par tes documents d\'entreprise, extraction de données — sans complexité technique. Tu profites des résultats.',
    whatsappMessage: 'Bonjour Diaby, je souhaite intégrer une solution IA concrète pour mon entreprise.',
    cta: 'Intégrer l\'IA dans mon flux',
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
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
              Ce que je construis pour toi
            </h2>
            <p className="text-[var(--color-foreground)]/70 text-lg max-w-2xl mx-auto">
              Des solutions concrètes pour automatiser tes processus, gagner du temps et augmenter tes revenus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const whatsappUrl = `https://wa.me/22656636039?text=${encodeURIComponent(service.whatsappMessage)}`;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15,
                  }}
                  className="p-8 bg-[var(--color-dark-gray)] rounded-xl border border-white/10 hover:border-[var(--color-neon-blue)]/50 transition-all duration-300 shadow-lg flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-neon-blue)]/10 border border-[var(--color-neon-blue)]/30 flex items-center justify-center text-2xl text-[var(--color-neon-blue)] mb-6 group-hover:scale-110 transition-transform">
                      <service.Icon />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-foreground)]">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-[var(--color-foreground)]/80 leading-relaxed mb-6 font-sans">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white/5 hover:bg-[var(--color-neon-blue)] text-[var(--color-foreground)] hover:text-[var(--color-background)] font-medium text-xs transition-all duration-300 border border-white/10"
                  >
                    <span>{service.cta}</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
