/* ---------- Content data (FR/EN) ---------- */

const ICONS = {
  dumbbell: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="4" height="6" rx="1"></rect><rect x="18" y="9" width="4" height="6" rx="1"></rect><line x1="6" y1="12" x2="18" y2="12"></line></svg>',
  drama: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="10" r="6"></circle><circle cx="17" cy="14" r="6"></circle></svg>',
  factory: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="9"></rect><path d="M7 11V6l4 3V6l4 3V6l4 3v2"></path></svg>',
  code: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 3 12 8 18"></polyline><polyline points="16 6 21 12 16 18"></polyline></svg>',
  gamepad: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="5"></rect><line x1="7" y1="10.5" x2="7" y2="14.5"></line><line x1="5" y1="12.5" x2="9" y2="12.5"></line><circle cx="16" cy="11" r="1"></circle><circle cx="18.5" cy="13.5" r="1"></circle></svg>',
  'pen-tool': '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="17" y2="7"></line><path d="M15 5l4 4-2 2-4-4z"></path></svg>',
  finance: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 14 15 20 7"></polyline><polyline points="14 7 20 7 20 13"></polyline></svg>'
};

const SVG_CHEVRON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
const SVG_DOWNLOAD = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="15"></line><polyline points="7 10 12 15 17 10"></polyline><line x1="4" y1="20" x2="20" y2="20"></line></svg>';
const SVG_GITHUB = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 3 12 8 18"></polyline><polyline points="16 6 21 12 16 18"></polyline></svg>';
const SVG_PIN = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"></circle><path d="M12 21c5-5.5 8-9 8-12a8 8 0 0 0-16 0c0 3 3 6.5 8 12z"></path></svg>';
const SVG_LINKEDIN = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6-6"></path><path d="M13 5l1-1a4 4 0 0 1 6 6l-1 1"></path><path d="M11 19l-1 1a4 4 0 0 1-6-6l1-1"></path></svg>';
const SVG_JOB = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="1"></rect><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';
const SVG_SEND = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1"></rect><polyline points="3 6 12 13 21 6"></polyline></svg>';
const SVG_SLIDES = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="1"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>';
const SVG_DOC = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="16" y2="17"></line></svg>';

