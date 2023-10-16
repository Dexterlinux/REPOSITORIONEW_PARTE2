import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroalumnobasePage } from './registroalumnobase.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroalumnobasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroalumnobasePageRoutingModule {}
