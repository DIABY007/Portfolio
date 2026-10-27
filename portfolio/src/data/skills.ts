import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaBrain,
  FaRocket,
  FaMobileAlt,
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
  SiWhatsapp,
  SiKotlin,
  SiAndroid,
} from 'react-icons/si';

export interface Skill {
  name: string;
  category: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  // Frontend & Mobile
  { name: 'Next.js 16', category: 'Frontend & Mobile', Icon: SiNextdotjs },
  { name: 'Android (Kotlin)', category: 'Frontend & Mobile', Icon: SiKotlin },
  { name: 'React', category: 'Frontend & Mobile', Icon: FaReact },
  { name: 'TypeScript', category: 'Frontend & Mobile', Icon: SiTypescript },
  { name: 'Tailwind CSS', category: 'Frontend & Mobile', Icon: SiTailwindcss },

  // Backend & Base de données
  { name: 'Supabase', category: 'Backend & Base de données', Icon: SiSupabase },
  { name: 'PostgreSQL', category: 'Backend & Base de données', Icon: SiPostgresql },
  { name: 'Laravel (PHP)', category: 'Backend & Base de données', Icon: SiLaravel },
  { name: 'Prisma ORM', category: 'Backend & Base de données', Icon: SiPrisma },

  // IA & Automatisation
  { name: 'Bots WhatsApp API', category: 'IA & Automatisation', Icon: SiWhatsapp },
  { name: 'OpenRouter / LLMs', category: 'IA & Automatisation', Icon: FaBrain },
  { name: 'Génération de Médias IA', category: 'IA & Automatisation', Icon: FaRocket },

  // Architecture & DevOps
  { name: 'PWA (Offline-First)', category: 'Architecture & DevOps', Icon: FaMobileAlt },
  { name: 'Git & GitHub', category: 'Architecture & DevOps', Icon: FaGithub },
  { name: 'Vercel', category: 'Architecture & DevOps', Icon: SiVercel },
  { name: 'PM2 & Linux', category: 'Architecture & DevOps', Icon: FaTools },
];

export const skillCategories = [
  'Frontend & Mobile',
  'Backend & Base de données',
  'IA & Automatisation',
  'Architecture & DevOps',
];
