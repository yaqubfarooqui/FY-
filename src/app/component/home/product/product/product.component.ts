import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Model/ProductModel';
import { ProductProvider } from '../ProductProvider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.scss'],
})
export class ProductComponent implements OnInit {

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
      this.sProvider.getProductForUser().subscribe((data) => {
          this.productData = data.Data;
          this.selectedProduct = data.Data[0];
      });
  }

  showSelectedProduct(index) {
      this.showSelected = true;
      this.selectedProduct = this.productData[index] as ProductModel;   
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
 