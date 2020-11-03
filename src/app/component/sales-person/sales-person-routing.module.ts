import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesPersonPage } from './sales-person.page';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => import('./add-edit-sales-person/add-edit-sales-person.module').then( m => m.AddEditSalesPersonPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-edit-sales-person/add-edit-sales-person.module').then( m => m.AddEditSalesPersonPageModule)
  },
  {
    path: '',
    component: SalesPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesPersonPageRoutingModule {}
