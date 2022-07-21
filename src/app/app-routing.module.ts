import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './countries/pages/country/country.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { CountryDetailComponent } from './countries/pages/country-detail/country-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'country/:id',
    component: CountryDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
