import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home.component';
import { LoginUserComponent } from '../login-user/login-user.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
const routes: Routes = [
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      {
        path: 'login',
        component:LoginUserComponent
      },
      {
        path: 'registration',
        component:RegisterUserComponent
      },
      {
        path: '',
        redirectTo: '/user/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule {}
