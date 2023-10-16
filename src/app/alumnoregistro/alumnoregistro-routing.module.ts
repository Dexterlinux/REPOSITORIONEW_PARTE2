import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnoregistroPage } from './alumnoregistro.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnoregistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoregistroPageRoutingModule {}
