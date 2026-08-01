import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaBrain,
  FaRocket,
  FaCode
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiTypescript,
  SiVercel,
  SiWhatsapp
} from 'react-icons/si';

export interface Skill {
  name: string;
  category: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Next.js', category: 'Frontend', Icon: SiNextdotjs },
  { name: 'React', category: 'Frontend', Icon: FaReact },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: SiTailwindcss },
  { name: 'TypeScript', category: 'Frontend', Icon: SiTypescript },

  // Backend & DB
  { name: 'Supabase', category: 'Backend & DB', Icon: SiSupabase },
  { name: 'PostgreSQL', category: 'Backend & DB', Icon: SiPostgresql },
  { name: 'Prisma', category: 'Backend & DB', Icon: SiPrisma },
  { name: 'Laravel', category: 'Backend & DB', Icon: SiLaravel },

  // IA & Automatisation
  { name: 'OpenRouter', category: 'IA & Automatisation', Icon: FaBrain },
  { name: 'Replicate', category: 'IA & Automatisation', Icon: FaRocket },
  { name: 'WhatsApp API', category: 'IA & Automatisation', Icon: SiWhatsapp },

  // DevOps & Outils
  { name: 'Git', category: 'DevOps & Outils', Icon: FaGitAlt },
  { name: 'GitHub', category: 'DevOps & Outils', Icon: FaGithub },
  { name: 'Vercel', category: 'DevOps & Outils', Icon: SiVercel },
  { name: 'PM2', category: 'DevOps & Outils', Icon: FaTools },
];

export const skillCategories = [
  'Frontend',
  'Backend & DB',
  'IA & Automatisation',
  'DevOps & Outils',
];
