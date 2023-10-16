import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController para usar cuadros de diálogo

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    private alertController: AlertController // Agrega AlertController
  ) {}

  user = {
    usuario: '',
    password: '',
  };
  public campo = '';
  public recordarContrasena = false;

  async iniciarSesion() {
    console.log(this.user);
    if (this.user.usuario !== '' && this.user.password !== '') {
      this.campo = 'Usuario Existente';
      if (this.recordarContrasena) {
        // Lógica para recordar la contraseña si el toggle está activado
        console.log('Contraseña recordada');
        // Agrega aquí la lógica para recordar la contraseña, como almacenarla en una cookie o localStorage
      }
    } else {
      this.campo = 'Usuario no Existe';
    }
  }

  public alertButtons = ['OK'];
}
