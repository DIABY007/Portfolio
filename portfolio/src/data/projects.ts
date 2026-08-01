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
    description: '🎯 Problème\nLes établissements scolaires gèrent tout manuellement — les parents ne suivent pas les résultats, les infos circulent mal, les profs perdent du temps sur l\'administratif.\n\n⚡ Solution\nNeoSchool centralise tout en un seul outil avec 3 portails distincts : les parents suivent les résultats en temps réel, les profs saisissent les notes et gèrent leurs emplois du temps directement, les administrateurs pilotent l\'établissement depuis un tableau de bord unique.\n\n📊 Résultats\n5 établissements (lycées & primaires) en production\n200+ utilisateurs actifs mensuels\nEn production depuis septembre 2025\n\n🛠️ Stack\nLaravel PHP MySQL JavaScript',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    lienGitHub: 'https://github.com/DIABY007/NeoSchool',
    lienLive: 'https://neoschool.pro',
  },
  {
    id: 'neochat',
    title: 'NeoChat',
    description: '🎯 Problème\nRépondre manuellement à des dizaines de messages WhatsApp par jour — en privé, dans les groupes — coûte du temps que les équipes n\'ont pas. L\'information circule mal, lentement, et de façon désorganisée.\n\n⚡ Solution\nNeoChat automatise la communication WhatsApp avec 3 fonctions clés : réponses automatiques en privé, réponses automatiques dans les groupes, et campagnes de messages ciblés vers des groupes ou numéros spécifiques — sans intervention humaine.\n\n📊 Résultats\n250+ utilisateurs touchés via un partenariat universitaire actif\n93h économisées collectivement sur le traitement des questions\nContrat en cours depuis janvier 2026\n\n🛠️ Stack\nNext.js Node.js WhatsApp API Supabase',
    technologies: ['Next.js', 'Node.js', 'WhatsApp API', 'Supabase'],
    lienGitHub: '#',
    lienLive: '#',
  },
  {
    id: 'neoshop',
    title: 'NeoShop',
    description: '🎯 Problème\nAu Burkina Faso, trouver un produit près de chez soi oblige à chercher dans plusieurs groupes WhatsApp ou à se déplacer. Aucune plateforme locale ne centralise l\'offre ni ne permet de comparer les prix.\n\n⚡ Solution\nNeoShop est une marketplace C2C mobile-first pensée pour Bobo-Dioulasso. Un vendeur publie son produit en 3 champs, il est en ligne immédiatement. L\'acheteur contacte directement via WhatsApp ou appel depuis la page produit — aucune friction, aucune caisse.\n\n📊 Résultats\n609 produits listés\n328 vendeurs et acheteurs inscrits\n727 visiteurs uniques depuis le lancement (nov. 2025)\n\n🛠️ Stack\nNext.js Supabase TypeScript Tailwind CSS PostHog',
    technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostHog'],
    lienGitHub: 'https://github.com/DIABY007/NeoShop',
    lienLive: 'https://neoshop.world',
  },
];