function buildContent(lang) {
  const fr = lang === 'fr';

  const path = [
    { icon: 'dumbbell', title: fr ? 'Sport' : 'Sport', body: fr ? 'Gym et handball, membre de l’équipe sportive du collège « Les Fous des Rois », devenue sportive de haut niveau au lycée.' : 'Gymnastics and handball, member of my middle school’s sports team “Les Fous des Rois,” then a high-level athlete in high school.' },
    { icon: 'drama', title: fr ? 'Chorale & comédie musicale' : 'Choir & musical theater', body: fr ? 'Chorale puis rôle principal en comédie musicale au collège, aujourd’hui co-responsable informatique de la comédie musicale de l’UTC.' : 'Choir, then a lead role in musical theater in middle school; now IT co-lead for UTC’s musical theater production.' },
    { icon: 'pen-tool', title: fr ? 'Dessin' : 'Drawing', body: fr ? 'Pratiqué sur mon temps libre depuis toujours — une aide précieuse pour représenter et présenter mes projets.' : 'Practiced in my free time for as long as I can remember — a real help in representing and presenting my projects.' },
    { icon: 'factory', title: fr ? 'Dessin industriel & sciences de l’ingénieur' : 'Technical drawing & engineering sciences', body: fr ? 'Issue d’une prépa PT : mécanique, automatique, physique appliquée, DAO — mobilisés sur les projets embarqués.' : 'From a prépa PT background: mechanics, control theory, applied physics, CAD — applied naturally to embedded projects.' },
    { icon: 'code', title: fr ? 'Informatique' : 'Computer science', body: fr ? 'Le fil conducteur actuel : logiciel, systèmes embarqués, architecture, tests.' : 'The current common thread: software, embedded systems, architecture, testing.' },
    { icon: 'gamepad', title: fr ? 'Jeu vidéo' : 'Video games', body: fr ? 'Passion pour la création de jeux vidéo, prolongée par une recherche sur le jeu vidéo comme enjeu de souveraineté numérique.' : 'A passion for game creation, extended into research on video games as a digital sovereignty issue.' },
    { icon: 'finance', title: fr ? 'Finance' : 'Finance', body: fr ? 'Un attrait fort pour la finance, exercé notamment comme fondatrice et présidente d’UTC Finance.' : 'A strong interest in finance, notably as founder and president of UTC Finance.' }
  ];

  const edu = [
    { period: fr ? 'Primaire — Collège' : 'Elementary — Middle school', title: fr ? 'Bénévolat au Téléthon' : 'Telethon volunteering', body: fr ? 'Premier engagement associatif, dès l’école primaire.' : 'First community involvement, from elementary school.' },
    { period: fr ? 'Collège' : 'Middle school', title: fr ? 'Comédie musicale' : 'Musical theater', body: fr ? 'Rôle principal en dernière année de collège.' : 'Lead role in the final year of middle school.' },
    { period: fr ? 'Lycée général — 1ère' : 'High school — 1st year', title: fr ? 'Spécialités Mathématiques, Physique-Chimie, Sciences de l’Ingénieur' : 'Majors: Mathematics, Physics-Chemistry, Engineering Sciences', body: fr ? 'Devenue en parallèle sportive de haut niveau.' : 'Also became a high-level athlete.' },
    { period: fr ? 'Lycée général — Terminale' : 'High school — Final year', title: fr ? 'Spécialités Mathématiques, Sciences de l’Ingénieur (SI-Physique)' : 'Majors: Mathematics, Engineering Sciences (SI-Physics)', body: fr ? 'Poursuite du sport de haut niveau et du dessin sur le temps libre.' : 'Continued high-level sport and drawing in free time.' },
    { period: 'Prépa PT', title: fr ? 'Classe préparatoire Physique-Technologie' : 'Physics-Technology preparatory class', body: fr ? 'Sciences de l’ingénieur, mécanique, automatique, physique appliquée. Deux projets de recherche personnelle (TIPE) en autonomie totale.' : 'Engineering sciences, mechanics, control theory, applied physics. Two personal research projects (TIPE) in full autonomy.' },
    { period: fr ? 'Depuis' : 'Since', title: fr ? 'Génie Informatique — UTC' : 'Computer Science Engineering — UTC', body: fr ? 'Vers la filière Management de Projets Innovants.' : 'Heading toward the Innovative Project Management track.' }
  ];

  const assocGroups = [
    { label: 'GI01 A25', sub: fr ? 'Septembre 2025 – Janvier 2026' : 'September 2025 – January 2026', items: [
      { role: fr ? 'Co-responsable informatique' : 'IT co-lead', org: fr ? 'Comédie musicale de l’UTC' : 'UTC musical theater', desc: fr ? 'Développement du site web de l’événement.' : 'Website development for the event.', pole: 'pae', logo: 'assets/logos/comedie-musicale.svg' },
      { role: fr ? 'Responsable communication' : 'Communications lead', org: 'Stop VSS UTC', desc: fr ? 'Communication autour de la lutte contre les violences sexistes et sexuelles.' : 'Communications around the fight against sexual and gender-based violence.', pole: 'psec', logo: 'assets/logos/stop-vss.png' }
    ] },
    { label: 'GI01 P26', sub: fr ? 'Février – Juillet 2026' : 'February – July 2026', items: [
      { role: fr ? 'Fondatrice & Présidente' : 'Founder & President', org: 'UTC Finance', desc: fr ? 'Création de l’association depuis zéro : structuration, statuts, premiers événements.' : 'Built the association from scratch: structure, bylaws, first events.', pole: 'pte', logo: 'assets/logos/utc-finance.png', doc: 'associations/utc-finance-dossier.pdf', docLabel: fr ? 'Dossier de présentation' : 'Project dossier' },
      { role: fr ? 'Co-fondatrice & vice-présidente' : 'Co-founder & VP', org: 'Broc’UT', desc: fr ? 'Organisation de la brocante étudiante de l’UTC : gestion d’équipe et d’événement.' : 'Organized UTC’s student flea market: team and event management.', pole: 'psec', logo: 'assets/logos/brocut.png', doc: 'associations/brocut-rapport.pdf', docLabel: fr ? 'Rapport d’activité' : 'Activity report' },
      { role: fr ? 'Trésorière' : 'Treasurer', org: 'Humanoide', desc: fr ? 'Gestion budgétaire de l’association.' : 'Budget management for the association.', pole: 'pte', logo: 'assets/logos/humanoide.jpg' },
      { role: fr ? 'Membre de l’équipe inclusivité' : 'Inclusion team member', org: 'Intégration UTC', desc: fr ? 'Contribution à un parcours d’intégration inclusif pour les nouveaux étudiants.' : 'Contributed to an inclusive onboarding program for new students.', pole: 'pvdc', logo: 'assets/logos/integ.png' },
      { role: fr ? 'Organisation des artistes' : 'Artist coordination', org: fr ? 'Soirée des finaux' : 'End-of-year event', desc: fr ? 'Coordination des artistes pour l’événement de fin d’année.' : 'Coordinated performers for the end-of-year event.', pole: 'pae', logo: 'assets/logos/sdf.png' }
    ] },
    { label: 'GI02 A26', sub: fr ? 'Ce qui vient maintenant' : 'What’s coming next', items: [] }
  ];

  const uvsList = [
    { code: 'SO05', name: fr ? 'Sociologie, organisations et dynamiques des collectifs' : 'Sociology, organizations and group dynamics', semester: fr ? 'Automne 2025' : 'Fall 2025', project: fr ? 'Enquête sur la vie associative étudiante' : 'Survey on student associative life', hasReport: true, reportUrl: 'uvs/so05-rapport.pdf' },
    { code: 'MT12', name: fr ? 'Techniques mathématiques pour l’ingénieur' : 'Mathematical techniques for engineers', semester: fr ? 'Printemps 2026' : 'Spring 2026', project: '—', hasReport: false, reportUrl: '' },
    { code: 'LO21', name: fr ? 'Programmation et conception orientées objet' : 'Object-oriented programming and design', semester: fr ? 'Printemps 2026' : 'Spring 2026', project: fr ? 'Jeu Harmonies (C++/Qt)' : 'Harmonies game (C++/Qt)', hasReport: false, reportUrl: '' },
    { code: 'GE90', name: fr ? 'Organisation, innovation et international' : 'Organization, innovation and international business', semester: fr ? 'Printemps 2026' : 'Spring 2026', project: fr ? 'Recherche sur la souveraineté du jeu vidéo' : 'Research on video game sovereignty', hasReport: true, reportUrl: 'uvs/ge90-annexe.pdf' },
    { code: 'SR10', name: fr ? 'Conception et développement web' : 'Web design and development', semester: fr ? 'Printemps 2026' : 'Spring 2026', project: fr ? 'Site web de recrutement UTC' : 'UTC recruitment website', hasReport: false, reportUrl: '' }
  ];

  const ptSkills = fr
    ? ['Mathématiques', 'Physique-chimie', 'Sciences de l’ingénieur (mécanique, automatique)', 'Informatique & algorithmique', 'Approche expérimentale / TP', 'Dessin industriel & DAO']
    : ['Mathematics', 'Physics-chemistry', 'Engineering sciences (mechanics, control theory)', 'Computer science & algorithms', 'Experimental approach / labs', 'Technical drawing & CAD'];

  const projectsList = [
    { kicker: fr ? 'Recherche autonome' : 'Independent research', title: fr ? 'Échiquier automatisé' : 'Automated chessboard', body: fr ? 'Simulation Python de légalité des coups, modélisation cinématique courroies/poulies + électroaimant, puis reprise en autonomie totale : table XY façon imprimante 3D, détection par capteurs magnétiques sous 64+32 cases via multiplexeurs, préhension électroaimant, LCD, WiFi.' : 'Python simulation of move legality, kinematic modeling of belts/pulleys + electromagnet, then fully independent rework: 3D-printer-style XY table, magnetic-sensor detection under 64+32 squares via multiplexers, electromagnet gripping, LCD, WiFi.', tags: ['Python', 'Arduino', fr ? 'Cinématique' : 'Kinematics'], role: fr ? 'Projet individuel — encadré puis repris en totale autonomie' : 'Individual project — supervised, then reworked in full autonomy', result: fr ? 'Partie logicielle et algorithmique aboutie sur les deux versions ; construction physique limitée par le budget matériel.' : 'Software and algorithmic side completed on both versions; physical build limited by hardware budget.', repo: 'https://github.com/lisekinkela45-design/tipe-echiquier-automatise-v1', presentation: 'presentations/echiquier-presentation.pdf', year: fr ? '2023 — aujourd’hui' : '2023 — present' },
    { kicker: fr ? 'Recherche autonome' : 'Independent research', title: fr ? 'Reconnaissance d’écriture manuscrite' : 'Handwriting recognition', body: fr ? 'TIPE né d’une difficulté liée à la dyslexie/dysorthographie : chaîne de traitement d’image complète (niveaux de gris, convolution, seuillage Sauvola/Niblack), reconnaissance KNN et encodeur MDLSTM avec attention, sans encadrement ni cours sur le sujet.' : 'A TIPE project born from a difficulty tied to dyslexia/dysorthographia: full image-processing pipeline (grayscale, convolution, Sauvola/Niblack thresholding), KNN recognition and an MDLSTM encoder with attention, with no coursework or supervision on the topic.', tags: ['Python', fr ? 'Traitement d’image' : 'Image processing', 'KNN'], role: fr ? 'Projet individuel, recherche bibliographique et implémentation en autonomie complète' : 'Individual project, literature research and implementation in full autonomy', result: fr ? 'Démarche aboutie et documentée dans un rapport de 23 pages, sur initiative personnelle.' : 'A complete approach documented in a 23-page report, on personal initiative.', repo: 'https://github.com/lisekinkela45-design/tipe-reconnaissance-ecriture', presentation: 'presentations/ocr-presentation.pdf', report: 'presentations/ocr-rapport.pdf', year: 'Prépa PT' },
    { kicker: fr ? 'Logiciel' : 'Software', title: fr ? 'Système expert — choix des UV UTC' : 'Expert system — UTC course selection', body: fr ? 'Système expert d’ordre 0+ pour assister les étudiants en Génie Informatique dans le choix de leurs UV, à partir des UV validées et des prérequis du catalogue. Formalisation du domaine, base de connaissances et chaînage avant/arrière.' : 'A 0+-order expert system to help Computer Science students choose their courses, based on validated courses and catalog prerequisites. Domain formalization, knowledge base and forward/backward chaining.', tags: [fr ? 'Systèmes experts' : 'Expert systems', fr ? 'Chaînage avant/arrière' : 'Forward/backward chaining'], role: fr ? 'Binôme, contribution égale sur recherche et formalisation' : 'Pair project, equal contribution on research and formalization', result: fr ? 'Cadrage théorique et base de connaissances entièrement formalisés.' : 'Theoretical framing and knowledge base fully formalized.', repo: '', presentation: '', year: 'IA01' },
    { kicker: fr ? 'Projet d’équipe' : 'Team project', title: fr ? 'Jeu Harmonies — conception orientée objet' : 'Harmonies game — object-oriented design', body: fr ? 'Application jouable du jeu de plateau Harmonies, architecture en couches façon MVC (modèle, logique de jeu, interface Qt). Mode console et graphique, sauvegarde de partie, mode solo.' : 'A playable application of the Harmonies board game, MVC-style layered architecture (model, game logic, Qt interface). Console and graphical modes, save games, solo mode.', tags: ['C++', 'Qt', 'OOP', 'UML'], role: fr ? 'Équipe de 5, ~50h sur les fondations du modèle de données et l’intégration finale' : 'Team of 5, ~50h on the data model foundations and final integration', result: fr ? 'Application complète et fonctionnelle, livrée sur les 4 jalons du semestre.' : 'Complete, working application, delivered across the semester’s 4 milestones.', repo: 'https://github.com/lisekinkela45-design/LO21-Harmonies', presentation: '', report: 'presentations/harmonies-rapport.pdf', year: 'LO21' },
    { kicker: fr ? 'Logiciel' : 'Software', title: fr ? 'Site de recrutement UTC' : 'UTC recruitment website', body: fr ? 'Conception complète (cas d’usage, maquettes, MCD/MLD) puis plateforme MVC Node.js/Express/MySQL avec profils candidat, recruteur, admin : dépôt de CV, création d’offres, vérification SIREN, authentification bcrypt.' : 'Full design phase (use cases, mockups, data modeling) then an MVC Node.js/Express/MySQL platform with candidate, recruiter and admin profiles: resume upload, job postings, SIREN verification, bcrypt authentication.', tags: ['Node.js', 'Express', 'MySQL', fr ? 'Tests' : 'Testing'], role: fr ? 'Binôme, frontend et partie backend (données et sécurité)' : 'Pair project, frontend and part of the backend (data and security)', result: fr ? '5 suites de tests et 23 tests passants (Jest, Supertest).' : '5 test suites and 23 passing tests (Jest, Supertest).', repo: 'https://github.com/lisekinkela45-design/site_recrutement', year: 'SR10' },
    { kicker: fr ? 'Embarqué / Électronique' : 'Embedded / Electronics', title: fr ? 'Store vénitien automatisé' : 'Automated venetian blinds', body: fr ? 'Store régulant automatiquement la luminosité d’un bureau : dimensionnement et motoréducteur, capteur de lumière intérieur/extérieur, pilotage moteur par pont en H, ESP32 en Python.' : 'Blinds that automatically regulate a desk’s brightness: sizing and gear motor, indoor/outdoor light sensor, H-bridge motor control, ESP32 in Python.', tags: ['ESP32', fr ? 'Capteurs' : 'Sensors', 'Python'], role: fr ? 'Projet individuel, à partir d’une problématique définie en groupe' : 'Individual project, based on a problem defined as a group', result: fr ? 'Store fonctionnel, stabilisant la luminosité autour d’une valeur cible.' : 'Working blinds, stabilizing brightness around a target value.', repo: '', year: fr ? 'Terminale SI' : 'Final year of high school' },
    { kicker: fr ? 'Projet d’équipe' : 'Team project', title: fr ? 'Hackathon mc2i — pré-audit RGESN' : 'mc2i hackathon — RGESN pre-audit tool', body: fr ? 'Outil de pré-audit automatisé de l’écoconception selon les 42 critères RGESN, score par thème, comparaison entre audits. Architecture en deux services indépendants (API de scoring Go + frontend MVC).' : 'An automated eco-design pre-audit tool following the 42 RGESN criteria, per-theme scoring, comparison between audits. Two independent services (Go scoring API + MVC frontend).', tags: ['Go', fr ? 'Architecture API' : 'API architecture', fr ? 'Écoconception' : 'Eco-design'], role: fr ? 'Équipe de 3 — frontend et sécurité' : 'Team of 3 — frontend and security', result: fr ? 'Prototype fonctionnel livré dans le temps imparti du hackathon.' : 'Working prototype delivered within the hackathon’s time limit.', repo: 'https://github.com/lisekinkela45-design/rgesn-audit-ecoconception', presentation: 'presentations/rgesn-presentation.pdf', year: fr ? 'Intersemestre — Juillet 2026' : 'Between-semester — July 2026' }
  ];

  return {
    skipLink: fr ? 'Aller au contenu principal' : 'Skip to main content',
    nav: { projects: fr ? 'Projets' : 'Projects', scolarite: fr ? 'Scolarité' : 'Education', parcours: fr ? 'Parcours' : 'Journey', associatif: fr ? 'Associatif' : 'Clubs', uvs: fr ? 'Cours' : 'Courses', about: fr ? 'À propos' : 'About', contact: 'Contact', cv: 'CV' },
    hero: {
      kicker: fr ? 'Génie Informatique — UTC' : 'Computer Science Engineering — UTC',
      h1: 'Lise CASANOVA KINKELA',
      p: fr ? 'Étudiante en Génie Informatique à l’UTC. Sept projets techniques menés de bout en bout, une double compétence technique et organisationnelle, à la recherche d’un stage assistant ingénieur.' : 'Computer engineering student at UTC. Seven technical projects carried end-to-end, a dual technical and organizational skill set, currently looking for an engineering assistant internship.',
      availStage: fr ? 'Stage assistant ingénieur — février à juillet 2027' : 'Engineering assistant internship — February to July 2027',
      availLoc: 'UTC Compiègne',
      availStatus: fr ? 'Disponible' : 'Available',
      ctaProjects: fr ? 'Voir les projets' : 'See projects',
      ctaGithub: fr ? 'Profil GitHub' : 'GitHub profile',
      ctaCv: fr ? 'Télécharger le CV' : 'Download CV'
    },
    about: {
      title: fr ? 'À propos' : 'About',
      summary: fr ? 'Étudiante en Génie Informatique (UTC), double profil technique et organisationnel.' : 'Computer engineering student (UTC), dual technical and organizational profile.',
      pitch: fr ? 'Je conçois des systèmes techniques de bout en bout — du prototype électronique au logiciel testé — et je pilote des projets en équipe, en association comme en cours.' : 'I design technical systems end-to-end — from electronic prototype to tested software — and lead team projects, in clubs as well as in coursework.',
      langFr: fr ? 'Français — langue maternelle' : 'French — native',
      langEn: fr ? 'Anglais — intermédiaire' : 'English — intermediate',
      p1: fr ? 'Étudiante en Génie Informatique à l’UTC, vers la filière Management de Projets Innovants — un profil pensé pour tenir les deux bouts d’un projet : la technique et la coordination. Dès la prépa PT, deux projets de recherche personnelle (TIPE) menés en totale autonomie : automatisation d’un échiquier, et reconnaissance d’écriture manuscrite.' : 'Computer engineering student at UTC, heading toward the Innovative Project Management track — a profile built to hold both ends of a project: the technical and the coordination. As early as prépa PT, I carried out two personal research projects (TIPE) in full autonomy: automating a chessboard, and handwriting recognition.',
      p2: fr ? 'En parallèle : fondatrice d’UTC Finance, vice-présidente de Broc’UT, trésorière de Humanoide — la même rigueur budgets/équipes/plannings appliquée aux projets techniques. Ancienne sportive de haut niveau en handball. Sensibilisée à l’écoconception numérique (RGESN, hackathon mc2i).' : 'Alongside my studies: founder of UTC Finance, vice-president of Broc’UT, treasurer of Humanoide — the same rigor on budgets, teams and schedules applied to technical projects. Former high-level handball player. Aware of digital eco-design (RGESN, mc2i hackathon).'
    },
    scolarite: {
      title: fr ? 'Parcours scolaire' : 'School path',
      summary: fr ? 'Bac général (maths, physique-chimie, SI) → prépa PT → UTC.' : 'General baccalaureate (maths, physics-chemistry, engineering sciences) → prépa PT → UTC.'
    },
    edu,
    parcoursHead: { title: fr ? 'Un parcours pluriel' : 'A varied path', unit: fr ? 'terrains' : 'areas', sub: fr ? 'Avant et à côté du code, plusieurs pratiques qui nourrissent la façon de concevoir et de construire.' : 'Alongside coding, several practices that shape the way I design and build.' },
    path,
    associatif: { title: fr ? 'Vie associative' : 'Clubs & activities', summary: fr ? '8 rôles associatifs sur 3 semestres UTC.' : '8 club roles across 3 UTC semesters.' },
    assocGroups,
    uvs: {
      title: fr ? 'Cours suivis à l’UTC' : 'UTC coursework',
      summary: fr ? '5 UV validées + compétences prépa PT.' : '5 validated courses + prépa PT skills.',
      colUv: 'UV', colTheme: fr ? 'Thème' : 'Theme', colSemester: fr ? 'Semestre' : 'Semester', colProject: fr ? 'Projet associé' : 'Related project',
      ptTitle: fr ? 'Prépa PT — compétences acquises' : 'Prépa PT — skills acquired'
    },
    uvsList, ptSkills,
    projectsHead: { title: fr ? 'Projets' : 'Projects', unit: fr ? 'projets' : 'projects', resultLabel: fr ? 'Résultat :' : 'Result:', codeLabel: fr ? 'Code' : 'Code' },
    projectsList,
    contact: {
      title: 'Contact',
      intro: fr ? 'À la recherche d’un stage assistant ingénieur pour février à juillet 2027. N’hésitez pas à m’écrire directement ci-dessous.' : 'Looking for an engineering assistant internship from February to July 2027. Feel free to write to me directly below.',
      formName: fr ? 'Nom' : 'Name', formEmail: fr ? 'Votre email' : 'Your email', formMessage: 'Message', formSubmit: fr ? 'Envoyer' : 'Send'
    }
  };
}

