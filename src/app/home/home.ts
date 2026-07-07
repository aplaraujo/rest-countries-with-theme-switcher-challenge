import { Component,  inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  startWith,
} from 'rxjs/operators';
import { Header } from '../header/header';
import { CountryService } from '../country-service';
import { ICountry } from '../country';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RegionFilterPipe } from '../region-filter-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, RegionFilterPipe, ReactiveFormsModule, CommonModule, AsyncPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{
  countryList: ICountry[] = [];
  countryService: CountryService = inject(CountryService);
  filteredCountries!: Observable<any[]>;
  
  constructor() {
    this.countryList = this.countryService.getAllCountries();
  }

  regionArr:string[] = ['Africa', 'Americas', 'Antarctic Ocean' ,'Asia', 'Europe', 'Oceania'];
  regionOption = '';
  countryText = '';

  region = new FormControl(this.regionOption);
  country = new FormControl(this.countryText);
  
  handleSelect(event: any) {
    return this.regionOption = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {
    this.filteredCountries = this.country.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map((term) => term ? term.trim().toLowerCase() : ''),
      switchMap((term) => {
        if (!term) {
          return of(this.countryList)
        }

        return of(this.countryList.filter((country) => country.name.toLowerCase().includes(term)));
      })
    )
  }
}
