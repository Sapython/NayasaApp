import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FNewPassPageRoutingModule } from './f-new-pass-routing.module';

import { FNewPassPage } from './f-new-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FNewPassPageRoutingModule
  ],
  declarations: [FNewPassPage]
})
export class FNewPassPageModule {}
