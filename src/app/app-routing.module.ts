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
  }, {
    path: 'buyer-seller',
    loadChildren: () => import('./component/buyer-seller/buyer-seller.module').then( m => m.BuyerSellerPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sales-person',
    loadChildren: () => import('./component/sales-person/sales-person.module').then( m => m.SalesPersonPageModule)
  }, 
  {
    path: 'transaction',
    loadChildren: () => import('./component/transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./component/product/product.module').then( m => m.ProductPageModule)
  } 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
