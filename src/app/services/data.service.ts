import { Injectable } from '@angular/core';
import { Project, SkillCategory } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getSkills(): SkillCategory[] {
    return [
      {
        titleKey: 'skills.languages',
        skills: [
          { name: 'Python', level: 90 },
          { name: 'Java', level: 85 },
          { name: 'JavaScript', level: 85 },
          { name: 'TypeScript', level: 80 },
          { name: 'PHP', level: 80 },
          { name: 'Dart', level: 75 }
        ]
      },
      {
        titleKey: 'skills.frameworks',
        skills: [
          { name: 'Angular', level: 85 },
          { name: 'Django', level: 80 },
          { name: 'Laravel', level: 80 },
          { name: 'Flutter', level: 75 },
          { name: 'Bootstrap/Tailwind', level: 85 }
        ]
      },
      {
        titleKey: 'skills.databases',
        skills: [
          { name: 'MySQL', level: 90 },
          { name: 'PostgreSQL', level: 85 },
          { name: 'SQL Server', level: 80 }
        ]
      },
      {
        titleKey: 'skills.tools',
        skills: [
          { name: 'Git & GitHub', level: 90 },
          { name: 'VS Code', level: 95 },
          { name: 'Postman', level: 85 },
          { name: 'Figma (UI/UX)', level: 80 },
          { name: 'Docker / DevOps', level: 70 }
        ]
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Risque Crédit',
        descriptionFr: "Application de gestion de prêts multiples. Intègre un tableau de bord analytique pour afficher les statistiques clients et les statuts des crédits en temps réel.",
        descriptionEn: "Multiple loan management application. Features an analytical dashboard displaying client statistics and credit statuses in real time.",
        technologies: ['Django', 'Angular', 'PostgreSQL'],
        githubUrl: 'https://github.com/1Everlight/projetValidation',
        imageUrl: 'assets/images/project-1.png'
      },
      {
        title: 'Portfolio Personnel',
        descriptionFr: "Portfolio moderne développé avec Angular 17+ mettant en œuvre une architecture propre, le mode sombre/clair et l'internationalisation.",
        descriptionEn: "Modern portfolio built with Angular 17+ showcasing clean architecture, dark/light mode, and internationalization.",
        technologies: ['Angular', 'TypeScript', 'SCSS'],
        githubUrl: 'https://github.com/1Everlight/portfolio',
        imageUrl: 'assets/images/project-2.png'
      }
    ];
  }
}
