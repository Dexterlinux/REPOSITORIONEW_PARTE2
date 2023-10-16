import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigqrPage } from './codigqr.page';

const routes: Routes = [
  {
    path: '',
    component: CodigqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigqrPageRoutingModule {}
