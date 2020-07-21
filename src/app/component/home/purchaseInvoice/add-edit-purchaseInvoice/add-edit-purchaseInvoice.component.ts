import {Component, OnInit} from '@angular/core';
import {PurchaseInvoiceModel, Product} from '../../../../Model/PurchaseInvoiceModel';
import {Location} from '@angular/common';
import {PurchaseInvoiceProvider} from '../purchaseInvoiceProvider';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {MasterService} from '../../../../services/masterData.service';
import { CompanyModel } from 'src/app/Model/CompanyModel';

@Component({
    selector: 'app-add-edit-PurchaseInvoice',
    templateUrl: './add-edit-PurchaseInvoice.component.html',
    styleUrls: ['./add-edit-PurchaseInvoice.component.scss'],
})
export class AddEditPurchaseInvoiceComponent implements OnInit {
    actionType = 'ADD';
    PurchaseInvoiceName = 'Add PurchaseInvoice';
    companies: CompanyModel[]=[];
    products : Product[]=[];

    constructor(private location: Location, private salesProve: PurchaseInvoiceProvider,
                private router: Router, private toastController: ToastController,private MasterService :MasterService) {
    }

    sModel: PurchaseInvoiceModel = new PurchaseInvoiceModel();
    showInvoice:boolean = true;
    product:Product=new Product();
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
        console.log( "this.sModel",this.sModel);
        // this.sModel = new PurchaseInvoiceModel();
        // this.sModel.PurchaseInvoiceDate ="2020-10-24";
        // this.sModel.Seller="5ef20461c01e0270b0b8f75e";
        // this.sModel.Buyer="5ef8b9dfe68dec0388d2ed95";
        // this.sModel.TotalAmount=110;
        // this.sModel.Discount=2;
        // this.sModel.NetAmount=100;
        // this.sModel.ModeOfPayment="Cash";
        // this.sModel.PurchaseInvoiceNumber="1234567";
        // //
        // let productList :Product[]=[];
        // productList.push( { Amount : 10 , Quantity : 20,GST : "321",Product:"5eee1efac853f529c4f63f94" });
        // productList.push( {Amount : 10 , Quantity : 20,GST : "123",Product:"5ef30492c665624b7499223c" }) ;
        // this.sModel.Products  = productList;
        // this.salesProve.addPurchaseInvoiceForUser(this.sModel).subscribe(data => {
        //             if (data.status !== false) {
        //                 this.presentToast('PurchaseInvoice added', 'primary');
        //                 this.router.navigate(['/home/PurchaseInvoice']);
        //             } else {
        //                 console.error(data.Message);
        //                 this.presentToast('Error:' + data.Message, 'danger');
        //             }
    
        //         });
        // if (this.actionType === 'Add') {
        //     this.salesProve.addPurchaseInvoiceForUser(this.sModel).subscribe(data => {
        //         if (data.status !== false) {
        //             this.presentToast('PurchaseInvoice added', 'primary');
        //             this.router.navigate(['/home/PurchaseInvoice']);
        //         } else {
        //             console.error(data.Message);
        //             this.presentToast('Error:' + data.Message, 'danger');
        //         }

        //     });
        // } else {
        //     this.salesProve.updatePurchaseInvoiceForUser(this.sModel).subscribe(data => {
        //         if (data.status !== false) {
        //             this.presentToast('PurchaseInvoice updated', 'primary');
        //             this.router.navigate(['/home/PurchaseInvoice']);
        //         } else {
        //             console.error(data.Message);
        //             this.presentToast('Error:' + data.Message, 'danger');
        //         }

        //     });
        // }

    }

    ngOnInit() {
        this.companies = this.MasterService.getCompany();
        console.log("this.companies",this.companies);
        this.actionType = this.location.path() === '/home/PurchaseInvoice/add' ? 'Add' : 'Edit';
        if (this.actionType === 'Edit') {
            this.sModel = this.salesProve.getcModel();
          //  this.PurchaseInvoiceName = this.sModel.Name;
        }
    }
    addProduct(){
        this.showInvoice = false;
    }
    productOperation(){
        console.log("this.product ",this.product );
        let product =JSON.parse(JSON.stringify(this.product));
        this.product = new Product();
        this.products.push(product);
        this.showInvoice = true;
    }
}
