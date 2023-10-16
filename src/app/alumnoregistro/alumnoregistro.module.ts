import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoregistroPageRoutingModule } from './alumnoregistro-routing.module';

import { AlumnoregistroPage } from './alumnoregistro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoregistroPageRoutingModule
  ],
  declarations: [AlumnoregistroPage]
})
export class AlumnoregistroPageModule {}
