import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RVerificcationPage } from './r-verificcation.page';

const routes: Routes = [
  {
    path: '',
    component: RVerificcationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RVerificcationPageRoutingModule {}
