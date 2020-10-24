import {LoginModel} from 'src/app/Model/loginModel';
import {Observable} from 'rxjs';
import {HttpRes} from 'src/app/Model/UserModel';
import {WebRequestService} from 'src/app/services/web-request.service';
import {LOGIN, Company, State, City} from 'src/app/constant/routes';
import {Injectable} from '@angular/core';
import {CompanyModel} from '../../../Model/CompanyModel';
import { StateModal } from 'src/app/Model/StateModal';

@Injectable({
    providedIn: 'root'
})

export class CompanyProvider {
    cModel: CompanyModel = new CompanyModel();

    constructor(private webservice: WebRequestService) {
    }

    public getCompanyForUser() {
        return this.webservice.getData(Company.get);
    }

    public addCompanyForUser(cData: CompanyModel): Observable<HttpRes<any>> {
        return this.webservice.postData(Company.get, cData);
    }

    public updateCompanyForUser(cData: CompanyModel): Observable<HttpRes<any>> {
        const UpdateUrl =  Company.get  //+ '/' + cData._id;
        return this.webservice.patchData(UpdateUrl, cData);
    }

    public setcModel(cModel: CompanyModel): void {
        this.cModel = cModel;
    }

    public getcModel(): CompanyModel {
        return this.cModel;
    }
    public loadState() {
        return this.webservice.getData(State.get);
    }
    public loadCity() {
        return this.webservice.getData(City.get);
    }
}
