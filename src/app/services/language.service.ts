import { Injectable, signal, computed } from '@angular/core';

export type Language = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('fr');

  constructor() {
    this.initLanguage();
  }

  private initLanguage(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedLang = localStorage.getItem('lang') as Language;
      if (savedLang === 'fr' || savedLang === 'en') {
        this.currentLang.set(savedLang);
      }
    }
  }

  toggleLanguage(): void {
    const newLang = this.currentLang() === 'fr' ? 'en' : 'fr';
    this.currentLang.set(newLang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', newLang);
    }
  }

  // Helper dictionary
  private dictionary: Record<string, Record<Language, string>> = {
    'nav.home': { fr: 'Accueil', en: 'Home' },
    'nav.about': { fr: 'À propos', en: 'About' },
    'nav.skills': { fr: 'Compétences', en: 'Skills' },
    'nav.projects': { fr: 'Projets', en: 'Projects' },
    'nav.contact': { fr: 'Contact', en: 'Contact' },
    'nav.resume': { fr: 'Télécharger CV', en: 'Download CV' },
    
    'hero.greeting': { fr: 'Bonjour, je suis', en: 'Hello, I am' },
    'hero.name': { fr: 'TCHAGAFOU Fadèle', en: 'TCHAGAFOU Fadèle' },
    'hero.title': { fr: 'Ingénieur Logiciel', en: 'Software Engineer' },
    'hero.subtitle': { fr: 'Je conçois et développe des applications web modernes, performantes et scalables.', en: 'I design and build modern, performant, and scalable web applications.' },
    'hero.cta': { fr: 'Voir mes projets', en: 'View my projects' },
    
    'about.title': { fr: 'À propos de moi', en: 'About Me' },
    'about.bio': { fr: "Actuellement en formation d'Ingénieur des travaux informatiques en génie logiciel et systèmes d'information à l'IAI-TOGO (2023-2026), je suis passionné par la création d'architectures propres et d'expériences utilisateur engageantes. J'excelle dans le développement web et la conception de systèmes d'information robustes.", en: "Currently studying Software Engineering and Information Systems at IAI-TOGO (2023-2026), I am passionate about creating clean architectures and engaging user experiences. I excel in web development and designing robust information systems." },
    'about.education': { fr: 'Formation', en: 'Education' },
    'about.education.degree': { fr: 'Ingénieur des travaux informatique', en: 'B.S. in Software Engineering' },
    'about.education.school': { fr: 'IAI-TOGO', en: 'IAI-TOGO' },
    'about.education.period': { fr: '2023 - 2026 (en cours)', en: '2023 - 2026 (ongoing)' },
    
    'skills.title': { fr: 'Mes Compétences', en: 'My Skills' },
    'skills.languages': { fr: 'Langages de programmation', en: 'Programming Languages' },
    'skills.frameworks': { fr: 'Frameworks & Bibliothèques', en: 'Frameworks & Libraries' },
    'skills.tools': { fr: 'Outils', en: 'Tools' },
    'skills.databases': { fr: 'Bases de données', en: 'Databases' },
    'skills.other': { fr: 'Autres compétences', en: 'Other skills' },

    'projects.title': { fr: 'Mes Projets', en: 'My Projects' },
    'projects.view': { fr: 'Voir sur GitHub', en: 'View on GitHub' },
    
    'contact.title': { fr: 'Contactez-moi', en: 'Get in Touch' },
    'contact.name': { fr: 'Nom complet', en: 'Full Name' },
    'contact.email': { fr: 'Adresse email', en: 'Email Address' },
    'contact.message': { fr: 'Votre message', en: 'Your Message' },
    'contact.send': { fr: 'Envoyer', en: 'Send Message' },
    
    'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' }
  };

  translate(key: string): string {
    const translation = this.dictionary[key];
    if (translation) {
      return translation[this.currentLang()];
    }
    return key;
  }
}
