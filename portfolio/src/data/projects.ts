export interface Project {
  id: string;
  title: string;
  client?: string;
  badge: string;
  description: string;
  technologies: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'neoschool',
    title: 'NeoSchool',
    client: 'Établissements Scolaires (Lycées & Primaires)',
    badge: 'SaaS B2B Gestion Scolaire',
    image: '/images/projects/neoschool.png',
    description: `🎯 Problème
Les établissements scolaires gèrent tout manuellement : les parents peinent à suivre les notes, l'information circule mal et les professeurs perdent des heures sur l'administratif.

⚡ Solution
NeoSchool centralise la vie scolaire en un seul outil avec 3 portails distincts : suivi des notes en temps réel pour les parents, saisie simplifiée des évaluations et emplois du temps pour les profs, et pilotage centralisé pour la direction.

📊 Résultats
• 5 établissements scolaires en production réelle
• 200+ utilisateurs actifs mensuels
• En production continue depuis septembre 2025`,
    technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Livewire'],
  },
  {
    id: 'neochat',
    title: 'NeoChat',
    client: 'Université Aube Nouvelle (U-AUBEN)',
    badge: 'Bot WhatsApp & Automatisation IA',
    image: '/images/projects/neochat.png',
    description: `🎯 Problème
L'administration universitaire et les équipes d'orientation sont submergées par des centaines de questions répétitives par jour sur WhatsApp (inscriptions, programmes, bourses, emploi du temps).

⚡ Solution
Déploiement et intégration d'un bot WhatsApp intelligent connecté à la base de connaissances officielle de l'Université Aube Nouvelle. Il assure le support 24h/24, répond automatiquement aux requêtes complexes et diffuse des annonces ciblées.

📊 Résultats
• Solution déployée et en production à l'Université Aube Nouvelle (U-AUBEN)
• 250+ étudiants et contacts touchés dès le pilote
• 93h de travail économisées collectivement sur l'accueil`,
    technologies: ['Next.js', 'WhatsApp API', 'Node.js', 'Supabase', 'IA'],
  },
  {
    id: 'licopress',
    title: 'LicoPress',
    client: 'Entreprise Licopress',
    badge: 'Logistique, Mobile Android & Tracking GPS',
    image: '/images/projects/licopress.png',
    description: `🎯 Problème
Les sociétés de livraison urbaine perdent la visibilité sur leurs coursiers dès qu'ils sont sur le terrain (applications fermées par la batterie du smartphone, frais approximatifs et contestations fréquentes de livraisons).

⚡ Solution
Une plateforme complète sur-mesure pour Licopress :
• App mobile coursier Android native (Kotlin) avec Foreground Service GPS permanent (résistant au Doze Mode).
• Validation stricte par OTP envoyé par SMS (API Orange) : « pas de code, pas de remise ».
• Dashboard web de dispatch avec cartographie en direct (Leaflet) et calcul de distance routière au mètre près via moteur local OSRM.

📊 Résultats
• Suivi temps réel ininterrompu de la flotte de coursiers
• Calcul automatique et équitable des frais de livraison
• 0 litige client grâce à la confirmation cryptographique OTP`,
    technologies: ['Android (Kotlin)', 'Jetpack Compose', 'Next.js 16', 'OSRM', 'Leaflet', 'API SMS Orange', 'PWA'],
  },
  {
    id: 'clinique-yaalgre',
    title: 'Clinique Yaalgre',
    client: 'Clinique Yaalgre',
    badge: 'SaaS Médical Hospitalier — PWA Offline-First',
    image: '/images/projects/clinique-yaalgre.png',
    description: `🎯 Problème
En Afrique de l'Ouest, les cliniques subissent des coupures d'électricité et d'internet fréquentes. Interrompre une consultation médicale ou la délivrance de soins faute de connexion est inacceptable.

⚡ Solution
Un système de gestion hospitalière complet développé en architecture Offline-First intégrale :
• Fonctionne à 100% sans connexion internet grâce à IndexedDB (Dexie.js), avec synchronisation bidirectionnelle automatique dès que le réseau réapparaît.
• Sécurité renforcée : authentification matérielle JWT + code PIN soignant à 4 chiffres haché en local.
• Gestion médicale (patients, consultations, examens labo), financière (factures, bilans) et pharmacie.

📊 Résultats
• 100% de continuité d'activité clinique même en cas de coupure réseau totale
• 15 tables relationnelles PostgreSQL avec politiques de sécurité RLS
• Déploiement instantané sur tablettes, ordinateurs et mobiles sans store`,
    technologies: ['Next.js 16', 'Supabase (PostgreSQL)', 'Dexie.js (Offline-First)', 'PWA (Serwist)', 'TanStack Query', 'Shadcn UI'],
  },
  {
    id: 'aurore-agrovital',
    title: 'Aurore AgroVital',
    client: 'Aurore AgroVital',
    badge: 'SaaS Santé, Nutrition & Gamification',
    image: '/images/projects/aurore-agrovital.png',
    description: `🎯 Problème
Dans les défis nutritionnels et sportifs, 80% des adhérents abandonnent en cours de route par manque de suivi régulier et à cause des barrières de connexion (identifiants et mots de passe oubliés).

⚡ Solution
Application web de suivi et d'engagement santé développée pour Aurore AgroVital :
• Connexion sans mot de passe via un lien secret unique délivré sur WhatsApp.
• Daily Tracking simplifié (scores nutrition, sommeil, niveau de stress, activité physique) sans perte de données.
• Moteur de challenges gamifiés par cohortes : podium Top 3, calcul de score en direct et dashboard pour les coachs.

📊 Résultats
• Challenge NEO45 actif avec 27 participants engagés dès le lancement
• Classement et scoring cumulatif automatisés en temps réel
• Zéro mot de passe : taux de friction à la connexion réduit à zéro`,
    technologies: ['Next.js 16', 'Supabase', 'Tailwind CSS', 'Server Actions', 'WhatsApp Link Auth'],
  },
  {
    id: 'neoshop',
    title: 'NeoShop',
    client: 'Marketplace C2C Bobo-Dioulasso',
    badge: 'Marketplace & E-commerce Mobile-First',
    image: '/images/projects/neoshop.png',
    description: `🎯 Problème
Au Burkina Faso, dénicher un article spécifique oblige à fouiller des dizaines de statuts WhatsApp ou à faire le tour des marchés sans connaître les disponibilités ni comparer les tarifs.

⚡ Solution
Une marketplace locale pensée mobile-first pour Bobo-Dioulasso :
• Publication d'un produit en moins de 60 secondes sans friction.
• Mise en relation directe acheteur-vendeur via WhatsApp ou appel en un clic depuis la fiche produit.
• Notifications automatiques WhatsApp pour alerter les vendeurs des demandes acheteurs.

📊 Résultats
• +10 000 visiteurs uniques enregistrés
• +500 produits actifs répertoriés
• +300 comptes créés (vendeurs et acheteurs actifs)`,
    technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'WhatsApp Notifications', 'PostHog'],
  },
];
