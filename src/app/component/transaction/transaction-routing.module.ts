import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionPage } from './transaction.page';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => import('./add-edit-transaction/add-edit-transaction.module').then( m => m.AddEditTransactionPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-edit-transaction/add-edit-transaction.module').then( m => m.AddEditTransactionPageModule)
  },
  {
    path: '',
    component: TransactionPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionPageRoutingModule {}
