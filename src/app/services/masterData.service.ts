
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRes, UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';
import { CompanyProvider } from '../component/home/company/companyProvider';
import { CompanyModel } from '../Model/CompanyModel';
import { WebRequestService } from './web-request.service'; 
import { StateModal } from '../Model/StateModal';
import { CityModal } from '../Model/CityModal';
import {State, City} from 'src/app/constant/routes';

@Injectable({
    providedIn: 'root'
})

export class MasterService {

    companies: CompanyModel[] = [];
    states: StateModal[] = [];
    cities: CityModal[] = [];
    constructor(private CompanyProvider: CompanyProvider,
        private webService: WebRequestService) {
    }

    public getCompany() {
        if (this.companies.length == 0) {
            this.CompanyProvider.getCompanyForUser().subscribe((data:any) => {
                this.companies = data;
                return this.companies;
            });
        }
        else
            return this.companies;
    }

    // to Get Statwise data
    getState() {
        debugger
        if(this.states.length === 0){
            this.CompanyProvider.loadState().subscribe((resp:any) => {
                this.states = resp;
                return this.states;
            })
        } else {
            return this.states;
        }
        // this.webService.getData(State.get)
    }
    // to City data
    getCity() {
        if(this.cities.length === 0){
            this.CompanyProvider.loadCity().subscribe((resp:any) => {
                this.cities = resp;
            })
        } else {
            return this.cities;
        }
    }

    public loadState() {
        return this.webService.getData(State.get);
    }
    public loadCity() {
        return this.webService.getData(City.get);
    }
}