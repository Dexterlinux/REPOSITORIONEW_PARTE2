import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroalumnobasePageRoutingModule } from './registroalumnobase-routing.module';

import { RegistroalumnobasePage } from './registroalumnobase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroalumnobasePageRoutingModule
  ],
  declarations: [RegistroalumnobasePage]
})
export class RegistroalumnobasePageModule {}
