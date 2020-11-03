import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditTransactionPage } from './add-edit-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditTransactionPageRoutingModule {}
