import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalesPersonRoutingModule } from './salesPerson.routing.module';

import { SalesPersonComponent } from './salesPerson/salesPerson.component';
import {SalesPersonPlaceholderComponent } from './salesPerson-placeholder/salesPerson-placeholder.component';
import {AddEditSalesPersonComponent } from './add-edit-salesPerson/add-edit-salesPerson.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SalesPersonRoutingModule
  ],
  declarations: [SalesPersonComponent, SalesPersonPlaceholderComponent, AddEditSalesPersonComponent]
})
export class SalesPersonModule {}
