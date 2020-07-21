import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SalesPersonComponent} from './salesPerson/salesPerson.component';
import {SalesPersonPlaceholderComponent} from './salesPerson-placeholder/salesPerson-placeholder.component';
import {AddEditSalesPersonComponent} from './add-edit-salesPerson/add-edit-salesPerson.component';

const routes: Routes = [
    {
        path: '',
        component: SalesPersonPlaceholderComponent,
        children: [
            {
                path: 'edit',
                component: AddEditSalesPersonComponent
            },
            {
                path: 'add',
                component: AddEditSalesPersonComponent
            },
            {
                path: '',
                component: SalesPersonComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SalesPersonRoutingModule {
}
