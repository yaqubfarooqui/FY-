import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductPlaceholderComponent} from './product-placeholder/product-placeholder.component';
import {AddEditProductComponent} from './add-edit-product/add-edit-product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductPlaceholderComponent,
        children: [
            {
                path: 'edit',
                component: AddEditProductComponent
            },
            {
                path: 'add',
                component: AddEditProductComponent
            },
            {
                path: '',
                component: ProductComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
