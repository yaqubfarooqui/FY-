import { Component, OnInit } from '@angular/core';
import { buyerSellerProvider } from './buyer-seller.provider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CompanyModel } from 'src/app/Model/CompanyModel';
@Component({
  selector: 'app-buyer-seller',
  templateUrl: './buyer-seller.page.html',
  styleUrls: ['./buyer-seller.page.scss'],
})
export class BuyerSellerPage implements OnInit {

  constructor(private cProvider: buyerSellerProvider, private router: Router, private location:Location) {
  }

  companyData = [];
  selectedCompany: CompanyModel;
  showSelected = false;
  COMPANIES = 'Buyer Sellers';
  companyName = this.COMPANIES;

  companyLabels = ['CompanyName', 'CompanyLocation', 'FirstContactName', 'FirstContactMobile', 'FirstContactEmail', 'SecondContactName',
      'SecondContactEmail', 'NatureOfBusiness', 'GSTNumber'];

  companyKeyLabels = {
      'CompanyName': 'Company Name', 'CompanyLocation': 'Company Location',
      'FirstContactName': 'First Contact Name', 'FirstContactMobile': 'First Contact Mobile',
      'FirstContactEmail': 'First Contact Email', 'SecondContactName': 'Second Contact Name',
      'SecondContactEmail': 'Second Contact Email', 'NatureOfBusiness': 'Nature Of Business', 'GSTNumber': 'GST Number'
  };

  private loadCompany() {
      this.cProvider.getCompanyForUser().subscribe((data:any) => {
          if (data) {
              this.companyData = data;
              this.selectedCompany = data[0];
          }

      });
  }

  showSelectedCompany(index) {
      this.showSelected = true;
      this.selectedCompany = this.companyData[index] as CompanyModel;
      this.companyName = this.selectedCompany.name;
  }

  onBackPressed() {
      this.showSelected = false;
      this.companyName = this.COMPANIES;
  }

  navigate(navRoute: string): void {
      if (navRoute === '/buyer-seller/edit') {
          this.cProvider.setcModel(this.selectedCompany);
      }
      this.router.navigate([navRoute]);
  }

  fnDelete(id: number){
      this.cProvider.deleteBuyerSeller(id).subscribe(resp => {
          if(resp){
              console.log(resp);
              this.loadCompany();
          }
      });
      this.loadCompany();
  }
  onBackButton() {
      this.location.back();
  }
  ngOnInit() {
      this.loadCompany();
      // this.cProvider.loadState().subscribe(resp => {
      //     if(resp){
      //         console.log(resp,'load state')
      //     }
      // });
      // this.cProvider.loadCity().subscribe(resp => {
      //     if(resp){
      //         console.log('load City', resp)
      //     }
      // })
  }
}
