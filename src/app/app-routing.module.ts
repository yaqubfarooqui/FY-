import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/User/user-home/user-home.module').then(m => m.UserHomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule)
  }/*,
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
