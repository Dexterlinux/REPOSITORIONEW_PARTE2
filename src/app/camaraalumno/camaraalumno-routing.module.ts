import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraalumnoPage } from './camaraalumno.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraalumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraalumnoPageRoutingModule {}
