import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class RegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  countries: Country[] = [];
  activeRegion: string = '';

  constructor(private countryService: CountryService) {}

  getClassCSS(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.countries = [];
    this.countryService
      .searchByRegion(region)
      .subscribe((countries) => (this.countries = countries));
  }
}
