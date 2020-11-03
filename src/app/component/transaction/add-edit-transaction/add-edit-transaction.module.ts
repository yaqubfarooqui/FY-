import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditTransactionPageRoutingModule } from './add-edit-transaction-routing.module';

import { AddEditTransactionPage } from './add-edit-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEditTransactionPageRoutingModule
  ],
  declarations: [AddEditTransactionPage]
})
export class AddEditTransactionPageModule {}
