'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-darker-gray)]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent"
            >
              Je construis des outils qui travaillent pour toi.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-[var(--color-foreground)] mb-8"
            >
              Automatisation, SaaS, bots WhatsApp — des solutions en production, pas des maquettes.
Fondateur de NeoCodex · Développeur Fullstack · Bobo-Dioulasso
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="#projets"
                onClick={handleScrollToPortfolio}
                className="px-8 py-4 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-neon-purple)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[var(--color-neon-blue)]/50"
              >
                Voir mes projets
              </Link>
              <Link
                href="https://wa.me/22656636039"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded-lg font-semibold hover:bg-[var(--color-neon-blue)] hover:text-[var(--color-background)] transition-all duration-300 transform hover:scale-105"
              >
                Discuter d&apos;un projet
              </Link>
            </motion.div>
          </motion.div>

          {/* Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-4 border-[var(--color-neon-blue)] overflow-hidden shadow-2xl shadow-[var(--color-neon-blue)]/50">
                <Image
                  src="/images/profile.jpg"
                  alt="Photo de profil de Diaby Souleymane KASSAMBA, Développeur Fullstack et Expert en Automatisation IA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

