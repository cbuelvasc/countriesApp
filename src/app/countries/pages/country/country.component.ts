import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [],
})
export class CountryComponent {
  query: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string) {
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

  suggestions(query: string) {}
}
