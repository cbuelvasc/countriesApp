import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent {
  query: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.query = query;
    this.countryService.searchByCapital(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }
}
