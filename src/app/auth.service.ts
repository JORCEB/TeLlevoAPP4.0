import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) {
    this.initDatabase(); // Llama a la función de inicialización de la base de datos al crear el servicio
  }

  async initDatabase() {
    // Inicializa la base de datos de Ionic Storage
    await this.storage.create();
  }

  // Método para guardar los datos del usuario
  saveUserData(userData: any): Promise<void> {
    // Guarda los datos del usuario en Ionic Storage
    return this.storage.set('userData', userData);
  }

  register(userData: any): Promise<void> {
    // Lógica de registro de usuario
    // Guardar los datos del usuario en Ionic Storage utilizando el método saveUserData
    return this.saveUserData(userData);
  }

  login(credentials: any): Promise<void> {
    // Lógica de inicio de sesión
    // Guardar los datos del usuario en Ionic Storage utilizando el método saveUserData
    return this.saveUserData(credentials);
  }

  logout(): Promise<void> {
    // Lógica de cierre de sesión
    // Eliminar los datos del usuario de Ionic Storage
    return this.storage.remove('userData');
  }

  getUserData(): Promise<any> {
    // Obtener los datos del usuario almacenados en Ionic Storage
    return this.storage.get('userData');
  }
}
