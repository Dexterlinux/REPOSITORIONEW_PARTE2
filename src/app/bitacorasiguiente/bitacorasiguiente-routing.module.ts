import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BitacorasiguientePage } from './bitacorasiguiente.page';

const routes: Routes = [
  {
    path: '',
    component: BitacorasiguientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BitacorasiguientePageRoutingModule {}
