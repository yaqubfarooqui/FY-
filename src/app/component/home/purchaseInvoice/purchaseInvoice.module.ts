import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PurchaseInvoiceRoutingModule } from './PurchaseInvoice.routing.module';

import { PurchaseInvoiceComponent } from './purchaseInvoice/purchaseInvoice.component';
import {PurchaseInvoicePlaceholderComponent } from './purchaseInvoice-placeholder/purchaseInvoice-placeholder.component';
import {AddEditPurchaseInvoiceComponent } from './add-edit-PurchaseInvoice/add-edit-PurchaseInvoice.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PurchaseInvoiceRoutingModule
  ],
  declarations: [PurchaseInvoiceComponent, PurchaseInvoicePlaceholderComponent, AddEditPurchaseInvoiceComponent]
})
export class PurchaseInvoiceModule {}
