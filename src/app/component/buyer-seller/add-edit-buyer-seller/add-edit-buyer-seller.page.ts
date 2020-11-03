import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../../../Model/CompanyModel';
import { Location } from '@angular/common';
import { buyerSellerProvider } from '../buyer-seller.provider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-buyer-seller',
  templateUrl: './add-edit-buyer-seller.page.html',
  styleUrls: ['./add-edit-buyer-seller.page.scss'],
})
export class AddEditBuyerSellerPage implements OnInit {
  actionType = 'ADD';
  companyName = 'Add Buyer Seller';
  companyForm: FormGroup
  stateData: import("../../../Model/UserModel").HttpRes<any>;
  cityData: any;
  natureofBusilist: { name: string; id: number; }[];
  cityRawData:any;
  constructor(
      private location: Location,
      private companyProve: buyerSellerProvider,
      private router: Router,
      private toastController: ToastController,
      private FB: FormBuilder) {
      this.companyForm = this.FB.group({
          name: new FormControl('', [Validators.required]),
          firstContactName: new FormControl('', [Validators.required]),
          firstContactEmail: new FormControl('', [Validators.required, Validators.email]),
          firstContactMobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
          secondContactName: new FormControl(''),
          secondContactEmail: new FormControl('', [Validators.email]),
          secondContactMobile: new FormControl('', [Validators.maxLength(10)]),
          address: new FormControl('',),
          stateId: new FormControl(0),
          cityId: new FormControl(0),
          landmark: new FormControl(''),
          pinCode: new FormControl(''),
          natureOfBusiness: new FormControl(1, [Validators.required]),
          creditLimit: new FormControl(202202, [Validators.required]),
          companyType: new FormControl(2, [Validators.required]),

      });
  }
  cModel: CompanyModel = new CompanyModel();
  onBackButton() {
      this.location.back();
  }
  async presentToast(message: string, color: string) {
      const toast = await this.toastController.create({
          message,
          color,
          duration: 2000
      });
      toast.present();
  }

  onSubmit() {
      if (this.actionType === 'ADD') {
          this.companyProve.addCompanyForUser(this.companyForm.value).subscribe(data => {
              if (data.status !== false) {
                  this.presentToast('Buyer-Seller added', 'primary');
                  this.router.navigate(['/buyer-seller']);
              } else {
                  console.error(data.Message);
                  this.presentToast('Error:' + data.Message, 'danger');
              }

          });
      } else {
          this.companyProve.updateCompanyForUser(this.companyForm.value).subscribe(data => {
              if (data.status !== false) {
                  this.presentToast('Buyer-Seller updated', 'primary');
                  this.router.navigate(['/buyer-seller']);
              } else {
                  console.error(data.Message);
                  this.presentToast('Error:' + data.Message, 'danger');
              }

          });
      }

  }

  ngOnInit() {

      this.natureofBusilist = [{name:'B2B', id:1}, {name:'B2C', id:2}]
      this.actionType = this.location.path() === '/buyer-seller/add' ? 'ADD' : 'EDIT';
      if (this.actionType === 'EDIT') {
        debugger
          const cVal = this.companyProve.getcModel();
          this.companyForm.patchValue(cVal);
          this.companyName = this.companyForm.value.name;
      }
      this.companyProve.loadState().subscribe( resp=> {
          if(resp){
              this.stateData = resp;
          }
      })
      this.companyProve.loadCity().subscribe( (resp:any) => {
          if(resp){
              this.cityRawData = resp
          }
          });
  }
  fnBindCityDD(stateId){
       
              this.cityData = this.cityRawData.filter( respItem=> respItem.stateId === stateId)
        
  }

}
