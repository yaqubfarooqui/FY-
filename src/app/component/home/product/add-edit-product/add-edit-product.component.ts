import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../../Model/ProductModel';
import {Location} from '@angular/common';
import {ProductProvider} from '../ProductProvider';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit {
    actionType = 'ADD';
    productName = 'Add Product';

    constructor(private location: Location, private productProve: ProductProvider,
                private router: Router, private toastController: ToastController) {
    }

    sModel: ProductModel = new ProductModel();

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
            this.productProve.addProductForUser(this.sModel).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('Product added', 'primary');
                    this.router.navigate(['/home/product']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        } else {
            this.productProve.updateProductForUser(this.sModel).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('Product updated', 'primary');
                    this.router.navigate(['/home/product']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        }

    }

    ngOnInit() {
        this.actionType = this.location.path() === '/home/product/add' ? 'Add' : 'Edit';
        if (this.actionType === 'Edit') {
            this.sModel = this.productProve.getcModel();
            this.productName = this.sModel.Name;
        }
    }

}
