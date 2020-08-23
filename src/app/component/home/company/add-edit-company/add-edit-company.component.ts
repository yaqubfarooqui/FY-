import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../../../../Model/CompanyModel';
import { Location } from '@angular/common';
import { CompanyProvider } from '../companyProvider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-edit-company',
    templateUrl: './add-edit-company.component.html',
    styleUrls: ['./add-edit-company.component.scss'],
})
export class AddEditCompanyComponent implements OnInit {
    actionType = 'ADD';
    companyName = 'Add company';
    companyForm: FormGroup
    constructor(
        private location: Location,
        private companyProve: CompanyProvider,
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
            stateId: new FormControl(1),
            cityId: new FormControl(1,),
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
                    this.presentToast('Company added', 'primary');
                    this.router.navigate(['/home/company']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        } else {
            this.companyProve.updateCompanyForUser(this.companyForm.value).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('Company updated', 'primary');
                    this.router.navigate(['/home/company']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        }

    }

    ngOnInit() {
        this.actionType = this.location.path() === '/home/company/add' ? 'ADD' : 'EDIT';
        if (this.actionType === 'EDIT') {
            const cVal = this.companyProve.getcModel();
            this.companyForm.patchValue(cVal);
            this.companyName = this.companyForm.value.name;
        }
    }

}
