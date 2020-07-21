import {Component, OnInit} from '@angular/core';
import {CompanyModel} from '../../../../Model/CompanyModel';
import {Location} from '@angular/common';
import {CompanyProvider} from '../companyProvider';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-add-edit-company',
    templateUrl: './add-edit-company.component.html',
    styleUrls: ['./add-edit-company.component.scss'],
})
export class AddEditCompanyComponent implements OnInit {
    actionType = 'ADD';
    companyName = 'Add company';

    constructor(private location: Location, private companyProve: CompanyProvider,
                private router: Router, private toastController: ToastController) {
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
            this.companyProve.addCompanyForUser(this.cModel).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('Company added', 'primary');
                    this.router.navigate(['/home/company']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        } else {
            this.companyProve.updateCompanyForUser(this.cModel).subscribe(data => {
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
            this.cModel = this.companyProve.getcModel();
            this.companyName = this.cModel.CompanyName;
        }
    }

}
