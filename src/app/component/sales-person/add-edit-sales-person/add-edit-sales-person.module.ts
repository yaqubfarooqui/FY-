import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditSalesPersonPageRoutingModule } from './add-edit-sales-person-routing.module';

import { AddEditSalesPersonPage } from './add-edit-sales-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditSalesPersonPageRoutingModule
  ],
  declarations: [AddEditSalesPersonPage]
})
export class AddEditSalesPersonPageModule {}
