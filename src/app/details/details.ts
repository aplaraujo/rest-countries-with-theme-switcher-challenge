import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryService } from '../country-service';
import { ICountry } from '../country';
import { Header } from '../header/header';
import { AlphaCodeToNamePipe } from '../alpha-code-to-name-pipe';

@Component({
  selector: 'app-details',
  imports: [Header, RouterLink, AlphaCodeToNamePipe],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  route: ActivatedRoute = inject(ActivatedRoute);
  countryService = inject(CountryService);
  country: ICountry | undefined;

  constructor() {
    this.route.params.subscribe((param) => {
      const alphaCode = param['alpha3Code'];
      this.country = this.countryService.getCountryByAlphaCode(alphaCode);
      this.changeDetectorRef.markForCheck();
    })
  }
}
