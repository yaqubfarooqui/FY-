import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Model/UserModel';
import { AuthProvider } from '../authprovider';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private authProvider: AuthProvider,
        private toastController: ToastController,
        private route: Router, private FB: FormBuilder) {
       
    }


    uModel: UserModel = new UserModel();
    async presentToast(message: string, color: string) {
        const toast = await this.toastController.create({
            message,
            color,
            duration: 2000
        });
        toast.present();
    }

    public registerUser(): void {
        this.authProvider.registerUser(this.registerForm.value).subscribe(data => {
            if (data.status !== false) {
                this.presentToast('Register successfully, Login again to proceed', 'primary');
                this.route.navigate(['/user/login']);
            } else {
                this.presentToast('Error occured while registering', 'danger');
            }
        });
    }

    ngOnInit() {
        this.registerForm = this.FB.group({
            Username: new FormControl('', [Validators.required]),
            Password: new FormControl('', [Validators.required]),
            CompanyName: new FormControl('',[Validators.required]),
            EmailID: new FormControl ('', [Validators.required, Validators.email]),
            Mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')])
        });
    }

}
