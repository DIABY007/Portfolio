import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaGlobe,
  FaPalette,
  FaVideo,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiLaravel, 
  SiMysql, 
  SiPostgresql, 
  SiSupabase, 
  SiPrisma,
  SiMake
} from 'react-icons/si';

export interface Skill {
  name: string;
  category: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', Icon: FaReact },
  { name: 'Next.js', category: 'Frontend', Icon: SiNextdotjs },
  { name: 'HTML/CSS', category: 'Frontend', Icon: FaHtml5 },
  { name: 'Tailwind CSS', category: 'Frontend', Icon: SiTailwindcss },
  
  // Backend/DB
  { name: 'PHP', category: 'Backend/DB', Icon: FaPhp },
  { name: 'Laravel', category: 'Backend/DB', Icon: SiLaravel },
  { name: 'MySQL', category: 'Backend/DB', Icon: SiMysql },
  { name: 'PostgreSQL', category: 'Backend/DB', Icon: SiPostgresql },
  { name: 'Supabase', category: 'Backend/DB', Icon: SiSupabase },
  { name: 'Prisma', category: 'Backend/DB', Icon: SiPrisma },
  
  // Outils & DevOps
  { name: 'Git', category: 'Outils & DevOps', Icon: FaGitAlt },
  { name: 'GitHub', category: 'Outils & DevOps', Icon: FaGithub },
  { name: 'Cursor', category: 'Outils & DevOps', Icon: FaCode },
  
  // No-Code/Low-Code
  { name: 'Make', category: 'No-Code/Low-Code', Icon: SiMake },
  { name: 'Hostinger Web Builder', category: 'No-Code/Low-Code', Icon: FaGlobe },
  
  // Design/IA
  { name: 'Leonardo AI', category: 'Design/IA', Icon: FaPalette },
  { name: 'Veo', category: 'Design/IA', Icon: FaVideo },
];

export const skillCategories = [
  'Frontend',
  'Backend/DB',
  'Outils & DevOps',
  'No-Code/Low-Code',
  'Design/IA',
];
