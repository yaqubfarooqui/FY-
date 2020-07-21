import { Component, OnInit } from '@angular/core';
import { PurchaseInvoiceModel } from 'src/app/Model/PurchaseInvoiceModel';
import { PurchaseInvoiceProvider } from '../purchaseInvoiceProvider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-PurchaseInvoice',
  templateUrl: './PurchaseInvoice.component.html',
  styleUrls: ['./PurchaseInvoice.component.scss'],
})
export class PurchaseInvoiceComponent implements OnInit {

  constructor(private sProvider: PurchaseInvoiceProvider, private router: Router) { }

  PurchaseInvoiceData = [];
  selectedPurchaseInvoice: PurchaseInvoiceModel;
  showSelected = false;
  

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
      if (navRoute === '/home/PurchaseInvoice/edit') {
          this.sProvider.setcModel(this.selectedPurchaseInvoice);
      }
      this.router.navigate([navRoute]);
  }

  ngOnInit() {
      this.loadPurchaseInvoice();
  }
}
 