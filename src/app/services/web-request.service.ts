

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRes, UserModel } from '../Model/UserModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  constructor(private http: HttpClient) { }
  configUrl = 'ttp://fy5api.azurewebsites.net';
//  configUrl = 'http://localhost:3000/Company/registercompany';

  private getUri(uri:string):string{
    return uri
  }
  public postData(uri :string, data: any): Observable<HttpRes<any>> {
    return this.http.post<HttpRes<any>>(this.getUri(uri), data);
  }
  public getData(uri :string): Observable<HttpRes<any>> {
    return this.http.get<HttpRes<any>>(this.getUri(uri));
  }

  public patchData(uri :string, data: any): Observable<HttpRes<any>> {
    return this.http.put<HttpRes<any>>(this.getUri(uri),data);
  }

  public deleteData(uri :string, data?: any): Observable<HttpRes<any>> {
    return this.http.delete<HttpRes<any>>(this.getUri(uri));
  }

}



