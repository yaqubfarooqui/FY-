import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerSellerPage } from './buyer-seller.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerSellerPage
  },
  {
    path: 'edit',
    loadChildren: () => import('./add-edit-buyer-seller/add-edit-buyer-seller.module').then( m => m.AddEditBuyerSellerPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-edit-buyer-seller/add-edit-buyer-seller.module').then( m => m.AddEditBuyerSellerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerSellerPageRoutingModule {}
