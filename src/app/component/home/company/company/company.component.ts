import {Component, OnInit} from '@angular/core';
import {CompanyProvider} from '../companyProvider';
import {CompanyModel} from 'src/app/Model/CompanyModel';
import {Router} from '@angular/router';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {

    constructor(private cProvider: CompanyProvider, private router: Router) {
    }

    companyData = [];
    selectedCompany: CompanyModel;
    showSelected = false;
    COMPANIES = 'Companies';
    companyName = this.COMPANIES;

    companyLabels = ['CompanyName', 'CompanyLocation', 'FirstContactName', 'FirstContactMobile', 'FirstContactEmail', 'SecondContactName',
        'SecondContactEmail', 'NatureOfBusiness', 'GSTNumber'];

    companyKeyLabels = {
        'CompanyName': 'Company Name', 'CompanyLocation': 'Company Location',
        'FirstContactName': 'First Contact Name', 'FirstContactMobile': 'First Contact Mobile',
        'FirstContactEmail': 'First Contact Email', 'SecondContactName': 'Second Contact Name',
        'SecondContactEmail': 'Second Contact Email', 'NatureOfBusiness': 'Nature Of Business', 'GSTNumber': 'GST Number'
    };

    private loadCompany() {
        this.cProvider.getCompanyForUser().subscribe((data) => {
            this.companyData = data.Data;
            this.selectedCompany = data.Data[0];
        });
    }

    showSelectedCompany(index) {
        this.showSelected = true;
        this.selectedCompany = this.companyData[index] as CompanyModel;
        this.companyName = this.selectedCompany.CompanyName;
    }

    onBackPressed() {
        this.showSelected = false;
        this.companyName = this.COMPANIES;
    }

    navigate(navRoute: string): void {
        if (navRoute === '/home/company/edit') {
            this.cProvider.setcModel(this.selectedCompany);
        }
        this.router.navigate([navRoute]);
    }

    ngOnInit() {
        this.loadCompany();
    }

}