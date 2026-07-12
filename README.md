# Portfolio — Lise Casanova Kinkela

Site portfolio personnel, présentant mon parcours en Génie Informatique (se dirigeant vers la filière Management de Projets Innovants, UTC) et mes projets techniques. Construit pour appuyer ma recherche de stage assistant ingénieur (semestre 3).

**Démo en ligne :** https://lisekinkela45-design.github.io/portfolio/

## Stack

Site statique, sans framework ni étape de build :

- HTML5 sémantique
- CSS3 (variables CSS, flexbox, grid)
- JavaScript vanilla (filtres de projets, navigation mobile)

## Structure

```
site/
├── index.html      # contenu (à propos, compétences, projets, engagement, contact)
├── styles.css       # design système (couleurs, typographie, responsive)
├── script.js         # filtres de projets + menu mobile
└── .github/
    └── workflows/
        └── deploy.yml   # déploiement automatique sur GitHub Pages
```

## Lancer en local

Aucune dépendance à installer. Ouvrir directement `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déploiement

Le déploiement sur GitHub Pages est automatique via GitHub Actions (`.github/workflows/deploy.yml`) à chaque push sur `main`. Pour l'activer sur un nouveau repo : Settings → Pages → Source → GitHub Actions.

## Contenu

- **À propos** — parcours, double compétence technique/gestion de projet
- **Compétences** — langages, méthodes, systèmes embarqués, gestion de projet
- **Projets** — 7 projets techniques détaillés (échiquier automatisé, OCR manuscrit, système expert, jeu Harmonies, site de recrutement, store vénitien, hackathon mc2i)
- **Engagement associatif** — responsabilités associatives à l'UTC
- **Contact** — email, LinkedIn, GitHub

## Contact

- Email : lise.kinkela45@gmail.com
- LinkedIn : [linkedin.com/in/lise-casanova-kinkela](https://www.linkedin.com/in/lise-casanova-kinkela)
- GitHub : [@lisekinkela45-design](https://github.com/lisekinkela45-design)
