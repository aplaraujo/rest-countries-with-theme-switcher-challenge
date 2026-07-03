import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  regionArr:string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
}
