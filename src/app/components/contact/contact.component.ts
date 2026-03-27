import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact section-padding" id="contact">
      <div class="container contact-container">
        
        <div class="contact-info">
          <h2 class="section-title" style="text-align: left;">{{ lang.translate('contact.title') }}</h2>
          <p class="subtitle">{{ lang.translate('hero.subtitle') }}</p>
          
          <div class="info-items">
            <div class="info-item">
              <div class="icon">📍</div>
              <div>
                <h4>Lieu</h4>
                <p>Lomé, Togo (Agoè-Dikamé)</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="icon">📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:fadeletchagafou7@gmail.com">fadeletchagafou7&#64;gmail.com</a>
              </div>
            </div>
            
            <div class="info-item">
              <div class="icon">📞</div>
              <div>
                <h4>Téléphone</h4>
                <a href="tel:+22871391266">+228 71391266</a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form-wrapper">
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">{{ lang.translate('contact.name') }}</label>
              <input type="text" id="name" name="name" [(ngModel)]="formData.name" required #name="ngModel"
                     [class.invalid]="name.invalid && name.touched">
            </div>
            
            <div class="form-group">
              <label for="email">{{ lang.translate('contact.email') }}</label>
              <input type="email" id="email" name="email" [(ngModel)]="formData.email" required 
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" #email="ngModel"
                     [class.invalid]="email.invalid && email.touched">
            </div>
            
            <div class="form-group">
              <label for="message">{{ lang.translate('contact.message') }}</label>
              <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required #message="ngModel"
                        [class.invalid]="message.invalid && message.touched"></textarea>
            </div>
            
            <button type="submit" class="btn btn-submit" [disabled]="contactForm.invalid">
              {{ lang.translate('contact.send') }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-padding { padding: 6rem 0; background-color: rgba(0,0,0,0.02); }
    [data-theme="dark"] .section-padding { background-color: rgba(255,255,255,0.02); }
    
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .section-title::after { left: 0; transform: none; }
    
    .subtitle {
      color: var(--text-muted);
      margin-bottom: 3rem;
      font-size: 1.1rem;
      line-height: 1.6;
    }
    
    .info-items {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .info-item {
      display: flex; gap: 1.5rem; align-items: center;
      
      .icon {
        width: 50px; height: 50px; border-radius: 50%;
        background-color: rgba(59, 130, 246, 0.1);
        display: flex; align-items: center; justify-content: center;
        font-size: 1.5rem; color: var(--primary-color);
      }
      
      h4 { font-size: 1.1rem; margin-bottom: 0.2rem; color: var(--text-color); }
      p, a { color: var(--text-muted); font-size: 1rem; }
      a:hover { color: var(--primary-color); }
    }
    
    .contact-form-wrapper {
      background-color: var(--surface-color);
      padding: 3rem;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-lg);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      
      label {
        display: block; margin-bottom: 0.5rem;
        font-weight: 500; color: var(--text-color); font-size: 0.95rem;
      }
      
      input, textarea {
        width: 100%;
        padding: 0.8rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius-md);
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: inherit; font-size: 1rem;
        transition: all 0.3s ease;
        
        &:focus {
          outline: none; border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
        
        &.invalid {
          border-color: #ef4444;
          &:focus { box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2); }
        }
      }
    }
    
    .btn-submit {
      width: 100%;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;
      border-radius: var(--border-radius-md);
      font-weight: 600; font-size: 1.05rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover:not(:disabled) {
        background-color: var(--primary-hover);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
      }
      
      &:disabled {
        opacity: 0.6; cursor: not-allowed;
      }
    }
    
    @media (max-width: 992px) {
      .contact-container { grid-template-columns: 1fr; gap: 3rem; }
      .contact-form-wrapper { padding: 2rem; }
    }
  `]
})
export class ContactComponent {
  lang = inject(LanguageService);
  
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    const subject = encodeURIComponent(`Nouveau message de ${this.formData.name} (Portfolio)`);
    const body = encodeURIComponent(`Nom: ${this.formData.name}\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`);
    
    // Ouvre le client mail par défaut (Outlook, Gmail, Apple Mail, etc.)
    window.location.href = `mailto:fadeletchagafou7@gmail.com?subject=${subject}&body=${body}`;
    
    alert(this.lang.currentLang() === 'fr' ? 'Ouverture de votre messagerie...' : 'Opening your email client...');
    this.formData = { name: '', email: '', message: '' };
  }
}
