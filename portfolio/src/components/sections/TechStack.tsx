'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills, skillCategories } from '@/data/skills';

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="techstack"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-[var(--color-darker-gray)]"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
              Stack Technique & Outils
            </h2>
            <p className="text-[var(--color-foreground)]/70 text-lg max-w-xl mx-auto">
              Des technologies modernes choisies pour leur fiabilité, leur vélocité et leur performance en production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-[var(--color-dark-gray)] rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="text-lg font-bold mb-4 text-[var(--color-neon-blue)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-neon-blue)]"></span>
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.04),
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          y: -3,
                          transition: { duration: 0.15 }
                        }}
                        className="group flex flex-col items-center justify-center p-3.5 bg-[var(--color-darker-gray)] rounded-lg border border-white/5 hover:border-[var(--color-neon-blue)]/40 transition-all cursor-default"
                      >
                        {skill.Icon && (
                          <div className="text-2xl mb-1.5 text-[var(--color-foreground)]/70 group-hover:text-[var(--color-neon-blue)] transition-colors">
                            <skill.Icon />
                          </div>
                        )}
                        <span className="text-xs text-[var(--color-foreground)]/80 text-center font-medium font-sans">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
