'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaLaptopCode, 
  FaRobot, 
  FaBrain, 
  FaShieldAlt 
} from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const icons = [
    { Icon: FaLaptopCode, label: 'Développement', borderColor: 'border-[var(--color-neon-blue)]', iconColor: 'text-[var(--color-neon-blue)]' },
    { Icon: FaRobot, label: 'Automatisation', borderColor: 'border-[var(--color-neon-purple)]', iconColor: 'text-[var(--color-neon-purple)]' },
    { Icon: FaBrain, label: 'Intelligence Artificielle', borderColor: 'border-[var(--color-neon-blue)]', iconColor: 'text-[var(--color-neon-blue)]' },
    { Icon: FaShieldAlt, label: 'Cybersécurité', borderColor: 'border-[var(--color-neon-purple)]', iconColor: 'text-[var(--color-neon-purple)]' },
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
            À Propos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-[var(--color-foreground)]"
            >
              <p className="text-lg leading-relaxed">
                Je suis <strong className="text-[var(--color-neon-blue)]">Diaby Souleymane KASSAMBA</strong>,
                fondateur de <strong>NeoCodex</strong> et développeur fullstack basé à Bobo-Dioulasso, Burkina Faso.
              </p>

              <p className="text-lg leading-relaxed">
                À 20 ans, j&apos;ai construit et déployé 3 produits SaaS en production —
                <strong className="text-[var(--color-neon-blue)]"> NeoSchool</strong> (200+ utilisateurs dans 5 établissements),
                <strong className="text-[var(--color-neon-purple)]"> NeoChat</strong> (automatisation WhatsApp, pilote universitaire en cours)
                et <strong className="text-[var(--color-neon-blue)]"> NeoShop</strong> (marketplace C2C locale).
                NeoCodex, mon agence, génère du revenu réel sur des projets clients.
              </p>

              <p className="text-lg leading-relaxed">
                Je travaille principalement avec <strong>Next.js</strong>, <strong>Supabase</strong> et des
                intégrations <strong className="text-[var(--color-neon-purple)]">IA</strong> — sur des
                problèmes concrets, pas des maquettes.
              </p>
            </motion.div>

            {/* Visuel ou icônes */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {icons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.5 + (index * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className={`p-6 bg-[var(--color-dark-gray)] rounded-lg border transition-colors cursor-pointer ${
                      index % 2 === 0 
                        ? 'border-[var(--color-neon-blue)]/30 hover:border-[var(--color-neon-blue)]' 
                        : 'border-[var(--color-neon-purple)]/30 hover:border-[var(--color-neon-purple)]'
                    }`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className="text-4xl mb-2 text-center"
                    >
                      <item.Icon className={`${item.iconColor} mx-auto`} />
                    </motion.div>
                    <div className="text-sm text-[var(--color-foreground)] text-center">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

