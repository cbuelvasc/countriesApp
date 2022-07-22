import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _url: string = 'https://restcountries.com/v2';

  public get httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name,capital,population,flag,alpha2Code'
    );
  }

  constructor(private http: HttpClient) {}

  searchByCountry(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._url}/name/${query}`, {
      params: this.httpParams,
    });
  }

  searchByCapital(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._url}/capital/${query}`, {
      params: this.httpParams,
    });
  }

  searchByCountryCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${this._url}/alpha/${id}`);
  }

  searchByRegion(query: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this._url}/region/${query}`, {
      params: this.httpParams,
    });
  }
}
