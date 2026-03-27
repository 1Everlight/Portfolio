import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills section-padding" id="skills">
      <div class="container">
        <h2 class="section-title">{{ lang.translate('skills.title') }}</h2>
        
        <div class="skills-grid">
          <div class="skill-category" *ngFor="let category of skillCategories">
            <h3>{{ lang.translate(category.titleKey) }}</h3>
            
            <div class="skill-list">
              <div class="skill-item" *ngFor="let skill of category.skills">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="skill.level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-padding { padding: 6rem 0; background-color: rgba(0,0,0,0.02); }
    [data-theme="dark"] .section-padding { background-color: rgba(255,255,255,0.02); }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
    }
    
    .skill-category {
      background-color: var(--surface-color);
      padding: 2rem;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      
      h3 {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
    
    .skill-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    
    .skill-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      font-weight: 500;
    }
    
    .skill-level {
      color: var(--text-muted);
    }
    
    .progress-bar {
      height: 8px;
      background-color: var(--border-color);
      border-radius: var(--border-radius-full);
      overflow: hidden;
    }
    
    .progress {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      border-radius: var(--border-radius-full);
      transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1);
    }
  `]
})
export class SkillsComponent {
  lang = inject(LanguageService);
  private dataService = inject(DataService);
  
  skillCategories = this.dataService.getSkills();
}
