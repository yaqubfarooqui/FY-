import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product.routing.module';

import { ProductComponent } from './product/product.component';
import {ProductPlaceholderComponent } from './product-placeholder/product-placeholder.component';
import {AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent, ProductPlaceholderComponent, AddEditProductComponent]
})
export class ProductModule {}
