import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';

const routes: Routes = [
  
  {
    path: 'edit',
    loadChildren: () => import('./add-edit-product/add-edit-product.module').then( m => m.AddEditProductPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-edit-product/add-edit-product.module').then( m => m.AddEditProductPageModule)
  },
  {
    path: '',
    component: ProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
