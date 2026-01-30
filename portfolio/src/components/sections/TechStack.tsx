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
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
            Stack Technique
          </h2>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-[var(--color-dark-gray)] rounded-lg p-6 border border-[var(--color-neon-blue)]/30"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[var(--color-neon-blue)]">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          y: -8,
                          transition: { duration: 0.2 }
                        }}
                        className="flex flex-col items-center justify-center p-4 bg-[var(--color-darker-gray)] rounded-lg border border-[var(--color-neon-purple)]/30 hover:border-[var(--color-neon-purple)] transition-all cursor-default"
                      >
                        {skill.Icon && (
                          <motion.div
                            animate={{ 
                              y: [0, -5, 0],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1)
                            }}
                            className="text-3xl mb-2"
                          >
                            <skill.Icon className="text-[var(--color-neon-blue)]" />
                          </motion.div>
                        )}
                        <span className="text-sm text-[var(--color-foreground)] text-center font-medium">
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
