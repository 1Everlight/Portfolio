import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <div class="brand">
          <span class="logo-text">&lt;TF/&gt;</span>
          <p class="tagline">{{ lang.translate('hero.title') }}</p>
        </div>
        
        <div class="social-links">
          <a href="https://github.com/1Everlight" target="_blank" rel="noopener noreferrer" class="social-btn">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/fadèle-tchagafou-218436318/" target="_blank" rel="noopener noreferrer" class="social-btn">
            LinkedIn
          </a>
          <a href="mailto:fadeletchagafou7@gmail.com" class="social-btn">
            Email
          </a>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ currentYear }} TCHAGAFOU Fadèle. {{ lang.translate('footer.rights') }}</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--surface-color);
      border-top: 1px solid var(--border-color);
      padding: 4rem 0 1rem;
      margin-top: 4rem;
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3rem;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .logo-text {
      font-size: 2rem;
      font-family: var(--font-mono);
      font-weight: 700;
      color: var(--primary-color);
    }
    .tagline {
      color: var(--text-muted);
      margin-top: 0.5rem;
    }
    .social-links {
      display: flex;
      gap: 1rem;
    }
    .social-btn {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: var(--bg-color);
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--primary-color);
        color: white;
        transform: translateY(-2px);
      }
    }
    .copyright {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--border-color);
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    @media (max-width: 600px) {
      .footer-content { flex-direction: column; text-align: center; }
    }
  `]
})
export class FooterComponent {
  lang = inject(LanguageService);
  currentYear = new Date().getFullYear();
}
