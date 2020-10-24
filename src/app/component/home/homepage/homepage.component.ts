import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthProvider } from '../../User/authprovider';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor(private menu: MenuController,private route:Router,private auth:AuthProvider) { }

  ngOnInit() {}

  // Function for navigate sidebar menu and closed

  
  navigate(navRoute:string):void{
    this.menu.close();
    this.route.navigate([navRoute])
  }
}
