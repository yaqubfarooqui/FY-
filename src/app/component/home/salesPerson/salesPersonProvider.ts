import {LoginModel} from 'src/app/Model/loginModel';
import {Observable} from 'rxjs';
import {HttpRes} from 'src/app/Model/UserModel';
import {WebRequestService} from 'src/app/services/web-request.service';
import {LOGIN, SalesPerson} from 'src/app/constant/routes';
import {Injectable} from '@angular/core';
import {SalesPersonModel} from '../../../Model/SalesPersonModel';

@Injectable({
    providedIn: 'root'
})

export class SalesPersonProvider {
    cModel: SalesPersonModel = new SalesPersonModel();

    constructor(private webservice: WebRequestService) {
    }

    public getSalesPersonForUser() {
        return this.webservice.getData(SalesPerson.get);
    }

    public addSalesPersonForUser(sData: SalesPersonModel): Observable<HttpRes<any>> {
        debugger
        return this.webservice.postData(SalesPerson.get, sData);
    }

    public updateSalesPersonForUser(sData: SalesPersonModel): Observable<HttpRes<any>> {
        const UpdateUrl =  SalesPerson.get;
        return this.webservice.patchData(UpdateUrl, sData);
    }

    public setcModel(cModel: SalesPersonModel): void {
        this.cModel = cModel;
    }

    public getcModel(): SalesPersonModel {
        return this.cModel;
    }
}
