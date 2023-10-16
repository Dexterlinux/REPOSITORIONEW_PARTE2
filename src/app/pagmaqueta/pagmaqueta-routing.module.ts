import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagmaquetaPage } from './pagmaqueta.page';

const routes: Routes = [
  {
    path: '',
    component: PagmaquetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagmaquetaPageRoutingModule {}
