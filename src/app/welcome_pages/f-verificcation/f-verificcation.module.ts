import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FVerificcationPageRoutingModule } from './f-verificcation-routing.module';

import { FVerificcationPage } from './f-verificcation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FVerificcationPageRoutingModule
  ],
  declarations: [FVerificcationPage]
})
export class FVerificcationPageModule {}
