'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaWhatsapp } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLiveLink = project.lienLive && project.lienLive !== '#';
  const hasGithubLink = project.lienGitHub && project.lienGitHub !== '#';

  const demoWhatsappUrl = `https://wa.me/22656636039?text=${encodeURIComponent(
    `Bonjour Diaby, je souhaite en savoir plus ou avoir une démonstration du projet ${project.title}.`
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
        {/* En-tête visuel / Logo du projet */}
        <div 
          className="w-full h-48 bg-gradient-to-b from-white/[0.03] to-[var(--color-darker-gray)] flex items-center justify-center relative p-6 border-b border-white/5"
          role="img"
          aria-label={`Logo ou aperçu du projet ${project.title}`}
        >
          {project.image ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image 
                src={project.image} 
                alt={`Logo du projet ${project.title}`} 
                fill
                className="object-contain p-4 filter drop-shadow-md" 
              />
            </div>
          ) : (
            <div className="text-4xl text-[var(--color-neon-blue)] font-bold">
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

      {/* Boutons d'action */}
      <div className="p-6 pt-0 flex flex-wrap gap-3">
        {hasLiveLink && (
          <Link
            href={project.lienLive!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] px-4 py-2.5 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-neon-purple)] transition-colors text-center text-sm flex items-center justify-center gap-2"
          >
            <span>Voir en live</span>
            <FaExternalLinkAlt className="text-xs" />
          </Link>
        )}

        {hasGithubLink && (
          <Link
            href={project.lienGitHub!}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] px-4 py-2.5 border border-white/20 text-[var(--color-foreground)] rounded-lg font-semibold hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] transition-colors text-center text-sm flex items-center justify-center gap-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </Link>
        )}

        {/* Bouton démo WhatsApp pour les projets sans lien direct ou internes */}
        {!hasLiveLink && (
          <Link
            href={demoWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <FaWhatsapp className="text-base" />
            <span>Demander une démo</span>
          </Link>
        )}
      </div>
    </motion.div>
  );
}
