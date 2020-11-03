import { Component, OnInit } from '@angular/core';
import { SalesPersonModel } from 'src/app/Model/SalesPersonModel';
import { SalesPersonProvider } from './salesPersonProvider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-sales-person',
  templateUrl: './sales-person.page.html',
  styleUrls: ['./sales-person.page.scss'],
})
export class SalesPersonPage implements OnInit {

 
  constructor(private sProvider: SalesPersonProvider, private router: Router, private location:Location) { }

  salesPersonData = [];
  selectedSalesPerson: SalesPersonModel;
  showSelected = false;
  
  

  salesPersonLabels = ['Name', 'Mobile1', 'Mobile2', 'Email', 'Aadhar', 'Salary'];

      salesPersonKeyLabels = {
      'Name': 'Name', 'Mobile1': 'Mobile',
      'Mobile2': 'Mobile', 'Email': 'Email',
      'Aadhar': 'Aadhar', 'Salary': 'Salary',      
  };

  private loadSalesPerson() {
      this.sProvider.getSalesPersonForUser().subscribe((data:any) => {
          this.salesPersonData = data;
          this.selectedSalesPerson = data[0];
      });
  }

  showSelectedsalesPerson(index) {
      this.showSelected = true;
      this.selectedSalesPerson = this.salesPersonData[index] as SalesPersonModel;   
  }

  onBackPressed() {
      this.showSelected = false;
  }

  navigate(navRoute: string): void {
      if (navRoute === '/sales-person/edit') {
          this.sProvider.setcModel(this.selectedSalesPerson);
      }
      this.router.navigate([navRoute]);
  }
  
  fnDelete(id: number){
    this.sProvider.deleteSalesPerson(id).subscribe(resp => {
        if(resp){
            console.log(resp);
            this.loadSalesPerson();
        }
    });
    this.loadSalesPerson();
}

  onBackButton() {
    this.location.back();
}
  ngOnInit() {
      this.loadSalesPerson();
  }
}
