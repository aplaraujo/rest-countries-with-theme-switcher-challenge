import { Component, DOCUMENT, inject, Renderer2, effect, signal } from '@angular/core';
import { BrowserStorageService } from '../browser-storage-service';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})
export class ThemeSwitcher {
  private document = inject(DOCUMENT);
  private renderer = inject(Renderer2);
  private htmlElement = this.document.documentElement;
  private browserStorageService = inject(BrowserStorageService);

  darkMode = signal<boolean>(
    this.browserStorageService.get('darkMode') === 'true'
  );

  constructor() {
    effect(() => {
      const isDark = this.darkMode();

      if(isDark) {
        this.renderer.addClass(this.htmlElement, 'dark');
      } else {
        this.renderer.removeClass(this.htmlElement, 'dark');
      }
      this.browserStorageService.set('darkMode', String(isDark));
    });
  }

  toggle() {
    this.darkMode.update(prev => !prev);
  }
}
