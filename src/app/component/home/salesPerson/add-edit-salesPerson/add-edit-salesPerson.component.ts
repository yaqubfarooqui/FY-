import { Component, OnInit } from '@angular/core';
import { SalesPersonModel } from '../../../../Model/SalesPersonModel';
import { Location } from '@angular/common';
import { SalesPersonProvider } from '../salesPersonProvider';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from 'src/app/services/masterData.service';
import { DomSanitizer } from '@angular/platform-browser';
import {File, IWriteOptions, FileEntry} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
    selector: 'app-add-edit-salesPerson',
    templateUrl: './add-edit-salesPerson.component.html',
    styleUrls: ['./add-edit-salesPerson.component.scss'],
})
export class AddEditSalesPersonComponent implements OnInit {
    actionType = 'ADD';
    salesPersonName = 'Add SalesPerson';
    sPersonForm: FormGroup;
    cityRawData: any;
    stateData: any;
    cityData: any;
    options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
    constructor(private location: Location, private salesProve: SalesPersonProvider,
        private router: Router, private toastController: ToastController,
        private FB: FormBuilder, private masterService: MasterService,
        private sanitizer: DomSanitizer,
        private camera:Camera,
        private file: File) {
        this.sPersonForm = this.FB.group({
            name: new FormControl('', [Validators.required]),
            mobile1: new FormControl("569874123", [Validators.required]),
            mobile2: new FormControl("569874123"),
            email: new FormControl('', [Validators.required, Validators.email]),
            aadhar: new FormControl(0, [Validators.required, Validators.pattern("^[0-9]{12}$")]),
            salary: new FormControl(10000, [Validators.required]),
            photo: new FormControl(''),
            panCard: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required]),
            stateId: new FormControl(0, [Validators.required]),
            cityId: new FormControl(0, [Validators.required]),
            landmark: new FormControl('', [Validators.required]),
            pinCode: new FormControl(411014, [Validators.required])
        });
    }

    sModel: SalesPersonModel = new SalesPersonModel();

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
        const formatVal = this.sPersonForm.value //JSON.parse(JSON.stringify(this.sPersonForm.value));
        if (this.actionType === 'Add') {
            this.salesProve.addSalesPersonForUser(formatVal).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('SalesPerson added', 'primary');
                    this.router.navigate(['/home/salesPerson']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }
                this.router.navigate(['/home/salesPerson']);
            });
        } else {
            this.salesProve.updateSalesPersonForUser(formatVal).subscribe(data => {
                if (data.status !== false) {
                    this.presentToast('salesPerson updated', 'primary');
                    this.router.navigate(['/home/salesPerson']);
                } else {
                    console.error(data.Message);
                    this.presentToast('Error:' + data.Message, 'danger');
                }

            });
        }

    }

    ngOnInit() {
        this.actionType = this.location.path() === '/home/salesPerson/add' ? 'Add' : 'Edit';
        if (this.actionType === 'Edit') {
            const sValue = this.salesProve.getcModel();
            this.sPersonForm.patchValue(sValue)
            this.salesPersonName = this.sPersonForm.value.name;
        }
        this.masterService.loadState().subscribe(resp => {
            if (resp) {
                this.stateData = resp;
                this.stateData.unshift({id:0, name:'Select State'});
            }
        })
        this.masterService.loadCity().subscribe((resp: any) => {
            if (resp) {
                this.cityRawData = resp
                
            }
        });

        // const options: CameraOptions = {
        //     quality: 100,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     encodingType: this.camera.EncodingType.JPEG
        //   }
          
        //   const tempImage = await this.camera.getPicture(options);
        //   const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
        //   const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
          
        //   const newBaseFilesystemPath = this.file.dataDirectory;
          
        //   await this.file.copyFile(tempBaseFilesystemPath, tempFilename, 
        //                            newBaseFilesystemPath, tempFilename);
          
        //  const storedPhoto = newBaseFilesystemPath + tempFilename;
        // //   const displayImage = this.webview.convertFileSrc(storedPhoto);
    
        //   const resolvedImg = this.webview.convertFileSrc(storedPhoto);
        //  this.safeImg = this.sanitizer.bypassSecurityTrustUrl(resolvedImg);
    
    }

    readFile(file: any) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imgBlob = new Blob([reader.result], {
            type: file.type
          });
          const formData = new FormData();
          formData.append('name', 'Hello');
          formData.append('file', imgBlob, file.name);
        //   this.uploadService.uploadFile(formData).subscribe(dataRes => {
        //     console.log(dataRes);
        //   });
        };
        reader.readAsArrayBuffer(file);
      }
      takePicture() {
        this.camera.getPicture(this.options).then((imageData) => {
          this.file.resolveLocalFilesystemUrl(imageData).then((entry: FileEntry) => {
            entry.file(file => {
              console.log(file);
              this.readFile(file);
            });
          });
        }, (err) => {
          // Handle error
        });
      }

    fnBindCityDD(stateId) {
        this.cityData = this.cityRawData.filter(respItem => respItem.stateId === stateId); 
    }

}
