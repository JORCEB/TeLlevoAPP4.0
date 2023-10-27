import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  autosDisponibles: any[] = [
    {
      modelo: 'Toyota Yaris RYP340',
      horario: '08:00 AM',
      direccion: 'LOTA - DUOC UC',
      cupos: 4,
      valor: 5000,
    },
    {
      modelo: 'OPEL CORSA FRGT32',
      horario: '09:30 AM',
      direccion: 'DUOC UC - CORONEL',
      cupos: 2,
      valor: 3000,
    },

  ];
  nuevoAuto: any = {
    modelo: '',
    horario: '',
    direccion: '',
    cupos: 0,
    valor: 0,
  }; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private navCtrl: NavController 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  async solicitarViaje() {
    const alert = await this.alertController.create({
      header: 'Solicitud de viaje',
      message: '¿Deseas solicitar este viaje?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
         
          },
        },
        {
          text: 'Solicitar',
          handler: () => {
            this.mostrarMensajeExito();
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarMensajeExito() {
    const alert = await this.alertController.create({
      header: '¡Viaje solicitado!',
      message: 'Tu solicitud de viaje se ha realizado con éxito.',
      cssClass: 'success-alert',
      buttons: ['OK'],
    });

    await alert.present();
  }

  cerrarSesion() {
    this.router.navigateByUrl('/login');
  }

  
  agregarAuto() {
    this.autosDisponibles.push({ ...this.nuevoAuto });

    this.nuevoAuto = {
      modelo: '',
      horario: '',
      direccion: '',
      cupos: 0,
      valor: 0,
    };
  }
  registrarReserva() {

    const autoARegistrar = { ...this.nuevoAuto }; 

    this.nuevoAuto = {
      modelo: '',
      horario: '',
      direccion: '',
      cupos: 0,
      valor: 0,
    };


    this.navCtrl.navigateForward('/solicitar-viaje', {
      state: {
        auto: autoARegistrar,
      },
    });
  }
}
