import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerSellerPageRoutingModule } from './buyer-seller-routing.module';
import { BuyerSellerPage } from './buyer-seller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    BuyerSellerPageRoutingModule
  ],
  declarations: [BuyerSellerPage]
})
export class BuyerSellerPageModule {}
