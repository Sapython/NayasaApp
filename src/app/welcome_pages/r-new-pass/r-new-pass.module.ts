import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RNewPassPageRoutingModule } from './r-new-pass-routing.module';

import { RNewPassPage } from './r-new-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RNewPassPageRoutingModule
  ],
  declarations: [RNewPassPage]
})
export class RNewPassPageModule {}
