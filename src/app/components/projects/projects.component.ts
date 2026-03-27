import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects section-padding" id="projects">
      <div class="container">
        <h2 class="section-title">{{ lang.translate('projects.title') }}</h2>
        
        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of projects">
            <div class="project-img">
              <img [src]="project.imageUrl" [alt]="project.title" (error)="onImgError($event)" />
              <div class="project-overlay">
                <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="icon-link" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
            
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="description">{{ getDesc(project) }}</p>
              
              <div class="tech-stack">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-padding { padding: 6rem 0; }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
    }
    
    .project-card {
      background-color: var(--surface-color);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: var(--transition-base);
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-10px);
        box-shadow: var(--shadow-lg);
        
        .project-img img { transform: scale(1.05); }
        .project-overlay { opacity: 1; }
      }
    }
    
    .project-img {
      position: relative;
      height: 220px;
      width: 100%;
      overflow: hidden;
      background-color: #e2e8f0;
      
      img {
        width: 100%; height: 100%; object-fit: cover;
        transition: transform 0.5s ease;
      }
    }
    
    .project-overlay {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(15, 23, 42, 0.7);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s ease;
      gap: 1rem;
    }
    
    .icon-link {
      width: 50px; height: 50px; border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s ease, background-color 0.2s;
      
      &:hover { transform: scale(1.1); background-color: var(--primary-hover); }
    }
    
    .project-content {
      padding: 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      
      h3 { font-size: 1.4rem; margin-bottom: 1rem; color: var(--text-color); }
      .description {
        color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem;
        flex: 1;
      }
    }
    
    .tech-stack {
      display: flex; flex-wrap: wrap; gap: 0.5rem;
    }
    
    .tech-tag {
      padding: 0.3rem 0.8rem;
      background-color: rgba(59, 130, 246, 0.1);
      color: var(--primary-color);
      border-radius: var(--border-radius-sm);
      font-size: 0.8rem; font-weight: 600;
      font-family: var(--font-mono);
    }
    
    @media (max-width: 600px) {
      .projects-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectsComponent {
  lang = inject(LanguageService);
  private dataService = inject(DataService);
  
  projects = this.dataService.getProjects();

  getDesc(project: Project): string {
    return this.lang.currentLang() === 'fr' 
      ? (project.descriptionFr || '') 
      : (project.descriptionEn || '');
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://picsum.photos/seed/ui/600/400';
  }
}
