'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FaMobileAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-[var(--color-dark-gray)] rounded-lg border border-[var(--color-neon-blue)]/30 hover:border-[var(--color-neon-blue)] transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[var(--color-neon-blue)]/50"
    >
      {/* Image placeholder */}
      <div 
        className="w-full h-48 bg-[var(--color-darker-gray)] flex items-center justify-center text-6xl relative"
        role="img"
        aria-label={`Image du projet ${project.title}`}
      >
        {project.image ? (
          <Image 
            src={project.image} 
            alt={`Capture d&apos;écran du projet ${project.title}`} 
            fill
            className="object-cover" 
          />
        ) : (
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
            className="text-6xl"
            aria-hidden="true"
          >
            <FaMobileAlt className="text-[var(--color-neon-blue)]" />
          </motion.div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-[var(--color-foreground)]">
          {project.title}
        </h3>
        
        <p className="text-[var(--color-foreground)]/80 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[var(--color-neon-blue)]/20 text-[var(--color-neon-blue)] rounded-full text-sm border border-[var(--color-neon-blue)]/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Boutons */}
        <div className="flex gap-3">
          {project.lienGitHub && project.lienGitHub !== '#' && (
            <Link
              href={project.lienGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-neon-purple)] transition-colors text-center"
            >
              Voir plus
            </Link>
          )}
          {project.lienLive && project.lienLive !== '#' && (
            <Link
              href={project.lienLive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border-2 border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded-lg font-semibold hover:bg-[var(--color-neon-blue)] hover:text-[var(--color-background)] transition-colors text-center"
            >
              Voir en live
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

