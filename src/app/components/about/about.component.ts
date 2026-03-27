import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about section-padding" id="about">
      <div class="container">
        <h2 class="section-title">{{ lang.translate('about.title') }}</h2>
        
        <div class="about-content">
          <div class="bio-card">
            <p class="bio-text">{{ lang.translate('about.bio') }}</p>
          </div>
          
          <div class="education-card">
            <h3>{{ lang.translate('about.education') }}</h3>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <h4>{{ lang.translate('about.education.degree') }}</h4>
                  <p class="school">{{ lang.translate('about.education.school') }}</p>
                  <span class="period">{{ lang.translate('about.education.period') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-padding { padding: 6rem 0; }
    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }
    .bio-card, .education-card {
      background-color: var(--surface-color);
      padding: 2.5rem;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      transition: var(--transition-base);
      height: 100%;
      &:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
    }
    .bio-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text-color);
    }
    .education-card h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--primary-color);
    }
    
    .timeline {
      position: relative;
      padding-left: 2rem;
      &::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0;
        width: 2px; background-color: var(--border-color);
      }
    }
    .timeline-item {
      position: relative;
      margin-bottom: 2rem;
      &:last-child { margin-bottom: 0; }
    }
    .timeline-dot {
      position: absolute; left: -2.35rem; top: 0.2rem;
      width: 1rem; height: 1rem;
      border-radius: 50%;
      background-color: var(--primary-color);
      border: 3px solid var(--surface-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
    .timeline-content {
      h4 { font-size: 1.2rem; margin-bottom: 0.25rem; }
      .school { font-weight: 500; color: var(--text-muted); margin-bottom: 0.5rem; }
      .period {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: rgba(59, 130, 246, 0.1);
        color: var(--primary-color);
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 600;
      }
    }
    
    @media (max-width: 768px) {
      .about-content { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent {
  lang = inject(LanguageService);
}
