import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditBuyerSellerPage } from './add-edit-buyer-seller.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditBuyerSellerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditBuyerSellerPageRoutingModule {}
