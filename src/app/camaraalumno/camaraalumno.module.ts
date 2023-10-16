import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraalumnoPageRoutingModule } from './camaraalumno-routing.module';

import { CamaraalumnoPage } from './camaraalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraalumnoPageRoutingModule
  ],
  declarations: [CamaraalumnoPage]
})
export class CamaraalumnoPageModule {}
