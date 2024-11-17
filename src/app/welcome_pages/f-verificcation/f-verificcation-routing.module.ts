import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FVerificcationPage } from './f-verificcation.page';

const routes: Routes = [
  {
    path: '',
    component: FVerificcationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FVerificcationPageRoutingModule {}
