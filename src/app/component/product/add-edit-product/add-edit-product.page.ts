import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../Model/ProductModel';
import { Location } from '@angular/common';
import { ProductProvider } from '../ProductProvider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.page.html',
  styleUrls: ['./add-edit-product.page.scss'],
})
export class AddEditProductPage implements OnInit {
  actionType = 'ADD';
  productName = 'Add Product';
  productForm: FormGroup;
  lengthData = [{id:1,name:"Meter"},{id:2, name:"Centimeter"},{id:3,name:"Foot"},{id:4, name:"Inch"}];
  volumeData = [{id:1,name:"Gallon"},{id:2, name:"Milliliter"},{id:3,name:"Liter"}]
  massData = [{id:1,name:"Tonne"},{id:2, name:"Kg"},{id:3,name:"Gram"},{id:4, name:"Milligram"}]
     
  constructor(private location: Location, private productProve: ProductProvider,
    private router: Router, private toastController: ToastController, private FB: FormBuilder) {
    this.productForm = this.FB.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      length: new FormControl('', [Validators.required]),
      mass: new FormControl('', [Validators.required]),
      volume: new FormControl('', [Validators.required]),
      openningStock: new FormControl(0, [Validators.required]),
      closingStock: new FormControl(0, [Validators.required]),
      image: new FormControl('',[Validators.required]),
      hsnCode: new FormControl('', [Validators.required]),
      lowQuantityReminder: new FormControl('', [Validators.required])
    })
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
      this.productProve.addProductForUser(this.productForm.value).subscribe(data => {
        if (data.status !== false) {
          this.presentToast('Product added', 'primary');
          this.router.navigate(['/product']);
        } else {
          console.error(data.Message);
          this.presentToast('Error:' + data.Message, 'danger');
        }

      });
    } else {
      this.productProve.updateProductForUser(this.productForm.value).subscribe(data => {
        if (data.status !== false) {
          this.presentToast('Product updated', 'primary');
          this.router.navigate(['/product']);
        } else {
          console.error(data.Message);
          this.presentToast('Error:' + data.Message, 'danger');
        }

      });
    }

  }

  ngOnInit() {
    this.actionType = this.location.path() === '/product/add' ? 'Add' : 'Edit';
    if (this.actionType === 'Edit') {
      const pValue = this.productProve.getcModel();
      this.productForm.patchValue(pValue)
      this.productName = this.productForm.value.name;
    }
  }

}
