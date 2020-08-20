import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule
 } from '@angular/forms';

import { CompanyRoutingModule } from './company.routing.module';

import { CompanyComponent } from './company/company.component';
import { CompanyPlaceholderComponent } from './company-placeholder/company-placeholder.component';
import {AddEditCompanyComponent} from './add-edit-company/add-edit-company.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, CompanyPlaceholderComponent, AddEditCompanyComponent]
})
export class CompanyModule {}
