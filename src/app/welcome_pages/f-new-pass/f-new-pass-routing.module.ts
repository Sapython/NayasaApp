import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FNewPassPage } from './f-new-pass.page';

const routes: Routes = [
  {
    path: '',
    component: FNewPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FNewPassPageRoutingModule {}
