import {Component, OnInit} from '@angular/core';
import {UserModel} from 'src/app/Model/UserModel';
import {AuthProvider} from '../authprovider';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {

    constructor(private authProvider: AuthProvider, private toastController: ToastController, private route: Router) {
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
        this.authProvider.registerUser(this.uModel).subscribe(data => {
            if (data.status !== false) {
                this.presentToast('Register successfully, Login again to proceed', 'primary');
                this.route.navigate(['/']);
            } else {
                this.presentToast('Error occured while registering', 'danger');
            }
        });
    }

    ngOnInit() {
    }

}
