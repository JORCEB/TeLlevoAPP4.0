import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user: any; // Aquí deberías cargar los datos del usuario
  editing: boolean = false; // Bandera para habilitar la edición

  constructor(private authService: AuthService) {
    // Recupera los datos del usuario desde el servicio de autenticación
    this.authService.getUserData().then(data => {
      this.user = data;
    });
  }

  editProfile() {
    this.editing = true; // Habilita la edición
  }

  saveProfile() {
    this.editing = false; // Deshabilita la edición

    // Implementa la lógica para guardar los datos del usuario editados en el servicio
    // Puedes usar this.user para acceder a los datos del usuario editados
    this.authService.saveUserData(this.user).then(() => {
      // Opcional: muestra un mensaje de éxito o realiza otras acciones después de guardar
    });
  }
}
