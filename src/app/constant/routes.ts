// const HOST = 'http://localhost:3000';
const HOST = 'https://fy5api.azurewebsites.net';
export const LOGIN = HOST + '/User/login';
export const user = {
    REGISTRATION: HOST + '/user/signup'
};

export const Company = {
    get: HOST + '/BuyerSeller'
};

export const SalesPerson = {
    get: HOST + '/SalesPerson'
};

export const PurchaseInvoice = {
    get: HOST + '/PurchaseInvoice/registerPurchaseInvoice'
}
export const Product = {
    get: HOST + '/Product'
}
export const State = {
    get:HOST + '/Master/State'
}
export const City = {
    get:HOST + '/Master/City'
}