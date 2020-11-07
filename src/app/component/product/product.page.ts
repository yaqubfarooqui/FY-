import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Model/ProductModel';
import { ProductProvider } from './ProductProvider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/Model/PurchaseInvoiceModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private sProvider: ProductProvider, private router: Router, private location:Location) { }

  productData = [];
  selectedProduct: ProductModel;
  showSelected = false;
  name = "Product";
  

  productLabels = ['Name', 'HSNcode', 'GST'];

      productKeyLabels = 
      {
      'Name': 'Name',
      'HSNcode': 'HSNcode',
      'GST': 'GST'
  };

  private loadProduct() {
      this.sProvider.getProductForUser().subscribe((data: any) => {
          this.productData = data;
          this.selectedProduct = data[0];
      });
  }

  showSelectedProduct(index) {
      this.showSelected = true;
      this.selectedProduct = this.productData[index] as ProductModel;   
  }

  fnDelete(id: number){
    this.sProvider.deleteProductForUser(id).subscribe(resp => {
        if(resp){
            console.log(resp);
            this.loadProduct();
        }
    });
    this.loadProduct();
}
  onBackPressed() {
      this.showSelected = false;
  }

  navigate(navRoute: string): void {
      if (navRoute === '/home/product/edit') {
          this.sProvider.setcModel(this.selectedProduct);
      }
      this.router.navigate([navRoute]);
  }
  onBackButton() {
    this.location.back();
}
  ngOnInit() {
      this.loadProduct();
  }
}
