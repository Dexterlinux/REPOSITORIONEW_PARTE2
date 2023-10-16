import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciapersonalPage } from './asistenciapersonal.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciapersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciapersonalPageRoutingModule {}
