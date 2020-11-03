import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesPersonPageRoutingModule } from './sales-person-routing.module';

import { SalesPersonPage } from './sales-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesPersonPageRoutingModule
  ],
  declarations: [SalesPersonPage]
})
export class SalesPersonPageModule {}
