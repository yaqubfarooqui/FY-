import {LoginModel} from 'src/app/Model/loginModel';
import {Observable} from 'rxjs';
import {HttpRes} from 'src/app/Model/UserModel';
import {WebRequestService} from 'src/app/services/web-request.service';
import {LOGIN, Product} from 'src/app/constant/routes';
import {Injectable} from '@angular/core';
import {ProductModel} from '../../Model/ProductModel';

@Injectable({
    providedIn: 'root'
})

export class ProductProvider {
    cModel: ProductModel = new ProductModel();

    constructor(private webservice: WebRequestService) {
    }

    public getProductForUser() {
        return this.webservice.getData(Product.get);
    }

    public addProductForUser(sData: ProductModel): Observable<HttpRes<any>> {
        return this.webservice.postData(Product.get, sData);
    }

    public updateProductForUser(sData: ProductModel): Observable<HttpRes<any>> {
        const UpdateUrl =  Product.get + '/' + sData._id;
        return this.webservice.patchData(UpdateUrl, sData);
    }

    public deleteProductForUser(id:number){
        const updateURL = Product.get + '/' + id;
        return this.webservice.deleteData(updateURL)
    }

    public setcModel(cModel: ProductModel): void {
        this.cModel = cModel;
    }

    public getcModel(): ProductModel {
        return this.cModel; 
    }
}
