import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {CompanyPlaceholderComponent} from './company-placeholder/company-placeholder.component';
import {AddEditCompanyComponent} from './add-edit-company/add-edit-company.component';

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent,
        children: [
            {
                path: 'edit',
                component: AddEditCompanyComponent
            },
            {
                path: 'add',
                component: AddEditCompanyComponent
            },
            {
                path: '',
                component: CompanyComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule {
}
