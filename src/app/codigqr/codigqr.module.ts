import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigqrPageRoutingModule } from './codigqr-routing.module';

import { CodigqrPage } from './codigqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigqrPageRoutingModule
  ],
  declarations: [CodigqrPage]
})
export class CodigqrPageModule {}
