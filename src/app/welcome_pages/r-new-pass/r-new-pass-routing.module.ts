import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RNewPassPage } from './r-new-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RNewPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RNewPassPageRoutingModule {}
