import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.page.html',
  styleUrls: ['./solicitar-viaje.page.scss'],
})
export class SolicitarViajePage {
  modeloAuto: string = '';
  costoViaje: number = 0;
  asientosDisponibles: number = 0;

  // Array para almacenar los viajes
  viajes: any[] = [];

  // Objeto para almacenar los datos del nuevo auto
  nuevoAuto: any = {
    modelo: '',
    horario: '',
    direccion: '',
    cupos: 0,
    valor: 0,
  };

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  guardarViaje() {
    // Crear un objeto para el viaje actual
    const viaje = {
      modeloAuto: this.modeloAuto,
      costoViaje: this.costoViaje,
      asientosDisponibles: this.asientosDisponibles,
    };

    // Agregar el viaje al array
    this.viajes.push(viaje);

    // Después de guardar, redirige a la página principal.
    this.navCtrl.navigateBack('/home');
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }

  agregarAuto() {
    if (this.nuevoAuto.modelo && this.nuevoAuto.horario && this.nuevoAuto.direccion && this.nuevoAuto.cupos > 0 && this.nuevoAuto.valor > 0) {
      // Agregar un nuevo auto a la lista de autos disponibles
      this.viajes.push({ ...this.nuevoAuto });

      // Restablecer el formulario del nuevo auto
      this.nuevoAuto = {
        modelo: '',
        horario: '',
        direccion: '',
        cupos: 0,
        valor: 0,
      };

      this.mostrarAlerta('Auto agregado con éxito');
    } else {
      this.mostrarAlerta('Por favor, completa todos los campos');
    }
  }
}

