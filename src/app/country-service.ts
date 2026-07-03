import { Injectable } from '@angular/core';
import { ICountry } from './country';
import { countries } from './countries';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  protected countryList: ICountry[] = countries as ICountry[];

  getAllCountries(): ICountry[] {
    return this.countryList;
  }

  getCountryByAlphaCode(alpha3Code: string): ICountry | undefined {
    return this.countryList.find((country) => country.alpha3Code === alpha3Code);
  }
}
