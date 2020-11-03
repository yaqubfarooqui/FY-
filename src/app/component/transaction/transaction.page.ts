import { Component, OnInit } from '@angular/core';
import { PurchaseInvoiceModel } from 'src/app/Model/PurchaseInvoiceModel';
import { TransactionProvider } from './transactionProvider';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor(private sProvider: TransactionProvider, private router: Router, private location: Location) { }

  PurchaseInvoiceData = [];
  selectedPurchaseInvoice: PurchaseInvoiceModel;
  showSelected = false;
  
  onBackButton() {
    this.location.back();
}
  private loadPurchaseInvoice() {
      this.sProvider.getPurchaseInvoiceForUser().subscribe((data) => {
          this.PurchaseInvoiceData = data.Data;
          this.selectedPurchaseInvoice = data.Data[0];
      });
  }

  showSelectedPurchaseInvoice(index) {
      this.showSelected = true;
      this.selectedPurchaseInvoice = this.PurchaseInvoiceData[index] as PurchaseInvoiceModel;   
  }

  onBackPressed() {
      this.showSelected = false;
  }

  navigate(navRoute: string): void {
      if (navRoute === '/transaction/edit') {
          this.sProvider.setcModel(this.selectedPurchaseInvoice);
      }
      this.router.navigate([navRoute]);
  }

  ngOnInit() {
      this.loadPurchaseInvoice();
  }
}
