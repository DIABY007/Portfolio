'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaUsers, FaHospital, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      Icon: FaRocket,
      number: '6',
      label: 'Produits en Production',
      desc: 'SaaS, Mobile Natif & Bots WhatsApp',
      color: 'text-[var(--color-neon-blue)]',
      border: 'border-[var(--color-neon-blue)]/30',
    },
    {
      Icon: FaUsers,
      number: '+10 000',
      label: 'Visiteurs Uniques',
      desc: 'Générés sur NeoShop & plateformes',
      color: 'text-[var(--color-neon-purple)]',
      border: 'border-[var(--color-neon-purple)]/30',
    },
    {
      Icon: FaHospital,
      number: 'Partenaires Réels',
      label: 'Institutions & Cliniques',
      desc: 'U-AUBEN, Yaalgre, Licopress, Aurore',
      color: 'text-[var(--color-neon-blue)]',
      border: 'border-[var(--color-neon-blue)]/30',
    },
    {
      Icon: FaShieldAlt,
      number: '100% Résilient',
      label: 'Architecture Offline-First',
      desc: 'Fonctionne sans interruption réseau',
      color: 'text-[var(--color-neon-purple)]',
      border: 'border-[var(--color-neon-purple)]/30',
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-[var(--color-background)]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
            À Propos & Résultats
          </h2>
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 space-y-4 text-[var(--color-foreground)]"
            >
              <p className="text-lg leading-relaxed">
                Je suis <strong className="text-[var(--color-neon-blue)]">Diaby Souleymane KASSAMBA</strong>,
                fondateur de <strong>NeoCodex</strong>, développeur Full-Stack & Automatisation basé à Bobo-Dioulasso, Burkina Faso.
              </p>

              <p className="text-lg leading-relaxed">
                Étudiant en Génie Logiciel à l&apos;<strong>Université Aube Nouvelle</strong>, j&apos;ai conçu et déployé <strong>6 plateformes et solutions en production réelle</strong> pour des institutions, des cliniques et des entreprises :
                de la gestion hospitalière offline-first (<strong className="text-[var(--color-neon-blue)]">Clinique Yaalgre</strong>) à la logistique mobile native avec tracking GPS continu (<strong className="text-[var(--color-neon-purple)]">LicoPress</strong>), en passant par l&apos;automatisation WhatsApp pour l&apos;<strong className="text-[var(--color-neon-blue)]">Université Aube Nouvelle</strong> et le suivi nutritionnel gamifié (<strong className="text-[var(--color-neon-purple)]">Aurore AgroVital</strong>).
              </p>

              <p className="text-lg leading-relaxed">
                Mon approche est orientée <strong>bénéfice business et robustesse technique</strong> : je conçois des outils qui travaillent 24h/24 pour mes clients, même dans des conditions exigeantes (coupures réseau, contraintes d&apos;optimisation de batterie sur mobile, flux d&apos;utilisateurs simultanés).
              </p>
            </motion.div>

            {/* Grille de métriques clés (Preuve sociale) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-6 grid sm:grid-cols-2 gap-4"
            >
              {metrics.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 bg-[var(--color-dark-gray)] rounded-xl border ${item.border} hover:border-[var(--color-neon-blue)] transition-all duration-300 shadow-md flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-[var(--color-foreground)]">
                      {item.number}
                    </span>
                    <item.Icon className={`${item.color} text-2xl`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-[var(--color-foreground)]/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
