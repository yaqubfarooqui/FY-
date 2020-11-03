import {LoginModel} from 'src/app/Model/loginModel';
import {Observable} from 'rxjs';
import {HttpRes} from 'src/app/Model/UserModel';
import {WebRequestService} from 'src/app/services/web-request.service';
import {LOGIN, PurchaseInvoice} from 'src/app/constant/routes';
import {Injectable} from '@angular/core';
import {PurchaseInvoiceModel} from '../../Model/PurchaseInvoiceModel';

@Injectable({
    providedIn: 'root'
})

export class TransactionProvider {
    cModel: PurchaseInvoiceModel = new PurchaseInvoiceModel();

    constructor(private webservice: WebRequestService) {
    }

    public getPurchaseInvoiceForUser() {
        return this.webservice.getData(PurchaseInvoice.get);
    }

    public addPurchaseInvoiceForUser(sData: PurchaseInvoiceModel): Observable<HttpRes<any>> {
        return this.webservice.postData(PurchaseInvoice.get, sData);
    }

    public updatePurchaseInvoiceForUser(sData: PurchaseInvoiceModel): Observable<HttpRes<any>> {
        const UpdateUrl =  PurchaseInvoice.get + '/' + sData._id;
        return this.webservice.patchData(UpdateUrl, sData);
    }

    public setcModel(cModel: PurchaseInvoiceModel): void {
        this.cModel = cModel;
    }

    public getcModel(): PurchaseInvoiceModel {
        return this.cModel;
    }
}
