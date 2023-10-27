import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from './../auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async register() {

    const existingUser = await this.authService.getUserData();

    if (existingUser && existingUser.username === this.username) {

      const errorAlert = await this.alertController.create({
        header: 'Error de Registro',
        message: 'El usuario ya existe. Por favor, elige otro nombre de usuario.',
        buttons: ['OK'],
      });

      await errorAlert.present();
    } else {

      const userData = { username: this.username, password: this.password };
      await this.authService.register(userData);


      const successAlert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: '¡El usuario se ha registrado con éxito!',
        buttons: ['OK'],
      });

      await successAlert.present();


      this.navCtrl.navigateForward('/login');
    }
  }
}
