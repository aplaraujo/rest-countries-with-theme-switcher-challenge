import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country-service';
import { ICountry } from '../country';
import { Header } from '../header/header';

@Component({
  selector: 'app-details',
  imports: [Header],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  countryService = inject(CountryService);
  country: ICountry | undefined;

  constructor() {
    const countryAlphaCode = this.route.snapshot.params['alpha3Code'];
    this.country = this.countryService.getCountryByAlphaCode(countryAlphaCode);
  }
}
