import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitacorasiguientePageRoutingModule } from './bitacorasiguiente-routing.module';

import { BitacorasiguientePage } from './bitacorasiguiente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitacorasiguientePageRoutingModule
  ],
  declarations: [BitacorasiguientePage]
})
export class BitacorasiguientePageModule {}
