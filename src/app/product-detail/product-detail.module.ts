import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
  ],
  declarations: [ProductDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailPageModule { }
