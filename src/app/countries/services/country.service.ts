import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _url: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchByCountry(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._url}/name/${query}`);
  }
}
