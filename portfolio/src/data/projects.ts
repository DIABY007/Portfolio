export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  lienGitHub?: string;
  lienLive?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'neoschool',
    title: 'NeoSchool',
    description: 'SaaS de gestion scolaire complet développé avec Laravel. Solution moderne pour la gestion des établissements scolaires.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    lienGitHub: 'https://github.com/DIABY007/NeoSchool',
    lienLive: 'https://neoschool.pro',
  },
  {
    id: 'neoshop',
    title: 'NeoShop',
    description: 'Plateforme e-commerce moderne et performante construite avec Next.js. Expérience d\'achat optimale pour les utilisateurs.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    lienGitHub: 'https://github.com/DIABY007/NeoShop',
    lienLive: 'https://neoshop.world',
  },
  {
    id: 'neoscholar',
    title: 'NeoScholar',
    description: 'Plateforme étudiante innovante avec révision assistée par l\'IA. Outils intelligents pour améliorer l\'apprentissage.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'IA'],
    lienGitHub: 'https://github.com/DIABY007/NeoScholar',
    lienLive: 'https://neoscholar.school',
  },
  {
    id: 'neocodex',
    title: 'NeoCodex',
    description: 'Site d\'agence pour solutions digitales. Présentation professionnelle des services et réalisations.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    lienGitHub: 'https://github.com/DIABY007/NeoCodex',
    lienLive: 'https://neocodex.digital',
  },
  {
    id: 'whatsapp-bot',
    title: 'Demo Bot WhatsApp',
    description: 'Bot WhatsApp intelligent pour automatisation de réponses et service client. Démonstration de capacités en automatisation.',
    technologies: ['Python', 'WhatsApp API', 'IA'],
    lienGitHub: '#',
    lienLive: '#',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Site portfolio personnel moderne et interactif présentant mes projets, compétences et services. Design responsive avec animations fluides.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    lienGitHub: 'https://github.com/DIABY007/Portfolio',
    lienLive: '#',
  },
];

