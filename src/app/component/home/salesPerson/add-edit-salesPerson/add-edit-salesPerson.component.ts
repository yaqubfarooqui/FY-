import {Component, OnInit} from '@angular/core';
import {SalesPersonModel} from '../../../../Model/SalesPersonModel';
import {Location} from '@angular/common';
import {SalesPersonProvider} from '../salesPersonProvider';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-add-edit-salesPerson',
    templateUrl: './add-edit-salesPerson.component.html',
    styleUrls: ['./add-edit-salesPerson.component.scss'],
})
export class AddEditSalesPersonComponent implements OnInit {
    actionType = 'ADD';
    salesPersonName = 'Add SalesPerson';

    constructor(private location: Location, private salesProve: SalesPersonProvider,
                private router: Router, private toastController: ToastController) {
    }

    sModel: SalesPersonModel = new SalesPersonModel();

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
        if (this.actionType === 'Add') {
            this.salesProve.addSalesPersonForUser(this.sModel).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('SalesPerson added', 'primary');
                    this.router.navigate(['/home/salesPerson']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        } else {
            this.salesProve.updateSalesPersonForUser(this.sModel).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('salesPerson updated', 'primary');
                    this.router.navigate(['/home/salesPerson']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        }

    }

    ngOnInit() {
        this.actionType = this.location.path() === '/home/salesPerson/add' ? 'Add' : 'Edit';
        if (this.actionType === 'Edit') {
            this.sModel = this.salesProve.getcModel();
            this.salesPersonName = this.sModel.Name;
        }
    }

}
