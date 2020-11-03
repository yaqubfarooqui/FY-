import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEditBuyerSellerPageRoutingModule } from './add-edit-buyer-seller-routing.module';

import { AddEditBuyerSellerPage } from './add-edit-buyer-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddEditBuyerSellerPageRoutingModule
  ],
  declarations: [AddEditBuyerSellerPage]
})
export class AddEditBuyerSellerPageModule {}
