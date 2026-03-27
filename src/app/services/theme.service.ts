import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  constructor() {
    this.initTheme();
    
    // Auto sync with root data-theme attribute
    effect(() => {
      if (typeof document !== 'undefined') {
        if (this.isDarkMode()) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
      }
    });
  }

  private initTheme(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDarkMode.set(true);
      } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Fallback to OS preference
        this.isDarkMode.set(true);
      }
    }
  }

  toggleTheme(): void {
    const newThemeState = !this.isDarkMode();
    this.isDarkMode.set(newThemeState);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newThemeState ? 'dark' : 'light');
    }
  }
}
