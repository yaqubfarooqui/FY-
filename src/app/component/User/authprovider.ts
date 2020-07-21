import {LoginModel} from 'src/app/Model/loginModel';
import {Observable} from 'rxjs';
import {HttpRes, UserModel} from 'src/app/Model/UserModel';
import {WebRequestService} from 'src/app/services/web-request.service';
import {LOGIN, user} from 'src/app/constant/routes';
import {Injectable} from '@angular/core';
import {TOKEN} from 'src/app/constant/misc';

@Injectable({
    providedIn: 'root'
})

export class AuthProvider {
    constructor(private webservice: WebRequestService) {
    }

    public loginUser(lgModel: LoginModel) {
        return this.webservice.postData(LOGIN, lgModel);
    }

    public registerUser(uModel: UserModel) {
        return this.webservice.postData(user.REGISTRATION, uModel);
    }

    public setToken(authToken: string) {
        sessionStorage.setItem(TOKEN, authToken);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN);
    }

    public clearToken() {
        sessionStorage.removeItem(TOKEN);
    }

}
