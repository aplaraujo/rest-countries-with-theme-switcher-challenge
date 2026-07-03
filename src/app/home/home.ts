import { Component,  inject } from '@angular/core';
import { Header } from '../header/header';
import { CountryService } from '../country-service';
import { ICountry } from '../country';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RegionFilterPipe } from '../region-filter-pipe';

@Component({
  selector: 'app-home',
  imports: [Header, RegionFilterPipe, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  countryList: ICountry[] = [];
  countryService: CountryService = inject(CountryService);
  
  constructor() {
    this.countryList = this.countryService.getAllCountries();
  }

  regionArr:string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionOption = '';

  countryForm = new FormGroup({
    region: new FormControl(this.regionOption)
  });

  handleSelect(event: any) {
    return this.regionOption = (event.target as HTMLInputElement).value;
  }
}
