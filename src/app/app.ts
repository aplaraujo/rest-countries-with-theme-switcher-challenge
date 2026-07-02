import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
