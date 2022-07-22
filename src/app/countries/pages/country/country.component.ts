import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class CountryComponent {
  query: string = '';
  isError: boolean = false;
  countries: Country[] = [];
  suggestionCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.showSuggestion = false;
    this.query = query;
    this.countryService.searchByCountry(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.isError = true;
        this.countries = [];
      }
    );
  }

  suggestions(query: string): void {
    this.query = query;
    this.showSuggestion = true;
    this.countryService.searchByCountry(query).subscribe(
      (countries) => (this.suggestionCountries = countries.splice(0, 5)),
      (error) => (this.suggestionCountries = [])
    );
  }
}
