import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular'; // Importa ToastController para mostrar un mensaje de éxito

@Component({
  selector: 'app-reset-password',
  templateUrl: 'reset-password.page.html',
  styleUrls: ['reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string = '';

  constructor(private toastController: ToastController) {}

  async resetPassword() {


    if (this.username) {



      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo electrónico de restablecimiento de contraseña a ' + this.username,
        duration: 5000,
        position: 'bottom'
      });

      toast.present();
    } else {

      const toast = await this.toastController.create({
        message: 'Por favor, ingresa tu dirección de correo electrónico',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
  }
}
