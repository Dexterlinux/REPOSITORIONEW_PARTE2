import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagmaquetaPageRoutingModule } from './pagmaqueta-routing.module';

import { PagmaquetaPage } from './pagmaqueta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagmaquetaPageRoutingModule
  ],
  declarations: [PagmaquetaPage]
})
export class PagmaquetaPageModule {}
