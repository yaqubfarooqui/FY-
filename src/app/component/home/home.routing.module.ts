import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeComponent} from '../User/user-home/user-home.component';
import {LoginUserComponent} from '../User/login-user/login-user.component';
import {RegisterUserComponent} from '../User/register-user/register-user.component';
import {HomeComponent} from './home.component';
import {CompanyComponent} from './company/company/company.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SalesPersonComponent} from './salesPerson/salesPerson/salesPerson.component';
import {PurchaseInvoiceComponent} from './purchaseInvoice/purchaseInvoice/purchaseInvoice.component';
import {ProductComponent} from './product/product/product.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'company',
                loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
            },
            {
                path: 'salesPerson',
                loadChildren: () => import('./salesPerson/salesPerson.module').then(m => m.SalesPersonModule)
            },
            {
                path: 'purchaseInvoice',
                loadChildren: () => import('./purchaseInvoice/purchaseInvoice.module').then(m => m.PurchaseInvoiceModule)
            },
            {
                path: 'product',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
            },
            {
                path: '',
                component: HomepageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
