import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthProvider } from '../User/authprovider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private menu: MenuController,private route:Router,private auth:AuthProvider) { }

  ngOnInit() {
  
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openMenu() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  navigate(navRoute:string):void{
    this.menu.close();
    this.route.navigate([navRoute])
  }

  logout(){
    this.menu.close();
    this.auth.clearToken();
    this.route.navigate([""])
  }

}
