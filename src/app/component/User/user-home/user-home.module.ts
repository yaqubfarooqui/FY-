import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserHomeRoutingModule } from './user-home.routing.module';

import { UserHomeComponent } from './user-home.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { LoginUserComponent } from '../login-user/login-user.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserHomeRoutingModule
  ],
  declarations: [UserHomeComponent,RegisterUserComponent,LoginUserComponent]
})
export class UserHomeModule {}
