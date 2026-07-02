import { Component } from '@angular/core';
import { EDarkLight } from '../enums/dark-light';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  icon: string = EDarkLight.ICON_MOON;
  toggle() {
    const theme = document.body.classList.toggle('dark-mode');

    if (theme) {
      return this.icon = EDarkLight.ICON_MOON_FILLED;
    } 
    return (this.icon = EDarkLight.ICON_MOON);
  }
}
