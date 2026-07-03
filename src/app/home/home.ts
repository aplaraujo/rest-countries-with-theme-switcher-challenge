import { Component,  inject } from '@angular/core';
import { Header } from '../header/header';
import { CountryService } from '../country-service';
import { ICountry } from '../country';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  countryList: ICountry[] = [];
  countryService: CountryService = inject(CountryService);

  constructor() {
    this.countryList = this.countryService.getAllCountries();
  }

  regionArr:string[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
}