/* ---------- App state & rendering ---------- */

const state = { lang: 'fr', openAbout: true, openScolarite: true, openAssociatif: false, openUvs: false };

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function corners() {
  return '<i class="corner tl" aria-hidden="true"></i><i class="corner tr" aria-hidden="true"></i><i class="corner bl" aria-hidden="true"></i><i class="corner br" aria-hidden="true"></i>';
}

function chevron(open) {
  return `<span class="pf-chevron" style="transform:${open ? 'rotate(0deg)' : 'rotate(-90deg)'}">${SVG_CHEVRON}</span>`;
}

function render() {
  const t = buildContent(state.lang);
  const root = document.getElementById('app');

  const navLinks = `
    <a href="#projects">${t.nav.projects}</a>
    <a href="#scolarite">${t.nav.scolarite}</a>
    <a href="#parcours">${t.nav.parcours}</a>
    <a href="#associatif">${t.nav.associatif}</a>
    <a href="#uvs">${t.nav.uvs}</a>
    <a href="#about">${t.nav.about}</a>
    <a href="#contact">${t.nav.contact}</a>`;

  const heroActions = `
    <a href="#projects" class="btn btn-primary">${t.hero.ctaProjects}</a>
    <a href="https://github.com/lisekinkela45-design" class="btn btn-secondary">${SVG_GITHUB} ${t.hero.ctaGithub}</a>
    <a href="cv.pdf" class="btn btn-ghost" download>${SVG_DOWNLOAD} ${t.hero.ctaCv}</a>`;

  const eduHtml = t.edu.map(e => `
    <div class="pf-edu-item">
      <span class="pf-edu-dot"></span>
      <div class="pf-edu-period">${esc(e.period)}</div>
      <h3 class="card-title" style="font-size:15px;margin-bottom:3px">${esc(e.title)}</h3>
      <p class="card-body" style="margin:0">${esc(e.body)}</p>
    </div>`).join('');

  const pathHtml = t.path.map(d => `
    <div class="card blueprint elev-sm pf-path-card">
      ${corners()}
      <span style="color:var(--color-accent)">${ICONS[d.icon] || ''}</span>
      <h3 class="card-title" style="font-size:15px">${esc(d.title)}</h3>
      <p class="card-body">${esc(d.body)}</p>
    </div>`).join('');

  const assocHtml = t.assocGroups.map(g => `
    <div class="pf-assoc-sem">
      <h3>${esc(g.label)} <span class="text-muted" style="font-weight:400;font-size:12px">— ${esc(g.sub)}</span></h3>
      ${g.items.length ? `<div class="pf-assoc-grid">${g.items.map(a => `
        <div class="pf-assoc-item">
          <div class="pf-assoc-org-row">
            ${a.logo ? `<img src="${esc(a.logo)}" alt="${esc(a.org)}" class="pf-assoc-logo">` : ''}
            <div style="flex:1">
              <div class="pf-assoc-role">${esc(a.role)}</div>
              <div class="pf-assoc-org-line">
                <span class="pf-assoc-org">${esc(a.org)}</span>
                ${a.pole ? `<span class="pf-pole-tag pf-pole-${esc(a.pole)}">${esc(a.pole)}</span>` : ''}
              </div>
            </div>
          </div>
          <p class="pf-assoc-desc">${esc(a.desc)}</p>
          ${a.doc ? `<a href="${esc(a.doc)}" target="_blank" rel="noopener" class="pf-assoc-doc">${SVG_DOC} ${esc(a.docLabel || (state.lang === 'fr' ? 'Document' : 'Document'))}</a>` : ''}
        </div>`).join('')}</div>` : `<p class="pf-assoc-empty">${state.lang === 'fr' ? 'À venir.' : 'Coming up.'}</p>`}
    </div>`).join('');

  const uvsRows = t.uvsList.map(u => `
    <tr>
      <td><span class="tag tag-outline">${esc(u.code)}</span></td>
      <td>${esc(u.name)}</td>
      <td>${esc(u.semester)}</td>
      <td class="text-muted">${esc(u.project)} ${u.hasReport ? `<a href="${esc(u.reportUrl)}" class="tag tag-outline" style="margin-left:6px;text-decoration:none">PDF</a>` : ''}</td>
    </tr>`).join('');

  const ptSkillsHtml = t.ptSkills.map(s => `<span class="tag tag-accent">${esc(s)}</span>`).join('');

  const projectsHtml = t.projectsList.map(p => `
    <article class="card blueprint elev-sm">
      ${corners()}
      <span class="card-kicker pf-mono">$ ${esc(p.kicker)}</span>
      <h3 class="card-title">${esc(p.title)}</h3>
      <p class="card-body">${esc(p.body)}</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${p.tags.map(tg => `<span class="tag tag-outline">${esc(tg)}</span>`).join('')}</div>
      <div class="pf-metric"><span style="color:var(--color-accent)">${SVG_JOB}</span>${esc(p.role)}</div>
      <p class="pf-result"><strong>${t.projectsHead.resultLabel}</strong> ${esc(p.result)}</p>
      <div class="pf-card-actions">
        ${p.repo ? `<a href="${esc(p.repo)}" class="btn btn-primary" style="padding:6px 14px;font-size:13px">${SVG_GITHUB} ${t.projectsHead.codeLabel}</a>` : ''}
        ${p.presentation ? `<a href="${esc(p.presentation)}" target="_blank" rel="noopener" class="btn btn-secondary" style="padding:6px 14px;font-size:13px">${SVG_SLIDES} ${state.lang === 'fr' ? 'Présentation' : 'Slides'}</a>` : ''}
        ${p.report ? `<a href="${esc(p.report)}" target="_blank" rel="noopener" class="btn btn-ghost" style="padding:6px 14px;font-size:13px">${SVG_DOC} ${state.lang === 'fr' ? 'Rapport' : 'Report'}</a>` : ''}
        <span class="card-meta" style="margin-left:auto">${esc(p.year)}</span>
      </div>
    </article>`).join('');

  root.innerHTML = `
    <a href="#main" class="skip-link">${t.skipLink}</a>
    <div class="industry-frame">
      <nav class="nav pf-nav" aria-label="Navigation principale">
        <div class="nav-brand">LISE CASANOVA KINKELA</div>
        <div class="pf-nav-links">${navLinks}</div>
        <div class="pf-nav-right">
          <div style="display:flex;border:1px solid var(--color-divider)">
            <button class="btn" data-action="lang-fr" style="background:${state.lang === 'fr' ? 'var(--color-accent)' : 'transparent'};color:${state.lang === 'fr' ? 'var(--color-bg)' : 'var(--color-text)'};border:none" aria-label="Français">FR</button>
            <button class="btn" data-action="lang-en" style="background:${state.lang === 'en' ? 'var(--color-accent)' : 'transparent'};color:${state.lang === 'en' ? 'var(--color-bg)' : 'var(--color-text)'};border:none" aria-label="English">EN</button>
          </div>
          <a href="cv.pdf" class="btn btn-secondary" download>${SVG_DOWNLOAD} ${t.nav.cv}</a>
        </div>
      </nav>
      <main id="main">
        <div class="pf-hero">
          <h6 class="text-muted pf-hero-anim pf-prompt">$ ${esc(t.hero.kicker)}<span class="pf-caret">_</span></h6>
          <h1 class="pf-hero-anim">${esc(t.hero.h1)}</h1>
          <p class="text-muted pf-hero-anim" style="font-size:15px;text-transform:uppercase;letter-spacing:.06em;margin-top:-12px">${esc(t.hero.availStage)}</p>
          <p class="pf-hero-anim">${esc(t.hero.p)}</p>
          <div class="pf-availability pf-hero-anim">
            <span class="tag tag-outline pf-avail-tag">${SVG_PIN} ${esc(t.hero.availLoc)}</span>
            <span class="tag tag-accent pf-avail-tag">${esc(t.hero.availStatus)}</span>
          </div>
          <div class="pf-hero-actions pf-hero-anim">${heroActions}</div>
        </div>

        <section class="pf-section" id="about" aria-labelledby="about-h">
          <button class="pf-section-head" data-action="toggle-about">
            <h2 id="about-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.about.title)}</h2>
            ${chevron(state.openAbout)}
          </button>
          <p class="pf-summary">${esc(t.about.summary)}</p>
          <div class="pf-collapsible" style="display:${state.openAbout ? 'block' : 'none'}">
            <p style="max-width:720px;font-size:16px;line-height:1.6;font-weight:600;font-family:var(--font-heading)">${esc(t.about.pitch)}</p>
            <p class="text-muted" style="max-width:720px;font-size:15px;line-height:1.6">${esc(t.about.p1)}</p>
            <p class="text-muted" style="max-width:720px;font-size:15px;line-height:1.6;margin-top:-8px">${esc(t.about.p2)}</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
              <span class="tag tag-accent">${esc(t.about.langFr)}</span>
              <span class="tag tag-outline">${esc(t.about.langEn)}</span>
            </div>
          </div>
        </section>

        <section class="pf-section" id="scolarite" aria-labelledby="scolarite-h">
          <button class="pf-section-head" data-action="toggle-scolarite">
            <h2 id="scolarite-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.scolarite.title)}</h2>
            ${chevron(state.openScolarite)}
          </button>
          <p class="pf-summary">${esc(t.scolarite.summary)}</p>
          <div class="pf-collapsible pf-edu" style="display:${state.openScolarite ? 'block' : 'none'}">${eduHtml}</div>
        </section>

        <section class="pf-section" id="parcours" aria-labelledby="parcours-h">
          <div class="pf-section-head" style="cursor:default">
            <h2 id="parcours-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.parcoursHead.title)}</h2>
            <span class="text-muted pf-mono" style="font-size:13px">&gt; ${t.path.length} ${t.parcoursHead.unit}</span>
          </div>
          <p class="text-muted" style="max-width:640px;margin:8px 0 28px;font-size:15px">${esc(t.parcoursHead.sub)}</p>
          <div class="pf-path-grid">${pathHtml}</div>
        </section>

        <section class="pf-section" id="associatif" aria-labelledby="associatif-h">
          <button class="pf-section-head" data-action="toggle-associatif">
            <h2 id="associatif-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.associatif.title)}</h2>
            ${chevron(state.openAssociatif)}
          </button>
          <p class="pf-summary">${esc(t.associatif.summary)}</p>
          <div class="pf-collapsible" style="display:${state.openAssociatif ? 'block' : 'none'}">${assocHtml}</div>
        </section>

        <section class="pf-section" id="uvs" aria-labelledby="uvs-h">
          <button class="pf-section-head" data-action="toggle-uvs">
            <h2 id="uvs-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.uvs.title)}</h2>
            ${chevron(state.openUvs)}
          </button>
          <p class="pf-summary">${esc(t.uvs.summary)}</p>
          <div class="pf-collapsible" style="display:${state.openUvs ? 'block' : 'none'}">
            <table class="table" style="margin-bottom:36px">
              <thead><tr><th>${t.uvs.colUv}</th><th>${t.uvs.colTheme}</th><th>${t.uvs.colSemester}</th><th>${t.uvs.colProject}</th></tr></thead>
              <tbody>${uvsRows}</tbody>
            </table>
            <h3 style="font-size:16px;margin-bottom:12px">${esc(t.uvs.ptTitle)}</h3>
            <div style="display:flex;gap:8px;flex-wrap:wrap">${ptSkillsHtml}</div>
          </div>
        </section>

        <section class="pf-section" id="projects" aria-labelledby="projects-h">
          <div class="pf-section-head" style="cursor:default">
            <h2 id="projects-h"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.projectsHead.title)}</h2>
            <span class="text-muted pf-mono" style="font-size:13px">&gt; ${t.projectsList.length} ${t.projectsHead.unit}</span>
          </div>
          <div class="pf-grid" style="margin-top:28px">${projectsHtml}</div>
        </section>

        <section class="pf-section" id="contact" aria-labelledby="contact-h">
          <div class="card blueprint elev-sm pf-contact-card">
            ${corners()}
            <h2 id="contact-h" style="margin-bottom:6px"><span class="pf-mono" style="color:var(--color-accent);margin-right:8px">$</span>${esc(t.contact.title)}</h2>
            <p class="card-body" style="max-width:520px">${esc(t.contact.intro)}</p>
            <form action="mailto:lise.kinkela45@gmail.com" method="post" enctype="text/plain" class="pf-contact-form">
              <div class="field"><label for="cf-name">${t.contact.formName}</label><input id="cf-name" name="Name" class="input" type="text" required></div>
              <div class="field"><label for="cf-email">${t.contact.formEmail}</label><input id="cf-email" name="Email" class="input" type="email" required></div>
              <div class="field"><label for="cf-message">${t.contact.formMessage}</label><textarea id="cf-message" name="Message" class="input" rows="4" required></textarea></div>
              <button type="submit" class="btn btn-primary btn-block" style="max-width:220px">${SVG_SEND} ${t.contact.formSubmit}</button>
            </form>
            <div class="pf-contact-actions">
              <a href="https://www.linkedin.com/in/lise-casanova-kinkela" class="btn btn-secondary">${SVG_LINKEDIN} LinkedIn</a>
              <a href="cv.pdf" class="btn btn-ghost" download>${SVG_DOWNLOAD} ${t.nav.cv}</a>
            </div>
          </div>
        </section>
      </main>
      <footer class="pf-footer text-muted">
        <span class="pf-mono">$ © 2026 Lise Casanova Kinkela<span class="pf-caret">_</span></span>
        <div style="display:flex;gap:16px">
          <a href="mailto:lise.kinkela45@gmail.com">lise.kinkela45@gmail.com</a>
          <a href="https://www.linkedin.com/in/lise-casanova-kinkela">LinkedIn</a>
          <a href="https://github.com/lisekinkela45-design">GitHub</a>
        </div>
      </footer>
    </div>`;
}

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;
  if (action === 'lang-fr') state.lang = 'fr';
  else if (action === 'lang-en') state.lang = 'en';
  else if (action === 'toggle-about') state.openAbout = !state.openAbout;
  else if (action === 'toggle-scolarite') state.openScolarite = !state.openScolarite;
  else if (action === 'toggle-associatif') state.openAssociatif = !state.openAssociatif;
  else if (action === 'toggle-uvs') state.openUvs = !state.openUvs;
  else return;
  render();
});

render();
