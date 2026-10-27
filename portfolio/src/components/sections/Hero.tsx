'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappHeroUrl = `https://wa.me/22656636039?text=${encodeURIComponent(
    "Bonjour Diaby, j'ai découvert votre portfolio et j'aimerais échanger sur un projet digital / automatisation."
  )}`;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-darker-gray)] to-[var(--color-background)]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible pour projets freelance & partenariats
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
            >
              Je construis des outils qui{' '}
              <span className="bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
                travaillent pour toi.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--color-foreground)]/80 mb-8 max-w-xl leading-relaxed"
            >
              Automatisation, SaaS, bots WhatsApp & mobile natif — des solutions déployées en conditions réelles, pas des maquettes.
              <br />
              <span className="text-sm text-[var(--color-foreground)]/60 font-medium">
                Fondateur de NeoCodex · Développeur Full-Stack · Bobo-Dioulasso
              </span>
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                href="#projets"
                onClick={handleScrollToPortfolio}
                className="px-7 py-3.5 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-neon-blue)]/20"
              >
                <span>Explorer les 6 projets</span>
                <FaArrowDown className="text-xs" />
              </Link>
              <Link
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-white/20 hover:border-[var(--color-neon-blue)] text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" />
                <span>Discuter d&apos;un projet</span>
              </Link>
            </motion.div>

            {/* Micro-barre de réassurance (Preuve sociale) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 pt-6 border-t border-white/10 text-xs text-[var(--color-foreground)]/70 justify-center md:justify-start">
              <div>
                <span className="font-bold text-[var(--color-foreground)]">6</span> plateformes déployées
              </div>
              <div className="text-white/20">•</div>
              <div>
                Partenariat <span className="font-bold text-[var(--color-foreground)]">U-AUBEN</span>
              </div>
              <div className="text-white/20">•</div>
              <div>
                <span className="font-bold text-[var(--color-foreground)]">+10k</span> visiteurs uniques
              </div>
            </div>
          </motion.div>

          {/* Image / Portrait professionnel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Halo d'ambiance discret */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-blue)]/20 to-[var(--color-neon-purple)]/20 rounded-3xl blur-2xl opacity-50"></div>
              
              <div className="relative w-full h-full rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-gradient-to-b from-white/[0.07] via-[var(--color-darker-gray)] to-black/80 flex items-end justify-center">
                <Image
                  src="/images/profile.png"
                  alt="Photo professionnelle de Diaby Souleymane KASSAMBA, Développeur Full-Stack"
                  fill
                  className="object-contain object-bottom pt-4"
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
