export class PurchaseInvoiceModel{
    _id: string;
    PurchaseInvoiceDate:string;
    Seller: string;
    Buyer: string;
    TotalAmount:number;
    Discount:number;
    NetAmount:number;
    ModeOfPayment: string;
    PurchaseInvoiceNumber: string;
    Products:Product[];    
}
export class Product{
    Product?: string;
    Quantity:number;
    Amount:number;
    GST: string;
}