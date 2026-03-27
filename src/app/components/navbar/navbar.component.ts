import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container nav-container">
        <a routerLink="/" class="logo">
          <span class="logo-text">&lt;TF/&gt;</span>
        </a>

        <div class="nav-links" [class.mobile-open]="isMenuOpen">
          <a routerLink="/" fragment="about" (click)="closeMenu()">{{ lang.translate('nav.about') }}</a>
          <a routerLink="/" fragment="skills" (click)="closeMenu()">{{ lang.translate('nav.skills') }}</a>
          <a routerLink="/" fragment="projects" (click)="closeMenu()">{{ lang.translate('nav.projects') }}</a>
          <a routerLink="/" fragment="contact" (click)="closeMenu()">{{ lang.translate('nav.contact') }}</a>
        </div>

        <div class="nav-controls">
          <button class="icon-btn" (click)="theme.toggleTheme()" [attr.aria-label]="'Toggle Theme'">
            <span class="material-icon" *ngIf="!theme.isDarkMode()">🌞</span>
            <span class="material-icon" *ngIf="theme.isDarkMode()">🌙</span>
          </button>
          <button class="lang-btn" (click)="lang.toggleLanguage()">
            {{ lang.currentLang() | uppercase }}
          </button>
          
          <button class="mobile-toggle" (click)="toggleMenu()">
            <span class="bar" [class.open]="isMenuOpen"></span>
            <span class="bar" [class.open]="isMenuOpen"></span>
            <span class="bar" [class.open]="isMenuOpen"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      z-index: 1000;
      background-color: transparent;
      transition: all 0.3s ease;
      
      &.scrolled {
        background-color: var(--surface-color);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      }
    }
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      font-family: var(--font-mono);
      color: var(--primary-color);
    }
    .nav-links {
      display: flex;
      gap: 2rem;
      
      a {
        font-weight: 500;
        font-size: 0.95rem;
        position: relative;
        &:hover { color: var(--primary-color); }
        &::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px;
          background-color: var(--primary-color); transition: width 0.3s ease;
        }
        &:hover::after { width: 100%; }
      }
    }
    .nav-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .icon-btn, .lang-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px; height: 40px;
      border-radius: 50%;
      background-color: var(--surface-color);
      color: var(--text-color);
      font-weight: 600;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      transition: all 0.2s ease;
      &:hover { transform: scale(1.05); }
    }
    .material-icon { font-size: 1.2rem; }
    
    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      width: 30px;
      height: 24px;
      z-index: 1001;
      .bar {
        width: 100%; height: 3px;
        background-color: var(--text-color);
        border-radius: 2px;
        transition: 0.3s ease;
      }
    }
    @media (max-width: 768px) {
      .mobile-toggle { display: flex; }
      .nav-links {
        position: fixed; top: 0; right: -100%; width: 250px; height: 100vh;
        flex-direction: column; padding: 100px 2rem 2rem;
        background-color: var(--surface-color);
        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
        transition: right 0.3s ease;
        &.mobile-open { right: 0; }
      }
    }
  `]
})
export class NavbarComponent {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  
  isScrolled = false;
  isMenuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
