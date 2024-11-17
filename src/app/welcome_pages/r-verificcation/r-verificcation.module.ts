import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RVerificcationPageRoutingModule } from './r-verificcation-routing.module';

import { RVerificcationPage } from './r-verificcation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RVerificcationPageRoutingModule
  ],
  declarations: [RVerificcationPage]
})
export class RVerificcationPageModule {}
