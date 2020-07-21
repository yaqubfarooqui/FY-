
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRes, UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';
import { CompanyProvider } from '../component/home/company/companyProvider';
import { CompanyModel } from '../Model/CompanyModel';

@Injectable({
    providedIn: 'root'
})

export class MasterService {

    companies: CompanyModel[] = [];
    constructor(private CompanyProvider: CompanyProvider) {
    }

    public getCompany() {
        if (this.companies.length == 0) {
            this.CompanyProvider.getCompanyForUser().subscribe((data) => {
                this.companies = data.Data;
                return this.companies;
            });
        }
        else
            return this.companies;
    }
}