import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEditSalesPersonPage } from './add-edit-sales-person.page';

const routes: Routes = [
  {
    path: '',
    component: AddEditSalesPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEditSalesPersonPageRoutingModule {}
