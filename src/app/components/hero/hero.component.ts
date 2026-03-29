import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="container hero-container">
        <div class="hero-content">
          <p class="greeting">{{ lang.translate('hero.greeting') }}</p>
          <h1 class="name">{{ lang.translate('hero.name') }}</h1>
          <h2 class="title">{{ lang.translate('hero.title') }}</h2>
          <p class="subtitle">{{ lang.translate('hero.subtitle') }}</p>
          
          <div class="cta-group">
            <a href="#projects" class="btn btn-primary">{{ lang.translate('hero.cta') }}</a>
            <a href="assets/cv.html" target="_blank" class="btn btn-outline">{{ lang.translate('nav.resume') }}</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-wrapper">
            <!-- Used placeholder URL. Users can override with actual image -->
            <img src="assets/images/profile.jpeg" alt="Fadèle TCHAGAFOU" (error)="onImgError($event)" />
            <div class="glow"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 70px; /* navbar height */
    }
    .hero-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4rem;
    }
    .hero-content {
      flex: 1;
      max-width: 600px;
    }
    .greeting {
      color: var(--primary-color);
      font-family: var(--font-mono);
      font-size: 1.1rem;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    .name {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    .title {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      line-height: 1.1;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }
    .subtitle {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 2.5rem;
      max-width: 500px;
    }
    .cta-group {
      display: flex;
      gap: 1rem;
    }
    .btn {
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .btn-primary {
      background-color: var(--primary-color);
      color: white;
      box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
      &:hover {
        background-color: var(--primary-hover);
        transform: translateY(-2px);
      }
    }
    .btn-outline {
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      &:hover {
        background-color: rgba(59, 130, 246, 0.1);
        transform: translateY(-2px);
      }
    }
    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .image-wrapper {
      position: relative;
      width: 100%;
      max-width: 400px;
      aspect-ratio: 1;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      overflow: hidden;
      animation: morph 8s ease-in-out infinite;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      
      img {
        width: 100%; height: 100%; object-fit: cover; z-index: 2; position: relative;
      }
      .glow {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
        opacity: 0.2; z-index: 1;
      }
    }
    
    @keyframes morph {
      0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    }

    @media (max-width: 992px) {
      .hero-container { flex-direction: column-reverse; text-align: center; }
      .subtitle { margin: 0 auto 2.5rem; }
      .cta-group { justify-content: center; }
    }
  `]
})
export class HeroComponent {
  lang = inject(LanguageService);

  onImgError(event: Event) {
    // Basic fallback if image is missing
    (event.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Fadele+T&size=400&background=random';
  }
}
