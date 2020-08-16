// const HOST = 'http://localhost:3000';
const HOST = 'http://fy5api.azurewebsites.net';
export const LOGIN = HOST + '/User/login';
export const user = {
    REGISTRATION: HOST + '/user/signup'
};

export const Company = {
    get: HOST + '/Company/registercompany'
};

export const SalesPerson = {
    get: HOST + '/SalesPerson/registerSalesPerson'
};

export const PurchaseInvoice = {
    get: HOST + '/PurchaseInvoice/registerPurchaseInvoice'
}
export const Product = {
    get: HOST + '/Product/registerProduct'
}