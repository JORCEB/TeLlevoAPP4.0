import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  async login() {
    // Comprueba si las credenciales coinciden con los datos almacenados
    const storedUserData = await this.authService.getUserData();
    if (
      storedUserData &&
      this.username === storedUserData.username &&
      this.password === storedUserData.password
    ) {
      const alert = await this.alertController.create({
        header: 'Ingresado correctamente',
        message: `¡Bienvenido, ${this.username}!`,
        buttons: ['OK'],
      });

      await alert.present();

      this.navCtrl.navigateForward('/home', {
        queryParams: { username: this.username },
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Error de inicio de sesión',
        message: 'Credenciales incorrectas. Inténtalo de nuevo.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  irAResetPassword() {
    this.navCtrl.navigateForward('/reset-password');
  }

  irARegistro() {
    this.navCtrl.navigateForward('/register');
  }
}
