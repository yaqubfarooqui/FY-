import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PurchaseInvoiceComponent} from './purchaseInvoice/purchaseInvoice.component';
import {PurchaseInvoicePlaceholderComponent} from './purchaseInvoice-placeholder/purchaseInvoice-placeholder.component';
import {AddEditPurchaseInvoiceComponent} from './add-edit-PurchaseInvoice/add-edit-PurchaseInvoice.component';

const routes: Routes = [
    {
        path: '',
        component: PurchaseInvoicePlaceholderComponent,
        children: [
            {
                path: 'edit',
                component: AddEditPurchaseInvoiceComponent
            },
            {
                path: 'add',
                component: AddEditPurchaseInvoiceComponent
            },
            {
                path: '',
                component: PurchaseInvoiceComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurchaseInvoiceRoutingModule {
}
