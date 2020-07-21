import { Component, OnInit } from '@angular/core';
import { LoginModel, LoginResonse } from 'src/app/Model/loginModel';
import { AuthProvider } from '../authprovider';
import { HttpRes } from 'src/app/Model/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnInit {

  constructor(
    private authProvide:AuthProvider,
    private route:Router
    ) { }
  loginModel:LoginModel = new LoginModel();
  
  public login():void{
    this.authProvide.loginUser(this.loginModel).subscribe((data:any)=>{
      let autData = data as LoginResonse;
      this.authProvide.setToken(data.Token)
      this.route.navigate(["/home"]);
    });    
  }

  ngOnInit() {}

}
