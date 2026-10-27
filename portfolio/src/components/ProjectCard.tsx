'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const demoWhatsappUrl = `https://wa.me/22656636039?text=${encodeURIComponent(
    `Bonjour Diaby, je souhaite avoir une démonstration privée du projet ${project.title}.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-[var(--color-dark-gray)] rounded-xl border border-white/10 hover:border-[var(--color-neon-blue)]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[var(--color-neon-blue)]/10"
    >
      <div>
        {/* En-tête visuel / Capture réelle du projet */}
        <div 
          className="w-full h-52 bg-[var(--color-darker-gray)] relative overflow-hidden border-b border-white/10 group"
          role="img"
          aria-label={`Interface du projet ${project.title}`}
        >
          {project.image ? (
            <div className="relative w-full h-full">
              <Image 
                src={project.image} 
                alt={`Capture d'écran du projet ${project.title}`} 
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-gray)] via-transparent to-transparent opacity-60"></div>
            </div>
          ) : (
            <div className="text-4xl text-[var(--color-neon-blue)] font-bold flex items-center justify-center h-full">
              {project.title.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        
        {/* Contenu textuel */}
        <div className="p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-neon-blue)]/15 text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)]/30 font-medium">
              {project.badge}
            </span>
            {project.client && (
              <span className="text-xs text-[var(--color-foreground)]/60 font-medium">
                {project.client}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold mb-3 text-[var(--color-foreground)]">
            {project.title}
          </h3>
          
          <div className="text-sm text-[var(--color-foreground)]/80 mb-6 leading-relaxed whitespace-pre-line font-sans">
            {project.description}
          </div>
          
          {/* Technologies badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-white/5 text-[var(--color-foreground)]/80 rounded-md text-xs border border-white/10 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bouton d'action unique : Demande de démonstration privée */}
      <div className="p-6 pt-0">
        <Link
          href={demoWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-5 py-3.5 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-xl font-bold hover:bg-[var(--color-neon-purple)] transition-all duration-300 text-center text-sm flex items-center justify-center gap-2.5 shadow-md shadow-[var(--color-neon-blue)]/20 hover:shadow-[var(--color-neon-purple)]/30 group"
        >
          <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
          <span>Demander une démo privée</span>
        </Link>
      </div>
    </motion.div>
  );
}
