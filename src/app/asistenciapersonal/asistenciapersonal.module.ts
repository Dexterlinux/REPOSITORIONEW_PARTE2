import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciapersonalPageRoutingModule } from './asistenciapersonal-routing.module';

import { AsistenciapersonalPage } from './asistenciapersonal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciapersonalPageRoutingModule
  ],
  declarations: [AsistenciapersonalPage]
})
export class AsistenciapersonalPageModule {}
